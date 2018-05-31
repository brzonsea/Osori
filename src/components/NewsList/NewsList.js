import React, { Component } from 'react';
import { ko } from '../../lang';
import NewsCardMeta from './NewsCardMeta';
import NewsObjToList from '../../lib/NewsObjToList';
import DateParser from '../../lib/DateParser';
import './NewsList.css';

class NewsList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      allNews: null,
      newsList: null,
      orderChronological: false,
    }
  }

  componentWillReceiveProps(nextProps) {
    console.log('newsList', nextProps.newsList);
    console.log('allNews', nextProps.allNews);
    const newsListSame = nextProps.newsList === this.props.newsList;
    const allNewsSame = nextProps.allNews === this.props.allNews;
    if (newsListSame && allNewsSame) return;

    const news = NewsObjToList(nextProps.newsList);
    const allNews = nextProps.allNews;
    console.log('news', news);
    this.setState({ newsList: news, allNews });
  }


  render() {
    console.log('inside NewsList render', this.props);
    const { allNews, keywords } = this.props;
    const newsList = NewsObjToList(this.props.newsList);
    return (
      <div className="News-List-Container">
        <div className="title-row">
          {ko.KEYWORDNEWS}
        </div>
        { newsList && allNews &&
          newsList.length !== 0 &&
          newsList.map((news) => {
            console.log('news item', news);
            const Date = Object.keys(news)[0];
            const { year, month, day } = DateParser(Date);
            const newsOfDateArray = news[Date].news;
            console.log('newsOfDateArray', newsOfDateArray);
            const newsCardDay = newsOfDateArray.map((newsOfDate) => {
              console.log('newsOfDate', newsOfDate);
              const newsItem = allNews[Date][newsOfDate];
              console.log('newsItem', newsItem);
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
              <div className="News-day-card" key={Date}>
                <NewsCardMeta date={{ year, month, day}} keywords={keywords[Date]} />
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
