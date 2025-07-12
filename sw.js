// Service Worker for genomics-in-healthcare.github.io
const CACHE_NAME = 'genomics-cache-v1';
const ASSETS_TO_CACHE = [
  '/',
  '/static/css/bootstrap.min.css',
  '/static/css/custom.css',
  '/static/css/syntax.css',
  '/static/css/members-center.css',
  '/static/js/jquery.min.js',
  '/static/js/popper.min.js',
  '/static/js/bootstrap.min.js',
  '/static/js/parallax.min.js',
  '/static/img/logo/STEMJC_genomics_in_healthcare.png',
  '/static/img/logo/PolyU-Logos.png'
];

// Install event - cache assets
self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => {
        return cache.addAll(ASSETS_TO_CACHE);
      })
  );
});

// Activate event - clean up old caches
self.addEventListener('activate', event => {
  event.waitUntil(
    caches.keys().then(cacheNames => {
      return Promise.all(
        cacheNames.map(cacheName => {
          if (cacheName !== CACHE_NAME) {
            return caches.delete(cacheName);
          }
        })
      );
    })
  );
});

// Fetch event - serve from cache or network
self.addEventListener('fetch', event => {
  // Images strategy - cache first with 30 day expiration
  if (event.request.url.match(/\.(jpg|jpeg|png|gif|svg|webp)$/)) {
    event.respondWith(
      caches.match(event.request).then(response => {
        // Return cache hit if we have it
        if (response) {
          return response;
        }
        
        // Otherwise fetch from network
        return fetch(event.request).then(networkResponse => {
          // Clone response before using it
          const responseToCache = networkResponse.clone();
          
          // Cache for 30 days
          caches.open(CACHE_NAME).then(cache => {
            const headers = new Headers(networkResponse.headers);
            headers.append('Cache-Control', 'max-age=2592000'); // 30 days
            
            const responseWithCaching = new Response(responseToCache.body, {
              status: responseToCache.status,
              statusText: responseToCache.statusText,
              headers: headers
            });
            
            cache.put(event.request, responseWithCaching);
          });
          
          return networkResponse;
        });
      })
    );
  } 
  // CSS and JS strategy - network first with fallback to cache
  else if (event.request.url.match(/\.(css|js)$/)) {
    event.respondWith(
      fetch(event.request)
        .then(response => {
          // Clone response before using it
          const responseToCache = response.clone();
          
          // Cache with long expiration
          caches.open(CACHE_NAME).then(cache => {
            const headers = new Headers(response.headers);
            headers.append('Cache-Control', 'max-age=604800'); // 7 days
            
            const responseWithCaching = new Response(responseToCache.body, {
              status: responseToCache.status,
              statusText: responseToCache.statusText,
              headers: headers
            });
            
            cache.put(event.request, responseWithCaching);
          });
          
          return response;
        })
        .catch(() => {
          return caches.match(event.request);
        })
    );
  }
  // HTML strategy - network first with quick fallback to cache
  else {
    event.respondWith(
      fetch(event.request)
        .then(response => {
          return response;
        })
        .catch(() => {
          return caches.match(event.request);
        })
    );
  }
}); 