import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './KeywordTimeline.css';
import { ko } from '../../lang';

class KeywordTimeline extends Component {

  render() {
    return (
      <div className="Keyword-timeline-container">
        <div className="title-row">
          {ko.KEYWORDTIMELINE}
        </div>
      </div>
    );
  }
}

export default KeywordTimeline;
