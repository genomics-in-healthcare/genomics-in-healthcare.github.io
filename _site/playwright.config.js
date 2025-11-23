// @ts-check
const { defineConfig, devices } = require('@playwright/test');

/**
 * @see https://playwright.dev/docs/test-configuration
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
    /* 基础URL */
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

    /* 平板测试 */
    {
      name: 'iPad',
      use: { ...devices['iPad Pro'] },
    },
  ],

  /* 本地开发服务器配置 - 仅在非CI环境且检测到Jekyll时启用 */
  webServer: process.env.CI ? undefined : {
    command: 'wsl -e bash -c "cd /mnt/d/documents/genomics-in-healthcare.github.io && bundle exec jekyll serve --force_polling --host 0.0.0.0 --port 4000"',
    url: 'http://localhost:4000',
    reuseExistingServer: true,
    timeout: 120 * 1000,
    env: {
      JEKYLL_ENV: 'development'
    }
  },

  /* 输出目录 */
  outputDir: 'test-results/',
  
  /* 全局超时 */
  timeout: 30 * 1000,
  
  /* 期望超时 */
  expect: {
    timeout: 5000,
  },
});
