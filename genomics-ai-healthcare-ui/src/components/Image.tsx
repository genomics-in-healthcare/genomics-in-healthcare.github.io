import { memo } from 'react'
import './Image.css'

export interface ImageProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  src: string
  alt: string
  baseUrl?: string
  lazy?: boolean
}

const Image = memo(function Image({
  src,
  alt,
  className = '',
  style = {},
  baseUrl,
  lazy = true,
  ...props
}: ImageProps) {
  const resolvedSrc =
    baseUrl && !src.startsWith('http')
      ? `${baseUrl}${src.startsWith('/') ? src : `/${src}`}`
      : src

  const classes = ['ui-image', className].filter(Boolean).join(' ')

  return (
    <img
      src={resolvedSrc}
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















