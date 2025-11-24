# Jekyll 部署指南

## GitHub Pages（推荐）

仓库包含完整的 Jekyll 配置（`_config.yml`、`Gemfile` 等）。只需将内容推送到 `main`（或 Pages 设置中选择的分支），GitHub Pages 就会自动构建并发布站点。

1. 打开仓库 **Settings → Pages**
2. 在 **Source** 中选择 `main` 分支与 `/ (root)` 目录，或切换为 **GitHub Actions**（官方 Jekyll 工作流）
3. 保存后等待 “pages build and deployment” 工作流完成

> 如果构建失败，进入 **Actions** 查看日志，通常是 `_config.yml` 语法或 Gem 依赖问题。

## 本地构建与验证

```bash
bundle install
bundle exec jekyll build        # 只构建
bundle exec jekyll serve --livereload   # 本地预览
```

构建后的静态文件位于 `_site/`。你可以将该目录内容部署到任意静态托管服务。

## 手动部署到 gh-pages

若想手动管理部署历史，可在本地构建后推送 `_site`：

```bash
bundle exec jekyll build
git subtree push --prefix _site origin gh-pages
```

或使用 `gh-pages` 等部署工具将 `_site` 上传至专用分支。

## 常见问题

- **生成的链接出错**：确认 `_config.yml` 中的 `url` 与 `baseurl` 设置正确。
- **缺少依赖**：运行 `bundle install` 并检查 `Gemfile` 是否只使用 GitHub Pages 支持的插件。
- **需要 React 版本**：切换到 `react` 分支即可找到完整的 React/Vite 实现。











