# Material Design 重构说明

## 概述

本网站已成功重构为使用Material Design设计系统，提供了现代化的用户界面和更好的用户体验。

## 主要变更

### 1. 设计系统
- **颜色系统**: 采用Material Design标准颜色调色板
- **字体**: 使用Roboto字体，符合Material Design规范
- **图标**: 集成Material Icons图标库
- **阴影**: 实现Material Design的elevation系统

### 2. 组件更新

#### 导航栏 (App Bar)
- 固定顶部导航栏
- 响应式设计，移动端显示汉堡菜单
- 滚动时动态阴影效果
- 支持键盘导航

#### 导航抽屉 (Navigation Drawer)
- 移动端侧边导航
- 平滑的打开/关闭动画
- 背景遮罩层
- 支持ESC键关闭

#### 卡片 (Cards)
- 所有内容区域使用卡片布局
- 悬停效果和阴影变化
- 圆角设计
- 内容分组清晰

#### 按钮 (Buttons)
- 多种按钮样式：主要、次要、文本按钮
- 涟漪点击效果
- 图标支持
- 悬停和焦点状态

#### 列表 (Lists)
- 新闻和文章列表使用Material Design列表样式
- 图标和文本组合
- 悬停效果

### 3. 布局文件更新

#### `_layouts/home.html`
- 英雄区域 (Hero Section) 使用渐变背景
- 卡片网格布局
- 最新动态列表

#### `_layouts/default.html`
- 标准页面布局
- 卡片包装内容

#### `_layouts/members.html`
- 成员网格布局
- 校友部分独立卡片

#### `_layouts/post.html`
- 文章页面布局
- 日期显示
- 卡片样式

#### `_layouts/publication.html`
- 论文列表布局
- 图标和标题

### 4. 样式文件

#### `static/css/material-design.css`
- 完整的Material Design CSS变量系统
- 响应式网格系统
- 动画和过渡效果
- 组件样式定义

#### `static/js/material-design.js`
- 导航交互逻辑
- 涟漪效果实现
- 表单验证
- 懒加载功能
- 无障碍支持

### 5. 响应式设计

#### 桌面端 (≥768px)
- 水平导航栏
- 多列网格布局
- 完整功能显示

#### 移动端 (<768px)
- 汉堡菜单导航
- 单列布局
- 触摸优化

#### 超小屏幕 (<480px)
- 紧凑布局
- 优化的触摸目标
- 简化的导航

### 6. 性能优化

#### 关键渲染路径
- 内联关键CSS
- 预加载重要资源
- 延迟加载非关键JavaScript

#### 图片优化
- 懒加载支持
- 响应式图片
- 预加载关键图片

#### 动画性能
- 使用CSS transforms
- 硬件加速
- 节流滚动事件

### 7. 无障碍功能

#### 键盘导航
- Tab键导航支持
- ESC键关闭模态框
- 焦点管理

#### 屏幕阅读器
- 适当的ARIA标签
- 语义化HTML
- 描述性alt文本

#### 颜色对比
- 符合WCAG标准
- 高对比度模式支持

## 文件结构

```
static/
├── css/
│   └── material-design.css          # Material Design样式
├── js/
│   └── material-design.js           # Material Design交互逻辑
_includes/
├── header.html                      # 更新的头部模板
└── footer.html                      # 更新的底部模板
_layouts/
├── default.html                     # 默认布局
├── home.html                        # 首页布局
├── members.html                     # 成员页面布局
├── post.html                        # 文章页面布局
└── publication.html                 # 论文页面布局
```

## 浏览器支持

- Chrome 60+
- Firefox 55+
- Safari 12+
- Edge 79+
- 移动端浏览器

## 使用方法

### 添加新的Material Design组件

1. 在`material-design.css`中定义样式
2. 在`material-design.js`中添加交互逻辑
3. 在布局文件中使用相应的CSS类

### 自定义主题

修改CSS变量来改变主题：

```css
:root {
  --md-primary: #your-color;
  --md-primary-dark: #your-dark-color;
  /* 其他变量... */
}
```

### 添加新页面

使用现有的布局文件或创建新的布局：

```html
{% include header.html %}
<div class="md-main-content">
  <div class="md-card md-fade-in">
    <div class="md-card__content">
      <!-- 页面内容 -->
    </div>
  </div>
</div>
{% include footer.html %}
```

## 维护说明

1. **更新Material Design组件**: 参考官方文档更新组件样式
2. **性能监控**: 定期检查页面加载性能
3. **浏览器兼容性**: 测试新功能在不同浏览器中的表现
4. **无障碍测试**: 使用屏幕阅读器测试可访问性

## 未来改进

1. 添加暗色主题支持
2. 实现更多Material Design组件
3. 优化移动端性能
4. 添加PWA功能
5. 实现更多动画效果

---

*此重构保持了原有网站的所有功能和内容，同时提供了现代化的Material Design用户体验。*
