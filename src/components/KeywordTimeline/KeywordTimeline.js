import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import HorizontalTimeline from 'react-horizontal-timeline';
import DateParser from '../../lib/DateParser';
import './KeywordTimeline.css';
import { ko } from '../../lang';

class KeywordTimeline extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: 0,
      previous: 0,
      datesFormattedList: [],
    }
  }

  renderLabel(date) {
    const index = date.split('.').join('');
    const keywordsOfDay = this.props.keywords[index];
    return (
      <div>
        <div className="keyword-date-box">
          <div className="keyword-date-text">
            {date}
          </div>
        </div>
        <div className="tag-box-container">
          <div className="tag-box-triangle" />
          <div className="keyword-tag-box">
            <div className="tag">
              {`#${keywordsOfDay[0]}`}
            </div>
          </div>
        </div>
      </div>
    );

  }

  render() {
    return (
      <div className="Keyword-timeline-container">
        <div className="title-row">
          {ko.KEYWORDTIMELINE}
        </div>
        <div className="horizontal-timeline-box">
          <HorizontalTimeline
            values={this.props.datesFormattedList}
            index={this.props.scrollToId}
            indexClick={this.props.onClick}
            getLabel={this.renderLabel.bind(this)}
            maxEventPadding={700}
            styles={{ foreground: '#4a90e2', background: '#f8f8f8', outline: '#dfdfdf'}}
            isOpenEnding
            labelWidth={180}
          />
        </div>
      </div>
    );
  }
}

export default KeywordTimeline;
