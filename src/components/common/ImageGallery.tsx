import { FC, HTMLAttributes, CSSProperties } from 'react'
import { Image, Container } from '../ui'
import './ImageGallery.css'

interface GalleryImage {
  src: string
  alt?: string
  style?: CSSProperties
}

interface ImageGalleryProps extends HTMLAttributes<HTMLDivElement> {
  images?: GalleryImage[]
  layout?: 'grid' | 'row' | 'masonry'
  columns?: number
  className?: string
}

/**
 * 图片画廊组件
 */
const ImageGallery: FC<ImageGalleryProps> = ({
  images = [],
  layout = 'row',
  columns = 3,
  className = '',
  ...props
}) => {
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





