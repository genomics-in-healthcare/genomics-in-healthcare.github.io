import { memo } from 'react'
import './Container.css'

const Container = memo(function Container({
  children,
  className = '',
  style = {},
  size = 'medium',
  ...props
}: any) {
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















