// @ts-check
const { test, expect } = require('@playwright/test');

test.describe('成员页面测试', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/members/');
  });

  test('页面标题正确', async ({ page }) => {
    await expect(page).toHaveTitle(/Members/);
  });

  test('成员列表正确显示', async ({ page }) => {
    const memberItems = page.locator('.member-item');
    await expect(memberItems).toHaveCount.greaterThan(0);
    
    // 检查第一个成员的信息
    const firstMember = memberItems.first();
    await expect(firstMember.locator('.member-name')).toBeVisible();
    await expect(firstMember.locator('.member-position')).toBeVisible();
    await expect(firstMember.locator('.member-photo')).toBeVisible();
  });

  test('成员照片正确加载', async ({ page }) => {
    const memberPhotos = page.locator('.member-photo');
    const photoCount = await memberPhotos.count();
    
    for (let i = 0; i < photoCount; i++) {
      const photo = memberPhotos.nth(i);
      await expect(photo).toBeVisible();
      
      // 检查图片src属性
      const src = await photo.getAttribute('src');
      expect(src).toBeTruthy();
    }
  });

  test('成员信息包含必要字段', async ({ page }) => {
    const memberItems = page.locator('.member-item');
    const firstMember = memberItems.first();
    
    // 检查姓名
    const name = firstMember.locator('.member-name');
    await expect(name).toBeVisible();
    const nameText = await name.textContent();
    expect(nameText).toBeTruthy();
    
    // 检查职位
    const position = firstMember.locator('.member-position');
    await expect(position).toBeVisible();
    const positionText = await position.textContent();
    expect(positionText).toBeTruthy();
  });

  test('成员链接可点击', async ({ page }) => {
    const memberLinks = page.locator('.member-link');
    const linkCount = await memberLinks.count();
    
    if (linkCount > 0) {
      const firstLink = memberLinks.first();
      await expect(firstLink).toBeVisible();
      
      // 检查链接有href属性
      const href = await firstLink.getAttribute('href');
      expect(href).toBeTruthy();
    }
  });

  test('校友部分正确显示', async ({ page }) => {
    const alumniSection = page.locator('text=Alumni');
    await expect(alumniSection).toBeVisible();
  });

  test('响应式设计 - 移动端', async ({ page }) => {
    await page.setViewportSize({ width: 375, height: 667 });
    
    const memberItems = page.locator('.member-item');
    await expect(memberItems.first()).toBeVisible();
    
    // 检查移动端布局
    const firstMember = memberItems.first();
    const memberPhoto = firstMember.locator('.member-photo');
    await expect(memberPhoto).toBeVisible();
  });

  test('页面性能', async ({ page }) => {
    const startTime = Date.now();
    await page.goto('/members/');
    await page.waitForLoadState('networkidle');
    const loadTime = Date.now() - startTime;
    
    // 成员页面应在5秒内加载完成
    expect(loadTime).toBeLessThan(5000);
  });
});

