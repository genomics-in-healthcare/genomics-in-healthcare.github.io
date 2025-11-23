import { Image, Container } from '../ui'
import './ImageGallery.css'

/**
 * 图片画廊组件
 * @param {Object} props
 * @param {Array} props.images - 图片数组 [{src, alt, ...}]
 * @param {string} props.layout - 布局方式: 'grid' | 'row' | 'masonry'
 * @param {number} props.columns - 网格列数（仅grid布局）
 * @param {string} props.className - 额外的CSS类名
 */
function ImageGallery({
  images = [],
  layout = 'row',
  columns = 3,
  className = '',
  ...props
}) {
  if (!images || images.length === 0) return null

  const classes = [
    'image-gallery',
    `image-gallery--${layout}`,
    className
  ].filter(Boolean).join(' ')

  const gridStyle = layout === 'grid' 
    ? { gridTemplateColumns: `repeat(${columns}, 1fr)` }
    : {}

  return (
    <Container size="medium" className={classes} style={gridStyle} {...props}>
      {images.map((image, index) => (
        <div key={index} className="image-gallery__item">
          <Image
            src={image.src}
            alt={image.alt || `Gallery image ${index + 1}`}
            className="image-gallery__image"
            style={image.style}
          />
        </div>
      ))}
    </Container>
  )
}

export default ImageGallery

