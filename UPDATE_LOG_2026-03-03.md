# 网站更新日志 - 2026年3月3日

## 更新概述

本次更新涉及两个主要页面的内容修改：
1. **新闻页面（News）**：添加两篇bioRxiv合作论文
2. **成员页面（Members）**：新增成员、修正格式、调整人员分类

---

## 一、新闻页面更新

### 更新内容

在 `src/data/posts.json` 中添加了以下新闻条目：

```json
{
  "title": "Two bioRxiv manuscripts in collaboration with Dr. Zhang and Dr. Qiu",
  "author": "",
  "time": "2026-01-26",
  "content": "Collaboration with Dr. Zhang and Dr. Qiu from Beijing AnZhen Hospital. \n\n(1) Tu Y, Hao K, Wang F, et al. Identification of prognostic aging-related gene sets and early-warning biomarkers of acute myocardial infarction[J]. bioRxiv, 2024: 2024.12. 27.630552. https://www.biorxiv.org/content/10.1101/2024.12.27.630552v1 \n\n(2) Tu Y., Fu Q., Li Y., et al. Deciphering the genetic landscape of Myocardial Infarction through integrative network and functional analysis[J]. bioRxiv, 2025: 2025.01. 02.630766. https://www.biorxiv.org/content/10.1101/2025.01.02.630766v1",
  "type": ""
}
```

**关键点**：
- 时间设置为 `2026-01-26`
- 内容中使用 `\n\n` 实现段落换行
- 将两篇论文信息合并为一条新闻

---

## 二、成员页面更新

### 更新内容

在 `src/data/members.json` 中进行了7项修改：

#### 1. 新增研究助理 - Zhang Yiran

```json
{
  "name": "Zhang Yiran",
  "startdate": ["2026-01-01"],
  "enddate": [""],
  "image": "/img/members/placeholder.jpg",
  "position": "Research Assistant",
  "description": "Zhang Yiran is a Research Assistant in Professor Zhang's lab. More information coming soon."
}
```

#### 2. 修正 Dr. Tu 的描述（移除引号）

```json
"description": "Dr. Tu received his Bachelor's, Master's, and Ph.D. in Computer Application Technology..."
```

#### 3. 修正 Wang Weixu 的描述（移除引号）

```json
"description": "Weixu earned his Bachelor's and Master's degrees in Computer Science and Technology..."
```

#### 4. 修正 Wang Yuchuan 的描述（移除引号）

```json
"description": "Yuchuan received his Bachelor's degree in Information Management and Information Systems..."
```

#### 5. 修正 Tan Yejun 的奖学金信息（移除HTML标签）

**修改前**：
```json
"description": "...He is also an awardee of <span class=\"fellowship-highlight\">HKPFS</span> and <span class=\"fellowship-highlight\">PPPFS</span>..."
```

**修改后**：
```json
"description": "...He is also an awardee of HKPFS and PPPFS..."
```

#### 6. 将 Zhu Yan 移至校友（Alumni）

```json
{
  "name": "Zhu Yan",
  "startdate": ["2023-09-01"],
  "enddate": ["2026-01-01"],  // 添加结束日期
  ...
}
```

#### 7. 将 Li Yixin 移至校友（Alumni）

```json
{
  "name": "Li Yixin",
  "startdate": ["2024-09-01"],
  "enddate": ["2026-01-01"],  // 添加结束日期
  ...
}
```

---

## 三、遇到的技术问题

### 问题描述

在更新数据文件（`posts.json` 和 `members.json`）后执行 `npm run build`，发现：

1. **现象**：构建输出显示 `✓ 4 modules transformed`（正常应该是 `✓ 257 modules transformed`）
2. **结果**：生成的 `dist/` 目录中的打包文件（`index-*.js`）不包含更新的数据
3. **根本原因**：Vite 缓存问题

### 问题根源分析

项目使用特殊的构建流程：
```bash
npm run build
  ↓
vite build  →  sync-dist.js
```

`sync-dist.js` 脚本会将 `dist/` 中的内容复制到项目根目录（用于 GitHub Pages 部署），这会导致：

1. **根目录** 的 `index.html` 被更新，指向**已编译的资源文件**：
   ```html
   <script type="module" crossorigin src="/assets/index-D9ovmnni.js"></script>
   ```

2. 下次运行 `vite build` 时，Vite 检测到 `index.html` 已经指向编译后的资源，认为**不需要重新编译源代码**，直接跳过大部分模块处理

3. 因此数据更新无法进入最终的打包文件

### 核心技术要点

**Vite 的构建行为**：
- Vite 使用 `index.html` 作为入口点
- 如果 `index.html` 引用的是 `/src/main.tsx`（开发模式），Vite 会完整编译所有源代码
- 如果 `index.html` 引用的是 `/assets/index-*.js`（生产资源），Vite 认为已完成构建，只处理最小必要模块

