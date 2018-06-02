import React from 'react';
import { Link } from 'react-router-dom';
import './NewsCardMeta.css';

const NewsCardMeta = ({date, keywords}) => {
  const { year, month, day } = date;
  return (
    <div className="Meta-container">
      <div className="Date-box">
        {`${year}.${month}.${day}`}
      </div>
      <div className="keywords-box">
        {keywords &&
          keywords.map((keyword, index) => {
            if (index >= 5) return null;
            return (
              <Link to={`/keywords/${keyword}`} style={{ textDecoration: 'none' }} key={index}>
                <div className="keyword" key={index}>
                  {`#${keyword}`}
                </div>
              </Link>
            )
          })
        }
      </div>
    </div>
  )
}

export default NewsCardMeta;
