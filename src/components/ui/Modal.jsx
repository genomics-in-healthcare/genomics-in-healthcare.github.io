import { memo, useEffect } from 'react'
import { createPortal } from 'react-dom'
import './Modal.css'

/**
 * 模态框组件
 * @param {Object} props
 * @param {boolean} props.isOpen - 是否打开
 * @param {Function} props.onClose - 关闭回调
 * @param {string} props.title - 标题
 * @param {React.ReactNode} props.children - 内容
 * @param {string} props.size - 尺寸: 'small' | 'medium' | 'large' | 'fullscreen'
 * @param {boolean} props.closeOnBackdrop - 点击背景是否关闭
 * @param {string} props.className - 额外的CSS类名
 */
const Modal = memo(function Modal({
  isOpen,
  onClose,
  title,
  children,
  size = 'medium',
  closeOnBackdrop = true,
  className = ''
}) {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }

    return () => {
      document.body.style.overflow = ''
    }
  }, [isOpen])

  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === 'Escape' && isOpen) {
        onClose()
      }
    }

    document.addEventListener('keydown', handleEscape)
    return () => document.removeEventListener('keydown', handleEscape)
  }, [isOpen, onClose])

  if (!isOpen) return null

  const handleBackdropClick = (e) => {
    if (closeOnBackdrop && e.target === e.currentTarget) {
      onClose()
    }
  }

  const classes = [
    'ui-modal',
    `ui-modal--${size}`,
    className
  ].filter(Boolean).join(' ')

  const modalContent = (
    <div className="ui-modal__backdrop" onClick={handleBackdropClick}>
      <div className={classes}>
        {(title || closeOnBackdrop) && (
          <div className="ui-modal__header">
            {title && <h2 className="ui-modal__title">{title}</h2>}
            {closeOnBackdrop && (
              <button
                className="ui-modal__close"
                onClick={onClose}
                aria-label="Close modal"
              >
                <span className="material-icons">close</span>
              </button>
            )}
          </div>
        )}
        <div className="ui-modal__content">
          {children}
        </div>
      </div>
    </div>
  )

  return createPortal(modalContent, document.body)
})

Modal.displayName = 'Modal'

export default Modal

