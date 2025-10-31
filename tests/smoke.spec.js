// @ts-check
const { test, expect } = require('@playwright/test');

test.describe('冒烟测试 - 关键功能', () => {
  test('网站基本功能正常 @smoke', async ({ page }) => {
    // 访问首页
    await page.goto('/');
    await expect(page).toHaveTitle(/Genomics and Artificial Intelligence/);
    
    // 检查主要元素存在
    await expect(page.locator('h1')).toBeVisible();
    await expect(page.locator('nav')).toBeVisible();
    
    // 导航到成员页面
    await page.click('a[href*="members"]');
    await expect(page).toHaveURL(/.*members/);
    await expect(page.locator('.member-item')).toBeVisible();
    
    // 返回首页
    await page.click('a[href="/"]');
    await expect(page).toHaveURL(/\/$/);
  });

  test('移动端基本功能 @smoke', async ({ page }) => {
    await page.setViewportSize({ width: 375, height: 667 });
    await page.goto('/');
    
    // 检查移动端布局
    await expect(page.locator('h1')).toBeVisible();
    await expect(page.locator('nav')).toBeVisible();
    
    // 检查成员页面在移动端
    await page.goto('/members/');
    await expect(page.locator('.member-item')).toBeVisible();
  });

  test('关键页面加载 @smoke', async ({ page }) => {
    const criticalPages = [
      { url: '/', title: 'Genomics and Artificial Intelligence' },
      { url: '/members/', title: 'Members' },
      { url: '/research/', title: 'Research' },
      { url: '/publications/', title: 'Publications' },
      { url: '/news/', title: 'News' },
      { url: '/contact/', title: 'Contact' }
    ];
    
    for (const pageInfo of criticalPages) {
      await page.goto(pageInfo.url);
      await expect(page).toHaveTitle(new RegExp(pageInfo.title, 'i'));
      
      // 检查页面内容加载
      await page.waitForLoadState('networkidle');
    }
  });

  test('图片和资源加载 @smoke', async ({ page }) => {
    await page.goto('/');
    
    // 等待页面完全加载
    await page.waitForLoadState('networkidle');
    
    // 检查主要图片
    const heroImages = page.locator('.hero-section img, .lab-images img');
    const imageCount = await heroImages.count();
    
    for (let i = 0; i < imageCount; i++) {
      const img = heroImages.nth(i);
      await expect(img).toBeVisible();
    }
    
    // 检查成员页面图片
    await page.goto('/members/');
    await page.waitForLoadState('networkidle');
    
    const memberPhotos = page.locator('.member-photo');
    const photoCount = await memberPhotos.count();
    
    for (let i = 0; i < Math.min(photoCount, 5); i++) {
      const photo = memberPhotos.nth(i);
      await expect(photo).toBeVisible();
    }
  });

  test('导航功能 @smoke', async ({ page }) => {
    await page.goto('/');
    
    // 测试主导航
    const navLinks = page.locator('nav a');
    const linkCount = await navLinks.count();
    
    for (let i = 0; i < Math.min(linkCount, 5); i++) {
      const link = navLinks.nth(i);
      const href = await link.getAttribute('href');
      
      if (href && !href.startsWith('mailto:') && !href.startsWith('tel:')) {
        await link.click();
        await page.waitForLoadState('networkidle');
        
        // 检查页面加载成功
        const title = await page.title();
        expect(title).toBeTruthy();
        expect(title.length).toBeGreaterThan(0);
        
        // 返回首页继续测试
        await page.goto('/');
      }
    }
  });
});





