// 共享資料與常用函數
const MENU = [
  {
    id: 'cat1784562993985',
    name: '套餐系列',
    icon: '🐠',
    hidden: false,
    items: [
      {
        id: 'x1784563196880',
        name: '蔬菜蛋+雞塊3個+紅茶',
        price: 70,
        baseDrink: '紅茶',
        opts: [
          '❌美生菜',
          '❌蘋果片',
          '❌美乃滋',
          '❌番茄醬',
          '❌黑胡椒',
        ],
        addons: [
          { name: '奶茶', price: 10, drink: true },
          { name: '豆漿', price: 0, drink: true },
          { name: '鮮奶茶', price: 15, drink: true },
        ],
      },
      {
        id: 'x1784592752219',
        name: '❤️蘿蔔糕+紅茶（優惠中）',
        price: 50,
        opts: [
          '❌醬油膏',
        ],
        addons: [
          { name: '奶茶', price: 10, drink: true },
          { name: '豆漿', price: 0, drink: true },
          { name: '鮮奶茶', price: 15, drink: true },
          { name: '+蛋', price: 15 },
        ],
      },
      { id: 'x1784593411086', name: '炸雞腿排吐司+紅茶', price: 60, baseDrink: '紅茶', opts: ['❌美生菜', '❌蘋果片', '❌蕃茄醬', '❌胡椒'] },
      {
        id: 'x1784682791686',
        name: '薯條+雞塊*紅茶',
        price: 85,
        opts: [
          '冰',
          '熱',
        ],
        addons: [
          { name: '奶茶', price: 10, drink: true },
          { name: '鮮奶茶', price: 15, drink: true },
          { name: '豆漿', price: 0, drink: true },
        ],
      },
      {
        id: 'x1784682867587',
        name: '泡菜蛋餅（微辣）+紅茶',
        price: 50,
        addons: [
          { name: '奶茶', price: 10, drink: true },
          { name: '鮮奶茶', price: 15, drink: true },
          { name: '豆漿', price: 0, drink: true },
        ],
      },
    ],
  },
  {
    id: 'toast',
    name: '吐司類',
    icon: '🍞',
    items: [
      { id: 't1', name: '起司蛋吐司', price: 30, opts: ['❌美生菜', '❌蘋果片', '❌蕃茄醬', '❌胡椒', '改半熟', '改全熟'] },
      { id: 't2', name: '蔬菜蛋吐司', price: 30, opts: ['❌美生菜', '❌蘋果片', '❌蕃茄醬', '❌胡椒', '改半熟', '改全熟'] },
      {
        id: 't3',
        name: '豬排蛋吐司',
        price: 40,
        opts: [
          '❌美生菜',
          '❌蘋果片',
          '❌蕃茄醬',
          '❌胡椒',
          '改半熟',
          '改全熟',
          '起司',
        ],
        addons: [
          { name: '起司', price: 10 },
        ],
      },
      { id: 't4', name: '麥香雞蛋吐司', price: 35, opts: ['❌美生菜', '❌蘋果片', '❌蕃茄醬', '❌胡椒', '改半熟', '改全熟'] },
      { id: 't5', name: '鮪魚蛋吐司', price: 40, opts: ['❌美生菜', '❌蘋果片', '❌蕃茄醬', '❌胡椒', '改半熟', '改全熟'] },
      { id: 'x1784602799522', name: '酪梨蛋吐司', price: 30 },
      { id: 'x1784602846475', name: '酪梨蛋+鮪魚', price: 40 },
      { id: 'x1785457394045', name: '玉米蛋吐司', price: 30, opts: ['❌美生菜', '❌蘋果片', '❌蕃茄醬', '❌胡椒', '改半熟', '改全熟'] },
      { id: 'x1785464484713', name: '草莓果醬吐司', price: 30 },
      { id: 'x1785629904638', name: '夾蛋土司', price: 25 },
    ],
  },
  {
    id: 'egg',
    name: '蛋餅類',
    icon: '🥞',
    items: [
      { id: 'e1', name: '起司蛋餅', price: 30, opts: ['❌胡椒', '切'] },
      { id: 'e2', name: '蔬菜蛋餅', price: 30, opts: ['❌胡椒', '切'] },
      { id: 'e3', name: '豬排蛋餅', price: 40, opts: ['❌胡椒', '切'] },
      { id: 'e4', name: '鮪魚蛋餅', price: 40, opts: ['❌胡椒', '切'] },
      { id: 'e5', name: '黃金泡菜蛋餅（微辣）', price: 40 },
      { id: 'x1784606807236', name: '香椿抓餅 原味', price: 30, opts: ['❌胡椒', '切'] },
      { id: 'x1784606893380', name: '香椿抓餅+蛋', price: 35, opts: ['❌胡椒', '切'] },
      { id: 'x1785457458845', name: '玉米蛋餅', price: 30, opts: ['❌胡椒', '切'] },
    ],
  },
  {
    id: 'snack',
    name: '點心類',
    icon: '🍰',
    items: [
      { id: 's1', name: '薯條', price: 35 },
      { id: 's2', name: '雞塊', price: 40 },
      { id: 's3', name: '👍香菇蘿蔔糕 ❤️價格優惠中（原60）', price: 40 },
      { id: 'x1784593272400', name: '荷包蛋', price: 15, opts: ['半熟', '全熟'] },
      { id: 'x1784682320772', name: '限量水煮蛋', price: 15 },
    ],
  },
  {
    id: 'sandwich',
    name: '三明治系列',
    icon: '🥪',
    items: [
      { id: 'sw1', name: '三明治（30元）', price: 30 },
      { id: 'sw2', name: '三明治（40元）', price: 40 },
      { id: 'sw3', name: '三明治（50元）', price: 50 },
    ],
  },
  {
    id: 'drink',
    name: '飲料類',
    icon: '🥤',
    temp: true,
    items: [
      { id: 'd1', name: '有糖豆漿原價25', price: 20 },
      { id: 'd2', name: '紅茶', price: 20 },
      { id: 'd3', name: '奶茶', price: 30 },
      { id: 'd4', name: '鮮奶茶', price: 35 },
    ],
  },
];

// ===== 餐點備註：可「用按的」快速選項（依菜單分類 id 對應，找不到就用 default）=====
// 想改文字／增減選項，直接編輯這裡即可（顧客點餐的商品詳情彈窗會用到）。
const NOTE_OPTIONS = {
  toast: ['不要沙拉', '不要蕃茄醬', '不要黑胡椒', '不要生菜', '不要蕃茄片'],
  egg: ['不要醬油膏', '不要辣椒醬', '不要胡椒'],
  drink: [],
  snack: ['不要胡椒鹽', '不要蕃茄醬', '要辣'],
  default: ['不要沙拉', '不要蕃茄醬', '不要黑胡椒', '不要生菜'],
};

function noteOptionsFor(catId) {
  return NOTE_OPTIONS[catId] || NOTE_OPTIONS.default;
}

// 顧客點餐頁是否隱藏此分類。
// 後台「顧客可見」開關（cat.hidden）優先；沒設定過的舊資料沿用原本寫死的規則
// （三明治系列只給廚房/收銀/後台看，顧客點餐頁不顯示）。
function isHiddenForCustomer(cat) {
  if (!cat) return false;
  if (typeof cat.hidden === 'boolean') return cat.hidden;
  return cat.id === 'sandwich' || (cat.name && cat.name.indexOf('三明治') !== -1);
}

const STORAGE_KEY = 'xyg-order-system';

function loadOrders() {
  try {
    return JSON.parse(localStorage.getItem(STORAGE_KEY) || '[]');
  } catch (error) {
    return [];
  }
}

function saveOrders(orders) {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(orders));
}

// ===== 雲端連線監控：斷線不降級、自動重連 =====
// 過去只要 onSnapshot 回報一次錯誤，就永久切換成本機模式：之後送出的訂單只會寫進
// localStorage、再也不會進雲端（廚房完全收不到），畫面也停在斷線那一刻的資料 ——
// 症狀就是「看起來正常但其實是死的，只能關掉重開」。
// 現在只要 Firebase 有設定就一直留在雲端模式：斷線只當成暫時狀態，監聽器會自動退避重連，
// 期間的寫入由 Firestore 自己排隊、連上後補送，並在畫面上告知使用者不必關掉重開。
const NET = {
  raw: null,        // 原始 firestore 實例（測試站的包裝層沒有 enableNetwork）
  bootAt: Date.now(), // 開頁時間：頭幾秒連線還在握手，不算「連不上」
  online: true,     // 目前拿到的資料是不是來自雲端
  watchers: [],     // 所有需要自動重連的即時監聽
  sensor: false,    // 連線感測器是否已啟動
  hiddenAt: 0,      // 分頁切到背景的時間
  bound: false,
  kicking: false,
  offlineSince: 0,  // 這次斷線從什麼時候開始（0 = 目前連著）
  kickWait: 0,      // 下次主動重連前要等多久（連續救不回來就加倍）
  patrol: null,     // 連線巡邏計時器
  banner: null,
  timer: null,
};

// 註冊一個會自動重連的即時監聽。
// start(ok, fail) 要回傳 onSnapshot 的取消訂閱函式；收到快照時呼叫 ok()，出錯時呼叫 fail(err)。
// 主動重連的等待時間：第一次等 20 秒，之後每次加倍，最多 5 分鐘才試一次。
// 會退避是因為管理後台訂閱的是「全部歷史訂單」，每次重連都要整批重讀；
// 一條長期壞掉的連線若每 20 秒重讀一次，反而會把 Firestore 的免費額度吃掉。
const NET_REVIVE_MIN = 20000;
const NET_REVIVE_MAX = 300000;
const NET_PATROL_MS = 5000;

function watchCloud(name, start) {
  const w = { name: name, start: start, unsub: null, retry: 0, timer: null };
  NET.watchers.push(w);
  bindNetEvents();
  openWatcher(w);
  return w;
}

function openWatcher(w) {
  if (w.timer) { clearTimeout(w.timer); w.timer = null; }
  if (w.unsub) { try { w.unsub(); } catch (e) {} w.unsub = null; }
  try {
    w.unsub = w.start(
      () => { w.retry = 0; },
      err => {
        console.warn('雲端監聽中斷，自動重連中：' + w.name, err && err.code);
        w.unsub = null;
        setCloudOnline(false);
        retryWatcher(w);
      }
    );
  } catch (e) {
    console.warn('雲端監聽啟動失敗：' + w.name, e);
    w.unsub = null;
    setCloudOnline(false);
    retryWatcher(w);
  }
}

// 退避重試：1、2、4…最多每 20 秒試一次。網路恢復或回到前景時會立刻重連，不必等這個計時器
function retryWatcher(w) {
  if (w.timer) return;
  const wait = Math.min(20000, 1000 * Math.pow(2, w.retry++));
  w.timer = setTimeout(() => { w.timer = null; openWatcher(w); }, wait);
}

// 只重開真的斷掉的監聽：還活著的監聽 Firestore 自己會補資料，重開反而多花一次讀取
function reopenBrokenWatchers() {
  NET.watchers.forEach(w => { if (!w.unsub) { w.retry = 0; openWatcher(w); } });
}

// 連線感測器：訂閱一份最小的文件並開啟中繼資料通知，用 fromCache 判斷「現在看到的是
// 雲端資料還是本機快取」。獨立成一支的原因是：訂單監聽若開啟中繼資料通知，會為了偵測
// 連線而在每次連線狀態變動時整頁重畫，反而干擾點餐。
function startNetSensor(db) {
  if (NET.sensor || !db) return;
  NET.sensor = true;
  watchCloud('連線偵測', (ok, fail) => db.collection('config').doc('admin').onSnapshot(
    { includeMetadataChanges: true },
    snap => { ok(); setCloudOnline(!(snap.metadata && snap.metadata.fromCache)); },
    fail
  ));
}

