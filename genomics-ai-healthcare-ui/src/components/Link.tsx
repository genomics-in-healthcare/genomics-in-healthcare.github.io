import { memo } from 'react'
import './Link.css'

export interface LinkProps
  extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  to?: string
  href?: string
  external?: boolean
  variant?: 'default' | 'button' | 'tag'
}

const Link = memo(function Link({
  children,
  to,
  href,
  external = false,
  variant = 'default',
  className = '',
  ...props
}: LinkProps) {
  const classes = [
    'ui-link',
    `ui-link--${variant}`,
    className
  ].filter(Boolean).join(' ')

  const url = href || to

  return (
    <a
      href={url}
      className={classes}
      target={external ? '_blank' : props.target}
      rel={external ? 'noopener noreferrer' : props.rel}
      {...props}
    >
      {children}
    </a>
  )
})

Link.displayName = 'Link'

export default Link















