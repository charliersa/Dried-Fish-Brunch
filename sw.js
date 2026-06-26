const CACHE_NAME = 'xyg-order-pwa-v3';
const ASSETS = [
  './',
  './index.html',
  './customer.html',
  './kitchen.html',
  './cashier.html',
  './display.html',
  './admin.html',
  './shared.js',
  './firebase-config.js',
  './manifest.json',
  './sw.js',
  './icon-192.svg',
  './icon-512.svg'
];

self.addEventListener('install', event => {
  self.skipWaiting();
  event.waitUntil(
    caches.open(CACHE_NAME).then(cache => cache.addAll(ASSETS))
  );
});

self.addEventListener('activate', event => {
  event.waitUntil(
    caches.keys().then(keys => Promise.all(
      keys.filter(key => key !== CACHE_NAME).map(key => caches.delete(key))
    )).then(() => self.clients.claim())
  );
});

// Network-first：有網路一律拿最新版（避免改版後被舊快取卡住）；離線才退回快取。
self.addEventListener('fetch', event => {
  const url = new URL(event.request.url);

  // 只處理同源 GET；Firebase / CDN 等跨網域請求直接走網路（不快取，避免干擾即時同步）
  if (url.origin !== self.location.origin || event.request.method !== 'GET') {
    return;
  }

  event.respondWith(
    fetch(event.request).then(response => {
      if (response && response.status === 200) {
        const clone = response.clone();
        caches.open(CACHE_NAME).then(cache => cache.put(event.request, clone));
      }
      return response;
    }).catch(() => caches.match(event.request).then(cached => {
      if (cached) return cached;
      if (event.request.destination === 'document') return caches.match('./customer.html');
    }))
  );
});
