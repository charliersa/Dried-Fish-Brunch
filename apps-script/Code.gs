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

// 金額前面加單引號 → 強制當文字，避免 6:32 被吃成時間、純數字單號被轉型
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
    if (sh) sh.clear(); else sh = ss.insertSheet(name);

    const s = p.summary || {};
    const period = p.period || 'day';
    const isMonth = period === 'month';
    const rows = [];

    rows.push([(p.store || '') + ' ' + (p.label || name)]);
    if (p.range && p.range.start) rows.push(['期間', p.range.start + ' ～ ' + p.range.end]);
    rows.push(['總訂單', s.count, '已結帳', s.paidCount, '未結帳', s.unpaidCount]);
    rows.push(['總營收', s.revenue,
               '現金', s.cashSum + '(' + s.cashCount + '筆)',
               '行動', s.mobileSum + '(' + s.mobileCount + '筆)']);
    if (s.dineIn != null) {
      rows.push(['內用', s.dineIn, '外帶', s.takeout,
                 '平均客單', s.paidCount ? Math.round(s.revenue / s.paidCount) : 0]);
    }

    // 逐日明細（週報／月報才有）
    if (p.perDay && p.perDay.length) {
      rows.push([]);
      rows.push(['逐日明細']);
      rows.push(['日期', '訂單數', '已結帳', '營收']);
      p.perDay.forEach(function (d) { rows.push([txt_(d.date), d.count, d.paidCount, d.revenue]); });
      rows.push(['合計', s.count, s.paidCount, s.revenue]);
    }

    rows.push([]);
    rows.push(['品項銷售統計']);
    rows.push(['品項', '數量', '小計']);
    (p.items || []).forEach(function (it) { rows.push([it.name, it.qty, it.rev]); });

    if (p.cats && p.cats.length) {
      rows.push([]);
      rows.push(['分類營收']);
      rows.push(['分類', '營收']);
      p.cats.forEach(function (c) { rows.push([c.name, c.value]); });
    }

    // 成本／薪資／損益：只有月報會帶
    if (isMonth && p.costTotal != null) {
      const tag = p.entExact ? (name + ' 封存值')
        : p.entSource ? ('沿用 ' + p.entSource + ' 封存值')
        : '目前設定值·該月無封存';
      rows.push([]);
      rows.push(['成本（' + tag + '）']);
      rows.push(['項目', '金額']);
      (p.costs || []).forEach(function (c) { rows.push([c.label, c.amount]); });
      rows.push(['合計', p.costTotal]);

      rows.push([]);
      rows.push(['薪資（' + tag + '）']);
      rows.push(['姓名', '職務', '時薪', '時數', '薪資']);
      (p.staff || []).forEach(function (m) { rows.push([m.name, m.role, m.wage, m.hours, m.pay]); });
      rows.push(['合計', '', '', '', p.payrollTotal]);

      rows.push([]);
      rows.push(['簡易損益']);
      rows.push(['本月營收', s.revenue]);
      rows.push(['本月成本', -p.costTotal]);
      rows.push(['本月薪資', -p.payrollTotal]);
      rows.push(['結餘', p.profit]);
      rows.push(['毛利率', s.revenue > 0 ? Math.round(p.profit / s.revenue * 100) + '%' : '0%']);
    }

    rows.push([]);
    rows.push(['訂單明細']);
    // 日報同一天，不用重複列日期
    if (isMonth || period === 'week') {
      rows.push(['單號', '日期', '時間', '類型 / 桌號', '狀態', '付款', '金額']);
      (p.orders || []).forEach(function (o) {
        rows.push([txt_(o.no), txt_(o.date), txt_(o.time), o.typeTable, o.status, o.pay, o.total]);
      });
    } else {
      rows.push(['單號', '時間', '類型 / 桌號', '狀態', '付款', '金額']);
      (p.orders || []).forEach(function (o) {
        rows.push([txt_(o.no), txt_(o.time), o.typeTable, o.status, o.pay, o.total]);
      });
    }

    // setValues 要求每一列等寬
    const width = rows.reduce(function (m, r) { return Math.max(m, r.length); }, 1);
    rows.forEach(function (r) { while (r.length < width) r.push(''); });
    sh.getRange(1, 1, rows.length, width).setValues(rows);
    sh.setFrozenRows(1);

    return json_({
      ok: true, sheet: name, period: period,
      rows: (p.orders || []).length, days: (p.perDay || []).length, url: ss.getUrl(),
    });
  } catch (err) {
    return json_({ ok: false, error: String(err) });
  }
}
