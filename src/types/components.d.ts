/**
 * 组件类型定义
 */

// UI组件类型
export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'text' | 'contained' | 'outlined'
  size?: 'small' | 'medium' | 'large'
  active?: boolean
  disabled?: boolean
}

export interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  elevated?: boolean
  outlined?: boolean
}

export interface LinkProps {
  children: React.ReactNode
  to?: string
  href?: string
  external?: boolean
  variant?: 'default' | 'button' | 'tag'
  className?: string
  [key: string]: any
}

export interface ImageProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  src: string
  alt: string
  lazy?: boolean
}

export interface SectionProps extends React.HTMLAttributes<HTMLElement> {
  variant?: 'default' | 'centered' | 'fullwidth'
  background?: boolean
}

export interface ContainerProps extends React.HTMLAttributes<HTMLDivElement> {
  size?: 'small' | 'medium' | 'large' | 'full'
}

// 业务组件类型
export interface HeroSectionProps {
  backgroundImage?: string
  children: React.ReactNode
  className?: string
  [key: string]: any
}

export interface ImageGalleryImage {
  src: string
  alt: string
  style?: React.CSSProperties
  [key: string]: any
}

export interface ImageGalleryProps {
  images: ImageGalleryImage[]
  layout?: 'grid' | 'row' | 'masonry'
  columns?: number
  className?: string
  [key: string]: any
}

export interface NewsPost {
  date: string
  content: string
  author?: string
  tags?: string[]
  published?: boolean
  group?: string
  [key: string]: any
}

export interface NewsItemProps {
  post: NewsPost
  formatDate: (dateString: string) => string
}

export interface Member {
  name: string
  image: string
  altimage?: string
  pronouns?: string
  email?: string
  website?: string
  orcid?: string
  linkedIn?: string
  UCSF?: string
  scholar?: string
  twitTer?: string
  bsky?: string
  github?: string
  description?: string
  [key: string]: any
}

export interface MemberCardProps {
  member: Member
}

export interface Logo {
  src: string
  alt: string
  style?: React.CSSProperties
  [key: string]: any
}

export interface LogoListProps {
  logos: Logo[]
  title?: string
  className?: string
  [key: string]: any
}

// Modal组件类型
export interface ModalProps {
  isOpen: boolean
  onClose: () => void
  title?: string
  children: React.ReactNode
  size?: 'small' | 'medium' | 'large' | 'fullscreen'
  closeOnBackdrop?: boolean
  className?: string
}

// Dropdown组件类型
export interface DropdownOption {
  value: string | number
  label: string
  disabled?: boolean
  icon?: string
}

export interface DropdownProps {
  options: DropdownOption[]
  value?: string | number
  onChange: (value: string | number) => void
  placeholder?: string
  disabled?: boolean
  className?: string
  variant?: 'default' | 'outlined'
}

// Tabs组件类型
export interface Tab {
  id: string
  label: string
  icon?: string
  disabled?: boolean
  content: React.ReactNode
}

export interface TabsProps {
  tabs: Tab[]
  defaultTab?: string
  onChange?: (tabId: string) => void
  variant?: 'default' | 'pills' | 'underline'
  className?: string
}




