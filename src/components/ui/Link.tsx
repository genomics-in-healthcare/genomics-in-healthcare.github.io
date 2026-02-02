import { memo, FC, ReactNode, AnchorHTMLAttributes } from 'react'
import { Link as RouterLink } from 'react-router-dom'
import './Link.css'

interface LinkProps extends AnchorHTMLAttributes<HTMLAnchorElement> {
  children?: ReactNode
  to?: string
  href?: string
  external?: boolean
  variant?: string
  className?: string
}

/**
 * 通用链接组件（支持内部路由和外部链接）
 */
const Link: FC<LinkProps> = memo(function Link({
  children,
  to,
  href,
  external = false,
  variant = 'default',
  className = '',
  ...props
}) {
  const classes = [
    'ui-link',
    `ui-link--${variant}`,
    className
  ].filter(Boolean).join(' ')

  // 外部链接
  if (href || external) {
    return (
      <a
        href={href || to}
        className={classes}
        target={external ? '_blank' : undefined}
        rel={external ? 'noopener noreferrer' : undefined}
        {...props}
      >
        {children}
      </a>
    )
  }

  // 内部路由链接
  return (
    <RouterLink to={to} className={classes} {...props}>
      {children}
    </RouterLink>
  )
})

Link.displayName = 'Link'

export default Link

