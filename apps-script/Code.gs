/**
 * 小魚乾早午餐 —— 營運報表寫入 Google Sheet
 *
 * 這份程式碼放在 Google Apps Script 專案裡（script.google.com），不是網站的一部分。
 * 收進 repo 只是為了版控與對照：Google 那邊改了，這裡也要跟著更新。
 *
 * 後台「📊 同步…到 Google Sheet」會 POST 一包 JSON 過來。期間跟著畫面上的
 * 日報／週報／月報走，月底選「月報」按下去就是整個月一次上傳。
 *
 *   {
 *     date: '2026-08-15',        // 使用者選的日期
 *     sheet: '2026-08',          // 分頁名稱（日:2026-08-15 週:起~迄 月:2026-08）
 *     period: 'day'|'week'|'month',
 *     label: '月報　2026-08',
 *     store: '小魚乾早午餐',
 *     range: { start, end },
 *     summary: { count, paidCount, unpaidCount, revenue,
 *                cashCount, cashSum, mobileCount, mobileSum, dineIn, takeout },
 *     perDay: [{ date, count, paidCount, revenue }],   // 日報為空
 *     items:  [{ name, qty, rev }],
 *     cats:   [{ name, value }],
 *     orders: [{ no, date, time, typeTable, status, pay, total }],
 *     // 以下只有月報會帶（成本與薪資本來就是整月金額）
 *     costs: [{ label, amount }], costTotal,
 *     staff: [{ name, role, wage, hours, pay }], payrollTotal,
 *     profit, entSource, entExact
 *   }
 *
 * 一定要回傳 JSON。沒有回傳值的話瀏覽器只能用 no-cors 送出，
 * 結果就是「網址填錯、試算表被刪、權限沒開」通通顯示成功。
 *
 * ── 部署設定（改完一定要重新部署，而且要建新版本）──
 *   執行身分：我
 *   誰可以存取：任何人          ← 不設成「任何人」，前端會被導去登入頁，CORS 直接失敗
 *   部署 → 管理部署作業 → 編輯（鉛筆）→ 版本選「新版本」→ 部署
 *   網址不變，後台不用改設定。
 */

// 試算表「小魚乾早午餐紀錄」
const SHEET_ID = '1cr28PeeNfPnmGRvL3d9biJbY5jgvy8iark_n4GuIlKg';

// 配色沿用網站（--ink / --pink / --line），讓試算表跟後台看起來是同一套系統
const C = {
  ink: '#1c5e7a', pink: '#ec6398', head: '#eef5f8', band: '#f7fbfd',
  line: '#cfe0e8', good: '#1c7a4d', bad: '#c0392b', sub: '#6b7f88',
};
const MONEY = '$#,##0';

function json_(obj) {
  return ContentService.createTextOutput(JSON.stringify(obj))
    .setMimeType(ContentService.MimeType.JSON);
}

/** 直接用瀏覽器打開 /exec 就會看到這個，用來確認部署還活著 */
function doGet() {
  try {
    return json_({ ok: true, alive: true, sheet: SpreadsheetApp.openById(SHEET_ID).getName() });
  } catch (err) {
    return json_({ ok: false, error: String(err) });
  }
}

// 前面加單引號 → 強制當文字，避免 6:32 被吃成時間、純數字單號被轉型
function txt_(v) { return "'" + (v == null ? '' : String(v)); }

