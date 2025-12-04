import { memo, useEffect, FC, ReactNode, KeyboardEvent, MouseEvent } from 'react'
import { createPortal } from 'react-dom'
import './Modal.css'

interface ModalProps {
  isOpen: boolean
  onClose: () => void
  title?: string
  children?: ReactNode
  size?: 'small' | 'medium' | 'large' | 'fullscreen'
  closeOnBackdrop?: boolean
  className?: string
}

/**
 * 模态框组件
 */
const Modal: FC<ModalProps> = memo(function Modal({
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
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen) {
        onClose()
      }
    }

    document.addEventListener('keydown', handleEscape as any)
    return () => document.removeEventListener('keydown', handleEscape as any)
  }, [isOpen, onClose])

  if (!isOpen) return null

  const handleBackdropClick = (e: MouseEvent) => {
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

