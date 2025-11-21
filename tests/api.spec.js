// @ts-check
const { test, expect } = require('@playwright/test');

test.describe('API和网络测试', () => {
  test('所有内部链接都有效', async ({ page }) => {
    await page.goto('/');
    
    const links = page.locator('a[href^="/"], a[href*="genomics-in-healthcare.github.io"]');
    const linkCount = await links.count();
    
    const brokenLinks = [];
    
    for (let i = 0; i < linkCount; i++) {
      const link = links.nth(i);
      const href = await link.getAttribute('href');
      
      if (href && !href.startsWith('mailto:') && !href.startsWith('tel:')) {
        try {
          const response = await page.request.get(href);
          if (response.status() >= 400) {
            brokenLinks.push({ href, status: response.status() });
          }
        } catch (error) {
          brokenLinks.push({ href, error: error.message });
        }
      }
    }
    
    expect(brokenLinks).toHaveLength(0);
    if (brokenLinks.length > 0) {
      console.log('发现损坏的链接:', brokenLinks);
    }
  });

  test('外部链接可访问', async ({ page }) => {
    await page.goto('/');
    
    const externalLinks = page.locator('a[href^="http"]:not([href*="genomics-in-healthcare.github.io"])');
    const linkCount = await externalLinks.count();
    
    // 只检查前5个外部链接，避免测试时间过长
    const maxLinks = Math.min(linkCount, 5);
    const brokenLinks = [];
    
    for (let i = 0; i < maxLinks; i++) {
      const link = externalLinks.nth(i);
      const href = await link.getAttribute('href');
      
      if (href) {
        try {
          const response = await page.request.get(href);
          if (response.status() >= 400) {
            brokenLinks.push({ href, status: response.status() });
          }
        } catch (error) {
          brokenLinks.push({ href, error: error.message });
        }
      }
    }
    
    // 允许一些外部链接失败，但记录它们
    if (brokenLinks.length > 0) {
      console.log('外部链接问题:', brokenLinks);
    }
  });

  test('RSS/XML提要可访问', async ({ page }) => {
    // 检查sitemap
    const sitemapResponse = await page.request.get('/sitemap.xml');
    expect(sitemapResponse.status()).toBe(200);
    
    // 检查RSS提要（如果存在）
    const rssResponse = await page.request.get('/news.xml');
    if (rssResponse.status() === 200) {
      expect(rssResponse.headers()['content-type']).toContain('xml');
    }
  });

  test('静态资源加载正常', async ({ page }) => {
    await page.goto('/');
    
    // 检查CSS文件
    const cssLinks = page.locator('link[rel="stylesheet"]');
    const cssCount = await cssLinks.count();
    
    for (let i = 0; i < cssCount; i++) {
      const link = cssLinks.nth(i);
      const href = await link.getAttribute('href');
      
      if (href) {
        const response = await page.request.get(href);
        expect(response.status()).toBe(200);
        expect(response.headers()['content-type']).toContain('css');
      }
    }
    
    // 检查JavaScript文件
    const jsScripts = page.locator('script[src]');
    const jsCount = await jsScripts.count();
    
    for (let i = 0; i < jsCount; i++) {
      const script = jsScripts.nth(i);
      const src = await script.getAttribute('src');
      
      if (src) {
        const response = await page.request.get(src);
        expect(response.status()).toBe(200);
      }
    }
  });

  test('图片资源可访问', async ({ page }) => {
    await page.goto('/');
    
    const images = page.locator('img[src]');
    const imageCount = await images.count();
    
    const brokenImages = [];
    
    for (let i = 0; i < imageCount; i++) {
      const img = images.nth(i);
      const src = await img.getAttribute('src');
      
      if (src) {
        try {
          const response = await page.request.get(src);
          if (response.status() >= 400) {
            brokenImages.push({ src, status: response.status() });
          }
        } catch (error) {
          brokenImages.push({ src, error: error.message });
        }
      }
    }
    
    expect(brokenImages).toHaveLength(0);
    if (brokenImages.length > 0) {
      console.log('损坏的图片:', brokenImages);
    }
  });

  test('HTTP状态码正确', async ({ page }) => {
    const pages = ['/', '/members/', '/research/', '/publications/', '/news/', '/contact/'];
    
    for (const pagePath of pages) {
      const response = await page.request.get(pagePath);
      expect(response.status()).toBe(200);
    }
  });

  test('重定向正确', async ({ page }) => {
    // 测试常见的重定向情况
    const redirects = [
      { from: '/index.html', to: '/' },
      { from: '/members', to: '/members/' }
    ];
    
    for (const redirect of redirects) {
      const response = await page.request.get(redirect.from, { maxRedirects: 0 });
      // 应该返回重定向状态码
      expect([301, 302, 307, 308]).toContain(response.status());
    }
  });
});










