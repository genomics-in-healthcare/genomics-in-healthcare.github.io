import Button from './Button'

export default {
  title: 'UI/Button',
  component: Button,
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: 'select',
      options: ['text', 'contained', 'outlined'],
    },
    size: {
      control: 'select',
      options: ['small', 'medium', 'large'],
    },
    active: {
      control: 'boolean',
    },
    disabled: {
      control: 'boolean',
    },
  },
}

export const Default = {
  args: {
    children: '按钮',
  },
}

export const Text = {
  args: {
    variant: 'text',
    children: '文本按钮',
  },
}

export const Contained = {
  args: {
    variant: 'contained',
    children: '填充按钮',
  },
}

export const Outlined = {
  args: {
    variant: 'outlined',
    children: '轮廓按钮',
  },
}

export const Small = {
  args: {
    size: 'small',
    children: '小按钮',
  },
}

export const Medium = {
  args: {
    size: 'medium',
    children: '中按钮',
  },
}

export const Large = {
  args: {
    size: 'large',
    children: '大按钮',
  },
}

export const Active = {
  args: {
    active: true,
    children: '激活按钮',
  },
}

export const Disabled = {
  args: {
    disabled: true,
    children: '禁用按钮',
  },
}



