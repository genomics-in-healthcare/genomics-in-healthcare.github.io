# Git 分支工作流说明

## 分支结构

- **main 分支**: 包含完整的项目（Jekyll + React）
- **react 分支**: 只包含 React 相关代码（已移除 Jekyll 文件）

## 如何在分支之间切换

### 1. 切换到 main 分支（编辑 Jekyll 版本）

```bash
git checkout main
```

切换到 main 分支后，所有 Jekyll 文件都会恢复，你可以正常编辑 Jekyll 相关的内容。

### 2. 切换到 react 分支（编辑 React 版本）

```bash
git checkout react
```

切换到 react 分支后，Jekyll 文件会被移除，只保留 React 相关代码。

### 3. 查看当前所在分支

```bash
git branch
# 或者
git status
```

当前分支前面会有 `*` 标记。

## 工作流程示例

### 场景1: 在 main 分支上编辑 Jekyll 内容

```bash
# 1. 切换到 main 分支
git checkout main

# 2. 编辑 Jekyll 文件（例如 _config.yml, _posts/ 等）
# ... 进行编辑 ...

# 3. 提交更改
git add .
git commit -m "Update Jekyll configuration"

# 4. 推送到远程
git push origin main
```

### 场景2: 在 react 分支上编辑 React 代码

```bash
# 1. 切换到 react 分支
git checkout react

# 2. 编辑 React 文件（例如 src/ 目录下的文件）
# ... 进行编辑 ...

# 3. 提交更改
git add .
git commit -m "Update React components"

# 4. 推送到远程
git push origin react
```

### 场景3: 同时维护两个分支

```bash
# 在 main 分支工作
git checkout main
# ... 编辑 Jekyll 文件 ...
git add .
git commit -m "Jekyll updates"
git push origin main

# 切换到 react 分支工作
git checkout react
# ... 编辑 React 文件 ...
git add .
git commit -m "React updates"
git push origin react
```

## 重要提示

1. **切换分支前先提交或暂存更改**
   ```bash
   # 如果有未提交的更改，先提交
   git add .
   git commit -m "Your changes"
   
   # 或者暂存更改（stash）
   git stash
   git checkout main
   # 工作完成后切换回来
   git checkout react
   git stash pop
   ```

2. **两个分支是独立的**
   - 在 main 分支的更改不会自动出现在 react 分支
   - 在 react 分支的更改不会自动出现在 main 分支
   - 如果需要同步，需要手动合并或 cherry-pick

3. **查看分支差异**
   ```bash
   # 查看两个分支的差异
   git diff main..react
   
   # 查看哪些文件不同
   git diff --name-only main..react
   ```

4. **合并更改（如果需要）**
   ```bash
   # 将 react 分支的更改合并到 main
   git checkout main
   git merge react
   
   # 或者将 main 分支的更改合并到 react
   git checkout react
   git merge main
   ```

## 恢复文件

如果误删了文件，可以从另一个分支恢复：

```bash
# 从 main 分支恢复 Jekyll 文件到 react 分支
git checkout react
git checkout main -- _config.yml

# 从 react 分支恢复 React 文件到 main 分支
git checkout main
git checkout react -- src/App.jsx
```

## 推荐工作流程

1. **日常开发**: 根据需要在对应分支工作
2. **新功能**: 在对应分支创建功能分支
3. **同步内容**: 定期合并两个分支的共享内容（如静态资源、数据文件等）