function doPost(e) {
  try {
    if (!e || !e.postData || !e.postData.contents) return json_({ ok: false, error: '沒有收到資料' });

    const p = JSON.parse(e.postData.contents);
    const name = String(p.sheet || p.date || '').trim(); // sheet 是新版欄位，date 保留給舊版
    if (!name) return json_({ ok: false, error: '沒有收到日期或分頁名稱' });

    const ss = SpreadsheetApp.openById(SHEET_ID);
    // 同一個期間重跑要整份覆蓋，不然分頁會越疊越多份
    let sh = ss.getSheetByName(name);
    if (sh) {
      // 上一次套過的合併儲存格若不先拆開，寫入會直接失敗
      try { sh.getRange(1, 1, sh.getMaxRows(), sh.getMaxColumns()).breakApart(); } catch (err) {}
      sh.clear();
    } else {
      sh = ss.insertSheet(name);
    }

    const s = p.summary || {};
    const period = p.period || 'day';
    const isMonth = period === 'month';
    const rows = [];
    const sections = [];  // 區塊標題列（整列合併、粗體）
    const heads = [];     // 表格欄位名稱列
    const totals = [];    // 合計／結餘列（粗體）
    const money = [];     // { r, c, n } 要套貨幣格式的直欄範圍
    let profitRow = 0;

    const push = r => rows.push(r);                 // 一般資料列
    const at = () => rows.length;                   // 剛推進去那列的列號（1-based）
    const section = t => { push([t]); sections.push(at()); };
    const head = r => { push(r); heads.push(at()); };
    const total = r => { push(r); totals.push(at()); };

    // ── 標題 ────────────────────────────────────────────────
    push([(p.store || '') + '　' + (p.label || name)]);
    if (p.range && p.range.start) push(['期間', p.range.start + ' ～ ' + p.range.end]);

    // ── 營收摘要 ────────────────────────────────────────────
    section('營收摘要');
    head(['總訂單', s.count, '已結帳', s.paidCount, '未結帳', s.unpaidCount]);
    push(['總營收', s.revenue,
          '現金', s.cashSum + '(' + s.cashCount + '筆)',
          '行動', s.mobileSum + '(' + s.mobileCount + '筆)']);
    money.push({ r: at(), c: 2, n: 1 });
    if (s.dineIn != null) {
      push(['內用', s.dineIn, '外帶', s.takeout,
            '平均客單', s.paidCount ? Math.round(s.revenue / s.paidCount) : 0]);
      money.push({ r: at(), c: 6, n: 1 });
    }

    // ── 逐日明細（週報／月報才有）────────────────────────────
    if (p.perDay && p.perDay.length) {
      push([]);
      section('逐日明細');
      head(['日期', '訂單數', '已結帳', '營收']);
      const first = at() + 1;
      p.perDay.forEach(function (d) { push([txt_(d.date), d.count, d.paidCount, d.revenue]); });
      total(['合計', s.count, s.paidCount, s.revenue]);
      money.push({ r: first, c: 4, n: p.perDay.length + 1 });
    }

    // ── 品項銷售統計 ────────────────────────────────────────
    push([]);
    section('品項銷售統計');
    head(['品項', '數量', '小計']);
    const itFirst = at() + 1;
    (p.items || []).forEach(function (it) { push([it.name, it.qty, it.rev]); });
    if ((p.items || []).length) money.push({ r: itFirst, c: 3, n: p.items.length });

    // ── 分類營收 ────────────────────────────────────────────
    if (p.cats && p.cats.length) {
      push([]);
      section('分類營收');
      head(['分類', '營收']);
      const cFirst = at() + 1;
      p.cats.forEach(function (c) { push([c.name, c.value]); });
      money.push({ r: cFirst, c: 2, n: p.cats.length });
    }

    // ── 成本／薪資／損益：只有月報 ──────────────────────────
    if (isMonth && p.costTotal != null) {
      const tag = p.entExact ? (name + ' 封存值')
        : p.entSource ? ('沿用 ' + p.entSource + ' 封存值')
        : '目前設定值·該月無封存';

      push([]);
      section('成本（' + tag + '）');
      head(['項目', '金額']);
      const kFirst = at() + 1;
      (p.costs || []).forEach(function (c) { push([c.label, c.amount]); });
      total(['合計', p.costTotal]);
      money.push({ r: kFirst, c: 2, n: (p.costs || []).length + 1 });

      push([]);
      section('薪資（' + tag + '）');
      head(['姓名', '職務', '時薪', '時數', '薪資']);
      const wFirst = at() + 1;
      (p.staff || []).forEach(function (m) { push([m.name, m.role, m.wage, m.hours, m.pay]); });
      total(['合計', '', '', '', p.payrollTotal]);
      money.push({ r: wFirst, c: 3, n: (p.staff || []).length + 1 });
      money.push({ r: wFirst, c: 5, n: (p.staff || []).length + 1 });

      push([]);
      section('簡易損益');
      push(['本月營收', s.revenue]);      money.push({ r: at(), c: 2, n: 1 });
      push(['本月成本', -p.costTotal]);   money.push({ r: at(), c: 2, n: 1 });
      push(['本月薪資', -p.payrollTotal]); money.push({ r: at(), c: 2, n: 1 });
      total(['結餘', p.profit]);          money.push({ r: at(), c: 2, n: 1 });
      profitRow = at();
      total(['毛利率', s.revenue > 0 ? Math.round(p.profit / s.revenue * 100) + '%' : '0%']);
    }

    // ── 訂單明細 ────────────────────────────────────────────
    push([]);
    section('訂單明細');
    const wide = isMonth || period === 'week'; // 跨日才需要日期欄
    head(wide ? ['單號', '日期', '時間', '類型 / 桌號', '狀態', '付款', '金額']
              : ['單號', '時間', '類型 / 桌號', '狀態', '付款', '金額']);
    const oFirst = at() + 1;
    (p.orders || []).forEach(function (o) {
      push(wide ? [txt_(o.no), txt_(o.date), txt_(o.time), o.typeTable, o.status, o.pay, o.total]
                : [txt_(o.no), txt_(o.time), o.typeTable, o.status, o.pay, o.total]);
    });
    const oCol = wide ? 7 : 6;
    if ((p.orders || []).length) money.push({ r: oFirst, c: oCol, n: p.orders.length });

    // ── 寫入 ────────────────────────────────────────────────
    const width = rows.reduce(function (m, r) { return Math.max(m, r.length); }, 1);
    rows.forEach(function (r) { while (r.length < width) r.push(''); });
    sh.getRange(1, 1, rows.length, width).setValues(rows);

    // 排版失敗不該讓資料寫入跟著失敗，所以整段包起來
    try {
      beautify_(sh, {
        width: width, lastRow: rows.length, sections: sections, heads: heads,
        totals: totals, money: money, profitRow: profitRow,
        profit: p.profit, orderFirst: oFirst, orderCount: (p.orders || []).length,
      });
    } catch (err) {}

    return json_({
      ok: true, sheet: name, period: period,
      rows: (p.orders || []).length, days: (p.perDay || []).length, url: ss.getUrl(),
    });
  } catch (err) {
    return json_({ ok: false, error: String(err) });
  }
}

