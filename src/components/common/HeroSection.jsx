import { Image, Container } from '../ui'
import './HeroSection.css'

/**
 * 英雄区块组件（首页大图背景区域）
 * @param {Object} props
 * @param {string} props.backgroundImage - 背景图片路径
 * @param {React.ReactNode} props.children - 内容
 * @param {string} props.className - 额外的CSS类名
 */
function HeroSection({
  backgroundImage,
  children,
  className = '',
  ...props
}) {
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




