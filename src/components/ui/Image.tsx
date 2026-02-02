import { memo, FC, CSSProperties, ImgHTMLAttributes } from 'react'
import { siteConfig } from '../../data/navigation'
import './Image.css'

interface ImageProps extends ImgHTMLAttributes<HTMLImageElement> {
  src: string
  alt: string
  className?: string
  style?: CSSProperties
  lazy?: boolean
}

/**
 * 通用图片组件（自动处理base URL）
 */
const Image: FC<ImageProps> = memo(function Image({
  src,
  alt,
  className = '',
  style = {},
  lazy = true,
  ...props
}) {
  // 处理图片路径
  let imageSrc = src
  if (!src.startsWith('http')) {
    // 确保路径以 / 开头
    const normalizedSrc = src.startsWith('/') ? src : `/${src}`
    // 如果 baseurl 是 /，避免双斜杠
    if (siteConfig.baseurl === '/') {
      imageSrc = normalizedSrc
    } else {
      imageSrc = `${siteConfig.baseurl}${normalizedSrc}`
    }
  }

  const classes = ['ui-image', className].filter(Boolean).join(' ')

  return (
    <img
      src={imageSrc}
      alt={alt}
      className={classes}
      style={style}
      loading={lazy ? 'lazy' : 'eager'}
      {...props}
    />
  )
})

Image.displayName = 'Image'

export default Image

