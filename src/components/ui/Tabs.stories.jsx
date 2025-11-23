import Tabs from './Tabs'

export default {
  title: 'UI/Tabs',
  component: Tabs,
  tags: ['autodocs'],
}

const tabs = [
  {
    id: 'tab1',
    label: '标签一',
    content: <div>这是第一个标签的内容</div>,
  },
  {
    id: 'tab2',
    label: '标签二',
    content: <div>这是第二个标签的内容</div>,
  },
  {
    id: 'tab3',
    label: '标签三',
    content: <div>这是第三个标签的内容</div>,
  },
]

export const Default = {
  args: {
    tabs,
  },
}

export const WithIcons = {
  args: {
    tabs: [
      {
        id: 'home',
        label: '首页',
        icon: 'home',
        content: <div>首页内容</div>,
      },
      {
        id: 'settings',
        label: '设置',
        icon: 'settings',
        content: <div>设置内容</div>,
      },
      {
        id: 'profile',
        label: '个人资料',
        icon: 'person',
        content: <div>个人资料内容</div>,
      },
    ],
  },
}

export const Pills = {
  args: {
    tabs,
    variant: 'pills',
  },
}

export const Underline = {
  args: {
    tabs,
    variant: 'underline',
  },
}

export const WithDisabled = {
  args: {
    tabs: [
      ...tabs,
      {
        id: 'tab4',
        label: '禁用标签',
        disabled: true,
        content: <div>这个标签被禁用了</div>,
      },
    ],
  },
}



