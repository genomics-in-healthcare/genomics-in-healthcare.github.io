import { memo } from 'react'
import type { SectionProps } from '../../types/components'
import './Section.css'

/**
 * 通用区块组件
 */
const Section = memo(function Section({
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

