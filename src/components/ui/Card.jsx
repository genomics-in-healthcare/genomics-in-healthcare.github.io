import { memo } from 'react'
import './Card.css'

/**
 * 通用卡片组件
 */
const Card = memo(function Card({
  children,
  className = '',
  style = {},
  elevated = false,
  outlined = false,
  ...props
}) {
  const classes = [
    'ui-card',
    elevated && 'ui-card--elevated',
    outlined && 'ui-card--outlined',
    className
  ].filter(Boolean).join(' ')

  return (
    <div className={classes} style={style} {...props}>
      {children}
    </div>
  )
})

Card.displayName = 'Card'

export default Card

