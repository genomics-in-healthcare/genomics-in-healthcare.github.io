import { memo, useState, useRef, useEffect } from 'react'
import './Dropdown.css'

/**
 * 下拉选择组件
 * @param {Object} props
 * @param {Array} props.options - 选项数组
 * @param {string|number} props.value - 当前值
 * @param {Function} props.onChange - 值改变回调
 * @param {string} props.placeholder - 占位符
 * @param {boolean} props.disabled - 是否禁用
 * @param {string} props.className - 额外的CSS类名
 * @param {string} props.variant - 样式变体: 'default' | 'outlined'
 */
const Dropdown = memo(function Dropdown({
  options,
  value,
  onChange,
  placeholder = '请选择...',
  disabled = false,
  className = '',
  variant = 'default'
}) {
  const [isOpen, setIsOpen] = useState(false)
  const dropdownRef = useRef(null)

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false)
      }
    }

    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside)
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [isOpen])

  const selectedOption = options.find(opt => opt.value === value)

  const handleSelect = (optionValue: string | number) => {
    if (options.find(opt => opt.value === optionValue)?.disabled) return
    onChange(optionValue)
    setIsOpen(false)
  }

  const classes = [
    'ui-dropdown',
    `ui-dropdown--${variant}`,
    isOpen && 'ui-dropdown--open',
    disabled && 'ui-dropdown--disabled',
    className
  ].filter(Boolean).join(' ')

  return (
    <div className={classes} ref={dropdownRef}>
      <button
        className="ui-dropdown__trigger"
        onClick={() => !disabled && setIsOpen(!isOpen)}
        disabled={disabled}
        type="button"
      >
        <span className="ui-dropdown__selected">
          {selectedOption ? (
            <>
              {selectedOption.icon && (
                <span className="material-icons ui-dropdown__icon">{selectedOption.icon}</span>
              )}
              {selectedOption.label}
            </>
          ) : (
            <span className="ui-dropdown__placeholder">{placeholder}</span>
          )}
        </span>
        <span className="material-icons ui-dropdown__arrow">
          {isOpen ? 'expand_less' : 'expand_more'}
        </span>
      </button>

      {isOpen && (
        <div className="ui-dropdown__menu">
          {options.map((option) => (
            <button
              key={option.value}
              className={`ui-dropdown__option ${
                option.value === value ? 'ui-dropdown__option--selected' : ''
              } ${option.disabled ? 'ui-dropdown__option--disabled' : ''}`}
              onClick={() => handleSelect(option.value)}
              disabled={option.disabled}
              type="button"
            >
              {option.icon && (
                <span className="material-icons ui-dropdown__option-icon">{option.icon}</span>
              )}
              {option.label}
            </button>
          ))}
        </div>
      )}
    </div>
  )
})

Dropdown.displayName = 'Dropdown'

export default Dropdown

