// FCM 背景推播 Service Worker —「餐點完成」通知（網頁關閉時也會收到）
importScripts('https://www.gstatic.com/firebasejs/10.12.2/firebase-app-compat.js');
importScripts('https://www.gstatic.com/firebasejs/10.12.2/firebase-messaging-compat.js');

firebase.initializeApp({
  apiKey: 'AIzaSyDyca-tySP5q259uWe2LcEHRRt-BCs-jDc',
  authDomain: 'dried-fish-brunch.firebaseapp.com',
  projectId: 'dried-fish-brunch',
  storageBucket: 'dried-fish-brunch.firebasestorage.app',
  messagingSenderId: '109591710302',
  appId: '1:109591710302:web:c28ba1576d82d0802802cf',
});

const messaging = firebase.messaging();

// 收到背景推播 → 顯示系統通知（notification-only 訊息瀏覽器多半會自動顯示，這裡再保險處理一次）
// tag 一律用推播帶來的 data.tag：
//   ① 跟瀏覽器自動顯示的那則同 tag → 合併成一則，不會變兩則通知
//   ② 不同訂單 tag 不同 → 後來的單不會「靜靜蓋掉」前一單而沒有響（尖峰連續來單的元凶）
messaging.onBackgroundMessage(payload => {
  const n = (payload && payload.notification) || {};
  const d = (payload && payload.data) || {};
  const isNewOrder = d.kind === 'new-order';
  self.registration.showNotification(n.title || (isNewOrder ? '🔔 新訂單來了！' : '🐟 餐點好囉！'), {
    body: n.body || (isNewOrder ? '有新訂單，請確認' : '你的餐點製作完成，請取餐 🎉'),
    icon: './icon-192.svg',
    badge: './icon-192.svg',
    vibrate: [200, 100, 200, 100, 300],
    requireInteraction: true,
    tag: d.tag || (isNewOrder ? 'xyg-new-order' : 'xyg-order-ready'),
  });
});

// 點通知 → 聚焦或開啟點餐頁
self.addEventListener('notificationclick', event => {
  event.notification.close();
  event.waitUntil(clients.matchAll({ type: 'window', includeUncontrolled: true }).then(cs => {
    for (const c of cs) { if ('focus' in c) return c.focus(); }
    if (clients.openWindow) return clients.openWindow('./');
  }));
});
