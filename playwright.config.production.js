// @ts-check
const { defineConfig, devices } = require('@playwright/test');

/**
 * 生产环境测试配置 - 直接测试在线网站
 */
module.exports = defineConfig({
  testDir: './tests',
  /* 并行运行测试 */
  fullyParallel: true,
  /* 失败时重试 */
  retries: process.env.CI ? 2 : 0,
  /* 并行工作进程数 */
  workers: process.env.CI ? 1 : undefined,
  /* 测试报告配置 */
  reporter: [
    ['html', { outputFolder: 'test-results/html-report' }],
    ['json', { outputFile: 'test-results/results.json' }],
    ['junit', { outputFile: 'test-results/results.xml' }],
    ['list']
  ],
  /* 全局测试配置 */
  use: {
    /* 基础URL - 直接使用生产环境 */
    baseURL: 'https://genomics-in-healthcare.github.io',
    
    /* 浏览器上下文选项 */
    trace: 'on-first-retry',
    screenshot: 'only-on-failure',
    video: 'retain-on-failure',
    
    /* 超时设置 */
    actionTimeout: 10000,
    navigationTimeout: 30000,
  },

  /* 测试项目配置 */
  projects: [
    {
      name: 'chromium',
      use: { ...devices['Desktop Chrome'] },
    },

    {
      name: 'firefox',
      use: { ...devices['Desktop Firefox'] },
    },

    {
      name: 'webkit',
      use: { ...devices['Desktop Safari'] },
    },

    /* 移动端测试 */
    {
      name: 'Mobile Chrome',
      use: { ...devices['Pixel 5'] },
    },
    {
      name: 'Mobile Safari',
      use: { ...devices['iPhone 12'] },
    },
  ],

  /* 输出目录 */
  outputDir: 'test-results/',
  
  /* 全局超时 */
  timeout: 30 * 1000,
  
  /* 期望超时 */
  expect: {
    timeout: 5000,
  },
});












