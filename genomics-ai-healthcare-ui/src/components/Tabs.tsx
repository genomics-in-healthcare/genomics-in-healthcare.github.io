import { memo, useState } from 'react'
import './Tabs.css'

export interface TabItem {
  id: string
  label: string
  content: React.ReactNode
  icon?: string
  disabled?: boolean
}

export interface TabsProps {
  tabs: TabItem[]
  defaultTab?: string
  onChange?: (tabId: string) => void
  variant?: 'default' | 'pills' | 'underline'
  className?: string
}

const Tabs = memo(function Tabs({
  tabs,
  defaultTab,
  onChange,
  variant = 'default',
  className = ''
}: TabsProps) {
  const [activeTab, setActiveTab] = useState(
    defaultTab || tabs[0]?.id || ''
  )

  const handleTabChange = (tabId: string) => {
    const tab = tabs.find(t => t.id === tabId)
    if (tab && !tab.disabled) {
      setActiveTab(tabId)
      onChange?.(tabId)
    }
  }

  const activeTabContent = tabs.find(tab => tab.id === activeTab)?.content

  const classes = [
    'ui-tabs',
    `ui-tabs--${variant}`,
    className
  ].filter(Boolean).join(' ')

  return (
    <div className={classes}>
      <div className="ui-tabs__header">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            className={`ui-tabs__tab ${
              activeTab === tab.id ? 'ui-tabs__tab--active' : ''
            } ${tab.disabled ? 'ui-tabs__tab--disabled' : ''}`}
            onClick={() => handleTabChange(tab.id)}
            disabled={tab.disabled}
            type="button"
          >
            {tab.icon && (
              <span className="material-icons ui-tabs__tab-icon">{tab.icon}</span>
            )}
            {tab.label}
          </button>
        ))}
      </div>
      <div className="ui-tabs__content">
        {activeTabContent}
      </div>
    </div>
  )
})

Tabs.displayName = 'Tabs'

export default Tabs















