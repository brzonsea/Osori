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

  componentWillMount() {
    console.log('keywordtimeline', this.props);
    const { keywords } = this.props;
    console.log('KeywordTimeline', keywords);
    const keywordDatesList = Object.keys(keywords);
    keywordDatesList.sort((a,b) => {return a - b});
    const datesFormattedList = keywordDatesList.map((date) => {
      const { year, month, day } = DateParser(date);
      return `${year}.${month}.${day}`
    })
    console.log('datesFormattedList', datesFormattedList);
    this.setState({ datesFormattedList, value: datesFormattedList.length - 1 });
  }

  renderLabel(date) {
    const index = date.split('.').join('');
    const keywordsOfDay = this.props.keywords[index];
    return (
      <div className="keyword-tag-box">
        <div className="tag">
          {`#${keywordsOfDay[0]}`}
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
            values={this.state.datesFormattedList}
            index={this.state.value}
            indexClick={(index) => {
                this.setState({ value: index, previous: this.state.value });
            }}
            getLabel={this.renderLabel.bind(this)}
            isOpenEnding
            labelWidth={180}
          />
        </div>
      </div>
    );
  }
}

export default KeywordTimeline;
