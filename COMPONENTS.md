# React 组件库文档

本文档介绍项目中可用的React组件及其使用方法。

## 📁 组件结构

```
src/components/
├── ui/              # 通用UI组件（基础组件）
│   ├── Button.jsx
│   ├── Card.jsx
│   ├── Link.jsx
│   ├── Image.jsx
│   ├── Section.jsx
│   └── Container.jsx
├── common/          # 业务通用组件
│   ├── HeroSection.jsx
│   ├── ImageGallery.jsx
│   ├── NewsItem.jsx
│   ├── MemberCard.jsx
│   └── LogoList.jsx
├── Header.jsx       # 页面头部组件
├── Footer.jsx       # 页面底部组件
└── Layout.jsx       # 布局组件
```

## 🎨 UI组件（基础组件）

### Button - 按钮组件

通用按钮组件，支持多种样式变体。

```jsx
import { Button } from '../components/ui'

// 文本按钮（默认）
<Button onClick={handleClick}>点击我</Button>

// 填充按钮
<Button variant="contained">提交</Button>

// 轮廓按钮
<Button variant="outlined">取消</Button>

// 不同尺寸
<Button size="small">小按钮</Button>
<Button size="medium">中按钮</Button>
<Button size="large">大按钮</Button>

// 激活状态
<Button active>激活按钮</Button>

// 禁用状态
<Button disabled>禁用按钮</Button>
```

**Props:**
- `variant`: `'text' | 'contained' | 'outlined'` - 按钮样式变体
- `size`: `'small' | 'medium' | 'large'` - 按钮大小
- `active`: `boolean` - 是否为激活状态
- `disabled`: `boolean` - 是否禁用
- `onClick`: `function` - 点击事件处理函数

### Card - 卡片组件

通用卡片容器组件。

```jsx
import { Card } from '../components/ui'

// 基础卡片
<Card>
  <h3>标题</h3>
  <p>内容</p>
</Card>

// 带阴影的卡片
<Card elevated>
  <p>有阴影效果</p>
</Card>

// 带边框的卡片
<Card outlined>
  <p>有边框</p>
</Card>
```

**Props:**
- `elevated`: `boolean` - 是否有阴影提升效果
- `outlined`: `boolean` - 是否有边框

### Link - 链接组件

通用链接组件，支持内部路由和外部链接。

```jsx
import { Link } from '../components/ui'

// 内部路由链接
<Link to="/news">新闻</Link>

// 外部链接
<Link href="https://example.com" external>外部网站</Link>

// 按钮样式链接
<Link to="/members" variant="button">成员</Link>

// 标签样式链接
<Link to="/tags/ai" variant="tag">#AI</Link>
```

**Props:**
- `to`: `string` - 内部路由路径
- `href`: `string` - 外部链接URL
- `external`: `boolean` - 是否为外部链接
- `variant`: `'default' | 'button' | 'tag'` - 链接样式变体

### Image - 图片组件

通用图片组件，自动处理base URL。

```jsx
import { Image } from '../components/ui'

// 基础图片
<Image src="/img/logo.png" alt="Logo" />

// 自定义样式
<Image 
  src="/img/photo.jpg" 
  alt="照片"
  style={{ width: '100%', borderRadius: '8px' }}
/>

// 禁用懒加载
<Image src="/img/hero.jpg" alt="Hero" lazy={false} />
```

**Props:**
- `src`: `string` - 图片路径（相对于static目录）
- `alt`: `string` - 图片描述
- `lazy`: `boolean` - 是否懒加载（默认true）

### Section - 区块组件

通用区块组件，用于页面布局。

```jsx
import { Section } from '../components/ui'

// 基础区块
<Section>
  <h2>标题</h2>
  <p>内容</p>
</Section>

// 居中区块
<Section variant="centered">
  <p>居中内容</p>
</Section>

// 全宽区块
<Section variant="fullwidth">
  <p>全宽内容</p>
</Section>

// 带背景的区块
<Section background>
  <p>有背景色</p>
</Section>
```

**Props:**
- `variant`: `'default' | 'centered' | 'fullwidth'` - 区块样式变体
- `background`: `boolean` - 是否有背景色

