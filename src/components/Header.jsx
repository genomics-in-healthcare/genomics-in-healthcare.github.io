import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { navigation, siteConfig } from '../data/navigation'
import './Header.css'

function Header() {
  const [drawerOpen, setDrawerOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const location = useLocation()
  const isHome = location.pathname === '/' || location.pathname === '/genomics-in-healthcare.github.io/'

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.pageYOffset || document.documentElement.scrollTop
      setScrolled(scrollTop > 50)
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    handleScroll() // Check initial scroll position

    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const toggleDrawer = () => {
    setDrawerOpen(!drawerOpen)
  }

  const closeDrawer = () => {
    setDrawerOpen(false)
  }

  const getActiveGroup = () => {
    const currentPath = location.pathname
    const navItem = navigation.find(item => {
      const link = item.link === '/' ? '/' : item.link
      return currentPath === link || currentPath === `${siteConfig.baseurl}${link}`
    })
    return navItem?.group || ''
  }

  const activeGroup = getActiveGroup()

  return (
    <>
      <header className={`md-app-bar ${isHome ? 'home' : ''} ${scrolled ? 'scrolled' : ''}`}>
        <div className="md-app-bar__container">
          <button
            className="md-button md-button--text"
            id="menuButton"
            aria-label="Open menu"
            onClick={toggleDrawer}
            style={{ color: '#64748b' }}
          >
            <span className="material-icons">menu</span>
          </button>

          <div className="md-app-bar__brand" style={{ display: 'flex', alignItems: 'center', flex: 1 }}>
            <Link to="/" style={{ display: 'flex', alignItems: 'center', textDecoration: 'none', color: 'inherit' }}>
              <img
                className="md-app-bar__logo"
                src={`${siteConfig.baseurl}/img/logo/logo.png`}
                alt="JC STEM Lab"
                style={{ height: '43px', marginRight: '14px' }}
              />
              <div className="md-app-bar__title">
                <div className="md-app-bar__title-main" style={{ fontSize: '0.8125rem', fontWeight: 600, color: '#64748b', lineHeight: 1.25 }}>
                  Hong Kong JC STEM Lab
                </div>
                <div className="md-app-bar__title-sub" style={{ fontSize: '1.125rem', color: '#1e3a8a', lineHeight: 1.25, fontWeight: 550 }}>
                  Genomics and AI in Healthcare
                </div>
              </div>
            </Link>
          </div>

          <nav className="md-app-bar__actions" id="desktopNav" style={{ gap: '4px' }}>
            {navigation.map((link) => (
              <Link
                key={link.link}
                to={link.link}
                className={`md-button md-button--text ${activeGroup === link.group ? 'md-button--active' : ''}`}
                style={{
                  color: '#64748b',
                  fontWeight: 500,
                  padding: '10px 12px',
                  borderRadius: '4px',
                  transition: 'background-color 0.15s ease',
                  fontSize: '1.125rem',
                  fontFamily: "'Inter', 'Noto Sans', -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', sans-serif",
                }}
              >
                {link.name}
              </Link>
            ))}
          </nav>
        </div>
      </header>

      <aside className={`md-navigation-drawer ${drawerOpen ? 'open' : ''}`} id="navigationDrawer">
        <div className="md-navigation-drawer__header">
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
            <div style={{ display: 'flex', alignItems: 'center', flex: 1 }}>
              <Link
                to="/"
                onClick={closeDrawer}
                style={{ display: 'flex', alignItems: 'center', textDecoration: 'none', color: 'inherit' }}
              >
                <img
                  className="md-navigation-drawer__logo"
                  src={`${siteConfig.baseurl}/img/logo/logo.png`}
                  alt="JC STEM Lab"
                  style={{ height: '43px', marginRight: '14px' }}
                />
                <div>
                  <div style={{ fontSize: '0.8125rem', fontWeight: 600, color: '#64748b', lineHeight: 1.25 }}>
                    Hong Kong JC STEM Lab
                  </div>
                  <div style={{ fontSize: '1.125rem', color: '#1e3a8a', lineHeight: 1.25, fontWeight: 550 }}>
                    Genomics and AI in Healthcare
                  </div>
                </div>
              </Link>
            </div>
            <button
              className="md-button md-button--text"
              id="closeDrawerButton"
              aria-label="Close menu"
              onClick={closeDrawer}
              style={{ color: '#64748b', padding: '8px' }}
            >
              <span className="material-icons">close</span>
            </button>
          </div>
        </div>
        <div className="md-navigation-drawer__content">
          {navigation.map((link) => (
            <Link
              key={link.link}
              to={link.link}
              onClick={closeDrawer}
              className={`md-navigation-drawer__item ${activeGroup === link.group ? 'active' : ''}`}
              tabIndex={0}
              style={{
                backgroundColor: 'transparent !important',
                color: '#1a1c1e !important',
                border: 'none !important',
                boxShadow: 'none !important',
              }}
            >
              {link.name}
            </Link>
          ))}
        </div>
      </aside>

      <div
        className={`md-backdrop ${drawerOpen ? 'open' : ''}`}
        id="backdrop"
        onClick={closeDrawer}
      />
    </>
  )
}

export default Header