/** 套版面：標題、區塊、表頭、貨幣格式、隔行底色、欄寬 */
function beautify_(sh, m) {
  const W = m.width;

  // 全表基底
  sh.getRange(1, 1, m.lastRow, W)
    .setFontFamily('Arial').setFontSize(10).setVerticalAlignment('middle');

  // 主標題：整列合併、深色底、白字
  sh.getRange(1, 1, 1, W).merge()
    .setBackground(C.ink).setFontColor('#ffffff')
    .setFontSize(14).setFontWeight('bold')
    .setHorizontalAlignment('left');
  sh.setRowHeight(1, 34);

  // 期間那一列（如果有）用淡色小字
  if (m.lastRow > 1) sh.getRange(2, 1, 1, W).setFontColor(C.sub);

  // 區塊標題：整列合併、粉紅左邊界、粗體
  m.sections.forEach(function (r) {
    sh.getRange(r, 1, 1, W).merge()
      .setBackground(C.head).setFontColor(C.ink).setFontWeight('bold')
      .setBorder(null, true, null, null, null, null, C.pink, SpreadsheetApp.BorderStyle.SOLID_THICK);
    sh.setRowHeight(r, 26);
  });

  // 表頭：粗體＋底線
  m.heads.forEach(function (r) {
    sh.getRange(r, 1, 1, W).setFontWeight('bold')
      .setBorder(null, null, true, null, null, null, C.line, SpreadsheetApp.BorderStyle.SOLID);
  });

  // 合計／結餘：粗體
  m.totals.forEach(function (r) { sh.getRange(r, 1, 1, W).setFontWeight('bold'); });

  // 金額欄位套貨幣格式
  m.money.forEach(function (x) { sh.getRange(x.r, x.c, x.n, 1).setNumberFormat(MONEY); });

  // 結餘正負變色，一眼看出賺賠
  if (m.profitRow) {
    sh.getRange(m.profitRow, 1, 1, 2)
      .setFontColor(m.profit >= 0 ? C.good : C.bad).setFontSize(12);
  }

  // 訂單明細隔行淡底，長長一列比較好對
  if (m.orderCount > 1) {
    for (let i = 1; i < m.orderCount; i += 2) {
      sh.getRange(m.orderFirst + i, 1, 1, W).setBackground(C.band);
    }
  }

  sh.setFrozenRows(1);

  // 欄寬：先自動貼合，再夾在看得舒服的範圍內
  try {
    sh.autoResizeColumns(1, W);
    for (let c = 1; c <= W; c++) {
      const w = sh.getColumnWidth(c);
      if (w < 80) sh.setColumnWidth(c, 80);
      else if (w > 320) sh.setColumnWidth(c, 320);
    }
  } catch (err) {}
}
