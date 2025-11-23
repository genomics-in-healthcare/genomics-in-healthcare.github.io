# 快速启动指南

## 问题：空白页面

如果你看到空白页面，可能是因为：

1. **你访问的是 Jekyll 服务器（端口 4000）**，但我们已经迁移到 React
2. **需要启动 React 开发服务器**

## 解决方案

### 步骤 1: 停止 Jekyll 服务器

如果 Jekyll 服务器正在运行（端口 4000），请先停止它（按 `Ctrl+C`）

### 步骤 2: 启动 React 开发服务器

运行以下命令：

```bash
npm run dev
```

### 步骤 3: 访问正确的地址

React 开发服务器会在 **http://localhost:5173** 启动（不是 4000 端口）

Vite 会自动打开浏览器，或者你可以手动访问：
- http://localhost:5173
- http://127.0.0.1:5173

## 如果仍然看到空白页面

### 检查浏览器控制台

1. 按 `F12` 打开开发者工具
2. 查看 Console 标签页是否有错误信息
3. 查看 Network 标签页，检查资源是否加载成功

### 常见问题

1. **CSS 文件未加载**
   - 检查 `static/css/material-design.css` 和 `static/css/custom.css` 是否存在
   - 检查浏览器 Network 标签页，看 CSS 文件是否返回 404

2. **JavaScript 错误**
   - 查看浏览器控制台的错误信息
   - 确保所有依赖都已安装：`npm install`

3. **路由问题**
   - 确保访问的是根路径 `/` 而不是其他路径
   - 开发环境中，basename 已设置为空，所以直接访问 `/` 即可

## 开发 vs 生产

- **开发环境**：`npm run dev` → http://localhost:5173
- **生产构建**：`npm run build` → 生成 `dist` 目录
- **预览生产版本**：`npm run preview`

## 端口说明

- **4000**: Jekyll 开发服务器（旧版本，已不再使用）
- **5173**: Vite/React 开发服务器（新版本，当前使用）

## 需要帮助？

如果问题仍然存在，请：
1. 检查浏览器控制台的错误信息
2. 确认 `node_modules` 目录存在
3. 尝试删除 `node_modules` 和 `package-lock.json`，然后重新运行 `npm install`

