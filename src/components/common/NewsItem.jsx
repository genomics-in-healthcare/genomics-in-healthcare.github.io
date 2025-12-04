import { memo } from 'react'
import ReactMarkdown from 'react-markdown'
import { Link } from '../ui'
import { siteConfig } from '../../data/navigation'
import './NewsItem.css'

/**
 * 新闻条目组件
 * @param {Object} props
 * @param {Object} props.post - 新闻文章对象
 * @param {Function} props.formatDate - 日期格式化函数
 */
const NewsItem = memo(function NewsItem({ post, formatDate }) {
  const getTagSlug = (tag) => {
    return tag.toLowerCase().replace(/\s+/g, '-')
  }

  return (
    <div className="news-item">
      <div className="news-item__date">{formatDate(post.date)}</div>
      <div className="news-item__content">
        <ReactMarkdown>{post.content}</ReactMarkdown>
        
        {(post.author || (post.tags && post.tags.length > 0)) && (
          <div className="news-item__meta">
            {post.author && (
              <span className="news-item__author">
                <Link to={`${siteConfig.baseurl}/members#${post.author}`}>
                  {post.author}
                </Link>
              </span>
            )}
            
            {post.tags && post.tags.length > 0 && (
              <>
                {post.author && ' | '}
                <span className="news-item__tags-label">tags:</span>
                {post.tags.map((tag, tagIndex) => (
                  <Link
                    key={tagIndex}
                    to={`${siteConfig.baseurl}/tags/${getTagSlug(tag)}/`}
                    variant="tag"
                    className="news-item__tag"
                  >
                    #{tag}
                  </Link>
                ))}
              </>
            )}
          </div>
        )}
      </div>
    </div>
  )
})

NewsItem.displayName = 'NewsItem'

export default NewsItem

