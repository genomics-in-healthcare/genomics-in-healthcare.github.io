# 测试环境设置指南

## 快速开始

### 1. 安装Node.js
确保您的系统已安装 Node.js 18 或更高版本：
```bash
node --version
npm --version
```

### 2. 克隆项目并安装依赖
```bash
git clone https://github.com/your-username/genomics-in-healthcare.github.io.git
cd genomics-in-healthcare.github.io
npm install
```

### 3. 安装Playwright浏览器
```bash
npm run test:install
```

### 4. 运行测试
```bash
# 运行所有测试
npm test

# 运行冒烟测试
npm run test:smoke
```

## 详细设置

### Windows 设置

#### 1. 安装Node.js
- 访问 [Node.js官网](https://nodejs.org/)
- 下载并安装 LTS 版本
- 验证安装：`node --version`

#### 2. 安装Git
- 访问 [Git官网](https://git-scm.com/)
- 下载并安装Git for Windows
- 验证安装：`git --version`

#### 3. 安装依赖
```powershell
# 在项目根目录运行
npm install
```

#### 4. 安装Playwright
```powershell
npx playwright install --with-deps
```

### macOS 设置

#### 1. 安装Homebrew
```bash
/bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"
```

#### 2. 安装Node.js
```bash
brew install node
```

#### 3. 安装依赖
```bash
npm install
npx playwright install --with-deps
```

### Linux 设置

#### Ubuntu/Debian
```bash
# 安装Node.js
curl -fsSL https://deb.nodesource.com/setup_18.x | sudo -E bash -
sudo apt-get install -y nodejs

# 安装依赖
npm install
npx playwright install --with-deps
```

#### CentOS/RHEL
```bash
# 安装Node.js
curl -fsSL https://rpm.nodesource.com/setup_18.x | sudo bash -
sudo yum install -y nodejs

# 安装依赖
npm install
npx playwright install --with-deps
```

## 开发环境设置

### 1. 启动Jekyll服务器
```bash
# 安装Jekyll依赖
bundle install

# 启动本地服务器
bundle exec jekyll serve --host 0.0.0.0 --port 4000
```

### 2. 配置测试环境
测试会自动检测本地服务器，如果检测到 `http://localhost:4000` 可用，会使用本地环境；否则使用生产环境。

### 3. 运行特定测试
```bash
# 只测试首页
npx playwright test tests/homepage.spec.js

# 只测试成员页面
npx playwright test tests/members.spec.js

# 调试模式
npx playwright test --debug

# 可视化模式
npx playwright test --ui
```

## IDE 配置

### Visual Studio Code

#### 1. 安装扩展
- Playwright Test for VSCode
- JavaScript (ES6) code snippets
- GitLens

#### 2. 配置设置
在 `.vscode/settings.json` 中添加：
```json
{
  "playwright.reuseBrowser": true,
  "playwright.showTrace": true
}
```

### WebStorm/IntelliJ

#### 1. 安装插件
- Playwright Plugin
- Node.js Plugin

#### 2. 配置运行配置
- 创建新的 Playwright 运行配置
- 设置测试目录为 `tests/`
- 配置环境变量

## 环境变量

### 本地开发
```bash
# .env.local
PLAYWRIGHT_BASE_URL=http://localhost:4000
PLAYWRIGHT_HEADLESS=false
PLAYWRIGHT_DEBUG=true
```

### CI/CD
```bash
# GitHub Actions 环境变量
PLAYWRIGHT_BASE_URL=https://genomics-in-healthcare.github.io
PLAYWRIGHT_HEADLESS=true
PLAYWRIGHT_DEBUG=false
```

## 故障排除

### 常见问题

#### 1. 权限问题 (Windows)
```powershell
# 以管理员身份运行PowerShell
Set-ExecutionPolicy -ExecutionPolicy RemoteSigned -Scope CurrentUser
```

#### 2. 网络问题
```bash
# 使用国内镜像
npm config set registry https://registry.npmmirror.com
npx playwright install --with-deps
```

#### 3. 浏览器安装失败
```bash
# 手动安装浏览器
npx playwright install chromium
npx playwright install firefox
npx playwright install webkit
```

#### 4. 端口冲突
```bash
# 使用不同端口启动Jekyll
bundle exec jekyll serve --port 4001
```

### 调试技巧

#### 1. 启用调试模式
```bash
# 有头模式运行
npx playwright test --headed

# 调试模式
npx playwright test --debug

# 慢速模式
npx playwright test --slow-mo=1000
```

#### 2. 查看测试报告
```bash
# 生成HTML报告
npx playwright show-report

# 查看测试结果
npx playwright test --reporter=html
```

#### 3. 截图和视频
测试失败时会自动生成截图和视频，保存在 `test-results/` 目录中。

## 性能优化

### 1. 并行执行
```bash
# 使用多个工作进程
npx playwright test --workers=4
```

### 2. 选择特定浏览器
```bash
# 只运行Chrome测试
npx playwright test --project=chromium
```

### 3. 缓存优化
```bash
# 使用缓存
npx playwright test --reuse-browser
```

## 持续集成

### GitHub Actions
测试会自动在以下情况下运行：
- 推送到主分支
- 创建Pull Request
- 定时任务（每天凌晨2点）
- 手动触发

### 本地预提交钩子
```bash
# 安装husky
npm install --save-dev husky

# 设置预提交钩子
npx husky add .husky/pre-commit "npm run test:smoke"
```

## 更新和维护

### 1. 更新依赖
```bash
# 更新所有依赖
npm update

# 更新Playwright
npm update @playwright/test
npx playwright install
```

### 2. 更新测试
- 定期检查测试是否仍然有效
- 更新过时的选择器
- 添加新功能的测试

### 3. 清理
```bash
# 清理测试结果
rm -rf test-results/

# 清理node_modules
rm -rf node_modules/
npm install
```

---

*如有问题，请查看 [TESTING.md](./TESTING.md) 或联系维护团队。*











