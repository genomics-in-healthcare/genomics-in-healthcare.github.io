import { memo } from 'react'
import { siteConfig } from '../../data/navigation'
import type { ImageProps } from '../../types/components'
import './Image.css'

/**
 * 通用图片组件（自动处理base URL）
 */
const Image = memo(function Image({
  src,
  alt,
  className = '',
  style = {},
  lazy = true,
  ...props
}) {
  // 处理图片路径
  const imageSrc = src.startsWith('http') 
    ? src 
    : `${siteConfig.baseurl}${src.startsWith('/') ? src : `/${src}`}`

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

