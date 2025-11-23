import { useEffect, useRef } from 'react'
import { siteConfig } from '../data/navigation'
import './Publications.css'

function Publications() {
  const containerRef = useRef(null)

  useEffect(() => {
    // Load publications content from the HTML file
    // In a production app, you might want to convert this to a more structured format
    // For now, we'll fetch and display the HTML content
    const loadPublications = async () => {
      try {
        const response = await fetch(`${siteConfig.baseurl}/publications/index.htm`)
        if (response.ok) {
          const html = await response.text()
          // Extract content between <div class="pub-list"> tags
          const parser = new DOMParser()
          const doc = parser.parseFromString(html, 'text/html')
          const pubList = doc.querySelector('.pub-list')
          if (pubList && containerRef.current) {
            containerRef.current.innerHTML = pubList.innerHTML
          }
        }
      } catch (error) {
        console.error('Error loading publications:', error)
        // Fallback: show a message
        if (containerRef.current) {
          containerRef.current.innerHTML = '<p>Publications content is being loaded...</p>'
        }
      }
    }

    loadPublications()
  }, [])

  return (
    <div className="md-main-content">
      <div className="publications-container">
        <div className="pub-list" ref={containerRef}>
          <p>Loading publications...</p>
        </div>
      </div>
    </div>
  )
}

export default Publications