function setCloudOnline(on) {
  on = !!on;
  if (NET.online === on) return;
  NET.online = on;
  if (NET.timer) { clearTimeout(NET.timer); NET.timer = null; }
  if (on) { NET.offlineSince = 0; NET.kickWait = 0; renderNetBanner(); return; }
  NET.offlineSince = Date.now();
  startNetPatrol();
  // 剛開頁時第一個快照本來就來自本機快取，等 8 秒還沒連上才提示，避免每次開啟都閃一下
  NET.timer = setTimeout(() => { NET.timer = null; renderNetBanner(); }, 8000);
}

// 連線巡邏：分頁一直開著沒切走時（廚房 iPad、收銀電腦就是這樣整天開著），
// 斷線不會觸發 online／visibilitychange／pageshow 任何一個事件，而 Firestore
// 這種「靜靜斷掉」也不回報錯誤，openWatcher 的 fail 分支同樣不會進去 ——
// 結果就是橫幅掛在畫面上說「會自動恢復」，卻沒有任何人真的去重連，
// 店員只好把網頁關掉重開。這裡自己定時巡邏，斷線夠久就主動 kickCloud()。
function startNetPatrol() {
  if (NET.patrol) return;
  NET.patrol = setInterval(() => {
    if (NET.online) { clearInterval(NET.patrol); NET.patrol = null; return; }
    if (NET.kicking || !NET.offlineSince) return;
    if (document.visibilityState === 'hidden') return; // 背景分頁交給回前景時的 visibilitychange 處理
    const wait = NET.kickWait || NET_REVIVE_MIN;
    if (Date.now() - NET.offlineSince < wait) return;
    NET.kickWait = Math.min(wait * 2, NET_REVIVE_MAX);
    NET.offlineSince = Date.now(); // 重新計時，等這一次重連的結果
    console.warn('[net] 斷線超過 ' + Math.round(wait / 1000) + ' 秒且沒有任何事件觸發，主動重連');
    kickCloud();
  }, NET_PATROL_MS);
}

// 斷線時在畫面最上方顯示提示。重點是告訴店員／顧客「會自動恢復，不用關掉重開」——
// 以前沒有任何提示，看到畫面不動就只能重開，反而中斷正在排隊的資料。
function renderNetBanner() {
  if (typeof document === 'undefined' || !document.body) return;
  if (NET.online) {
    if (NET.banner) { try { NET.banner.remove(); } catch (e) {} NET.banner = null; }
    return;
  }
  if (NET.banner) return;
  const bar = document.createElement('div');
  bar.id = 'xyg-net-banner';
  bar.setAttribute('style', 'position:fixed;left:0;right:0;top:0;z-index:99999;display:flex;'
    + 'align-items:center;justify-content:center;gap:10px;flex-wrap:wrap;padding:8px 12px;'
    + 'background:#b3322b;color:#fff;font-size:14px;font-weight:700;line-height:1.4;'
    + 'text-align:center;box-shadow:0 2px 8px rgba(0,0,0,.25);');
  bar.innerHTML = '<span>⚠️ 目前連不上雲端，畫面是本機暫存；連線恢復會自動同步，<u>不必關掉重開</u></span>'
    + '<button type="button" style="border:0;border-radius:999px;padding:5px 14px;background:#fff;'
    + 'color:#b3322b;font-weight:700;font-size:13px;cursor:pointer;">立即重連</button>';
  bar.querySelector('button').addEventListener('click', kickCloud);
  document.body.appendChild(bar);
  NET.banner = bar;
}

function bindNetEvents() {
  if (NET.bound) return;
  NET.bound = true;
  try {
    window.addEventListener('online', () => kickCloud());
    // 從其他頁面「上一頁」回來（bfcache 還原）時，連線通常已經死了
    window.addEventListener('pageshow', e => { if (e && e.persisted) kickCloud(); });
    document.addEventListener('visibilitychange', () => {
      if (document.visibilityState === 'hidden') { NET.hiddenAt = Date.now(); return; }
      const away = NET.hiddenAt ? Date.now() - NET.hiddenAt : 0;
      NET.hiddenAt = 0;
      // iOS Safari 與加到主畫面的 App 切到背景久了，系統會把 Firestore 的連線收掉，
      // 而且不會回報任何錯誤 —— 畫面就這樣停在舊資料（以前只能關掉重開）。
      // 回到前景時只要離開超過 30 秒，或本來就是斷線狀態，就主動把連線重接一次。
      if (away > 30000 || !NET.online) kickCloud();
    });
  } catch (e) {}
}

// 重接 Firestore。只呼叫 enableNetwork 沒有用：SDK 以為自己還連著、不會重建連線，
// 一定要先 disableNetwork 把死掉的連線拆掉。排隊中的寫入不會遺失，連上就會補送。
function kickCloud() {
  if (NET.kicking) return;
  NET.kicking = true;
  const raw = NET.raw;
  let settled = false;
  const done = () => {
    if (settled) return;
    settled = true;
    NET.kicking = false;
    reopenBrokenWatchers();
  };
  setTimeout(done, 8000); // 保險：萬一切換網路的 Promise 沒有回來，也不要卡住下一次重連
  if (raw && typeof raw.disableNetwork === 'function') {
    try {
      raw.disableNetwork().then(() => raw.enableNetwork()).then(done, done);
      return;
    } catch (e) {}
  }
  done();
}

// ===== 共用 Firebase 連線 =====
let _persistEnabled = false;
function ensureDb() {
  const hasConfig = typeof firebase !== 'undefined'
    && typeof FIREBASE_CONFIG !== 'undefined'
    && FIREBASE_CONFIG && FIREBASE_CONFIG.apiKey;
  if (!hasConfig) return null;
  try {
    if (!firebase.apps.length) firebase.initializeApp(FIREBASE_CONFIG);
    const db = firebase.firestore();
    // 離線持久化：把雲端資料快取到 IndexedDB，離線可讀寫、回連自動同步（必須在第一次操作前啟用一次）
    NET.raw = db; // 供斷線重連用（disableNetwork / enableNetwork）
    if (!_persistEnabled) {
      _persistEnabled = true;
      // 08/28 曾在這裡加 db.settings({ experimentalForceLongPolling: true, merge: true })，
      // 想解決店裡 Wi-Fi 讓串流半死不活的問題。08/29 用 test/diag.html 在 iPad 實測才發現：
      // 這行從頭到尾都在拋 [invalid-argument]（強制長輪詢不能和 experimentalAutoDetectLongPolling
      // 並存，而自動偵測自 SDK 9.22 / 2023-05 起預設就是開的），錯誤被 catch 吞掉，
      // 設定一次也沒生效過。自動偵測本來就會在需要時自己切成長輪詢，所以這裡不再強制；
      // 真的要強制的話，正確寫法是同時給 experimentalAutoDetectLongPolling: false。

      // 離線持久化只在非 iOS 裝置啟用。
      // 08/29 iPadOS 17.7 實測（test/diag.html）：enablePersistence() 卡住不回應，
      // 而且會把整個 Firestore 實例一起拖死 —— 同一頁的讀取 12 秒逾時、寫入 15 秒逾時，
      // 送出的訂單就這樣永遠卡在裝置裡，畫面卻顯示「訂單已送出」，廚房一筆也收不到
      //（08/29 兩台 iPad 與一支 iPhone 全中，Android 與桌機正常）。
      // 同一支診斷頁裡另開一個「沒有啟用持久化」的實例，寫入只要 431 毫秒。
      // 連帶一提：連線偵測器的 onSnapshot 也會被一起卡死，所以連紅色斷線橫幅都不會出現。
      // iPad／iPhone 不論用 Safari 還是 Chrome 都是同一套 WebKit，一律跳過。
      // 少掉的離線能力由「新訂單保證送達佇列 + REST 輪詢備援 + localStorage 備份」承擔。
      if (isIOSDevice()) {
        console.info('[firestore] iOS 裝置跳過離線持久化：WebKit 會讓 enablePersistence 卡死整個連線');
      } else {
        try {
          // 單分頁持久化：兩個站同在 charliersa.github.io，先前的 synchronizeTabs 會讓廚房／
          // 收銀／點餐所有分頁共選一個「主分頁」統一連線；Safari 把主分頁凍結（背景分頁、
          // 鎖屏）後，其他分頁就只剩本機快取——畫面卡在「連不上雲端」，重連也救不回來。
          // 改成每個分頁各自連線：第一個分頁擁有離線快取，其餘分頁照常即時同步（只是沒離線快取）。
          db.enablePersistence()
            .catch(e => console.warn('離線持久化未啟用（此分頁改用即時連線）：', e && e.code));
        } catch (e) { console.warn('離線持久化呼叫失敗', e); }
      }
    }
    startNetSensor(db);
    return db;
  } catch (e) {
    console.warn('Firebase 初始化失敗', e);
    return null;
  }
}

// ===== 裝置識別（離線單號防撞）=====
// 每台裝置首次開啟產生固定 deviceId；deviceCode 是顯示在取餐號前的代碼（可由 ?dev=A 或設定覆寫）
function getDeviceId() {
  let id = null;
  try { id = localStorage.getItem('xyg-device-id'); } catch (e) {}
  if (!id) {
    id = 'D' + Date.now().toString(36) + Math.random().toString(36).slice(2, 6);
    try { localStorage.setItem('xyg-device-id', id); } catch (e) {}
  }
  return id;
}

function getDeviceCode() {
  let c = null;
  try { c = localStorage.getItem('xyg-device-code'); } catch (e) {}
  if (!c) {
    const id = getDeviceId();
    let h = 0;
    for (let i = 0; i < id.length; i++) h = (h * 31 + id.charCodeAt(i)) >>> 0;
    c = String.fromCharCode(65 + (h % 26)); // 衍生一個字母當預設
  }
  return c;
}

function setDeviceCode(code) {
  code = (code || '').trim().toUpperCase().slice(0, 2);
  if (code) { try { localStorage.setItem('xyg-device-code', code); } catch (e) {} }
  return getDeviceCode();
}

// 讓店員可用網址 ?dev=A 一次設定該台裝置代碼（之後該裝置就記住）
function applyDeviceCodeFromUrl() {
  try {
    const p = new URLSearchParams(location.search).get('dev');
    if (p) setDeviceCode(p);
  } catch (e) {}
}

// ===== 資料同步層：Firebase 雲端即時同步，localStorage 離線備援 =====
// 線上（有設定 firebase-config.js）→ 跨裝置即時同步
// 離線 / APK / 未設定 → 自動退回單機 localStorage
const SYNC = {
  db: null,
  mode: 'local', // 'cloud' | 'local'
  onChange: null,
  pollTimer: null,
};

function startOfToday() {
  const d = new Date();
  d.setHours(0, 0, 0, 0);
  return d.getTime();
}

