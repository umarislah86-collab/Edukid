const CACHE = 'edukid-v8';
const ASSETS = [
  '/Edukid/',
  '/Edukid/index.html',
  '/Edukid/manifest.json',
  '/Edukid/src/app.js',
  '/Edukid/src/styles/main.css',
  '/Edukid/src/data/curriculum.js',
  '/Edukid/src/data/bm.js',
  '/Edukid/src/data/math_sains.js',
  '/Edukid/src/data/english.js',
  '/Edukid/src/data/iqra.js',
  '/Edukid/src/data/reading.js',
  '/Edukid/src/data/tadika.js',
  '/Edukid/src/data/progress.js',
  '/Edukid/src/data/firestore.js',
  '/Edukid/src/data/screentime.js',
  '/Edukid/src/pages/home.js',
  '/Edukid/src/pages/topics.js',
  '/Edukid/src/pages/quiz.js',
  '/Edukid/src/pages/result.js',
  '/Edukid/src/pages/login.js',
];

self.addEventListener('install', e => {
  e.waitUntil(
    caches.open(CACHE).then(c => c.addAll(ASSETS))
  );
  self.skipWaiting();
});

self.addEventListener('activate', e => {
  // delete ALL old caches
  e.waitUntil(
    caches.keys().then(keys =>
      Promise.all(keys.filter(k => k !== CACHE).map(k => caches.delete(k)))
    )
  );
  self.clients.claim();
});

// Network-first: always try internet, fall back to cache if offline
self.addEventListener('fetch', e => {
  e.respondWith(
    fetch(e.request)
      .then(res => {
        if (res && res.status === 200 && e.request.method === 'GET') {
          const clone = res.clone();
          caches.open(CACHE).then(c => c.put(e.request, clone));
        }
        return res;
      })
      .catch(() => caches.match(e.request).then(r => r || caches.match('/Edukid/index.html')))
  );
});
