import { useState, useEffect, FC } from 'react'
import { NewsItem } from '../components/common'
import { postsData } from '../data/posts'
import './News.css'

interface NewsPost {
  group: string
  published?: boolean
  date: string
  [key: string]: any
}

const News: FC = () => {
  const [newsPosts, setNewsPosts] = useState<NewsPost[]>([])

  useEffect(() => {
    // Filter news posts and sort by date
    const news = postsData
      .filter((post: NewsPost) => post.group === 'news' && post.published !== false)
      .sort((a: NewsPost, b: NewsPost) => {
        if (a.date < b.date) return 1
        if (a.date > b.date) return -1
        return 0
      })
    setNewsPosts(news)
  }, [])

  const formatDate = (dateString: string): string => {
    if (!dateString) return ''
    const date = new Date(dateString)
    const day = String(date.getDate()).padStart(2, '0')
    const month = String(date.getMonth() + 1).padStart(2, '0')
    const year = String(date.getFullYear()).slice(-2)
    return `${day}/${month}/${year}`
  }

  return (
    <div className="md-main-content">
      <div className="news-container">
        {newsPosts.map((post, index) => (
          <NewsItem key={index} post={post} formatDate={formatDate} />
        ))}
      </div>
    </div>
  )
}

export default News