// 註冊資料變更監聽；callback 會在初次與每次資料變動時被呼叫，帶入最新訂單陣列
// opts.today = true → 只訂閱「今天」的訂單（點餐/廚房/收銀/叫號用，避免下載全部歷史）
// 不帶 opts → 訂閱全部歷史（管理後台報表用）
function initSync(onChange, opts) {
  opts = opts || {};
  SYNC.onChange = onChange;
  const db = ensureDb();
  if (!db) { startLocalSync(); return; }
  SYNC.db = db;
  SYNC.mode = 'cloud';
  SYNC.todayOnly = !!opts.today;
  SYNC.lastSnapAt = Date.now();
  expireStaleBackup(); // 太久沒更新的本機備份直接作廢，避免斷線時顯示舊數字
  pnewSchedule(); // 上次沒送到雲端的訂單（被凍結分頁腰斬的），開頁就繼續補送
  pendSchedule(); // 上次沒送出去的狀態變更（重新整理前卡住的），開頁就繼續補送
  pdelSchedule(); // 上次沒刪成的訂單，開頁繼續補刪
  startPollWatchdog(); // 穩定模式：即時串流凍死時自動改用 REST 輪詢收單
  let hadData = false;
  // 交給 watchCloud 管理：斷線只會重連，不會切成本機模式（切過去就再也不會把訂單送上雲端）
  watchCloud('訂單', (ok, fail) => {
    // 每次重新訂閱都重算今天的起點，跨過午夜重連才不會停在昨天的範圍
    let query = db.collection('orders').orderBy('createdAt', 'asc');
    if (opts.today) {
      query = db.collection('orders').where('createdAt', '>=', startOfToday()).orderBy('createdAt', 'asc');
    }
    return query.onSnapshot(
      snap => {
        ok();
        hadData = true;
        // 先套上「保證送達佇列」裡還沒確認的狀態變更，畫面才不會倒退回舊狀態
        const list = applyPendingOverlay(snap.docs.map(doc => Object.assign({ id: doc.id }, doc.data())));
        SYNC.lastSnapAt = Date.now(); // 穩定模式：證明串流還活著，輪詢就不出手
        SYNC.lastList = list;
        list.forEach(o => { const u = o.updatedAt || o.createdAt || 0; if (u > (SYNC.pollSeen || 0)) SYNC.pollSeen = u; });
        backupOrders(list, !!opts.today);
        if (SYNC.onChange) SYNC.onChange(list);
      },
      err => {
        fail(err);
        // 還沒拿到任何雲端資料就斷線 → 先用本機備份把畫面撐住，但不切換成本機模式：
        // 送出的訂單仍然交給 Firestore 排隊，連上後會自動補送到廚房。
        if (!hadData && SYNC.onChange) SYNC.onChange(applyPendingOverlay(loadOrders()));
      }
    );
  });
}

// 把雲端訂單留一份在 localStorage 當離線備援。
// 廚房／收銀／叫號／點餐頁都只訂閱「今日」訂單，若直接整份覆蓋，備援裡的歷史訂單
// 會被洗掉；之後同一台裝置在離線狀態下開後台，就會以為以前的紀錄不見了。
// → 只有拿到完整清單時才整份取代，今日範圍的更新一律保留今天以前的資料。
function backupOrders(list, todayOnly) {
  try {
    const data = todayOnly
      ? loadOrders().filter(o => !isToday(o.createdAt)).concat(list)
      : list;
    localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
    localStorage.setItem(BACKUP_AT_KEY, String(Date.now())); // 記下備份時間，太舊會自動作廢
  } catch (e) {}
}

// ===== 過期備份自動刪除 =====
// 本機備份只是雲端的快取（雲端才是正本），每次連上都會自動更新。
// 但裝置若太久沒連上雲端，備份會停在好幾天前 —— 拿出來顯示只會誤導
//（08/28 平板就顯示過幾天前的舊菜單和舊報表）。超過 3 天沒更新就整份刪掉：
// 寧可顯示「連不上雲端、沒有資料」，也不要顯示舊數字。
const BACKUP_AT_KEY = 'xyg-backup-at';
function expireStaleBackup() {
  try {
    const has = localStorage.getItem(STORAGE_KEY);
    if (!has) return;
    const at = Number(localStorage.getItem(BACKUP_AT_KEY) || 0);
    if (!at) { localStorage.setItem(BACKUP_AT_KEY, String(Date.now())); return; } // 舊版沒記時間：現在起算
    if (Date.now() - at > 3 * 86400000) {
      localStorage.removeItem(STORAGE_KEY);
      localStorage.removeItem(BACKUP_AT_KEY);
      console.warn('本機備份超過 3 天沒更新，已自動刪除（雲端資料不受影響）');
    }
  } catch (e) {}
}

function startLocalSync() {
  SYNC.mode = 'local';
  const tick = () => { if (SYNC.onChange) SYNC.onChange(loadOrders()); };
  tick();
  if (SYNC.pollTimer) clearInterval(SYNC.pollTimer);
  SYNC.pollTimer = setInterval(tick, 2000);
}

function syncAddOrder(order) {
  if (SYNC.mode === 'cloud' && SYNC.db) {
    pnewRemember(order); // 先記帳：SDK 佇列送不出去也會自動補送（見下方新訂單保證送達佇列）
    // sentAt 由伺服器蓋章：手機時鐘不準時，watchOrderAck 會用它校正 createdAt
    const doc = Object.assign({}, order);
    try { doc.sentAt = firebase.firestore.FieldValue.serverTimestamp(); } catch (e) {}
    return SYNC.db.collection('orders').doc(String(order.id)).set(doc)
      .then(() => pnewConfirm(order.id)) // 伺服器真的收到才銷帳
      .catch(e => console.warn('新增訂單失敗（已排入自動補送）', e));
  }
  const orders = loadOrders();
  orders.push(order);
  saveOrders(orders);
  if (SYNC.onChange) SYNC.onChange(orders);
  return Promise.resolve();
}

function syncUpdateOrder(id, changes) {
  if (SYNC.mode === 'cloud' && SYNC.db) {
    pendRemember(id, changes); // 先記帳：畫面不倒退、SDK 送不出去也會自動補送（見下方保證送達佇列）
    return SYNC.db.collection('orders').doc(String(id)).update(changes)
      .then(() => pendConfirm(id, changes)) // 伺服器真的收到才銷帳
      .catch(e => console.warn('更新訂單失敗（已排入自動補送）', e));
  }
  const orders = loadOrders();
  const order = orders.find(o => o.id === id);
  if (order) { Object.assign(order, changes); saveOrders(orders); }
  if (SYNC.onChange) SYNC.onChange(orders);
  return Promise.resolve();
}

// ===== 訂單狀態變更「保證送達」佇列 =====
// 平板連線不穩時，「完成／取餐」的 update 會卡在 SDK 佇列送不出去；單分頁持久化下
// 重新整理還會把佇列直接丟掉，雲端快照一回來就把舊狀態蓋回畫面 —— 店員看到做完的單
// 「來來回回」跑回來。這裡把每筆狀態變更記進 localStorage（重新整理不丟）：
// ① 快照回來先套用記帳中的變更，畫面永遠不倒退
// ② SDK 4 秒內送不出去，改走 Firestore REST 直連通道補送（每 6 秒重試）
// ③ 伺服器確認收到（SDK 回應、REST 200 或快照已反映）才銷帳
const PEND_KEY = 'xyg-pend-upd';
let _pendTimer = null;
function pendLoad() { try { return JSON.parse(localStorage.getItem(PEND_KEY) || '{}'); } catch (e) { return {}; } }
function pendSave(map) { try { localStorage.setItem(PEND_KEY, JSON.stringify(map)); } catch (e) {} }
function pendRemember(id, changes) {
  const map = pendLoad();
  const ent = map[String(id)] || { changes: {}, ts: 0 };
  Object.assign(ent.changes, changes);
  ent.ts = Date.now();
  map[String(id)] = ent;
  pendSave(map);
  pendSchedule();
}
function pendConfirm(id, confirmed) {
  const map = pendLoad();
  const ent = map[String(id)];
  if (!ent) return;
  Object.keys(confirmed).forEach(k => {
    if (JSON.stringify(ent.changes[k]) === JSON.stringify(confirmed[k])) delete ent.changes[k];
  });
  if (!Object.keys(ent.changes).filter(k => k !== 'updatedAt').length) delete map[String(id)];
  pendSave(map);
}
// 把記帳中的變更蓋到快照清單上；伺服器已反映的欄位順手銷帳
function applyPendingOverlay(list) {
  // 刪除中的訂單一律不顯示（快照/輪詢/備份哪條路來的都一樣），刪除才不會「彈回來」
  const del = pdelLoad();
  if (Object.keys(del).length) list = list.filter(o => !del[String(o.id)]);
  // 還在補送、雲端還沒有的新訂單先併回清單：顧客的訂單狀態頁不能讓它憑空消失
  const news = pnewLoad();
  Object.keys(news).forEach(id => {
    if (del[id]) return;
    if (list.some(o => String(o.id) === id)) return;
    list = list.concat([news[id].order]);
  });
  const map = pendLoad();
  const ids = Object.keys(map);
  if (!ids.length) return list;
  let dirty = false;
  ids.forEach(id => {
    const ent = map[id];
    if (Date.now() - ent.ts > 86400000) { delete map[id]; dirty = true; return; } // 超過一天的舊帳放棄
    const order = list.find(o => String(o.id) === id);
    if (!order) return;
    Object.keys(ent.changes).forEach(k => {
      if (k === 'updatedAt') return;
      if (JSON.stringify(order[k]) === JSON.stringify(ent.changes[k])) {
        delete ent.changes[k]; dirty = true; // 伺服器已反映 → 銷帳
      } else {
        order[k] = ent.changes[k]; // 還沒反映 → 蓋住，不讓舊狀態倒退
      }
    });
    if (!Object.keys(ent.changes).filter(k => k !== 'updatedAt').length) { delete map[id]; dirty = true; }
  });
  if (dirty) pendSave(map);
  return list;
}
function pendSchedule() {
  if (_pendTimer) return;
  _pendTimer = setInterval(pendFlush, 3000);
}
function pendFlush() {
  const map = pendLoad();
  const ids = Object.keys(map);
  if (!ids.length) { clearInterval(_pendTimer); _pendTimer = null; return; }
  ids.forEach(id => {
    const ent = map[id];
    if (Date.now() - ent.ts < 2000) return; // 給 SDK 2 秒先送
    restUpdateOrder(id, ent.changes)
      .then(() => pendConfirm(id, ent.changes))
      .catch(() => {}); // 打不通就等下一輪
  });
}
// 用 REST 直連通道只更新有變更的欄位（updateMask），且訂單必須已存在雲端（不產生半張幽靈單）
function restUpdateOrder(id, changes) {
  if (typeof FIREBASE_CONFIG === 'undefined' || !FIREBASE_CONFIG || !FIREBASE_CONFIG.apiKey) return Promise.reject(new Error('no config'));
  const keys = Object.keys(changes).filter(k => changes[k] !== undefined);
  if (!keys.length) return Promise.resolve();
  const qs = keys.map(k => 'updateMask.fieldPaths=' + encodeURIComponent(k)).join('&');
  const url = 'https://firestore.googleapis.com/v1/projects/' + FIREBASE_CONFIG.projectId
    + '/databases/(default)/documents/orders/' + encodeURIComponent(String(id))
    + '?currentDocument.exists=true&' + qs + '&key=' + FIREBASE_CONFIG.apiKey;
  return fetch(url, {
    method: 'PATCH',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ fields: restFields(changes) }),
  }).then(res => { if (!res.ok) throw new Error('REST ' + res.status); });
}
function restFields(obj) {
  const out = {};
  Object.keys(obj).forEach(k => {
    const v = restValue(obj[k]);
    if (v) out[k] = v;
  });
  return out;
}
function restValue(v) {
  if (v === undefined) return null; // undefined 欄位直接略過
  if (v === null) return { nullValue: null };
  if (typeof v === 'boolean') return { booleanValue: v };
  if (typeof v === 'number') return Number.isInteger(v) ? { integerValue: String(v) } : { doubleValue: v };
  if (typeof v === 'string') return { stringValue: v };
  if (Array.isArray(v)) return { arrayValue: { values: v.map(restValue).filter(Boolean) } };
  if (typeof v === 'object') return { mapValue: { fields: restFields(v) } };
  return null;
}

