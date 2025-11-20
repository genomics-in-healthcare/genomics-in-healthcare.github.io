# 网站自动化测试系统

## 🚀 快速开始

### 安装和运行
```bash
# 1. 安装依赖
npm install

# 2. 安装浏览器
npm run test:install

# 3. 运行测试
npm test
```

## 📋 测试覆盖

### ✅ 已实现的测试类型

1. **首页测试** (`homepage.spec.js`)
   - 页面标题验证
   - 英雄区域内容检查
   - 实验室图片显示
   - 资助方Logo验证
   - 响应式设计测试

2. **成员页面测试** (`members.spec.js`)
   - 成员列表显示
   - 成员照片加载
   - 成员信息完整性
   - 校友部分验证

3. **导航测试** (`navigation.spec.js`)
   - 主导航链接功能
   - 页脚链接验证
   - 移动端导航
   - 返回顶部功能

4. **性能测试** (`performance.spec.js`)
   - 页面加载时间
   - 图片加载性能
   - 移动端性能
   - 缓存效果验证

5. **无障碍测试** (`accessibility.spec.js`)
   - 页面标题结构
   - 图片alt属性
   - 链接可访问性
   - 键盘导航支持

6. **API测试** (`api.spec.js`)
   - 内部链接有效性
   - 外部链接检查
   - 静态资源加载
   - HTTP状态码验证

7. **冒烟测试** (`smoke.spec.js`)
   - 关键功能快速验证
   - 基本页面加载
   - 移动端兼容性

## 🔧 测试命令

```bash
# 基础测试命令
npm test                    # 运行所有测试
npm run test:smoke         # 运行冒烟测试
npm run test:regression    # 运行回归测试
npm run test:performance   # 运行性能测试

# 调试命令
npm run test:headed        # 有头模式运行
npm run test:ui           # 可视化界面
npm run test:debug        # 调试模式

# 特定浏览器
npx playwright test --project=chromium
npx playwright test --project=firefox
npx playwright test --project=webkit

# 特定测试文件
npx playwright test tests/homepage.spec.js
npx playwright test tests/members.spec.js
```

## 🤖 自动化集成

### GitHub Actions 工作流

1. **自动化测试** (`.github/workflows/automated-testing.yml`)
   - 推送到主分支时触发
   - Pull Request时运行
   - 每天定时运行
   - 支持手动触发

2. **快速测试** (`.github/workflows/quick-test.yml`)
   - 内容文件变更时触发
   - 快速验证基本功能
   - 链接有效性检查

### 测试报告

- **HTML报告**: `test-results/html-report/index.html`
- **JSON报告**: `test-results/results.json`
- **JUnit报告**: `test-results/results.xml`

## 📊 测试统计

### 当前测试数量
- **总测试用例**: 50+ 个
- **测试文件**: 7 个
- **浏览器支持**: 5 个 (Chrome, Firefox, Safari, Mobile Chrome, Mobile Safari)
- **测试类型**: 7 种

### 覆盖范围
- ✅ 首页功能
- ✅ 成员页面
- ✅ 导航系统
- ✅ 性能指标
- ✅ 无障碍功能
- ✅ API和链接
- ✅ 移动端兼容性

## 🛠️ 维护指南

### 添加新测试
1. 在 `tests/` 目录创建新的 `.spec.js` 文件
2. 使用 `@smoke` 标签标记关键测试
3. 更新 `package.json` 脚本（如需要）
4. 运行测试确保通过

### 更新现有测试
1. 检查测试是否仍然有效
2. 更新过时的选择器
3. 调整超时设置（如需要）
4. 验证测试覆盖范围

### 故障排除
- 查看测试报告了解失败原因
- 检查网络连接和服务器状态
- 更新浏览器和依赖
- 参考 `test-setup.md` 获取详细帮助

## 📈 性能基准

### 目标性能指标
- **首页加载时间**: < 3秒
- **成员页面加载**: < 5秒
- **移动端加载**: < 4秒
- **图片加载率**: > 90%

### 监控指标
- 页面加载时间
- 资源加载状态
- 缓存命中率
- 错误率统计

## 🔍 测试策略

### 测试金字塔
1. **单元测试** (基础层)
   - 组件功能验证
   - 数据处理测试

2. **集成测试** (中间层)
   - 页面交互测试
   - API集成测试

3. **端到端测试** (顶层)
   - 完整用户流程
   - 跨浏览器兼容性

### 测试优先级
1. **P0 - 关键功能**: 首页、导航、基本页面加载
2. **P1 - 重要功能**: 成员页面、性能指标
3. **P2 - 增强功能**: 无障碍、移动端优化

## 📚 相关文档

- [详细测试指南](./TESTING.md)
- [环境设置指南](./test-setup.md)
- [Playwright官方文档](https://playwright.dev/)

## 🤝 贡献

欢迎为测试系统贡献代码！请遵循以下步骤：

1. Fork 项目
2. 创建功能分支
3. 添加或修改测试
4. 运行测试确保通过
5. 提交 Pull Request

## 📞 支持

如有问题或建议，请：
- 查看现有文档
- 搜索已知问题
- 创建新的 Issue
- 联系维护团队

---

*最后更新: 2024年10月 | 测试系统版本: 1.0.0*









