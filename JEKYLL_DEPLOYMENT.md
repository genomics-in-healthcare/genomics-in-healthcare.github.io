# Jekyll 部署指南

本指南说明如何使用 Jekyll 框架部署网站。

## 📋 当前状态

网站已配置为使用 **Jekyll** 作为主要部署框架。React 版本的代码已保留但不会自动部署。

## 🚀 自动部署（推荐）

### GitHub Actions 自动部署

网站已配置 GitHub Actions 工作流，当您推送到 `main` 分支时，会自动构建并部署 Jekyll 网站。

**工作流文件**: `.github/workflows/deploy-jekyll.yml`

**触发条件**:
- 推送到 `main` 或 `jekyll` 分支
- 手动触发（在 GitHub Actions 页面点击 "Run workflow"）

**部署步骤**:
1. 提交更改到 `main` 分支
2. GitHub Actions 会自动：
   - 安装 Ruby 和依赖
   - 构建 Jekyll 网站
   - 部署到 GitHub Pages

### 启用 GitHub Pages

1. 进入仓库的 **Settings** → **Pages**
2. 在 **Source** 部分，选择：
   - **Source**: `GitHub Actions`
3. 保存设置

## 🔧 本地开发

### 前置要求

- Ruby 3.2 或更高版本
- Bundler gem

### 安装依赖

```bash
bundle install
```

### 启动本地服务器

**Windows (使用 WSL)**:
```bash
# 使用提供的批处理文件
start-jekyll.bat

# 或手动运行
wsl -e bash -c "cd /mnt/d/documents/genomics-in-healthcare.github.io && bundle exec jekyll serve --force_polling --host 0.0.0.0 --port 4000"
```

**Linux/Mac**:
```bash
bundle exec jekyll serve
```

访问 `http://localhost:4000` 查看网站。

### 构建静态网站

```bash
bundle exec jekyll build
```

构建输出将保存在 `_site/` 目录中。

## 📁 项目结构

```
.
├── _config.yml          # Jekyll 配置文件
├── _layouts/            # 页面布局模板
├── _includes/           # 可重用组件
├── _posts/              # 博客文章
├── _members/            # 成员信息
├── _pets/               # 宠物信息
├── _publications/       # 出版物
├── _tags/               # 标签页面
├── static/              # 静态资源（图片、CSS等）
├── index.md             # 首页
├── Gemfile              # Ruby 依赖
└── .github/workflows/   # GitHub Actions 工作流
```

## 🔄 从 React 切换到 Jekyll

已完成以下更改：

1. ✅ 将 React 的 `index.html` 重命名为 `react-index.html.bak`
2. ✅ 更新 Jekyll 配置，排除 React 相关文件
3. ✅ 配置 GitHub Actions 工作流在 `main` 分支自动部署 Jekyll
4. ✅ 修改 React 部署工作流，仅在 `react` 分支触发

## 📝 内容管理

### 添加新闻/博客文章

在 `_posts/` 目录中创建新的 Markdown 文件，文件名格式：`YYYY-MM-DD-title.md`

```markdown
---
layout: post
title: "文章标题"
date: 2025-01-01
categories: news
---

文章内容...
```

### 添加成员

在 `_members/` 目录中创建新的 Markdown 文件，例如 `newmember.md`

```markdown
---
name: "成员姓名"
position: "职位"
email: "email@example.com"
---

成员简介...
```

### 更新首页

编辑 `index.md` 文件，它使用 `home` 布局。

## 🛠️ 故障排查

### 问题 1: Jekyll 构建失败

**解决方案**:
- 检查 `_config.yml` 语法是否正确（YAML 格式）
- 确认所有必需的插件在 `Gemfile` 中
- 查看 GitHub Actions 日志获取详细错误信息

### 问题 2: 页面显示 404

**解决方案**:
- 确认 GitHub Pages 设置正确（Source: GitHub Actions）
- 检查 `baseurl` 在 `_config.yml` 中的配置（应为空字符串 `""`）
- 确认文件路径和 permalink 配置正确

### 问题 3: 样式或资源加载失败

**解决方案**:
- 检查静态资源路径是否正确（使用 `{{ site.baseurl }}/static/...`）
- 确认资源文件在 `static/` 目录中
- 检查 `_config.yml` 中的 `url` 配置

### 问题 4: 本地服务器无法启动

**解决方案**:
- 确保已安装 Ruby 和 Bundler
- 运行 `bundle install` 安装依赖
- 检查端口 4000 是否被占用
- 在 Windows 上，确保使用 WSL 或修改 `start-jekyll.bat`

## 🔄 切换回 React（如果需要）

如果您需要切换回 React 版本：

1. 将 `react-index.html.bak` 重命名回 `index.html`
2. 在 GitHub Pages 设置中选择 "GitHub Actions"
3. 确保 `.github/workflows/deploy.yml` 在 `main` 分支触发
4. 推送到 `main` 分支

或者，React 版本可以在 `react` 分支独立部署。

## 📚 相关资源

- [Jekyll 官方文档](https://jekyllrb.com/docs/)
- [GitHub Pages 文档](https://docs.github.com/en/pages)
- [项目 README](./README.md)
- [React 版本文档](./README-REACT.md)

## ✅ 验证清单

部署前请确认：

- [ ] `_config.yml` 配置正确
- [ ] `Gemfile` 包含所有必需的依赖
- [ ] GitHub Pages 设置选择 "GitHub Actions"
- [ ] 本地测试通过（`bundle exec jekyll serve`）
- [ ] 所有静态资源路径正确
- [ ] 成员和文章内容完整

---

**提示**: 建议在每次部署前先在本地测试，确保一切正常。