// ===== 刪除訂單「保證送達」 =====
// 刪除指令和狀態變更一樣會卡在 SDK 佇列（卡住＝雲端沒真的刪），而畫面又等雲端
// 回報才移除該列，輪詢合併也只加不減 —— 造成「刪了沒反應、甚至彈回來」。
// 這裡把刪除記進 localStorage：畫面立即移除且不再合併回來；每 3 秒用 REST DELETE
// 直連補刪（冪等，重複刪同一筆無害），伺服器回 200 才銷帳。
const PDEL_KEY = 'xyg-pend-del';
let _pdelTimer = null;
function pdelLoad() { try { return JSON.parse(localStorage.getItem(PDEL_KEY) || '{}'); } catch (e) { return {}; } }
function pdelSave(m) { try { localStorage.setItem(PDEL_KEY, JSON.stringify(m)); } catch (e) {} }
function pdelRemember(id) { const m = pdelLoad(); m[String(id)] = Date.now(); pdelSave(m); pdelSchedule(); }
function pdelConfirm(id) { const m = pdelLoad(); delete m[String(id)]; pdelSave(m); }
function pdelSchedule() {
  if (_pdelTimer) return;
  _pdelTimer = setInterval(pdelFlush, 3000);
}
function pdelFlush() {
  const m = pdelLoad();
  const ids = Object.keys(m);
  if (!ids.length) { clearInterval(_pdelTimer); _pdelTimer = null; return; }
  if (typeof FIREBASE_CONFIG === 'undefined' || !FIREBASE_CONFIG || !FIREBASE_CONFIG.apiKey) return;
  ids.forEach(id => {
    if (Date.now() - m[id] > 86400000) { pdelConfirm(id); return; } // 超過一天的舊帳放棄
    fetch('https://firestore.googleapis.com/v1/projects/' + FIREBASE_CONFIG.projectId
      + '/databases/(default)/documents/orders/' + encodeURIComponent(String(id)) + '?key=' + FIREBASE_CONFIG.apiKey,
      { method: 'DELETE' })
      .then(res => { if (res.ok) pdelConfirm(id); })
      .catch(() => {}); // 打不通等下一輪
  });
}

// ===== 新訂單「保證送達」佇列 =====
// 顧客按下送出後畫面立刻顯示「訂單已送出」（樂觀更新），但 Firestore 的寫入這時可能還在飛。
// iOS（iPad／iPhone，Safari 與 Chrome 都是同一套 WebKit）只要分頁一切走就立刻凍結 JS 與
// 網路請求 —— 而店員的習慣正是「按完送出馬上切到廚房分頁看」，那筆寫入就這樣被腰斬，
// 卡在 SDK 的記憶體佇列裡，重新整理後連佇列都不見了（08/29 兩台 iPad 與一支 iPhone 全中，
// 雲端一筆都沒有，但畫面從頭到尾都顯示送出成功）。
// 狀態變更與刪除早就各有一條補送佇列，唯獨「新增訂單」沒有 —— 也就是最不能掉的那一筆。
// 這裡比照辦理：整筆訂單先記進 localStorage（重新整理不丟）
// ① SDK 4 秒內沒回報成功，就改走 Firestore REST 直連通道補送（每 3 秒重試）
// ② 伺服器確認收到（SDK 回應、REST 建立成功、或雲端已經有這筆）才銷帳
// ③ 還沒銷帳的訂單由 applyPendingOverlay 併回畫面，顧客的訂單狀態頁不會憑空消失
const PNEW_KEY = 'xyg-pend-new';
let _pnewTimer = null;
function pnewLoad() { try { return JSON.parse(localStorage.getItem(PNEW_KEY) || '{}'); } catch (e) { return {}; } }
function pnewSave(m) { try { localStorage.setItem(PNEW_KEY, JSON.stringify(m)); } catch (e) {} }
function pnewRemember(order) {
  const m = pnewLoad();
  m[String(order.id)] = { order: order, ts: Date.now() };
  pnewSave(m);
  pnewSchedule();
  pnewBindLeave();
}
// 分頁被切走／關掉的那一瞬間，把還沒送達的訂單用 keepalive 搶送出去。
// 這是整個修法的關鍵：iOS 一切走就凍結 JS 與網路，補送計時器跟著凍住、普通的 fetch
// 也會被腰斬；而 keepalive 的請求由瀏覽器接手在背景送完，不受頁面凍結影響 ——
// 店員「按完送出馬上切到廚房分頁看」的習慣就不會再吃掉訂單。
// 送出後不等回應（頁面已經凍了也讀不到），銷帳交給回到前景後的 pnewFlush 確認。
let _pnewBound = false;
function pnewBindLeave() {
  if (_pnewBound || typeof document === 'undefined') return;
  _pnewBound = true;
  try {
    document.addEventListener('visibilitychange', () => {
      if (document.visibilityState === 'hidden') pnewFlushBeacon();
    });
    window.addEventListener('pagehide', pnewFlushBeacon);
  } catch (e) {}
}
function pnewFlushBeacon() {
  const m = pnewLoad();
  Object.keys(m).forEach(id => {
    if (beaconCreateOrder(m[id].order)) return; // 交給瀏覽器背景送完
    try { restCreateOrder(m[id].order, true).catch(() => {}); } catch (e) {} // 沒有 sendBeacon 就退回 keepalive
  });
}
// 用 navigator.sendBeacon 送：這是瀏覽器專為「頁面關掉前把資料送出去」設計的通道，
// iOS WebKit 對它的支援比 fetch 的 keepalive 完整可靠，頁面凍結後仍會送完。
// 走 POST documents/orders?documentId=<id>，語意等同「只在不存在時建立」——
// 同一筆重送只會拿到 409，不會變成兩張單，也不會蓋掉廚房已經改過的狀態。
// Content-Type 用 text/plain 是為了不觸發預檢請求（頁面正在卸載，預檢往往來不及送），
// 已實測 Firestore REST 接受這個格式。
function beaconCreateOrder(order) {
  try {
    if (typeof navigator === 'undefined' || !navigator.sendBeacon || typeof Blob === 'undefined') return false;
    if (typeof FIREBASE_CONFIG === 'undefined' || !FIREBASE_CONFIG || !FIREBASE_CONFIG.apiKey) return false;
    const doc = Object.assign({}, order);
    delete doc.sentAt; // 伺服器蓋章的欄位不由本機補寫
    const url = 'https://firestore.googleapis.com/v1/projects/' + FIREBASE_CONFIG.projectId
      + '/databases/(default)/documents/orders?documentId=' + encodeURIComponent(String(order.id))
      + '&key=' + FIREBASE_CONFIG.apiKey;
    const body = new Blob([JSON.stringify({ fields: restFields(doc) })], { type: 'text/plain;charset=UTF-8' });
    return navigator.sendBeacon(url, body);
  } catch (e) { return false; }
}
function pnewConfirm(id) {
  const m = pnewLoad();
  if (!m[String(id)]) return;
  delete m[String(id)];
  pnewSave(m);
}
// 這筆訂單是否還沒送達雲端（還躺在補送佇列裡）——顧客端的送達確認用
function isOrderPending(id) { return !!pnewLoad()[String(id)]; }
function pnewSchedule() {
  if (_pnewTimer) return;
  _pnewTimer = setInterval(pnewFlush, 3000);
}
function pnewFlush() {
  const m = pnewLoad();
  const ids = Object.keys(m);
  if (!ids.length) { clearInterval(_pnewTimer); _pnewTimer = null; return; }
  ids.forEach(id => {
    const ent = m[id];
    if (Date.now() - ent.ts > 86400000) { pnewConfirm(id); return; } // 超過一天的舊帳放棄
    if (Date.now() - ent.ts < 4000) return; // 先給 SDK 4 秒自己送
    restCreateOrder(ent.order).then(() => pnewConfirm(id)).catch(() => {}); // 打不通就等下一輪
  });
}
// 用 REST 直連通道補送整筆訂單。帶 currentDocument.exists=false：只在雲端還沒有這筆時才建立，
// 廚房已經按過「開始製作／完成」的單絕不會被補送蓋回 new。若因為已存在而被拒，
// 代表 SDK 其實送到了，直接銷帳。
function restCreateOrder(order, keepalive) {
  if (typeof FIREBASE_CONFIG === 'undefined' || !FIREBASE_CONFIG || !FIREBASE_CONFIG.apiKey) return Promise.reject(new Error('no config'));
  const base = 'https://firestore.googleapis.com/v1/projects/' + FIREBASE_CONFIG.projectId
    + '/databases/(default)/documents/orders/' + encodeURIComponent(String(order.id));
  const doc = Object.assign({}, order);
  delete doc.sentAt; // 伺服器蓋章的欄位不由本機補寫
  return fetch(base + '?currentDocument.exists=false&key=' + FIREBASE_CONFIG.apiKey, {
    method: 'PATCH',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ fields: restFields(doc) }),
    keepalive: !!keepalive, // 頁面被凍結／關掉後，瀏覽器仍會把這個請求送完
  }).then(res => {
    if (res.ok) return;
    if (res.status !== 400 && res.status !== 409) throw new Error('REST ' + res.status);
    // 400/409 可能是「文件已存在」：確認雲端真的有了才銷帳，其他原因照樣重試
    return fetch(base + '?key=' + FIREBASE_CONFIG.apiKey)
      .then(r => { if (!r.ok) throw new Error('REST ' + res.status); });
  });
}

