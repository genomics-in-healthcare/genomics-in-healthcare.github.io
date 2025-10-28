// @ts-check
const { test, expect } = require('@playwright/test');

test.describe('网站无障碍测试', () => {
  test('页面标题存在且有意义', async ({ page }) => {
    await page.goto('/');
    
    const title = await page.title();
    expect(title).toBeTruthy();
    expect(title.length).toBeGreaterThan(10);
    expect(title).toContain('Genomics');
  });

  test('主要标题结构正确', async ({ page }) => {
    await page.goto('/');
    
    // 检查h1标签
    const h1 = page.locator('h1');
    await expect(h1).toHaveCount(1);
    
    // 检查标题层级
    const headings = page.locator('h1, h2, h3, h4, h5, h6');
    const headingCount = await headings.count();
    expect(headingCount).toBeGreaterThan(0);
  });

  test('图片都有alt属性', async ({ page }) => {
    await page.goto('/');
    
    const images = page.locator('img');
    const imageCount = await images.count();
    
    for (let i = 0; i < imageCount; i++) {
      const img = images.nth(i);
      const alt = await img.getAttribute('alt');
      expect(alt).toBeTruthy();
      expect(alt.length).toBeGreaterThan(0);
    }
  });

  test('链接都有有意义的文本', async ({ page }) => {
    await page.goto('/');
    
    const links = page.locator('a');
    const linkCount = await links.count();
    
    for (let i = 0; i < linkCount; i++) {
      const link = links.nth(i);
      const text = await link.textContent();
      const href = await link.getAttribute('href');
      
      // 链接应该有文本内容或aria-label
      const ariaLabel = await link.getAttribute('aria-label');
      expect(text || ariaLabel).toBeTruthy();
      
      // 如果有href，应该是有效的URL
      if (href && !href.startsWith('#')) {
        expect(href).toMatch(/^https?:\/\//);
      }
    }
  });

  test('表单元素有标签', async ({ page }) => {
    await page.goto('/contact/');
    
    const inputs = page.locator('input, textarea, select');
    const inputCount = await inputs.count();
    
    for (let i = 0; i < inputCount; i++) {
      const input = inputs.nth(i);
      const type = await input.getAttribute('type');
      
      // 跳过隐藏输入
      if (type === 'hidden') continue;
      
      const id = await input.getAttribute('id');
      const ariaLabel = await input.getAttribute('aria-label');
      const placeholder = await input.getAttribute('placeholder');
      
      // 输入应该有id、aria-label或placeholder
      expect(id || ariaLabel || placeholder).toBeTruthy();
    }
  });

  test('键盘导航支持', async ({ page }) => {
    await page.goto('/');
    
    // 测试Tab键导航
    await page.keyboard.press('Tab');
    const focusedElement = await page.evaluate(() => document.activeElement?.tagName);
    expect(focusedElement).toBeTruthy();
    
    // 测试Enter键激活链接
    const firstLink = page.locator('a').first();
    if (await firstLink.count() > 0) {
      await firstLink.focus();
      await page.keyboard.press('Enter');
      // 应该导航到新页面
      await page.waitForLoadState('networkidle');
    }
  });

  test('颜色对比度检查', async ({ page }) => {
    await page.goto('/');
    
    // 检查主要文本元素
    const textElements = page.locator('h1, h2, h3, p, a');
    const elementCount = await textElements.count();
    
    // 这里只是基本检查，实际的颜色对比度需要专门的工具
    for (let i = 0; i < Math.min(elementCount, 10); i++) {
      const element = textElements.nth(i);
      const color = await element.evaluate((el) => {
        const styles = window.getComputedStyle(el);
        return {
          color: styles.color,
          backgroundColor: styles.backgroundColor
        };
      });
      
      expect(color.color).toBeTruthy();
    }
  });

  test('页面语言设置', async ({ page }) => {
    await page.goto('/');
    
    const html = page.locator('html');
    const lang = await html.getAttribute('lang');
    expect(lang).toBeTruthy();
  });

  test('跳过链接（如果存在）', async ({ page }) => {
    await page.goto('/');
    
    const skipLinks = page.locator('a[href="#main"], .skip-link, .sr-only');
    if (await skipLinks.count() > 0) {
      await expect(skipLinks.first()).toBeVisible();
    }
  });
});
