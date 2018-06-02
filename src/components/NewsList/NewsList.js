import React, { Component } from 'react';
import { ko } from '../../lang';
import NewsCardMeta from './NewsCardMeta';
import { DateParser, NewsObjToList } from '../../lib';
import './NewsList.css';

class NewsList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      orderChronological: false,
    }
  }

  render() {
    console.log('inside NewsList render', this.props);
    const { allNews, keywords } = this.props;
    const newsList = NewsObjToList(this.props.newsList);
    if (Object.keys(allNews).length === 0) return null;
    return (
      <div className="News-List-Container">
        <div className="title-row">
          {ko.KEYWORDNEWS}
        </div>
        { newsList && allNews &&
          newsList.length !== 0 &&
          newsList.map((news) => {
            const Date = Object.keys(news)[0];
            const { year, month, day } = DateParser(Date);
            const newsOfDateArray = news[Date].news;
            const newsCardDay = newsOfDateArray.map((newsOfDate) => {
              const newsItem = allNews[Date][newsOfDate];
              if (!newsItem) return;
              return (
                <div key={Date + newsOfDate} className="News-Container">
                  <div className="Broadcaster-row">
                    <div className="Broadcaster-text">
                      {newsItem.Broadcast}
                    </div>
                    <div className="News-date">
                      {`${year}.${month}.${day}`}
                    </div>
                  </div>
                  <a href={newsItem.Link} className="link-to-news" target="_blank">
                    <div className="News-title-row">
                      {newsItem.Title.trim()}
                    </div>
                    <div className="News-url-row">
                      {newsItem.Link}
                    </div>
                  </a>
                </div>
              );
            });
          return (
            <div className="News-day-card" key={`${year}.${month}.${day}`} id={`${year}.${month}.${day}`}>
              <NewsCardMeta date={{ year, month, day}} keywords={keywords ? keywords[Date] : null} />
             {newsCardDay}
            </div>
          );
          })
        }
      </div>
    );
  }
}

export default NewsList;
