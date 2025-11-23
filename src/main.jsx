import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import App from './App'
import './index.css'

// Get basename from Vite's environment
// In development, use empty string. In production, use the base path
const basename = import.meta.env.DEV ? '' : (import.meta.env.BASE_URL || '/genomics-in-healthcare.github.io')

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter basename={basename}>
      <App />
    </BrowserRouter>
  </React.StrictMode>,
)

