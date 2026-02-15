// =============================================
// Service Worker - Cache des images & assets
// jacob-houmadi.com
// =============================================

const CACHE_NAME = 'jacob-portfolio-v1';

// Assets à mettre en cache immédiatement (install)
const PRECACHE_ASSETS = [
  '/',
  '/index.html',
  '/styles.css',
  '/nav-mobile.css',
  '/logo-jacob.png',
  '/logos/Logo_tango.svg',
  '/logos/axian_logo.png',
  '/logos/silva_paris-1.svg',
  '/logos/ergosante_logo.png',
  '/logos/Logo-Jovena.svg',
  '/logos/Logo-nexta.svg',
];

// ---- INSTALL : pré-cache des assets essentiels ----
self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      return cache.addAll(PRECACHE_ASSETS);
    })
  );
  self.skipWaiting();
});

// ---- ACTIVATE : supprime les anciens caches ----
self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys().then((cacheNames) =>
      Promise.all(
        cacheNames
          .filter((name) => name !== CACHE_NAME)
          .map((name) => caches.delete(name))
      )
    )
  );
  self.clients.claim();
});

// ---- FETCH : stratégie par type de ressource ----
self.addEventListener('fetch', (event) => {
  const { request } = event;
  const url = new URL(request.url);

  // Ignore les requêtes externes (EmailJS, Google Fonts, etc.)
  if (url.origin !== location.origin) return;

  // Stratégie "Cache First" pour les images et fonts
  if (
    request.destination === 'image' ||
    request.destination === 'font' ||
    url.pathname.match(/\.(webp|png|jpg|jpeg|svg|gif|ico|woff2|woff)$/)
  ) {
    event.respondWith(cacheFirst(request));
    return;
  }

  // Stratégie "Network First" pour HTML/CSS/JS (toujours à jour)
  event.respondWith(networkFirst(request));
});

// Cache First : sert depuis le cache, sinon réseau → met en cache
async function cacheFirst(request) {
  const cached = await caches.match(request);
  if (cached) return cached;

  try {
    const response = await fetch(request);
    if (response.ok) {
      const cache = await caches.open(CACHE_NAME);
      cache.put(request, response.clone());
    }
    return response;
  } catch {
    return new Response('Image non disponible hors-ligne', { status: 503 });
  }
}

// Network First : réseau en priorité, cache en fallback
async function networkFirst(request) {
  try {
    const response = await fetch(request);
    if (response.ok) {
      const cache = await caches.open(CACHE_NAME);
      cache.put(request, response.clone());
    }
    return response;
  } catch {
    const cached = await caches.match(request);
    return cached || new Response('Contenu non disponible hors-ligne', { status: 503 });
  }
}
