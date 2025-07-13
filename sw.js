// Service Worker for genomics-in-healthcare.github.io
const CACHE_NAME = 'genomics-cache-v1.2';

// 基本资源
const ESSENTIAL_RESOURCES = [
  '/',
  '/static/css/bootstrap.min.css',
  '/static/css/custom.css',
  '/static/css/syntax.css',
  '/static/css/members-center.css',
  '/static/img/logo/STEMJC_genomics_in_healthcare.png',
  '/static/img/logo/PolyU-Logos.png'
];

// JS资源（低优先级）
const JS_RESOURCES = [
  '/static/js/jquery.min.js',
  '/static/js/popper.min.js',
  '/static/js/bootstrap.min.js',
  '/static/js/parallax.min.js'
];

// 安装事件 - 缓存基本资源
self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => {
        console.log('缓存基本资源');
        return cache.addAll(ESSENTIAL_RESOURCES);
      })
  );
  // 立即激活
  self.skipWaiting();
});

// 激活事件 - 清理旧缓存
self.addEventListener('activate', event => {
  event.waitUntil(
    caches.keys().then(cacheNames => {
      return Promise.all(
        cacheNames.map(cacheName => {
          if (cacheName !== CACHE_NAME) {
            console.log('删除旧缓存:', cacheName);
            return caches.delete(cacheName);
          }
        })
      );
    })
    .then(() => {
      console.log('立即控制所有页面');
      return self.clients.claim();
    })
  );
});

// Fetch事件 - 从缓存或网络提供内容
self.addEventListener('fetch', event => {
  // 获取请求URL
  const requestUrl = new URL(event.request.url);
  
  // 只处理同源请求
  if (requestUrl.origin === self.location.origin) {
    // 图片策略 - 优先使用缓存
    if (event.request.url.match(/\.(jpg|jpeg|png|gif|svg|webp)$/)) {
      event.respondWith(
        caches.match(event.request)
          .then(cachedResponse => {
            // 如果存在缓存，则返回缓存
            if (cachedResponse) {
              return cachedResponse;
            }
            
            // 否则从网络获取
            return fetch(event.request)
              .then(response => {
                // 克隆响应用于缓存
                const responseToCache = response.clone();
                
                // 缓存图片
                caches.open(CACHE_NAME).then(cache => {
                  cache.put(event.request, responseToCache);
                });
                
                return response;
              })
              .catch(error => {
                console.error('获取图片失败:', error);
                // 如果网络请求失败，尝试返回默认图片或处理错误
                return new Response('Image not available', { status: 404 });
              });
          })
      );
    }
    // CSS策略 - 网络优先，缓存作为备份
    else if (event.request.url.match(/\.css$/)) {
      event.respondWith(
        fetch(event.request)
          .then(response => {
            // 克隆响应用于缓存
            const responseToCache = response.clone();
            
            // 缓存CSS
            caches.open(CACHE_NAME).then(cache => {
              cache.put(event.request, responseToCache);
            });
            
            return response;
          })
          .catch(() => {
            // 如果网络请求失败，尝试从缓存获取
            return caches.match(event.request);
          })
      );
    }
    // JS策略 - 仅当从页面请求时缓存
    else if (event.request.url.match(/\.js$/)) {
      event.respondWith(
        fetch(event.request)
          .then(response => {
            return response;
          })
          .catch(() => {
            // 如果网络请求失败，尝试从缓存获取
            return caches.match(event.request);
          })
      );
    }
    // HTML策略 - 网络优先
    else if (event.request.url.match(/\/$|\.html$/)) {
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
    // 其他资源 - 尝试缓存但不主动缓存
    else {
      event.respondWith(
        caches.match(event.request)
          .then(response => {
            return response || fetch(event.request);
          })
      );
    }
  } else {
    // 对于跨源请求，不进行特殊处理
    return;
  }
}); 