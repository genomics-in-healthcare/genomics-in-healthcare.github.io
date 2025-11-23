import { Routes, Route } from 'react-router-dom'
import Layout from './components/Layout'
import Home from './pages/Home'
import News from './pages/News'
import Research from './pages/Research'
import Publications from './pages/Publications'
import Software from './pages/Software'
import Members from './pages/Members'
import Join from './pages/Join'
import Contact from './pages/Contact'
import './App.css'

function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/news" element={<News />} />
        <Route path="/research" element={<Research />} />
        <Route path="/publications" element={<Publications />} />
        <Route path="/software" element={<Software />} />
        <Route path="/members" element={<Members />} />
        <Route path="/join" element={<Join />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </Layout>
  )
}

export default App

