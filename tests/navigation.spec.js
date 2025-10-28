// @ts-check
const { test, expect } = require('@playwright/test');

test.describe('网站导航测试', () => {
  test('主导航链接功能正常', async ({ page }) => {
    await page.goto('/');
    
    // 测试首页链接
    await page.click('a[href="/"]');
    await expect(page).toHaveURL(/\/$/);
    
    // 测试成员页面
    await page.click('a[href*="members"]');
    await expect(page).toHaveURL(/.*members/);
    await expect(page.locator('.member-item')).toBeVisible();
    
    // 测试研究页面
    await page.click('a[href*="research"]');
    await expect(page).toHaveURL(/.*research/);
    
    // 测试出版物页面
    await page.click('a[href*="publications"]');
    await expect(page).toHaveURL(/.*publications/);
    
    // 测试新闻页面
    await page.click('a[href*="news"]');
    await expect(page).toHaveURL(/.*news/);
    
    // 测试联系页面
    await page.click('a[href*="contact"]');
    await expect(page).toHaveURL(/.*contact/);
  });

  test('页脚链接功能正常', async ({ page }) => {
    await page.goto('/');
    
    // 滚动到页脚
    await page.evaluate(() => window.scrollTo(0, document.body.scrollHeight));
    
    // 检查页脚是否存在
    const footer = page.locator('footer');
    await expect(footer).toBeVisible();
  });

  test('面包屑导航（如果存在）', async ({ page }) => {
    await page.goto('/members/');
    
    // 检查是否有面包屑导航
    const breadcrumb = page.locator('.breadcrumb, .breadcrumbs, nav[aria-label="breadcrumb"]');
    if (await breadcrumb.count() > 0) {
      await expect(breadcrumb).toBeVisible();
    }
  });

  test('移动端导航菜单', async ({ page }) => {
    await page.setViewportSize({ width: 375, height: 667 });
    await page.goto('/');
    
    // 检查移动端导航按钮
    const mobileMenuButton = page.locator('button[aria-label*="menu"], .mobile-menu-button, .hamburger');
    if (await mobileMenuButton.count() > 0) {
      await mobileMenuButton.click();
      
      // 检查菜单是否展开
      const mobileMenu = page.locator('.mobile-menu, .nav-menu');
      await expect(mobileMenu).toBeVisible();
    }
  });

  test('返回顶部功能', async ({ page }) => {
    await page.goto('/');
    
    // 滚动到页面底部
    await page.evaluate(() => window.scrollTo(0, document.body.scrollHeight));
    
    // 检查是否有返回顶部按钮
    const backToTop = page.locator('button[aria-label*="top"], .back-to-top, .scroll-to-top');
    if (await backToTop.count() > 0) {
      await backToTop.click();
      
      // 检查是否滚动到顶部
      const scrollTop = await page.evaluate(() => window.pageYOffset);
      expect(scrollTop).toBeLessThan(100);
    }
  });
});