// ===== 穩定模式：即時串流凍死時，自動改用 REST 輪詢收單 =====
// 老平板的 Safari 常把即時串流連線凍死，症狀就是「有時收得到、有時收不到」。
// 每 10 秒檢查一次：超過 25 秒沒收到任何串流快照，就改用 REST 直連通道問
// 「上次之後有沒有訂單新增／變更」（一次一問一答、每次都是全新連線，凍不死），
// 有變化就合併進畫面照常響鈴；串流活回來後輪詢自動退場，完全不用人管。
function startPollWatchdog() {
  if (SYNC.pollWatch) return;
  SYNC.pollWatch = setInterval(() => {
    // 營運設定（菜單/成本/薪資）太久沒從串流送到 → 改用 REST 抓
    if (CONFIG.mode === 'cloud' && Date.now() - (CONFIG.lastSnapAt || 0) > 15000) restPollConfig();
    if (SYNC.mode !== 'cloud') return;
    if (Date.now() - (SYNC.lastSnapAt || 0) < 15000) return; // 串流還活著
    restPollOrders();
  }, 3000); // 響鈴要快：串流沒消息時每 3 秒問一次有沒有新單（沒新單時一次只算 1 個讀取，額度撐得住）
}
async function restPollOrders() {
  if (SYNC.polling) return;
  if (typeof FIREBASE_CONFIG === 'undefined' || !FIREBASE_CONFIG || !FIREBASE_CONFIG.apiKey) return;
  SYNC.polling = true;
  try {
    // 只問「上次看過之後有變更」的單；時鐘可能有誤差，往回多抓 60 秒（重複讀到只是原樣覆蓋）
    const since = Math.max((SYNC.pollSeen || 0) - 60000, startOfToday() - 60000);
    const body = {
      structuredQuery: {
        from: [{ collectionId: 'orders' }],
        where: { fieldFilter: { field: { fieldPath: 'updatedAt' }, op: 'GREATER_THAN', value: { integerValue: String(since) } } },
        orderBy: [{ field: { fieldPath: 'updatedAt' }, direction: 'ASCENDING' }],
        limit: 300,
      },
    };
    const res = await fetch('https://firestore.googleapis.com/v1/projects/' + FIREBASE_CONFIG.projectId
      + '/databases/(default)/documents:runQuery?key=' + FIREBASE_CONFIG.apiKey,
      { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(body) });
    if (!res.ok) return;
    const rows = await res.json();
    const docs = (rows || []).filter(r => r && r.document).map(r => restToOrder(r.document));
    docs.forEach(d => { const u = d.updatedAt || d.createdAt || 0; if (u > (SYNC.pollSeen || 0)) SYNC.pollSeen = u; });
    if (!docs.length) return;
    // 以訂單 id 合併：輪詢到的較新資料蓋過手上這份
    const map = {};
    (SYNC.lastList || loadOrders()).forEach(o => { map[String(o.id)] = o; });
    docs.forEach(d => { map[String(d.id)] = Object.assign(map[String(d.id)] || {}, d); });
    let list = Object.keys(map).map(k => map[k]);
    if (SYNC.todayOnly) list = list.filter(o => isToday(o.createdAt));
    list.sort((a, b) => (a.createdAt || 0) - (b.createdAt || 0));
    list = applyPendingOverlay(list);
    SYNC.lastList = list;
    backupOrders(list, !!SYNC.todayOnly);
    if (SYNC.onChange) SYNC.onChange(list);
  } catch (e) {} finally {
    SYNC.polling = false;
  }
}
// Firestore REST 格式 → 一般物件（restValue 的反向）
function restParseValue(v) {
  if (!v) return null;
  if ('nullValue' in v) return null;
  if ('booleanValue' in v) return v.booleanValue;
  if ('integerValue' in v) return Number(v.integerValue);
  if ('doubleValue' in v) return v.doubleValue;
  if ('stringValue' in v) return v.stringValue;
  if (v.timestampValue) { const t = new Date(v.timestampValue).getTime(); return isNaN(t) ? null : t; } // sentAt 伺服器時間戳
  if (v.arrayValue) return (v.arrayValue.values || []).map(restParseValue);
  if (v.mapValue) return restParseFields(v.mapValue.fields || {});
  return null;
}
function restParseFields(fields) {
  const out = {};
  Object.keys(fields || {}).forEach(k => { out[k] = restParseValue(fields[k]); });
  return out;
}
function restToOrder(doc) {
  const o = restParseFields(doc.fields);
  o.id = String(doc.name).split('/').pop();
  return o;
}

// ===== 訂單送達確認（顧客端「店家已接收」用）=====
// Firestore 離線也會回報「寫入成功」（先排進本機佇列、回連才補送），所以「送出」不等於店家收到。
// 曾發生顧客看到「訂單已送出」但訂單卡在手機裡，店家完全沒收到的案例（08/12 兩筆、08/13 一筆）。
// 這裡監看單筆訂單的中繼資料：hasPendingWrites 變 false 才代表伺服器真的收下了。
// cb('pending', data) = 還在本機排隊；cb('sent', data) = 伺服器已確認（之後自動停止監看）。
// 回傳停止函式。
function watchOrderAck(orderId, cb) {
  const db = SYNC.db || ensureDb();
  if (!db || typeof db.collection !== 'function') { cb('sent', null); return function () {}; } // 單機模式沒有雲端可等
  let stopped = false, unsub = null, timer = null;

  function stop() {
    stopped = true;
    if (timer) { clearTimeout(timer); timer = null; }
    if (unsub) { try { unsub(); } catch (e) {} unsub = null; }
  }

  // 手機時鐘不準會讓 createdAt 偏差（實際看過快 26 分鐘的）。偏差太大時，廚房的「今日」
  // 查詢可能漏單、排序也會錯亂 —— 送達確認後以伺服器蓋章的 sentAt 為準校正一次。
  function fixClockSkew(data) {
    try {
      if (!data || !data.sentAt || !data.sentAt.toMillis || !data.createdAt) return;
      const skew = data.sentAt.toMillis() - data.createdAt;
      if (Math.abs(skew) <= 10 * 60 * 1000) return;
      db.collection('orders').doc(String(orderId)).update({ createdAt: data.sentAt.toMillis() }).catch(() => {});
    } catch (e) {}
  }

  function open() {
    if (stopped) return;
    try {
      unsub = db.collection('orders').doc(String(orderId)).onSnapshot(
        { includeMetadataChanges: true },
        snap => {
          if (stopped) return;
          if (snap.exists && !snap.metadata.hasPendingWrites) {
            const data = snap.data();
            fixClockSkew(data);
            cb('sent', data);
            stop();
          } else {
            cb('pending', snap.exists ? snap.data() : null);
          }
        },
        () => {
          // 監聽中斷：訂單仍在本機排隊，稍後重開監聽（寫入本身由 Firestore 排隊補送，不會遺失）
          if (stopped) return;
          cb('pending', null);
          unsub = null;
          timer = setTimeout(open, 3000);
        }
      );
    } catch (e) {
      timer = setTimeout(open, 3000);
    }
  }

  open();
  return stop;
}

// ===== 螢幕保持喚醒（店內接單裝置用）=====
// iPad 自動鎖屏後 iOS 會無聲切斷 Firestore 連線：新單進來不響也不顯示，要等有人喚醒螢幕。
// Wake Lock 讓這個頁面開在前景時螢幕不自動鎖定；切到背景鎖會被系統釋放，回前景要重新取得。
function keepScreenAwake() {
  if (!navigator.wakeLock || !navigator.wakeLock.request) return; // 舊系統不支援：請改用 iPad 設定「永不自動鎖定」
  let lock = null;
  const acquire = () => {
    navigator.wakeLock.request('screen')
      .then(l => { lock = l; })
      .catch(() => {}); // 低電量模式等情況會被拒絕，失敗就算了
  };
  document.addEventListener('visibilitychange', () => {
    if (document.visibilityState === 'visible' && (!lock || lock.released)) acquire();
  });
  acquire();
}

// 手動刪除單一訂單（後台歷史訂單用）：雲端刪 Firestore 文件，離線改 localStorage
function syncDeleteOrder(id) {
  if (SYNC.mode === 'cloud' && SYNC.db) {
    pdelRemember(id); // 記帳：畫面立即移除、REST 補刪到雲端為止
    SYNC.lastList = (SYNC.lastList || loadOrders()).filter(o => String(o.id) !== String(id));
    try { saveOrders(loadOrders().filter(o => String(o.id) !== String(id))); } catch (e) {}
    if (SYNC.onChange) SYNC.onChange(SYNC.lastList);
    return SYNC.db.collection('orders').doc(String(id)).delete()
      .then(() => pdelConfirm(id)) // 伺服器確認刪掉才銷帳
      .catch(e => console.warn('刪除訂單失敗（已排入自動補刪）', e));
  }
  const remain = loadOrders().filter(o => o.id !== id);
  saveOrders(remain);
  if (SYNC.onChange) SYNC.onChange(remain);
  return Promise.resolve();
}

// opts.todayOnly = true → 只清除今天的訂單（保留歷史，報表不受影響）
function syncClearOrders(opts) {
  opts = opts || {};
  if (SYNC.mode === 'cloud' && SYNC.db) {
    // 手上這份清單先記帳＋立即清空畫面；雲端上手上沒有的單由下方 get+batch 處理
    const victims = (SYNC.lastList || loadOrders()).filter(o => (opts.todayOnly ? isToday(o.createdAt) : true));
    victims.forEach(o => pdelRemember(o.id));
    SYNC.lastList = (SYNC.lastList || []).filter(o => (opts.todayOnly ? !isToday(o.createdAt) : false));
    if (SYNC.onChange) SYNC.onChange(SYNC.lastList);
    const base = SYNC.db.collection('orders');
    const getP = opts.todayOnly ? base.where('createdAt', '>=', startOfToday()).get() : base.get();
    return getP.then(snap => {
      const batch = SYNC.db.batch();
      snap.docs.forEach(doc => batch.delete(doc.ref));
      return batch.commit();
    }).then(() => { victims.forEach(o => pdelConfirm(o.id)); })
      .catch(e => console.warn('清除訂單失敗（已排入自動補刪）', e));
  }
  if (opts.todayOnly) {
    const remain = loadOrders().filter(o => !isToday(o.createdAt));
    saveOrders(remain);
    if (SYNC.onChange) SYNC.onChange(remain);
  } else {
    saveOrders([]);
    if (SYNC.onChange) SYNC.onChange([]);
  }
  return Promise.resolve();
}

function syncModeLabel() {
  if (SYNC.mode !== 'cloud') return '🔄 本機儲存';
  if (NET.online) return '☁️ 雲端即時同步';
  // 開頁寬限期：載入後頭 8 秒連線本來就還在握手（第一個快照一定來自本機快取），
  // 這段時間顯示中性的「連線中」，不要一開頁就閃「連線中斷」嚇人
  return (Date.now() - NET.bootAt < 8000) ? '☁️ 連線中…' : '⚠️ 連線中斷，自動重連中';
}

// ===== 營運設定同步層：菜單 + 員工/食材/設備/成本（Firestore doc config/admin，localStorage 備援）=====
const DEFAULT_ENT = {
  staff: [
    { id: 'st1', name: '阿美', role: '內場煎台', wage: 200, hours: 176 },
    { id: 'st2', name: '小宇', role: '外場收銀', wage: 185, hours: 160 },
    { id: 'st3', name: '阿志', role: '外送兼職', wage: 183, hours: 88 },
  ],
  ingredients: [
    { id: 'ig1', name: '白吐司', unit: '條', stock: 22, lowAt: 12, supplier: '義美食品' },
    { id: 'ig2', name: '雞蛋', unit: '顆', stock: 180, lowAt: 80, supplier: '大成' },
    { id: 'ig3', name: '豆漿', unit: '公升', stock: 9, lowAt: 10, supplier: '義美食品' },
    { id: 'ig4', name: '起司片', unit: '片', stock: 95, lowAt: 50, supplier: '安佳' },
    { id: 'ig5', name: '豬排', unit: '片', stock: 40, lowAt: 30, supplier: '卜蜂' },
    { id: 'ig6', name: '紅茶葉', unit: '包', stock: 14, lowAt: 6, supplier: '立頓' },
  ],
  equipment: [
    { id: 'eq1', name: '瓦斯煎台', status: '正常', lastService: '2026/05/18' },
    { id: 'eq2', name: '冷藏冰箱', status: '保養中', lastService: '2026/06/10' },
    { id: 'eq3', name: '飲料冷飲機', status: '正常', lastService: '2026/04/22' },
    { id: 'eq4', name: '烤吐司機', status: '維修中', lastService: '2026/06/20' },
    { id: 'eq5', name: 'POS 收銀機', status: '正常', lastService: '2026/03/30' },
  ],
  costs: [
    { id: 'c1', label: '店租', amount: 42000 },
    { id: 'c2', label: '食材進貨', amount: 56000 },
    { id: 'c3', label: '水電瓦斯', amount: 13500 },
    { id: 'c4', label: '耗材雜支', amount: 6800 },
  ],
};

// 目前生效的菜單（會被設定同步更新）；預設用 MENU 並補上 active/soldOut 欄位
let CURRENT_MENU = MENU.map(cat => Object.assign({}, cat, {
  items: cat.items.map(it => Object.assign({ active: true, soldOut: false }, it)),
}));