---

## 四、解决方案

### 方案实施

#### 步骤 1：创建重置脚本

在 `scripts/use-dev-index.js` 中修复了 Windows 路径处理问题：

```javascript
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

// 正确处理 Windows 路径
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const projectRoot = path.resolve(__dirname, '..');

const indexDevPath = path.join(projectRoot, 'index.dev.html');
const indexPath = path.join(projectRoot, 'index.html');

// 将 index.dev.html 复制为 index.html（恢复开发模式）
fs.copyFileSync(indexDevPath, indexPath);
console.log('✓ Copied index.dev.html to index.html (dev mode)');
```

**关键改进**：
- 使用 `fileURLToPath(import.meta.url)` 替代 `new URL(import.meta.url).pathname`
- 解决了 Windows 环境下的路径编码问题

#### 步骤 2：修改构建脚本

在 `package.json` 中更新 `build` 命令：

```json
{
  "scripts": {
    "build": "node scripts/use-dev-index.js && npm run extract-publications && npm run convert-members && npm run convert-posts && vite build && npm run copy-404 && node scripts/sync-dist.js"
  }
}
```

**执行顺序**：
1. `use-dev-index.js` - 将 `index.html` 重置为开发模式（指向 `/src/main.tsx`）
2. `extract-publications` - 提取出版物数据
3. `convert-members` - 转换成员数据
4. `convert-posts` - 转换新闻数据
5. `vite build` - 完整编译所有源代码（257个模块）
6. `copy-404` - 复制404页面
7. `sync-dist.js` - 同步到根目录（用于部署）

#### 步骤 3：清理缓存并重新构建

```bash
# 删除旧的构建产物
Remove-Item -Recurse -Force dist

# 执行完整构建
npm run build
```

### 验证成功标志

构建输出显示：
```
✓ Copied index.dev.html to index.html (dev mode)
...
vite v5.4.21 building for production...
✓ 257 modules transformed.  # ← 完整编译成功
dist/index.html                    0.46 kB │ gzip:  0.30 kB
dist/assets/index-CYUActok.js    170.14 kB │ gzip: 54.88 kB
✓ built in 1.09s
```

使用 `Select-String` 验证数据已包含在打包文件中：
```powershell
Select-String -Path "dist/assets/index-*.js" -Pattern "Zhang Yiran"
# 返回 True - 确认新数据已包含
```

---

## 五、部署

### 部署步骤

```bash
# 暂存所有更改
git add .

# 提交更改
git commit -m "Update News and Members pages: Add bioRxiv articles and member updates"

# 推送到 GitHub
git push origin gh-pages
```

### 部署结果

```
remote: Resolving deltas: 100% (12/12), completed with 12 local objects.
To https://github.com/genomics-in-healthcare/genomics-in-healthcare.github.io.git
   c05337b3..0a1a094e  gh-pages -> gh-pages
```

网站将在几分钟内自动更新：https://genomics-in-healthcare.github.io/

---

## 六、总结

### 技术要点回顾

1. **数据驱动架构**：新闻和成员数据存储在 JSON 文件中，通过 React 组件动态渲染
2. **构建流程关键**：必须确保 `vite build` 时使用开发模式的 `index.html`
3. **Windows 兼容性**：使用 `fileURLToPath` 正确处理 ESM 模块路径
4. **缓存机制理解**：Vite 根据 `index.html` 的引用状态决定编译范围

### 最佳实践

1. **修改数据后的构建流程**：
   ```bash
   node scripts/use-dev-index.js  # 重置为开发模式
   npm run build                   # 完整构建
   ```

2. **验证构建成功**：
   - 检查模块转换数量（应为 257，而非 4）
   - 在 `dist/assets/index-*.js` 中搜索新添加的关键字

3. **避免手动修改 `index.html`**：始终通过脚本管理，防止状态不一致

### 文件修改清单

- ✅ `src/data/posts.json` - 新增 2026-01-26 新闻条目
- ✅ `src/data/members.json` - 7项成员信息更新
- ✅ `scripts/use-dev-index.js` - 修复 Windows 路径问题
- ✅ `package.json` - 更新 build 脚本
- ✅ `dist/` - 重新生成所有构建产物

---

## 七、待办事项

- [ ] 为 Zhang Yiran 添加个人照片（替换 placeholder.jpg）
- [ ] 验证网站实时部署效果
- [ ] 考虑添加自动化测试确保构建产物包含最新数据

---

**文档创建时间**：2026年3月3日  
**更新类型**：数据更新 + 构建流程修复  
**影响范围**：新闻页面、成员页面、构建系统  
**技术栈**：React + Vite + TypeScript + GitHub Pages