### Container - 容器组件

通用容器组件，统一最大宽度和内边距。

```jsx
import { Container } from '../components/ui'

// 小容器（最大800px）
<Container size="small">
  <p>内容</p>
</Container>

// 中等容器（最大1200px，默认）
<Container size="medium">
  <p>内容</p>
</Container>

// 大容器（最大1400px）
<Container size="large">
  <p>内容</p>
</Container>

// 全宽容器
<Container size="full">
  <p>内容</p>
</Container>
```

**Props:**
- `size`: `'small' | 'medium' | 'large' | 'full'` - 容器大小

## 🏢 业务组件

### HeroSection - 英雄区块组件

首页大图背景区域组件。

```jsx
import { HeroSection } from '../components/common'

<HeroSection backgroundImage="/img/logo/homepage_background.png">
  <h1>我们的使命是...</h1>
</HeroSection>
```

**Props:**
- `backgroundImage`: `string` - 背景图片路径

### ImageGallery - 图片画廊组件

图片画廊组件，支持多种布局。

```jsx
import { ImageGallery } from '../components/common'

const images = [
  { src: '/img/lab1.jpg', alt: '实验室1' },
  { src: '/img/lab2.jpg', alt: '实验室2' },
  { src: '/img/lab3.jpg', alt: '实验室3' }
]

// 行布局（默认）
<ImageGallery images={images} layout="row" />

// 网格布局
<ImageGallery images={images} layout="grid" columns={3} />

// 瀑布流布局
<ImageGallery images={images} layout="masonry" />
```

**Props:**
- `images`: `Array` - 图片数组 `[{src, alt, ...}]`
- `layout`: `'grid' | 'row' | 'masonry'` - 布局方式
- `columns`: `number` - 网格列数（仅grid布局）

### NewsItem - 新闻条目组件

新闻文章条目组件。

```jsx
import { NewsItem } from '../components/common'

const post = {
  date: '2025-01-15',
  content: '## 新闻标题\n\n新闻内容...',
  author: 'John Doe',
  tags: ['AI', 'Research']
}

const formatDate = (dateString) => {
  // 格式化日期
  return '15/01/25'
}

<NewsItem post={post} formatDate={formatDate} />
```

**Props:**
- `post`: `Object` - 新闻文章对象
- `formatDate`: `Function` - 日期格式化函数

### MemberCard - 成员卡片组件

成员信息卡片组件。

```jsx
import { MemberCard } from '../components/common'

const member = {
  name: 'John Doe',
  image: '/img/members/john.jpg',
  altimage: '/img/members/john-alt.jpg',
  pronouns: 'Assistant Professor',
  email: 'john@example.com',
  website: 'https://johndoe.com',
  orcid: '0000-0000-0000-0000',
  linkedIn: 'johndoe',
  description: 'Research interests...'
}

<MemberCard member={member} />
```

**Props:**
- `member`: `Object` - 成员数据对象

### LogoList - Logo列表组件

用于展示合作伙伴、赞助商等Logo。

```jsx
import { LogoList } from '../components/common'

const logos = [
  { src: '/img/logo/partner1.png', alt: 'Partner 1' },
  { src: '/img/logo/partner2.png', alt: 'Partner 2' }
]

<LogoList logos={logos} title="Research Supported By" />
```

**Props:**
- `logos`: `Array` - Logo数组 `[{src, alt, ...}]`
- `title`: `string` - 标题（可选）

## 📝 使用示例

### 完整页面示例

```jsx
import { HeroSection, ImageGallery, LogoList, Section, Container } from '../components/common'
import { Card } from '../components/ui'

function HomePage() {
  const images = [
    { src: '/img/lab1.jpg', alt: '实验室1' },
    { src: '/img/lab2.jpg', alt: '实验室2' }
  ]

  const logos = [
    { src: '/img/logo/partner1.png', alt: 'Partner 1' }
  ]

  return (
    <>
      <HeroSection backgroundImage="/img/hero.jpg">
        <h1>欢迎</h1>
      </HeroSection>

      <div className="md-main-content">
        <Section variant="centered">
          <Container size="medium">
            <h2>关于我们</h2>
            <p>内容...</p>
          </Container>
        </Section>

        <ImageGallery images={images} layout="row" />
      </div>

      <LogoList logos={logos} title="合作伙伴" />
    </>
  )
}
```

