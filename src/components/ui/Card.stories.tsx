import Card from './Card'

export default {
  title: 'UI/Card',
  component: Card,
  tags: ['autodocs'],
  argTypes: {
    elevated: {
      control: 'boolean',
    },
    outlined: {
      control: 'boolean',
    },
  },
}

export const Default = {
  args: {
    children: '基础卡片内容',
  },
}

export const Elevated = {
  args: {
    elevated: true,
    children: '带阴影的卡片',
  },
}

export const Outlined = {
  args: {
    outlined: true,
    children: '带边框的卡片',
  },
}

export const WithContent = {
  args: {
    elevated: true,
    children: (
      <>
        <h3 style={{ margin: '0 0 12px 0' }}>卡片标题</h3>
        <p style={{ margin: 0, color: '#64748b' }}>
          这是卡片的内容。可以包含任何React元素。
        </p>
      </>
    ),
  },
}





