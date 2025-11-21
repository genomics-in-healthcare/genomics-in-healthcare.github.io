# 网站自动化测试指南

## 概述

本项目使用 Playwright 作为自动化测试框架，为 Genomics and AI in Healthcare Lab 网站提供全面的测试覆盖。

## 测试类型

### 1. 冒烟测试 (Smoke Tests)
- **目的**: 快速验证网站基本功能
- **运行时间**: 2-5分钟
- **触发条件**: 每次代码推送
- **测试内容**: 页面加载、导航、关键元素显示

### 2. 回归测试 (Regression Tests)
- **目的**: 全面验证网站功能
- **运行时间**: 10-20分钟
- **触发条件**: Pull Request、手动触发
- **测试内容**: 所有页面功能、跨浏览器兼容性

### 3. 性能测试 (Performance Tests)
- **目的**: 验证网站性能指标
- **运行时间**: 5-10分钟
- **触发条件**: 定时任务、手动触发
- **测试内容**: 页面加载时间、资源加载、缓存效果

### 4. 移动端测试 (Mobile Tests)
- **目的**: 验证移动设备兼容性
- **运行时间**: 5-10分钟
- **触发条件**: Pull Request
- **测试内容**: 响应式设计、触摸交互

### 5. 无障碍测试 (Accessibility Tests)
- **目的**: 确保网站可访问性
- **运行时间**: 3-5分钟
- **触发条件**: 回归测试的一部分
- **测试内容**: 键盘导航、屏幕阅读器支持、颜色对比度

## 测试文件结构

```
tests/
├── homepage.spec.js          # 首页测试
├── members.spec.js           # 成员页面测试
├── navigation.spec.js        # 导航测试
├── performance.spec.js       # 性能测试
├── accessibility.spec.js     # 无障碍测试
├── api.spec.js              # API和链接测试
└── smoke.spec.js            # 冒烟测试
```

## 本地运行测试

### 环境要求
- Node.js 18+
- npm 或 yarn

### 安装依赖
```bash
npm install
```

### 安装浏览器
```bash
npm run test:install
```

### 运行测试

#### 运行所有测试
```bash
npm test
```

#### 运行特定测试类型
```bash
# 冒烟测试
npm run test:smoke

# 回归测试
npm run test:regression

# 性能测试
npm run test:performance
```

#### 运行特定浏览器
```bash
# 只运行Chrome测试
npx playwright test --project=chromium

# 只运行Firefox测试
npx playwright test --project=firefox

# 只运行Safari测试
npx playwright test --project=webkit
```

#### 运行特定测试文件
```bash
# 只运行首页测试
npx playwright test tests/homepage.spec.js

# 只运行成员页面测试
npx playwright test tests/members.spec.js
```

#### 调试模式
```bash
# 可视化调试
npm run test:ui

# 调试特定测试
npm run test:debug

# 有头模式运行
npm run test:headed
```

## CI/CD 集成

### GitHub Actions 工作流

#### 1. 自动化测试 (automated-testing.yml)
- **触发条件**: 
  - 推送到 main/develop 分支
  - Pull Request
  - 每天凌晨2点定时运行
  - 手动触发
- **测试内容**: 完整的测试套件

#### 2. 快速测试 (quick-test.yml)
- **触发条件**: 
  - 内容文件变更 (markdown, layouts, includes, static)
  - Pull Request
- **测试内容**: 冒烟测试 + 链接检查

### 测试报告

测试完成后会生成以下报告：
- HTML报告: `test-results/html-report/index.html`
- JSON报告: `test-results/results.json`
- JUnit报告: `test-results/results.xml`

## 测试配置

### Playwright 配置 (playwright.config.js)
- **基础URL**: https://genomics-in-healthcare.github.io
- **超时设置**: 30秒全局超时，5秒期望超时
- **重试策略**: CI环境重试2次
- **并行执行**: 支持并行测试
- **浏览器支持**: Chrome, Firefox, Safari, 移动端浏览器

### 测试环境
- **本地开发**: 自动启动Jekyll服务器
- **CI环境**: 使用生产环境URL

## 添加新测试

### 1. 创建测试文件
```javascript
// tests/new-feature.spec.js
const { test, expect } = require('@playwright/test');

test.describe('新功能测试', () => {
  test('功能描述', async ({ page }) => {
    await page.goto('/');
    // 测试逻辑
  });
});
```

### 2. 添加测试标签
```javascript
test('关键功能测试 @smoke', async ({ page }) => {
  // 测试逻辑
});
```

### 3. 更新package.json脚本
```json
{
  "scripts": {
    "test:new-feature": "playwright test tests/new-feature.spec.js"
  }
}
```

## 最佳实践

### 1. 测试编写
- 使用描述性的测试名称
- 保持测试独立，不依赖其他测试
- 使用适当的等待策略
- 添加必要的断言

### 2. 性能优化
- 使用并行执行
- 合理设置超时时间
- 避免不必要的等待
- 使用页面对象模式

### 3. 维护性
- 定期更新测试
- 及时修复失败的测试
- 保持测试代码简洁
- 添加适当的注释

## 故障排除

### 常见问题

#### 1. 测试超时
```bash
# 增加超时时间
npx playwright test --timeout=60000
```

#### 2. 浏览器安装问题
```bash
# 重新安装浏览器
npx playwright install --force
```

#### 3. 测试不稳定
- 检查网络连接
- 增加等待时间
- 使用更稳定的选择器

#### 4. 本地服务器问题
```bash
# 手动启动Jekyll服务器
bundle exec jekyll serve --host 0.0.0.0 --port 4000
```

## 监控和报告

### 测试结果监控
- GitHub Actions 状态检查
- 测试报告下载
- 失败测试通知

### 性能监控
- 页面加载时间跟踪
- 资源加载状态监控
- 缓存效果验证

## 贡献指南

1. 在添加新功能时，同时添加相应的测试
2. 确保所有测试通过后再提交代码
3. 定期运行完整测试套件
4. 及时修复失败的测试

## 联系信息

如有测试相关问题，请联系：
- 项目维护者
- 技术支持团队

---

*最后更新: 2024年10月*










