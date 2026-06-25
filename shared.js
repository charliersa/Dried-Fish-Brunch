// 共享資料與常用函數
const MENU = [
  {
    id: 'toast',
    name: '吐司類',
    icon: '🍞',
    items: [
      { id: 't1', name: '起司蛋', price: 30 },
      { id: 't2', name: '蔬菜蛋', price: 30 },
      { id: 't3', name: '豬排蛋', price: 40 },
      { id: 't4', name: '麥香雞', price: 35 },
      { id: 't5', name: '鮪魚蛋', price: 40 },
    ],
  },
  {
    id: 'egg',
    name: '蛋餅類',
    icon: '🥞',
    items: [
      { id: 'e1', name: '起司', price: 30 },
      { id: 'e2', name: '蔬菜', price: 30 },
      { id: 'e3', name: '豬排', price: 40 },
      { id: 'e4', name: '鮪魚', price: 40 },
      { id: 'e5', name: '黃金泡菜', price: 40 },
    ],
  },
  {
    id: 'drink',
    name: '飲料類',
    icon: '🥤',
    temp: true,
    items: [
      { id: 'd1', name: '有糖豆漿', price: 25 },
      { id: 'd2', name: '紅茶', price: 20 },
      { id: 'd3', name: '奶茶', price: 30 },
      { id: 'd4', name: '鮮奶茶', price: 35 },
    ],
  },
  {
    id: 'snack',
    name: '點心類',
    icon: '🍰',
    items: [
      { id: 's1', name: '薯條', price: 35 },
      { id: 's2', name: '雞塊', price: 40 },
      { id: 's3', name: '蘿蔔糕', price: 40 },
    ],
  },
];

const STORAGE_KEY = 'xyg-order-system';
const ADMIN_PIN = '2026';

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

// ===== 資料同步層：Firebase 雲端即時同步，localStorage 離線備援 =====
// 線上（有設定 firebase-config.js）→ 跨裝置即時同步
// 離線 / APK / 未設定 → 自動退回單機 localStorage
const SYNC = {
  db: null,
  mode: 'local', // 'cloud' | 'local'
  onChange: null,
  pollTimer: null,
};

// 註冊資料變更監聽；callback 會在初次與每次資料變動時被呼叫，帶入最新訂單陣列
function initSync(onChange) {
  SYNC.onChange = onChange;

  const hasConfig = typeof firebase !== 'undefined'
    && typeof FIREBASE_CONFIG !== 'undefined'
    && FIREBASE_CONFIG && FIREBASE_CONFIG.apiKey;

  if (hasConfig) {
    try {
      if (!firebase.apps.length) firebase.initializeApp(FIREBASE_CONFIG);
      SYNC.db = firebase.firestore();
      SYNC.mode = 'cloud';
      SYNC.db.collection('orders').orderBy('createdAt', 'asc').onSnapshot(
        snap => {
          const list = snap.docs.map(doc => Object.assign({ id: doc.id }, doc.data()));
          try { localStorage.setItem(STORAGE_KEY, JSON.stringify(list)); } catch (e) {}
          if (SYNC.onChange) SYNC.onChange(list);
        },
        err => {
          console.warn('雲端同步中斷，改用本機模式', err);
          startLocalSync();
        }
      );
      return;
    } catch (e) {
      console.warn('Firebase 初始化失敗，改用本機模式', e);
    }
  }
  startLocalSync();
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
    return SYNC.db.collection('orders').doc(String(order.id)).set(order)
      .catch(e => console.warn('新增訂單失敗', e));
  }
  const orders = loadOrders();
  orders.push(order);
  saveOrders(orders);
  if (SYNC.onChange) SYNC.onChange(orders);
  return Promise.resolve();
}

function syncUpdateOrder(id, changes) {
  if (SYNC.mode === 'cloud' && SYNC.db) {
    return SYNC.db.collection('orders').doc(String(id)).update(changes)
      .catch(e => console.warn('更新訂單失敗', e));
  }
  const orders = loadOrders();
  const order = orders.find(o => o.id === id);
  if (order) { Object.assign(order, changes); saveOrders(orders); }
  if (SYNC.onChange) SYNC.onChange(orders);
  return Promise.resolve();
}

function syncClearOrders() {
  if (SYNC.mode === 'cloud' && SYNC.db) {
    return SYNC.db.collection('orders').get().then(snap => {
      const batch = SYNC.db.batch();
      snap.docs.forEach(doc => batch.delete(doc.ref));
      return batch.commit();
    }).catch(e => console.warn('清除訂單失敗', e));
  }
  saveOrders([]);
  if (SYNC.onChange) SYNC.onChange([]);
  return Promise.resolve();
}

function syncModeLabel() {
  return SYNC.mode === 'cloud' ? '☁️ 雲端即時同步' : '🔄 本機儲存';
}

function getItem(itemId) {
  return MENU.flatMap(cat => cat.items).find(item => item.id === itemId);
}

function isToday(timestamp) {
  return new Date(timestamp).toLocaleDateString('zh-TW') === new Date().toLocaleDateString('zh-TW');
}

function orderNo(orders) {
  const todayOrders = orders.filter(order => isToday(order.createdAt));
  const index = todayOrders.length + 1;
  return 'A' + String(index).padStart(2, '0');
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
      padding-bottom: 30px;
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

    @media (max-width: 768px) {
      .stats-grid {
        grid-template-columns: repeat(2, 1fr);
      }
    }
  `;
}
