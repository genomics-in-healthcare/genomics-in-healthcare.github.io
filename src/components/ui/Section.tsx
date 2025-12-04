import { memo, FC, ReactNode, CSSProperties, HTMLAttributes } from 'react'
import './Section.css'

interface SectionProps extends HTMLAttributes<HTMLSectionElement> {
  children?: ReactNode
  className?: string
  style?: CSSProperties
  variant?: string
  background?: boolean
}

/**
 * 通用区块组件
 */
const Section: FC<SectionProps> = memo(function Section({
  children,
  className = '',
  style = {},
  variant = 'default',
  background = false,
  ...props
}) {
  const classes = [
    'ui-section',
    `ui-section--${variant}`,
    background && 'ui-section--background',
    className
  ].filter(Boolean).join(' ')

  return (
    <section className={classes} style={style} {...props}>
      {children}
    </section>
  )
})

Section.displayName = 'Section'

export default Section

