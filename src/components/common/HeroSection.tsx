import { FC, ReactNode, CSSProperties, HTMLAttributes } from 'react'
import { Image, Container } from '../ui'
import './HeroSection.css'

interface HeroSectionProps extends HTMLAttributes<HTMLElement> {
  backgroundImage?: string
  children?: ReactNode
  className?: string
}

/**
 * 英雄区块组件（首页大图背景区域）
 */
const HeroSection: FC<HeroSectionProps> = ({
  backgroundImage,
  children,
  className = '',
  ...props
}) => {
  const backgroundStyle = backgroundImage
    ? {
        background: `linear-gradient(135deg, rgba(30, 64, 175, 0.1) 0%, rgba(30, 64, 175, 0.05) 100%), url('${backgroundImage}')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
      }
    : {}

  return (
    <section
      className={`hero-section ${className}`}
      style={backgroundStyle}
      {...props}
    >
      <Container size="medium">
        {children}
      </Container>
    </section>
  )
}

export default HeroSection





