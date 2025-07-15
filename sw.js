// Service Worker for genomics-in-healthcare.github.io
const CACHE_NAME = 'genomics-cache-v1.6'; // 更新版本号强制重新加载
const CACHE_MAX_AGE = 31536000; // 1年缓存时间（秒）

// 基本资源
const ESSENTIAL_RESOURCES = [
  '/',
  '/static/css/bootstrap.min.css',
  '/static/css/custom.css',
  '/static/css/critical.css'
];

// JS资源（低优先级）
const JS_RESOURCES = [
  '/static/js/jquery.min.js',
  '/static/js/popper.min.js',
  '/static/js/bootstrap.min.js',
  '/static/js/parallax.min.js'
];

// 预加载图像
const PRELOAD_IMAGES = [
  '/static/img/logo/STEMJC_genomics_in_healthcare.png',
  '/static/img/logo/PolyU-Logos.png'
];

// GitHub相关域名，避免阻塞渲染
const GITHUB_DOMAINS = [
  'github.com',
  'githubusercontent.com',
  'githubassets.com'
];

// 安装事件 - 缓存基本资源
self.addEventListener('install', event => {
  console.log('Service Worker 正在安装');
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => {
        console.log('缓存基本资源');
        return Promise.all([
          cache.addAll(ESSENTIAL_RESOURCES),
          cache.addAll(JS_RESOURCES),
          cache.addAll(PRELOAD_IMAGES)
        ]);
      })
      .catch(error => {
        console.error('缓存资源失败:', error);
      })
  );
  // 立即激活
  self.skipWaiting();
});

// 激活事件 - 清理旧缓存
self.addEventListener('activate', event => {
  console.log('Service Worker 激活中');
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

// 检查URL是否来自GitHub域名
function isGitHubResource(url) {
  return GITHUB_DOMAINS.some(domain => url.includes(domain));
}

// Fetch事件 - 从缓存或网络提供内容
self.addEventListener('fetch', event => {
  // 获取请求URL
  const requestUrl = new URL(event.request.url);
  
  // 只处理GET请求
  if (event.request.method !== 'GET') return;
  
  // 处理GitHub相关资源 - 使用网络优先策略，减少阻塞
  if (isGitHubResource(requestUrl.hostname)) {
    // 不拦截GitHub的请求，让它们自然完成
    return;
  }
  
  // 只处理同源请求
  if (requestUrl.origin === self.location.origin) {
    // 静态资源策略（图片、CSS、JS等）- 优先使用缓存
    if (
      event.request.url.match(/\.(jpg|jpeg|png|gif|svg|webp)$/) ||
      event.request.url.match(/\.(css|js)$/)
    ) {
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
                // 只缓存成功响应
                if (!response || response.status !== 200 || response.type !== 'basic') {
                  return response;
                }
                
                // 克隆响应用于缓存
                const responseToCache = response.clone();
                
                // 缓存资源
                caches.open(CACHE_NAME).then(cache => {
                  cache.put(event.request, responseToCache);
                  console.log('资源已缓存:', event.request.url);
                });
                
                return response;
              })
              .catch(error => {
                console.error('获取资源失败:', error, event.request.url);
                return caches.match(event.request);
              });
          })
      );
    }
    // HTML策略 - 直接从网络获取，不使用缓存作为备份，移除非阻塞加载效果
    else if (event.request.url.match(/\/$|\.html$|\.md$/)) {
      // 不拦截HTML请求，让浏览器直接处理，确保页面跳转时完全重新加载
      return;
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
  }
});

// 向主线程报告缓存状态
self.addEventListener('message', event => {
  if (event.data && event.data.action === 'checkCacheStatus') {
    caches.open(CACHE_NAME).then(cache => {
      cache.keys().then(keys => {
        self.clients.matchAll().then(clients => {
          clients.forEach(client => {
            client.postMessage({
              action: 'cacheStatus',
              version: CACHE_NAME,
              count: keys.length
            });
          });
        });
      });
    });
  }
}); 