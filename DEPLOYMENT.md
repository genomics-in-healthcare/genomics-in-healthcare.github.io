# GitHub Pages 部署指南

## 自动部署（推荐）

项目已配置 GitHub Actions 工作流，当代码推送到 `main` 分支时会自动构建并部署到 GitHub Pages。

### 工作流说明

1. **自动部署工作流** (`.github/workflows/deploy.yml`)
   - 在推送到 `main` 分支时触发
   - 自动安装依赖
   - 转换成员数据
   - 构建项目
   - 部署到 GitHub Pages

2. **构建检查工作流** (`.github/workflows/build-check.yml`)
   - 在 Pull Request 时触发
   - 检查构建是否成功
   - 不进行实际部署

### 启用 GitHub Pages

1. 进入仓库的 Settings
2. 找到 Pages 设置
3. 在 Source 部分选择 "GitHub Actions"
4. 保存设置

## 手动部署

如果需要手动部署，可以使用以下命令：

```bash
# 安装依赖
npm install

# 转换成员数据
npm run convert-members

# 构建项目
npm run build

# 部署到 GitHub Pages
npm run deploy
```

## 构建过程

构建过程包括以下步骤：

1. **转换成员数据** (`npm run convert-members`)
   - 读取 `_members/*.md` 文件
   - 转换为 JSON 格式
   - 保存到 `src/data/members.json`

2. **构建 React 应用** (`npm run build`)
   - 使用 Vite 构建
   - 输出到 `dist` 目录
   - 包含所有静态资源

3. **部署** (`npm run deploy`)
   - 使用 `gh-pages` 将 `dist` 目录部署到 `gh-pages` 分支

## 注意事项

- 确保 `base` 路径在 `vite.config.js` 中正确配置
- 静态资源路径会自动处理
- 成员数据会在构建时自动转换
- GitHub Actions 需要仓库启用 Pages 功能

## 故障排查

如果部署失败：

1. 检查 GitHub Actions 日志
2. 确保 `base` 路径配置正确
3. 检查成员数据转换是否成功
4. 验证静态资源路径是否正确