const CONFIG_LS = 'xyg-config';
// 一次性保護：把「本次改版前」既有的 localStorage 設定另存一份，
// 避免新版每次存檔的鏡像機制蓋掉可能是唯一備份的舊資料。只會執行一次。
try {
  if (localStorage.getItem(CONFIG_LS) && !localStorage.getItem('xyg-config-prev')) {
    localStorage.setItem('xyg-config-prev', localStorage.getItem(CONFIG_LS));
  }
} catch (e) {}
const CONFIG = { db: null, mode: 'local', onChange: null, pollTimer: null, data: null, loaded: false };
// 設定是否已載入完成（雲端模式下，未載入前不可存檔，否則會用預設值覆蓋雲端資料）
function isConfigLoaded() { return CONFIG.mode !== 'cloud' || CONFIG.loaded; }

function defaultConfig() {
  return { menu: CURRENT_MENU, ent: JSON.parse(JSON.stringify(DEFAULT_ENT)), closeTime: '11:50', closeEnabled: false, announcements: [] };
}

function normalizeConfig(d) {
  if (!d) d = defaultConfig();
  d.menu = (d.menu && d.menu.length) ? d.menu : CURRENT_MENU;
  d.ent = Object.assign({ staff: [], ingredients: [], equipment: [], costs: [] }, d.ent || {});
  d.announcements = Array.isArray(d.announcements) ? d.announcements : []; // 公告欄（後台手動新增）
  d.closeTime = d.closeTime || '11:50'; // 結單時間（HH:MM）：啟用後此時間起顧客停止點餐
  if (typeof d.closeEnabled !== 'boolean') d.closeEnabled = false; // 結單開關，預設關閉（暫停）
  return d;
}

// ===== 結單時間：啟用後，過了此時間（HH:MM）顧客點餐頁停止接單 =====
function getCloseTime() {
  return (CONFIG.data && CONFIG.data.closeTime) || '11:50';
}

function isCloseEnabled() {
  return !!(CONFIG.data && CONFIG.data.closeEnabled);
}

// 現在是否已過結單時間（顧客停止點餐）；未啟用結單則永遠回 false；time 參數可傳指定時間，預設為現在
function isOrderingClosed(time) {
  if (!isCloseEnabled()) return false; // 結單開關關閉（暫停）→ 不限制
  const t = getCloseTime();
  if (!t || !/^\d{1,2}:\d{2}$/.test(t)) return false; // 沒設定或格式錯 → 不限制
  const parts = t.split(':');
  const limit = parseInt(parts[0], 10) * 60 + parseInt(parts[1], 10);
  const d = time ? new Date(time) : new Date();
  return (d.getHours() * 60 + d.getMinutes()) >= limit;
}

// ===== 公告欄：後台手動新增的公告，隨營運設定一起同步到顧客點餐頁 =====
// 每則公告：{ id, text, type: 'info' | 'warn' | 'promo', active, createdAt }
// 陣列順序就是顯示順序（後台可上移／下移）
const ANNOUNCE_TYPES = {
  info: { label: '一般', icon: '📢', bg: '#e3f1fb', line: '#3e9bd1', ink: '#1c5e7a' },
  warn: { label: '重要', icon: '⚠️', bg: '#fdecea', line: '#e5534b', ink: '#b3322b' },
  promo: { label: '優惠', icon: '🎉', bg: '#fceaf1', line: '#ec6398', ink: '#d84b84' },
};
function announceStyle(type) { return ANNOUNCE_TYPES[type] || ANNOUNCE_TYPES.info; }

// all=true 連隱藏的一起回傳（後台管理用）；預設只回顧客看得到的
function getAnnouncements(all) {
  const list = (CONFIG.data && Array.isArray(CONFIG.data.announcements)) ? CONFIG.data.announcements : [];
  return all ? list : list.filter(a => a && a.active !== false && String(a.text || '').trim());
}

function saveAnnouncements(list) {
  return saveConfig(Object.assign({}, CONFIG.data || defaultConfig(), { announcements: list }));
}

// 公告卡片列表 HTML（懸浮視窗與後台預覽共用）；沒有公告回空字串
function renderAnnouncementItems() {
  return getAnnouncements().map(a => {
    const s = announceStyle(a.type);
    return `<div class="ann-item" style="background:${s.bg};border-left:4px solid ${s.line};color:${s.ink};">
        <span class="ann-icon">${s.icon}</span>
        <div class="ann-text">${escapeHtml(a.text).replace(/\n/g, '<br>')}</div>
      </div>`;
  }).join('');
}

// ---- 懸浮公告視窗：按標題列的「📢 店家公告」才打開 ----
function isAnnouncementsOpen() {
  const slot = document.getElementById('ann-modal');
  return !!(slot && slot.firstChild);
}

function openAnnouncements() {
  const slot = document.getElementById('ann-modal');
  if (!slot) return;
  const rows = renderAnnouncementItems();
  slot.innerHTML = `
    <div class="ann-mask">
      <div class="ann-window" role="dialog" aria-label="店家公告">
        <div class="ann-window-head">
          <span class="ann-window-title">📌 店家公告</span>
          <button type="button" class="ann-close" aria-label="關閉">✕</button>
        </div>
        <div class="ann-window-body">${rows || '<div class="ann-empty">目前沒有公告</div>'}</div>
      </div>
    </div>`;
  // 點遮罩空白處或右上角 ✕ 都可關閉；點視窗內容不關
  const mask = slot.querySelector('.ann-mask');
  if (mask) mask.addEventListener('click', e => { if (e.target === mask) closeAnnouncements(); });
  const x = slot.querySelector('.ann-close');
  if (x) x.addEventListener('click', closeAnnouncements);
  document.body.style.overflow = 'hidden'; // 視窗開著時背景不跟著捲
}

function closeAnnouncements() {
  const slot = document.getElementById('ann-modal');
  if (slot) slot.innerHTML = '';
  document.body.style.overflow = '';
}

// 顧客開啟點餐頁時是否已自動跳過公告；每次載入頁面只強制跳一次，
// 之後設定再同步（例如店家改菜單）都不會又彈出來打斷點餐。
let _annAutoOpened = false;

// 更新標題列的公告按鈕（有幾則、要不要顯示），並在視窗開著時同步內容。
// 設定每次同步都會呼叫，所以後台一改，顧客這邊的按鈕與視窗都會跟著變。
function syncAnnouncementUI() {
  const list = getAnnouncements();
  const pill = document.getElementById('ann-pill');
  if (pill) {
    pill.style.display = list.length ? '' : 'none'; // 沒公告就不佔版面
    pill.innerHTML = `📢 店家公告${list.length > 1 ? `<span class="ann-badge">${list.length}</span>` : ''}`;
    if (!pill.dataset.bound) {
      pill.dataset.bound = '1';
      pill.addEventListener('click', openAnnouncements);
      document.addEventListener('keydown', e => { if (e.key === 'Escape') closeAnnouncements(); });
    }
  }
  if (isAnnouncementsOpen()) { openAnnouncements(); return; } // 開著就重畫成最新內容
  // 顧客一開頁面就強制跳出公告（只有掛了 #ann-modal 的顧客點餐頁會生效，
  // 廚房／收銀／叫號／後台沒有掛載點，openAnnouncements 會直接略過）
  if (!_annAutoOpened && list.length) {
    _annAutoOpened = true;
    openAnnouncements();
  }
}

// 註冊營運設定變更監聽；callback 帶入 { menu, ent }
function initConfig(onChange) {
  CONFIG.onChange = onChange;
  const db = ensureDb();
  if (!db) { startLocalConfig(); return; }
  CONFIG.db = db;
  CONFIG.mode = 'cloud';
  watchCloud('營運設定', (ok, fail) => db.collection('config').doc('admin').onSnapshot(
      snap => {
        ok();
        CONFIG.lastSnapAt = Date.now(); // 穩定模式：串流還送得到設定，REST 輪詢就不出手
        let d = snap.exists ? snap.data() : null;
        if (!d) {
          // 啟用離線持久化後，開頁的第一個快照是從本機快取來的；快取是空的時候
          // snap.exists 會是 false，但這不代表雲端真的沒有資料。
          // 此時既不可顯示預設值（畫面會閃一下預設菜單），
          // 更不可把預設值寫回雲端（會把既有資料整份覆蓋掉）。
          // 一律略過，等伺服器的快照到達再判斷。
          if (snap.metadata && snap.metadata.fromCache) return;
          d = defaultConfig();
          db.collection('config').doc('admin').set(d).catch(() => {});
        }
        applyCloudConfig(d);
      },
      err => {
        fail(err);
        // 尚未載入過雲端設定就斷線 → 用本機備份把菜單顯示出來，但不標記為「已載入」：
        // CONFIG.loaded 維持 false，後台此時存檔會被擋下，不會把舊的本機設定蓋回雲端。
        if (!CONFIG.loaded) applyConfigLocally();
      }
    ));
}

// 套用一份「確定來自伺服器」的設定（串流快照或 REST 輪詢抓到的都走這裡）
function applyCloudConfig(d) {
  d = normalizeConfig(d);
  CONFIG.data = d;
  CONFIG.loaded = true; // 雲端資料已到位，這之後存檔才安全
  try { localStorage.setItem(CONFIG_LS, JSON.stringify(d)); } catch (e) {} // 本機備份，雲端被誤覆蓋時可救回
  CURRENT_MENU = d.menu;
  const json = JSON.stringify(d);
  if (json === CONFIG._lastJson) return; // 設定沒變就不重畫
  CONFIG._lastJson = json;
  if (CONFIG.onChange) CONFIG.onChange(d);
}

// 穩定模式（設定版）：串流太久沒送設定過來，就改用 REST 直連把 config/admin 抓下來套用。
// 08/28 iPad Air 曾出現訂單串流正常、營運設定卻一直停在內建範例資料（成本/薪資顯示假數字），
// 有這條保底後，設定最慢半分鐘內一定會變成雲端的真實資料。
async function restPollConfig() {
  if (CONFIG.mode !== 'cloud' || CONFIG.pollingCfg) return;
  if (typeof FIREBASE_CONFIG === 'undefined' || !FIREBASE_CONFIG || !FIREBASE_CONFIG.apiKey) return;
  CONFIG.pollingCfg = true;
  try {
    const res = await fetch('https://firestore.googleapis.com/v1/projects/' + FIREBASE_CONFIG.projectId
      + '/databases/(default)/documents/config/admin?key=' + FIREBASE_CONFIG.apiKey);
    if (!res.ok) return; // 404 = 雲端真的沒有設定文件，維持現狀交給串流判斷
    const doc = await res.json();
    if (!doc || !doc.fields) return;
    CONFIG.lastSnapAt = Date.now();
    applyCloudConfig(restParseFields(doc.fields));
  } catch (e) {} finally {
    CONFIG.pollingCfg = false;
  }
}

// 用本機備份的設定把畫面撐起來。不動 CONFIG.mode、也不標記已載入，
// 所以雲端斷線時後台仍然存不了檔（避免拿舊的本機設定覆蓋雲端）。
function applyConfigLocally() {
  let d = null;
  try { d = JSON.parse(localStorage.getItem(CONFIG_LS) || 'null'); } catch (e) {}
  d = normalizeConfig(d);
  CONFIG.data = d;
  CURRENT_MENU = d.menu;
  const json = JSON.stringify(d);
  if (json === CONFIG._lastJson) return; // 設定沒變就不重畫
  CONFIG._lastJson = json;
  if (CONFIG.onChange) CONFIG.onChange(d);
}

