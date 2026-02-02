import { memo, FC, ReactNode, CSSProperties, ButtonHTMLAttributes } from 'react'
import './Button.css'

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children?: ReactNode
  variant?: 'text' | 'outlined' | 'filled'
  size?: 'small' | 'medium' | 'large'
  active?: boolean
  className?: string
  onClick?: () => void
  style?: CSSProperties
  disabled?: boolean
  type?: 'button' | 'submit' | 'reset'
}

const Button: FC<ButtonProps> = memo(function Button({
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
}) {
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

