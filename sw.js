const CACHE = 'edukid-v1';
const ASSETS = [
  '/Edukid/',
  '/Edukid/index.html',
  '/Edukid/manifest.json',
  '/Edukid/src/app.js',
  '/Edukid/src/styles/main.css',
  '/Edukid/src/data/curriculum.js',
  '/Edukid/src/data/progress.js',
  '/Edukid/src/pages/home.js',
  '/Edukid/src/pages/topics.js',
  '/Edukid/src/pages/quiz.js',
  '/Edukid/src/pages/result.js',
];

self.addEventListener('install', e => {
  e.waitUntil(
    caches.open(CACHE).then(c => c.addAll(ASSETS))
  );
  self.skipWaiting();
});

self.addEventListener('activate', e => {
  e.waitUntil(
    caches.keys().then(keys =>
      Promise.all(keys.filter(k => k !== CACHE).map(k => caches.delete(k)))
    )
  );
  self.clients.claim();
});

// Cache-first for assets, network-first for everything else
self.addEventListener('fetch', e => {
  e.respondWith(
    caches.match(e.request).then(cached => {
      if (cached) return cached;
      return fetch(e.request).then(res => {
        if (res && res.status === 200 && e.request.method === 'GET') {
          const clone = res.clone();
          caches.open(CACHE).then(c => c.put(e.request, clone));
        }
        return res;
      }).catch(() => caches.match('/index.html'));
    })
  );
});
