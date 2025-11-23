import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import Card from './Card'

describe('Card', () => {
  it('应该渲染卡片内容', () => {
    render(
      <Card>
        <h3>标题</h3>
        <p>内容</p>
      </Card>
    )
    
    expect(screen.getByText('标题')).toBeInTheDocument()
    expect(screen.getByText('内容')).toBeInTheDocument()
  })

  it('应该应用elevated类名', () => {
    const { container } = render(<Card elevated>内容</Card>)
    expect(container.firstChild).toHaveClass('ui-card--elevated')
  })

  it('应该应用outlined类名', () => {
    const { container } = render(<Card outlined>内容</Card>)
    expect(container.firstChild).toHaveClass('ui-card--outlined')
  })
})

