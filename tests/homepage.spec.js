// @ts-check
const { test, expect } = require('@playwright/test');

test.describe('首页测试', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/');
  });

  test('页面标题正确', async ({ page }) => {
    await expect(page).toHaveTitle(/Genomics and Artificial Intelligence in Healthcare Lab/);
  });

  test('页面加载完成', async ({ page }) => {
    // 等待主要内容加载
    await expect(page.locator('h1')).toBeVisible();
    await expect(page.locator('.hero-section')).toBeVisible();
  });

  test('导航栏存在且可点击', async ({ page }) => {
    const nav = page.locator('nav');
    await expect(nav).toBeVisible();
    
    // 检查主要导航链接
    const homeLink = page.locator('a[href="/"]');
    const membersLink = page.locator('a[href*="members"]');
    const researchLink = page.locator('a[href*="research"]');
    const publicationsLink = page.locator('a[href*="publications"]');
    const newsLink = page.locator('a[href*="news"]');
    const contactLink = page.locator('a[href*="contact"]');
    
    await expect(homeLink).toBeVisible();
    await expect(membersLink).toBeVisible();
    await expect(researchLink).toBeVisible();
    await expect(publicationsLink).toBeVisible();
    await expect(newsLink).toBeVisible();
    await expect(contactLink).toBeVisible();
  });

  test('英雄区域内容正确显示', async ({ page }) => {
    const heroSection = page.locator('.hero-section');
    await expect(heroSection).toBeVisible();
    
    const heroText = page.locator('.hero-section h1');
    await expect(heroText).toContainText('Our mission is to advance AI and genomic technologies');
  });

  test('实验室图片正确显示', async ({ page }) => {
    // 检查干实验室图片
    const dryLabImages = page.locator('img[alt*="Data Center"], img[alt*="Office Workspace"]');
    await expect(dryLabImages).toHaveCount(2);
    
    // 检查湿实验室图片
    const wetLabImages = page.locator('img[alt*="Wet Lab"]');
    await expect(wetLabImages).toHaveCount(3);
  });

  test('资助方Logo正确显示', async ({ page }) => {
    const fundingSection = page.locator('text=Research Supported By');
    await expect(fundingSection).toBeVisible();
    
    const fundingLogos = page.locator('.funding-partners img');
    await expect(fundingLogos).toHaveCount(4);
    
    // 检查特定Logo
    await expect(page.locator('img[alt="Hong Kong SAR"]')).toBeVisible();
    await expect(page.locator('img[alt="RGC"]')).toBeVisible();
    await expect(page.locator('img[alt="NSFC"]')).toBeVisible();
    await expect(page.locator('img[alt="Hong Kong Jockey Club Charities Trust"]')).toBeVisible();
  });

  test('响应式设计 - 移动端', async ({ page }) => {
    await page.setViewportSize({ width: 375, height: 667 });
    
    // 检查移动端导航
    const nav = page.locator('nav');
    await expect(nav).toBeVisible();
    
    // 检查英雄区域在移动端的显示
    const heroSection = page.locator('.hero-section');
    await expect(heroSection).toBeVisible();
  });

  test('页面性能 - 加载时间', async ({ page }) => {
    const startTime = Date.now();
    await page.goto('/');
    await page.waitForLoadState('networkidle');
    const loadTime = Date.now() - startTime;
    
    // 页面应在3秒内加载完成
    expect(loadTime).toBeLessThan(3000);
  });

  test('所有图片正确加载', async ({ page }) => {
    const images = page.locator('img');
    const imageCount = await images.count();
    
    for (let i = 0; i < imageCount; i++) {
      const img = images.nth(i);
      await expect(img).toBeVisible();
      
      // 检查图片是否有有效的src属性
      const src = await img.getAttribute('src');
      expect(src).toBeTruthy();
    }
  });
});

