// sw.js
const CACHE_NAME = 'el_impostor';
const urlsToCache = ['/', '/index.html', '/_.css', '/data.js', '/app.js', '/icons/icon-192x192.png', '/icons/icon-500x500.png'];

self.addEventListener('install', e => {
  e.waitUntil(
    caches.open(CACHE_NAME).then(cache => cache.addAll(urlsToCache))
  );
});

self.addEventListener('fetch', e => {
  e.respondWith(
    caches.match(e.request).then(response => response || fetch(e.request))
  );
});
