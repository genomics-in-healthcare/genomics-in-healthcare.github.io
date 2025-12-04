import { memo } from 'react'
import './Card.css'

const Card = memo(function Card({
  children,
  className = '',
  style = {},
  elevated = false,
  outlined = false,
  ...props
}: any) {
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















