// Service Worker 注册脚本
(function() {
  'use strict';
  
  // 检查是否支持Service Worker
  if ('serviceWorker' in navigator) {
    window.addEventListener('load', function() {
      // 延迟注册Service Worker，优先加载页面内容
      setTimeout(function() {
        registerServiceWorker();
      }, 1000);
    });
  }
  
  function registerServiceWorker() {
    navigator.serviceWorker.register('/sw.js')
      .then(function(registration) {
        console.log('Service Worker 注册成功，范围:', registration.scope);
        
        // 检查Service Worker是否需要更新
        if (registration.active) {
          console.log('Service Worker 已激活');
        }
        
        registration.addEventListener('updatefound', function() {
          const newWorker = registration.installing;
          console.log('发现Service Worker更新，状态:', newWorker.state);
          
          newWorker.addEventListener('statechange', function() {
            console.log('Service Worker状态变化:', newWorker.state);
          });
        });
        
        // 每隔一段时间检查更新
        setInterval(function() {
          registration.update();
        }, 60 * 60 * 1000); // 每小时检查一次更新
      })
      .catch(function(error) {
        console.error('Service Worker 注册失败:', error);
      });
  }
  
  // 监听Service Worker消息
  navigator.serviceWorker.addEventListener('message', function(event) {
    if (event.data && event.data.action === 'cacheStatus') {
      console.log('Service Worker 缓存状态:', event.data);
    }
  });
  
  // 添加一个用于检查缓存状态的函数
  window.checkCacheStatus = function() {
    if (navigator.serviceWorker.controller) {
      navigator.serviceWorker.controller.postMessage({
        action: 'checkCacheStatus'
      });
      return '正在检查缓存状态，请查看控制台输出';
    } else {
      return 'Service Worker尚未激活，请刷新页面后再试';
    }
  };
  
  // 添加一个用于刷新Service Worker的函数
  window.refreshServiceWorker = function() {
    if ('serviceWorker' in navigator) {
      navigator.serviceWorker.getRegistrations().then(function(registrations) {
        for(let registration of registrations) {
          registration.unregister();
          console.log('Service Worker 已卸载');
        }
        window.location.reload();
        return '正在刷新Service Worker...';
      });
    }
  };
  
  // 禁用页面跳转时的非阻塞加载效果
  if ('serviceWorker' in navigator && navigator.serviceWorker.controller) {
    // 监听页面链接点击事件
    document.addEventListener('click', function(event) {
      // 检查是否点击的是链接
      let target = event.target;
      while (target && target.tagName !== 'A') {
        target = target.parentNode;
        if (!target) break;
      }
      
      // 如果是链接且是同站点链接
      if (target && target.tagName === 'A' && target.href && 
          target.href.startsWith(window.location.origin) &&
          !target.hasAttribute('download') && 
          target.target !== '_blank') {
        
        // 使用传统导航方式，确保完全刷新页面
        event.preventDefault();
        window.location.href = target.href;
      }
    });
  }
})(); 