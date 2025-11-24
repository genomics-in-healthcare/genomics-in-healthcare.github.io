import { describe, it, expect, vi } from 'vitest'
import { render, screen, fireEvent } from '@testing-library/react'
import Button from './Button'

describe('Button', () => {
  it('应该渲染按钮', () => {
    render(<Button>点击我</Button>)
    expect(screen.getByText('点击我')).toBeInTheDocument()
  })

  it('应该处理点击事件', () => {
    const handleClick = vi.fn()
    render(<Button onClick={handleClick}>点击我</Button>)
    
    fireEvent.click(screen.getByText('点击我'))
    expect(handleClick).toHaveBeenCalledTimes(1)
  })

  it('禁用时不应该触发点击事件', () => {
    const handleClick = vi.fn()
    render(<Button onClick={handleClick} disabled>禁用按钮</Button>)
    
    const button = screen.getByText('禁用按钮')
    expect(button).toBeDisabled()
    
    fireEvent.click(button)
    expect(handleClick).not.toHaveBeenCalled()
  })

  it('应该应用正确的变体类名', () => {
    const { container } = render(<Button variant="contained">填充按钮</Button>)
    expect(container.firstChild).toHaveClass('ui-button--contained')
  })

  it('应该应用激活状态', () => {
    const { container } = render(<Button active>激活按钮</Button>)
    expect(container.firstChild).toHaveClass('ui-button--active')
  })
})







