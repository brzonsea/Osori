import React, { Component } from 'react';
import { ko } from '../../lang';
import './NewsList.css';

class NewsList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      newsList: [],
      orderChronological: false,
    }
  }

  componentWillReceiveProps(nextProps) {
    console.log('newsList', nextProps.newsList);
    this.setState({ newsList: nextProps.newsList });
  }


  render() {
    const { newsList } = this.state;
    return (
      <div className="News-List-Container">
        <div className="title-row">
          {ko.KEYWORDNEWS}
        </div>
        {
          newsList.length !== 0 &&
          newsList.map((news) => {
            const { Broadcast, Date, Title, Link } = news;
            return (
              <div className="News-Container">
                <div className="Broadcaster-row">
                  <div className="Broadcaster-text">
                    {news.Broadcast}
                  </div>
                  <div className="News-date">
                    {`${Date.slice(0, 4)}.${Date.slice(4, 6)}.${Date.slice(6, 8)}`}
                  </div>
                </div>
                <div className="News-title-row">
                  {Title.trim()}
                </div>
                <div className="News-url-row">
                  {Link}
                </div>
              </div>
            );
          })
        }
      </div>
    );
  }
}

export default NewsList;
