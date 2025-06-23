const CACHE_NAME = 'textquest-v1';
const urlsToCache = [
  '/',
  '/index.html',
  '/manifest.json',
  '/icon-192.png',
  '/icon-512.png',
  'https://unpkg.com/@picocss/pico@1.5.10/css/pico.min.css',
  'https://unpkg.com/vis-network@9.1.2/dist/vis-network.min.css',
  'https://unpkg.com/vis-network@9.1.2/dist/vis-network.min.js'
];

self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME).then(cache => cache.addAll(urlsToCache))
  );
});

self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request).then(response =>
      response || fetch(event.request)
    )
  );
});
