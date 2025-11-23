import { memo } from 'react'
import './Container.css'

/**
 * 通用容器组件（统一最大宽度和内边距）
 */
const Container = memo(function Container({
  children,
  className = '',
  style = {},
  size = 'medium',
  ...props
}) {
  const classes = [
    'ui-container',
    `ui-container--${size}`,
    className
  ].filter(Boolean).join(' ')

  return (
    <div className={classes} style={style} {...props}>
      {children}
    </div>
  )
})

Container.displayName = 'Container'

export default Container

