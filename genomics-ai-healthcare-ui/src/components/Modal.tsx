import { memo, useEffect } from 'react'
import { createPortal } from 'react-dom'
import './Modal.css'

export interface ModalProps {
  isOpen: boolean
  onClose: () => void
  title?: string
  children: React.ReactNode
  size?: 'small' | 'medium' | 'large' | 'fullscreen'
  closeOnBackdrop?: boolean
  className?: string
}

const Modal = memo(function Modal({
  isOpen,
  onClose,
  title,
  children,
  size = 'medium',
  closeOnBackdrop = true,
  className = ''
}: ModalProps) {
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

    document.addEventListener('keydown', handleEscape)
    return () => document.removeEventListener('keydown', handleEscape)
  }, [isOpen, onClose])

  if (!isOpen) return null

  const handleBackdropClick = (e: React.MouseEvent<HTMLDivElement>) => {
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















