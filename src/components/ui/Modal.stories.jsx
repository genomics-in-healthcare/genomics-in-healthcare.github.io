import { useState } from 'react'
import Modal from './Modal'
import Button from './Button'

export default {
  title: 'UI/Modal',
  component: Modal,
  tags: ['autodocs'],
}

const ModalExample = ({ size, ...args }) => {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <>
      <Button onClick={() => setIsOpen(true)}>打开模态框</Button>
      <Modal
        {...args}
        isOpen={isOpen}
        onClose={() => setIsOpen(false)}
        size={size}
      >
        <p>这是模态框的内容。点击背景或按ESC键可以关闭。</p>
      </Modal>
    </>
  )
}

export const Default = {
  render: () => <ModalExample title="模态框标题" />,
}

export const Small = {
  render: () => <ModalExample title="小模态框" size="small" />,
}

export const Medium = {
  render: () => <ModalExample title="中等模态框" size="medium" />,
}

export const Large = {
  render: () => <ModalExample title="大模态框" size="large" />,
}

export const WithoutTitle = {
  render: () => <ModalExample />,
}

export const WithContent = {
  render: () => (
    <ModalExample title="详细内容">
      <h3>标题</h3>
      <p>这是一段详细的内容。</p>
      <p>可以包含多个段落和任何React元素。</p>
      <Button variant="contained" style={{ marginTop: '16px' }}>
        确认
      </Button>
    </ModalExample>
  ),
}




