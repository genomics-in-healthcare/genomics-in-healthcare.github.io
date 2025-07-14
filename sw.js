// Service Worker for genomics-in-healthcare.github.io
const CACHE_NAME = 'genomics-cache-v1.4';
const CACHE_MAX_AGE = 31536000; // 1 year in seconds

// 基本资源
const ESSENTIAL_RESOURCES = [
  '/',
  '/static/css/bootstrap.min.css',
  '/static/css/custom.css'
  // 已移除 syntax.css 和 members-center.css，因为它们现在内联在HTML中
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

// 添加缓存控制头
function addCacheControlHeader(response, maxAge = CACHE_MAX_AGE) {
  if (response && response.status === 200) {
    const headers = new Headers(response.headers);
    headers.set('Cache-Control', `public, max-age=${maxAge}, immutable`);
    return new Response(response.body, {
      status: response.status,
      statusText: response.statusText,
      headers: headers
    });
  }
  return response;
}

// 安装事件 - 缓存基本资源
self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => {
        console.log('缓存基本资源');
        return cache.addAll(ESSENTIAL_RESOURCES)
          .then(() => {
            console.log('缓存JS资源');
            return cache.addAll(JS_RESOURCES);
          })
          .then(() => {
            console.log('缓存预加载图像');
            return cache.addAll(PRELOAD_IMAGES);
          });
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

// 检查URL是否来自GitHub域名
function isGitHubResource(url) {
  return GITHUB_DOMAINS.some(domain => url.includes(domain));
}

// Fetch事件 - 从缓存或网络提供内容
self.addEventListener('fetch', event => {
  // 获取请求URL
  const requestUrl = new URL(event.request.url);
  
  // 处理GitHub相关资源 - 使用网络优先策略，减少阻塞
  if (isGitHubResource(requestUrl.hostname)) {
    // 不拦截GitHub的请求，让它们自然完成
    // 这些资源不在关键渲染路径上
    return;
  }
  
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
                // 只缓存成功响应
                if (!response || response.status !== 200 || response.type !== 'basic') {
                  return response;
                }
                
                // 克隆响应用于缓存
                const responseToCache = response.clone();
                
                // 添加缓存控制头
                const enhancedResponse = addCacheControlHeader(response);
                
                // 缓存图片
                caches.open(CACHE_NAME).then(cache => {
                  cache.put(event.request, responseToCache);
                });
                
                return enhancedResponse;
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
            // 只缓存成功响应
            if (!response || response.status !== 200 || response.type !== 'basic') {
              return response;
            }
            
            // 克隆响应用于缓存
            const responseToCache = response.clone();
            
            // 添加缓存控制头
            const enhancedResponse = addCacheControlHeader(response);
            
            // 缓存CSS
            caches.open(CACHE_NAME).then(cache => {
              cache.put(event.request, responseToCache);
            });
            
            return enhancedResponse;
          })
          .catch(() => {
            // 如果网络请求失败，尝试从缓存获取
            return caches.match(event.request);
          })
      );
    }
    // JS策略 - 仅当从页面请求时缓存，低优先级加载
    else if (event.request.url.match(/\.js$/)) {
      event.respondWith(
        fetch(event.request)
          .then(response => {
            // 只缓存成功响应
            if (!response || response.status !== 200 || response.type !== 'basic') {
              return response;
            }
            
            // 克隆响应用于缓存
            const responseToCache = response.clone();
            
            // 添加缓存控制头
            const enhancedResponse = addCacheControlHeader(response);
            
            // 缓存JS
            caches.open(CACHE_NAME).then(cache => {
              cache.put(event.request, responseToCache);
            });
            
            return enhancedResponse;
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
            // HTML缓存较短时间
            return addCacheControlHeader(response, 3600); // 1小时
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
            return response || fetch(event.request).then(fetchResponse => {
              // 默认缓存时间
              return addCacheControlHeader(fetchResponse, 86400); // 1天
            });
          })
      );
    }
  } else {
    // 对于跨源请求，不进行特殊处理
    return;
  }
}); 