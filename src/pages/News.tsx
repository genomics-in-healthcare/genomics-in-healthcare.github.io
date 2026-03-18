import { FC, useMemo } from 'react'
import { NewsItem } from '../components/common'
import './News.css'
import postsData from '../data/posts.json'

interface NewsPost {
  group: string
  published?: boolean
  date: string
  filename?: string
  title?: string
  link_title?: string
  layout?: string
  content?: string
  author?: string
  tags?: string[]
  [key: string]: any
}

// HARDCODED NEWS ITEM - Built on 2026-02-02 22:45:00
const HARDCODED_NEW_NEWS: NewsPost = {
  filename: "2026-01-26-news.md",
  date: "2026-01-26",
  title: "Two new manuscripts posted on bioRxiv",
  link_title: "Two new manuscripts posted on bioRxiv",
  published: true,
  layout: "post",
  group: "news",
  content: "Under the supervision of Professor Zhang and Dr. Qiu, our team has completed two manuscripts that have been posted as preprints on bioRxiv and are currently under review:\n\n(1) Tu Y, Hao K, Wang F, Qiu S, Zhang W. (2026). Circuit-specific resting-state fMRI signatures for stratifying first-episode major depressive disorder and predicting recurrence risk. bioRxiv preprint. doi:10.64898/2026.01.26.701909.\n\n(2) Tu Y., Fu Q., Li Y., Sun C., Zhu Y., Deng J., Qin H., Zeng X., Wang Y., Qiu S., Zhang W. (2026). Multimodal behavior scoring quantifies depression-like severity across chronic stress models and identifies stress-resilient mice. bioRxiv preprint. doi:10.64898/2026.01.26.701905.",
  author: "",
  tags: []
}

const News: FC = () => {
  const newsPosts = useMemo(() => {
    // Use hardcoded news item and posts data
    let allPosts: NewsPost[] = [HARDCODED_NEW_NEWS, ...(postsData as NewsPost[])]
    
    // Remove duplicates by filename
    const seen = new Set<string>()
    allPosts = allPosts.filter(p => {
      if (seen.has(p.filename || '')) return false
      seen.add(p.filename || '')
      return true
    })
    
    // Filter news posts and sort by date
    return allPosts
      .filter((post: NewsPost) => post.group === 'news' && post.published !== false)
      .sort((a: NewsPost, b: NewsPost) => {
        if (a.date < b.date) return 1
        if (a.date > b.date) return -1
        return 0
      })
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
