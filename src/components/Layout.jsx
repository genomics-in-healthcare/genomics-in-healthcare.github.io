import { useLocation } from 'react-router-dom'
import { useEffect } from 'react'
import Header from './Header'
import Footer from './Footer'
import './Layout.css'

function Layout({ children }) {
  const location = useLocation()
  const isHome = location.pathname === '/' || location.pathname === '/genomics-in-healthcare.github.io/'

  useEffect(() => {
    // Add body class for home page styling
    if (isHome) {
      document.body.classList.add('home')
      document.body.classList.remove('non-home')
    } else {
      document.body.classList.add('non-home')
      document.body.classList.remove('home')
    }

    // Initialize table responsive wrappers
    const tables = document.querySelectorAll('table')
    tables.forEach((table) => {
      if (!table.parentElement.classList.contains('table-responsive')) {
        const wrapper = document.createElement('div')
        wrapper.className = 'table-responsive'
        wrapper.style.overflowX = 'auto'
        wrapper.style.margin = '16px 0'
        table.parentNode.insertBefore(wrapper, table)
        wrapper.appendChild(table)
      }
    })

    // Add page load animation
    const mainContent = document.querySelector('.md-main-content')
    if (mainContent) {
      mainContent.classList.add('md-fade-in')
    }
  }, [isHome, location])

  return (
    <div className={`layout ${isHome ? 'home' : 'non-home'}`}>
      <Header />
      <main className="md-main-content">
        {children}
      </main>
      <Footer />
    </div>
  )
}

export default Layout





