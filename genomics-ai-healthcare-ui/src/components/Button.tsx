import { memo } from 'react'
import './Button.css'

const Button = memo(function Button({
  children,
  variant = 'text',
  size = 'medium',
  active = false,
  className = '',
  onClick,
  style = {},
  disabled = false,
  type = 'button',
  ...props
}: any) {
  const classes = [
    'ui-button',
    `ui-button--${variant}`,
    `ui-button--${size}`,
    active && 'ui-button--active',
    disabled && 'ui-button--disabled',
    className
  ].filter(Boolean).join(' ')

  return (
    <button
      type={type}
      className={classes}
      onClick={onClick}
      style={style}
      disabled={disabled}
      {...props}
    >
      {children}
    </button>
  )
})

Button.displayName = 'Button'

export default Button















