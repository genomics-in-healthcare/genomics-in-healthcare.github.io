import { memo, FC, ReactNode, CSSProperties, HTMLAttributes } from 'react'
import './Container.css'

interface ContainerProps extends HTMLAttributes<HTMLDivElement> {
  children?: ReactNode
  className?: string
  style?: CSSProperties
  size?: 'small' | 'medium' | 'large'
}

/**
 * 通用容器组件（统一最大宽度和内边距）
 */
const Container: FC<ContainerProps> = memo(function Container({
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