function startLocalConfig() {
  CONFIG.mode = 'local';
  const tick = () => { CONFIG.loaded = true; applyConfigLocally(); };
  tick();
  if (CONFIG.pollTimer) clearInterval(CONFIG.pollTimer);
  CONFIG.pollTimer = setInterval(tick, 3000);
}

function saveConfig(data) {
  // 保護：雲端資料尚未載入完成就存檔，會把寫死的預設值整份覆蓋上去，
  // 導致成本/員工/食材/設備等自訂資料全部消失。此時一律拒絕儲存。
  if (CONFIG.mode === 'cloud' && !CONFIG.loaded) {
    console.warn('設定尚未載入完成，已阻止儲存以免覆蓋雲端資料');
    return Promise.reject(new Error('CONFIG_NOT_LOADED'));
  }
  data = normalizeConfig(data);
  CONFIG.data = data;
  CURRENT_MENU = data.menu;
  try { localStorage.setItem(CONFIG_LS, JSON.stringify(data)); } catch (e) {} // 每次存檔都留一份本機備份
  if (CONFIG.mode === 'cloud' && CONFIG.db) {
    return CONFIG.db.collection('config').doc('admin').set(data).catch(e => console.warn('設定儲存失敗', e));
  }
  try { localStorage.setItem(CONFIG_LS, JSON.stringify(data)); } catch (e) {}
  if (CONFIG.onChange) CONFIG.onChange(data);
  return Promise.resolve();
}

function saveMenu(menu) {
  return saveConfig(Object.assign({}, CONFIG.data || defaultConfig(), { menu }));
}
function saveEnt(ent) {
  return saveConfig(Object.assign({}, CONFIG.data || defaultConfig(), { ent }));
}

// ===== 品項小圖示 =====
// 菜單是從雲端讀的（後台隨時可改、可新增），所以不在資料裡多存 icon 欄位，
// 改成顯示時依品名關鍵字自動判斷 —— 後台新增品項不必再挑一次圖示。
// 比對順序由主餐到飲料：套餐名稱像「蔬菜蛋+雞塊3個+紅茶」時要取主餐（蔬菜），
// 不能被結尾的附餐飲料搶走。
const ITEM_ICONS = [
  ['酪梨', '🥑'], ['蔬菜', '🥬'], ['起司', '🧀'], ['玉米', '🌽'],
  ['草莓', '🍓'], ['蔥花', '🌿'],
  ['豬排', '🥓'], ['豬肉', '🥓'], ['鮪魚', '🐟'], ['雞腿', '🍗'], ['麥香雞', '🍗'],
  ['泡菜', '🌶️'], ['香菇', '🍄'], ['蘿蔔糕', '🍥'],
  ['薯條', '🍟'], ['雞塊', '🍗'],
  ['荷包蛋', '🍳'], ['水煮蛋', '🥚'],
  ['三明治', '🥪'], ['抓餅', '🫓'], ['蛋餅', '🥞'], ['吐司', '🍞'],
  ['蛋', '🥚'],
  ['鮮奶茶', '🧋'], ['奶茶', '🧋'], ['紅茶', '🍵'], ['豆漿', '🥛'], ['咖啡', '☕'],
];

// 品名開頭本來就有圖案時（例如「👍香菇蘿蔔糕 ❤️價格優惠中」）就不再加，免得兩個圖案並排
const LEADING_EMOJI = /^[🌀-🫿☀-➿⬀-⯿]/u;

function itemIcon(category, item) {
  const name = (item && item.name) || '';
  if (!name || LEADING_EMOJI.test(name)) return '';
  for (let i = 0; i < ITEM_ICONS.length; i++) {
    if (name.indexOf(ITEM_ICONS[i][0]) !== -1) return ITEM_ICONS[i][1];
  }
  return (category && category.icon) || ''; // 關鍵字都對不上 → 沿用分類圖示，不會開天窗
}

function getItem(itemId) {
  return CURRENT_MENU.flatMap(cat => cat.items).find(item => item.id === itemId);
}

// ===== 顧客指定取餐時間：訂單的 pickup 欄位存 'HH:MM'，空字串／沒有這個欄位＝盡快做 =====
// 舊訂單沒有 pickup，所有讀取一律走 pickupLabel()，店家端才不會冒出 undefined。
function pickupLabel(order) {
  const t = order && order.pickup;
  return (typeof t === 'string' && /^\d{1,2}:\d{2}$/.test(t.trim())) ? t.trim() : '';
}

// 現在時間的 HH:MM（給 <input type="time"> 當 min 用）
function nowHHMM() {
  const d = new Date();
  return ('0' + d.getHours()).slice(-2) + ':' + ('0' + d.getMinutes()).slice(-2);
}

// 指定取餐時間換成毫秒時間戳（以訂單成立那天為準）；沒指定回 null
function pickupTime(order) {
  const t = pickupLabel(order);
  if (!t) return null;
  const parts = t.split(':');
  const d = new Date(order.createdAt || Date.now());
  d.setHours(parseInt(parts[0], 10), parseInt(parts[1], 10), 0, 0);
  return d.getTime();
}

// 顧客填的取餐時間能不能用：可以回 ''，不行回要顯示給顧客看的原因
function pickupError(hhmm) {
  const t = (hhmm || '').trim();
  if (!t) return ''; // 留空＝盡快，永遠可用
  if (!/^\d{1,2}:\d{2}$/.test(t)) return '取餐時間格式不對，請重新選一次';
  const parts = t.split(':');
  const mins = parseInt(parts[0], 10) * 60 + parseInt(parts[1], 10);
  const now = new Date();
  if (mins < now.getHours() * 60 + now.getMinutes()) return '取餐時間不能早於現在，請重新選一次';
  if (isCloseEnabled()) {
    const c = getCloseTime();
    if (/^\d{1,2}:\d{2}$/.test(c)) {
      const cp = c.split(':');
      if (mins > parseInt(cp[0], 10) * 60 + parseInt(cp[1], 10)) return '今日 ' + c + ' 結單，取餐時間請選在這之前';
    }
  }
  return '';
}

// 店家端（廚房／收銀）訂單卡上的取餐時間標籤；顧客沒指定就回空字串（畫面維持原樣）
// 已經過了指定時間又還沒完成 → 轉紅並標「已過」，提醒現場先做這張
function pickupChip(order, now) {
  const t = pickupLabel(order);
  if (!t) return '';
  const due = pickupTime(order);
  const late = due != null && (now || Date.now()) > due && order.status !== 'done';
  return '<span>·</span><span style="font-weight:900;color:' + (late ? '#e5534b' : 'var(--pink-deep)') + ';">⏰ ' + escapeHtml(t) + (late ? ' 已過' : '') + '</span>';
}

// 這張單「該出餐的時間」：顧客有指定取餐時間就用指定時間，沒指定＝盡快，就用下單時間
function dueTime(order) {
  const t = pickupTime(order);
  return t != null ? t : (order.createdAt || 0);
}

// 廚房排序：照該出餐時間由早到晚。預約到 10:30 的單就會乖乖排在現場單後面，時間快到才浮上來
function pickupSort(a, b) {
  return dueTime(a) - dueTime(b);
}

function isToday(timestamp) {
  return new Date(timestamp).toLocaleDateString('zh-TW') === new Date().toLocaleDateString('zh-TW');
}

// 取餐號 = 裝置代碼 + 本機當日序號（每台只數自己的單，離線也不會跨裝置撞號）
function orderNo(orders) {
  const me = getDeviceId();
  const mineToday = orders.filter(o => isToday(o.createdAt) && o.deviceId === me).length;
  return getDeviceCode() + String(mineToday + 1).padStart(2, '0');
}

function todayKey() {
  const d = new Date();
  return '' + d.getFullYear() + String(d.getMonth() + 1).padStart(2, '0') + String(d.getDate()).padStart(2, '0');
}

// 全店唯一取餐號（顧客手機用）：線上以 Firestore 交易在 config/counter-YYYYMMDD 原子遞增，保證不撞號；
// 離線或失敗回傳 null，由呼叫端退回 orderNo() 的裝置前綴方案。
async function nextDailyNo() {
  const db = ensureDb();
  if (!db) return null;
  if (typeof navigator !== 'undefined' && navigator.onLine === false) return null; // 離線直接退回備援，避免交易卡住
  if (!NET.online) return null; // 連得上網路不代表連得上雲端（navigator.onLine 常常還是 true）
  try {
    const ref = db.collection('config').doc('counter-' + todayKey());
    const run = db.runTransaction(async tx => {
      const snap = await tx.get(ref);
      const cur = (snap.exists && snap.data() && snap.data().seq) ? snap.data().seq : 0;
      const next = cur + 1;
      tx.set(ref, { seq: next }, { merge: true });
      return next;
    });
    // 交易一定要連得上伺服器才會完成，網路半死時會一直等下去，送出鍵就這樣卡住。
    // 超過 6 秒就改用裝置前綴的備援號碼（該筆交易若之後才成功，只是跳過一個號碼）。
    const seq = await Promise.race([run, new Promise(r => setTimeout(() => r(null), 6000))]);
    if (seq === null) { console.warn('取號逾時，改用裝置前綴'); return null; }
    return String(seq).padStart(2, '0');
  } catch (e) {
    console.warn('取號交易失敗，改用裝置前綴', e);
    return null;
  }
}

// ===== 取餐通知狀態：決定要跟顧客說「可以關掉頁面」還是「請保持畫面開啟」=====
// iOS 的網頁推播只有把網站「加入主畫面」後才收得到，Safari 分頁裡拿不到權限
function isIOSDevice() {
  const ua = navigator.userAgent || '';
  return /iPad|iPhone|iPod/.test(ua) || (navigator.platform === 'MacIntel' && navigator.maxTouchPoints > 1);
}

function isStandaloneApp() {
  try {
    return window.navigator.standalone === true
      || (window.matchMedia && window.matchMedia('(display-mode: standalone)').matches);
  } catch (e) { return false; }
}

// 回傳 'on'（推播已生效）/ 'pending'（已授權，token 設定中）/ 'ask'（可要求授權）
//     / 'blocked'（使用者封鎖）/ 'ios'（iPhone 要先加入主畫面）/ 'off'（裝置或設定不支援）
function pushState(order) {
  const configured = typeof PUSH_CONFIG !== 'undefined' && PUSH_CONFIG && PUSH_CONFIG.vapidKey
    && PUSH_CONFIG.vapidKey.indexOf('PASTE') === -1;
  if (!configured || !('Notification' in window) || !('serviceWorker' in navigator)) {
    return (isIOSDevice() && !isStandaloneApp()) ? 'ios' : 'off';
  }
  if (Notification.permission === 'denied') return 'blocked';
  if (Notification.permission === 'granted') return (order && order.fcmToken) ? 'on' : 'pending';
  if (isIOSDevice() && !isStandaloneApp()) return 'ios';
  return 'ask';
}

