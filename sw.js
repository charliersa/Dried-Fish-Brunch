const CACHE_NAME = 'xyg-order-pwa-v2';
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

self.addEventListener('fetch', event => {
  const url = new URL(event.request.url);

  // 只處理同源 GET；Firebase / CDN 等跨網域請求直接走網路（不快取，避免干擾即時同步）
  if (url.origin !== self.location.origin || event.request.method !== 'GET') {
    return;
  }

  event.respondWith(
    caches.match(event.request).then(cached => {
      if (cached) return cached;
      return fetch(event.request).then(response => {
        return caches.open(CACHE_NAME).then(cache => {
          if (response && response.status === 200) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      }).catch(() => {
        if (event.request.destination === 'document') {
          return caches.match('./customer.html');
        }
      });
    })
  );
});
