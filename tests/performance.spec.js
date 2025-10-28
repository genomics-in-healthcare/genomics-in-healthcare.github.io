// @ts-check
const { test, expect } = require('@playwright/test');

test.describe('网站性能测试', () => {
  test('首页加载性能', async ({ page }) => {
    const startTime = Date.now();
    await page.goto('/');
    await page.waitForLoadState('networkidle');
    const loadTime = Date.now() - startTime;
    
    // 首页应在3秒内加载完成
    expect(loadTime).toBeLessThan(3000);
    console.log(`首页加载时间: ${loadTime}ms`);
  });

  test('成员页面加载性能', async ({ page }) => {
    const startTime = Date.now();
    await page.goto('/members/');
    await page.waitForLoadState('networkidle');
    const loadTime = Date.now() - startTime;
    
    // 成员页面应在5秒内加载完成
    expect(loadTime).toBeLessThan(5000);
    console.log(`成员页面加载时间: ${loadTime}ms`);
  });

  test('图片加载性能', async ({ page }) => {
    await page.goto('/');
    
    // 等待所有图片加载完成
    await page.waitForLoadState('networkidle');
    
    // 检查图片加载状态
    const images = page.locator('img');
    const imageCount = await images.count();
    
    let loadedImages = 0;
    for (let i = 0; i < imageCount; i++) {
      const img = images.nth(i);
      const isLoaded = await img.evaluate((el) => el.complete && el.naturalHeight !== 0);
      if (isLoaded) loadedImages++;
    }
    
    // 至少90%的图片应该加载成功
    const loadRate = loadedImages / imageCount;
    expect(loadRate).toBeGreaterThan(0.9);
    console.log(`图片加载率: ${(loadRate * 100).toFixed(1)}%`);
  });

  test('页面大小检查', async ({ page }) => {
    await page.goto('/');
    
    // 获取页面大小信息
    const metrics = await page.evaluate(() => {
      return {
        domContentLoaded: performance.timing.domContentLoadedEventEnd - performance.timing.navigationStart,
        loadComplete: performance.timing.loadEventEnd - performance.timing.navigationStart,
        domElements: document.querySelectorAll('*').length,
        images: document.querySelectorAll('img').length,
        scripts: document.querySelectorAll('script').length,
        stylesheets: document.querySelectorAll('link[rel="stylesheet"]').length
      };
    });
    
    console.log('页面性能指标:', metrics);
    
    // DOM内容加载时间应小于2秒
    expect(metrics.domContentLoaded).toBeLessThan(2000);
    
    // 页面完全加载时间应小于5秒
    expect(metrics.loadComplete).toBeLessThan(5000);
  });

  test('移动端性能', async ({ page }) => {
    await page.setViewportSize({ width: 375, height: 667 });
    
    const startTime = Date.now();
    await page.goto('/');
    await page.waitForLoadState('networkidle');
    const loadTime = Date.now() - startTime;
    
    // 移动端应在4秒内加载完成
    expect(loadTime).toBeLessThan(4000);
    console.log(`移动端加载时间: ${loadTime}ms`);
  });

  test('缓存效果测试', async ({ page }) => {
    // 第一次访问
    const firstVisitStart = Date.now();
    await page.goto('/');
    await page.waitForLoadState('networkidle');
    const firstVisitTime = Date.now() - firstVisitStart;
    
    // 第二次访问（测试缓存）
    const secondVisitStart = Date.now();
    await page.reload();
    await page.waitForLoadState('networkidle');
    const secondVisitTime = Date.now() - secondVisitStart;
    
    console.log(`首次访问时间: ${firstVisitTime}ms`);
    console.log(`缓存访问时间: ${secondVisitTime}ms`);
    
    // 缓存访问应该更快
    expect(secondVisitTime).toBeLessThan(firstVisitTime);
  });
});
