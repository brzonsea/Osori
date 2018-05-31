import React from 'react';
import './NewsCardMeta.css';

const NewsCardMeta = ({date, keywords}) => {
  const { year, month, day } = date;
  console.log('Newsmetadata keywords', keywords);

  return (
    <div className="Meta-container">
      <div className="Date-box">
        {`${year}.${month}.${day}`}
      </div>
      <div className="keywords-box">
        {keywords &&
          keywords.map((keyword, index) => {
            if (index >= 5) return;
            return (
              <div className="keyword">
                {`#${keyword}`}
              </div>
            )
          })
        }
      </div>
    </div>
  )
}

export default NewsCardMeta;