// 確認訂單頁的取餐通知說明區塊；依實際推播狀態換文案，
// 推播已生效時就不要再叫顧客「保持畫面開啟」——那正是這功能要解決的事。
function renderPickupNotice(order) {
  const box = (bg, line, ink, html) =>
    `<div style="background:${bg};border:1.5px solid ${line};border-radius:14px;padding:12px 14px;margin-top:12px;text-align:center;color:${ink};font-weight:800;font-size:14px;">${html}</div>`;
  const sub = (color, t) => `<span style="font-weight:500;font-size:13px;color:${color};">${t}</span>`;
  const ok = html => box('#e6f6ee', '#54b98a', '#217a55', html);
  const warn = html => box('#fff8e6', '#f0b64b', '#a86a12', html);

  switch (pushState(order)) {
    case 'on':
      return ok(`🔔 取餐通知已開啟<br>${sub('#2e8c66', '可以關掉這頁去忙，餐點好了手機會跳通知提醒你 📲')}`);
    case 'pending':
      return ok(`🔔 取餐通知設定中…<br>${sub('#2e8c66', '完成後就可以關掉這頁，餐點好了手機會通知你')}`);
    case 'ask':
      return warn(`🔔 想關掉頁面也收得到通知嗎？<br>${sub('#b07a1e', '開啟後餐點完成會直接推播到你的手機')}
        <button class="button-primary" data-action="enable-push" style="width:100%;justify-content:center;margin-top:10px;padding:10px;font-size:14px;">開啟取餐通知</button>`);
    case 'ios':
      return warn(`📱 iPhone 要先「加入主畫面」才收得到通知<br>${sub('#b07a1e',
        '按 Safari 下方的分享鈕 →「加入主畫面」，之後從主畫面開啟本頁點餐，就能關掉頁面等通知。<br>現在請先保持此畫面開啟，餐點好了會自動跳出「可取餐」並響鈴 🔔')}`);
    case 'blocked':
      return warn(`🔕 你的瀏覽器封鎖了通知<br>${sub('#b07a1e',
        '請在網址列旁的鎖頭圖示把「通知」改成允許；在那之前請保持此畫面開啟，餐點好了會自動跳出「可取餐」並響鈴 🔔')}`);
    default:
      return warn(`📱 請保持此畫面開啟、螢幕先別鎖<br>${sub('#b07a1e', '餐點好了會在這裡自動跳出「可取餐」並響鈴 🔔')}`);
  }
}

function escapeHtml(text) {
  return String(text || '')
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;');
}

function showMessage(text) {
  const toast = document.getElementById('toast');
  if (!toast) return;
  toast.textContent = text;
  toast.classList.add('show');
  clearTimeout(toast.hideTimer);
  toast.hideTimer = setTimeout(() => toast.classList.remove('show'), 2000);
}

function getSharedStyles() {
  return `
    :root {
      --bg-top: #e6f4fa;
      --bg-bot: #bfe0ee;
      --ink: #1c5e7a;
      --ink-soft: #4690ae;
      --pink: #ec6398;
      --pink-deep: #d84b84;
      --line: #d3e9f2;
      --card: #ffffff;
      --blue: #3e9bd1;
      --green: #3fa877;
      --amber: #e89a2b;
      --blue-bg: #e3f1fb;
      --green-bg: #e1f4ea;
      --pink-bg: #fceaf1;
    }

    * {
      box-sizing: border-box;
    }

    html,
    body {
      margin: 0;
      min-height: 100%;
      background: linear-gradient(180deg, var(--bg-top), var(--bg-bot));
      font-family: 'Noto Sans TC', 'PingFang TC', 'Microsoft JhengHei', system-ui, sans-serif;
      color: var(--ink);
    }

    body {
      padding-bottom: 100px;
    }

    button,
    input {
      font: inherit;
    }

    button {
      cursor: pointer;
    }

    .page {
      max-width: 1100px;
      margin: 0 auto;
    }

    header {
      position: relative;
      background: linear-gradient(120deg, var(--ink-soft), #6fb7d0);
      color: #fff;
      padding-bottom: 34px;
    }

    /* 標題區底部的拱形波浪邊：一排連續弧線，直接用 SVG 當背景平鋪，不用額外標籤。
       header 的 padding-bottom 已留好這塊高度，不會壓到導覽按鈕。 */
    header::after {
      content: '';
      position: absolute;
      left: 0;
      right: 0;
      bottom: 0;
      height: 24px;
      pointer-events: none;
      background-repeat: repeat-x;
      background-position: left bottom;
      background-size: 48px 24px;
      background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='48' height='24' viewBox='0 0 48 24'%3E%3Cpath d='M0 24 Q24 -4 48 24' fill='none' stroke='%23ffffff' stroke-opacity='.45' stroke-width='2'/%3E%3C/svg%3E");
    }

    .top-row {
      display: flex;
      align-items: center;
      justify-content: space-between;
      flex-wrap: wrap;
      padding: 16px 18px 6px;
      gap: 12px;
    }

    .brand {
      display: flex;
      align-items: center;
      gap: 12px;
    }

    .brand-logo {
      width: 46px;
      height: 46px;
      border-radius: 50%;
      background: #fff;
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 24px;
      box-shadow: 0 3px 8px rgba(0, 0, 0, .15);
    }

    .brand-text h1 {
      margin: 0;
      font-size: 22px;
      font-weight: 900;
      letter-spacing: 4px;
      text-shadow: 0 1px 0 rgba(30, 87, 125, .8);
    }

    .brand-text p {
      margin: 4px 0 0;
      font-size: 11px;
      letter-spacing: 3px;
      opacity: .9;
    }

    .info-chip,
    .address {
      font-size: 12px;
      opacity: .95;
      display: flex;
      align-items: center;
      gap: 6px;
    }

    .address {
      opacity: .92;
      padding: 0 18px 4px;
      gap: 5px;
    }

    .nav-pills {
      display: flex;
      gap: 8px;
      padding: 10px 18px 0;
      overflow-x: auto;
    }

    .nav-pills a,
    .nav-pills button {
      border: none;
      border-radius: 999px;
      padding: 9px 16px;
      font-size: 14px;
      font-weight: 700;
      display: flex;
      align-items: center;
      gap: 6px;
      background: rgba(255, 255, 255, .22);
      color: #fff;
      white-space: nowrap;
      text-decoration: none;
      cursor: pointer;
    }

    .nav-pills a:hover {
      background: rgba(255, 255, 255, .35);
    }

    main {
      padding: 18px 16px 40px;
    }

    .section {
      margin-bottom: 22px;
    }

    .section-title {
      display: flex;
      align-items: center;
      gap: 8px;
      margin-bottom: 10px;
    }

    .section-title h2 {
      margin: 0;
      font-size: 18px;
      font-weight: 900;
    }

    .section-divider {
      flex: 1;
      height: 2px;
      background: var(--line);
      border-radius: 2px;
    }

    .grid {
      display: grid;
      gap: 10px;
    }

    .card {
      background: var(--card);
      border-radius: 18px;
      padding: 12px 14px;
      box-shadow: 0 2px 6px rgba(28, 94, 122, .07);
      display: flex;
      align-items: center;
      justify-content: space-between;
      gap: 14px;
    }

    .button-primary {
      border: none;
      border-radius: 999px;
      padding: 8px 14px;
      background: var(--pink);
      color: #fff;
      font-weight: 700;
      font-size: 14px;
      display: flex;
      align-items: center;
      gap: 4px;
      cursor: pointer;
    }

    .pill-button {
      border: 1.5px solid var(--line);
      background: #fff;
      color: var(--ink-soft);
      cursor: pointer;
      font-size: 12px;
      font-weight: 700;
      padding: 7px 12px;
      border-radius: 999px;
    }

    .toast {
      position: fixed;
      left: 50%;
      bottom: 24px;
      transform: translateX(-50%);
      background: rgba(28, 94, 122, .95);
      color: #fff;
      padding: 12px 18px;
      border-radius: 999px;
      box-shadow: 0 8px 20px rgba(0, 0, 0, .15);
      opacity: 0;
      pointer-events: none;
      transition: opacity .2s ease;
      z-index: 90;
    }

    .toast.show {
      opacity: 1;
    }

    .stats-grid {
      display: grid;
      grid-template-columns: repeat(4, 1fr);
      gap: 8px;
      margin-bottom: 14px;
    }

    .stat-card {
      background: #fff;
      border-radius: 16px;
      padding: 12px 10px;
      text-align: center;
      box-shadow: 0 2px 6px rgba(28, 94, 122, .06);
    }

    .order-grid {
      display: grid;
      grid-template-columns: repeat(auto-fill, minmax(240px, 1fr));
      gap: 12px;
    }

    .order-card {
      background: #fff;
      border-radius: 18px;
      padding: 14px;
      box-shadow: 0 3px 10px rgba(28, 94, 122, .08);
      border-top: 4px solid;
    }

    .order-head {
      display: flex;
      align-items: center;
      justify-content: space-between;
      margin-bottom: 8px;
      gap: 8px;
      flex-wrap: wrap;
    }

    .order-meta {
      display: flex;
      align-items: center;
      gap: 6px;
      font-size: 13px;
      font-weight: 700;
      margin-bottom: 8px;
      color: var(--ink-soft);
      flex-wrap: wrap;
    }

    .order-items {
      border-top: 1px solid var(--line);
      padding-top: 8px;
    }

    .item-row {
      display: flex;
      align-items: center;
      justify-content: space-between;
      font-size: 14px;
      padding: 2px 0;
    }

    .order-note {
      font-size: 13px;
      color: var(--amber);
      margin-top: 6px;
      background: rgba(232, 154, 43, .1);
      border-radius: 8px;
      padding: 5px 8px;
    }

    .order-footer {
      display: flex;
      align-items: center;
      justify-content: space-between;
      margin-top: 10px;
      padding-top: 8px;
      border-top: 1px solid var(--line);
    }

    /* ===== 公告：標題列的小按鈕 + 懸浮視窗 ===== */
    .ann-badge {
      display: inline-flex;
      align-items: center;
      justify-content: center;
      min-width: 18px;
      height: 18px;
      padding: 0 5px;
      margin-left: 2px;
      border-radius: 999px;
      background: var(--pink);
      color: #fff;
      font-size: 11px;
      font-weight: 900;
    }

    .ann-mask {
      position: fixed;
      inset: 0;
      z-index: 60;
      display: flex;
      align-items: center;
      justify-content: center;
      padding: 20px;
      background: rgba(12, 48, 66, .55);
    }

    .ann-window {
      display: flex;
      flex-direction: column;
      width: 100%;
      max-width: 440px;
      max-height: 78vh;
      border-radius: 22px;
      overflow: hidden;
      background: #fff;
      box-shadow: 0 18px 44px rgba(12, 48, 66, .38);
    }

    .ann-window-head {
      display: flex;
      align-items: center;
      justify-content: space-between;
      gap: 10px;
      padding: 15px 16px;
      background: linear-gradient(120deg, var(--ink-soft), #6fb7d0);
      color: #fff;
    }

    .ann-window-title {
      font-size: 15px;
      font-weight: 900;
      letter-spacing: 2px;
    }

    .ann-close {
      flex-shrink: 0;
      width: 30px;
      height: 30px;
      border: none;
      border-radius: 50%;
      background: rgba(255, 255, 255, .25);
      color: #fff;
      font-size: 14px;
      font-weight: 900;
    }

    .ann-window-body {
      padding: 14px;
      overflow-y: auto;
    }

    .ann-empty {
      padding: 22px 0;
      text-align: center;
      font-size: 13px;
      color: #9db4bf;
    }

    .ann-item {
      display: flex;
      align-items: flex-start;
      gap: 9px;
      border-radius: 14px;
      padding: 11px 13px;
      margin-bottom: 8px;
      box-shadow: 0 2px 6px rgba(16, 60, 80, .13);
    }

    .ann-item:last-child {
      margin-bottom: 0;
    }

    .ann-icon {
      font-size: 17px;
      line-height: 1.45;
      flex-shrink: 0;
    }

    .ann-text {
      font-size: 14px;
      font-weight: 700;
      line-height: 1.6;
      word-break: break-word;
    }

    @media (max-width: 768px) {
      .stats-grid {
        grid-template-columns: repeat(2, 1fr);
      }
    }
  `;
}