## 🎯 最佳实践

1. **优先使用组件库组件**：尽量使用已有的UI组件，保持设计一致性
2. **组合使用组件**：通过组合基础组件构建复杂UI
3. **保持组件单一职责**：每个组件只负责一个功能
4. **使用TypeScript类型**：为组件props添加类型定义（未来改进）
5. **文档化组件**：为新组件添加JSDoc注释

## 🆕 新增组件

### Modal - 模态框组件

通用模态框组件，支持多种尺寸和关闭方式。

```jsx
import { Modal, Button } from '../components/ui'
import { useState } from 'react'

function MyComponent() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <>
      <Button onClick={() => setIsOpen(true)}>打开模态框</Button>
      <Modal
        isOpen={isOpen}
        onClose={() => setIsOpen(false)}
        title="模态框标题"
        size="medium"
      >
        <p>模态框内容</p>
      </Modal>
    </>
  )
}
```

**Props:**
- `isOpen`: `boolean` - 是否打开
- `onClose`: `Function` - 关闭回调
- `title`: `string` - 标题（可选）
- `size`: `'small' | 'medium' | 'large' | 'fullscreen'` - 尺寸
- `closeOnBackdrop`: `boolean` - 点击背景是否关闭（默认true）

### Dropdown - 下拉选择组件

下拉选择组件，支持图标和禁用选项。

```jsx
import { Dropdown } from '../components/ui'

const options = [
  { value: '1', label: '选项一', icon: 'home' },
  { value: '2', label: '选项二', icon: 'settings' },
  { value: '3', label: '选项三', disabled: true }
]

<Dropdown
  options={options}
  value={selectedValue}
  onChange={(value) => setSelectedValue(value)}
  placeholder="请选择..."
  variant="default"
/>
```

**Props:**
- `options`: `Array` - 选项数组 `[{value, label, icon?, disabled?}]`
- `value`: `string | number` - 当前值
- `onChange`: `Function` - 值改变回调
- `placeholder`: `string` - 占位符
- `variant`: `'default' | 'outlined'` - 样式变体

### Tabs - 标签页组件

标签页组件，支持多种样式变体。

```jsx
import { Tabs } from '../components/ui'

const tabs = [
  {
    id: 'tab1',
    label: '标签一',
    icon: 'home',
    content: <div>内容一</div>
  },
  {
    id: 'tab2',
    label: '标签二',
    content: <div>内容二</div>
  }
]

<Tabs
  tabs={tabs}
  defaultTab="tab1"
  onChange={(tabId) => console.log(tabId)}
  variant="default"
/>
```

**Props:**
- `tabs`: `Array` - 标签页数组 `[{id, label, icon?, disabled?, content}]`
- `defaultTab`: `string` - 默认激活的标签ID
- `onChange`: `Function` - 标签切换回调
- `variant`: `'default' | 'pills' | 'underline'` - 样式变体

## ✅ 已完成的改进

- [x] 添加TypeScript类型定义（`src/types/components.d.ts`）
- [x] 创建Storybook文档（`.storybook/` 和 `*.stories.jsx`）
- [x] 添加单元测试（Vitest + Testing Library）
- [x] 优化组件性能（使用React.memo）
- [x] 添加更多UI组件（Modal, Dropdown, Tabs）

## 🧪 测试

### 运行单元测试

```bash
# 运行所有测试
npm run test:unit

# 运行测试并查看UI
npm run test:unit:ui

# 生成测试覆盖率报告
npm run test:unit:coverage
```

### 运行Storybook

```bash
# 启动Storybook开发服务器
npm run storybook

# 构建Storybook静态文件
npm run build-storybook
```

## 📚 类型定义

所有组件的TypeScript类型定义位于 `src/types/components.d.ts`。即使项目使用JavaScript，这些类型定义也可以提供更好的IDE智能提示和文档支持。

