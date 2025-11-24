import { Image, Section, Container } from '../ui'
import './LogoList.css'

/**
 * Logo列表组件（用于展示合作伙伴、赞助商等）
 * @param {Object} props
 * @param {Array} props.logos - Logo数组 [{src, alt, ...}]
 * @param {string} props.title - 标题
 * @param {string} props.className - 额外的CSS类名
 */
function LogoList({ logos = [], title, className = '', ...props }) {
  if (!logos || logos.length === 0) return null

  return (
    <Section variant="fullwidth" background className={`logo-list ${className}`} {...props}>
      <Container size="medium">
        {title && (
          <h2 className="logo-list__title">{title}</h2>
        )}
        <div className="logo-list__container">
          {logos.map((logo, index) => (
            <div key={index} className="logo-list__item">
              <Image
                src={logo.src}
                alt={logo.alt || `Logo ${index + 1}`}
                className="logo-list__logo"
                style={logo.style}
              />
            </div>
          ))}
        </div>
      </Container>
    </Section>
  )
}

export default LogoList




