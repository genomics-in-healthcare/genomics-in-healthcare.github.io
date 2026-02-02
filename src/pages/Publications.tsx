import { FC } from 'react'
import PublicationItem from '../components/PublicationItem'
import { publicationsData } from '../data/publications'
import './Publications.css'

const Publications: FC = () => {
  return (
    <div className="md-main-content">
      <div className="publications-container">
        <div className="pub-list">
          {/* Book Section */}
          {publicationsData.book.length > 0 && (
            <div className="pub-section">
              <font face="Arial">
                <strong>Book</strong>
                <blockquote>
                  <ul style={{ listStyle: 'none', padding: 0 }}>
                    {publicationsData.book.map((book, index) => (
                      <PublicationItem key={`book-${index}`} html={book.html} />
                    ))}
                  </ul>
                </blockquote>
                <hr />
              </font>
            </div>
          )}

          {/* Publications by Year */}
          {Object.keys(publicationsData.byYear)
            .sort((a, b) => parseInt(b) - parseInt(a))
            .map((year) => {
              const yearData = publicationsData.byYear[year];
              if (yearData.items.length === 0) return null;

              return (
                <div key={year} className="pub-year-section">
                  <p>
                    <font face="Arial">
                      <b>
                        {year}
                        <a name={year}></a>
                      </b>
                    </font>
                  </p>
                  <ul>
                    {yearData.items.map((item, index) => (
                      <PublicationItem
                        key={`${year}-${index}`}
                        html={item.html}
                      />
                    ))}
                  </ul>
                </div>
              );
            })}
        </div>
      </div>
    </div>
  );
};

export default Publications;

