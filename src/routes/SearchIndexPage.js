import React, { Component } from 'react';
import { Link, Redirect } from 'react-router-dom'
import { connect } from 'react-redux';
import WordCloud from 'react-d3-cloud';
import Header from '../components/Header/Header';
import SearchBox from '../components/SearchBox/SearchBox';
import LoadingSpinner from '../components/LoadingSpinner/LoadingSpinner';
import { CheckEmptyObj } from '../lib';

import './SearchIndexPage.css';

class SearchIndexPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchActive: false,
      cloudKeywords: null,
      redirect: false,
      redirectKeyword: null,
    };
  }

  propsHandler(props) {
    const { keywords } = props;
    console.log('keywords', keywords);
    if (!CheckEmptyObj(keywords)) {
      const keywordsList = Object.keys(keywords);
      console.log('keywordsList', keywordsList);
      const cloudKeywordsLarge = keywordsList.map((kw) => {
        return {
          text: kw,
          value: keywords[kw].Weight
        }
      });
      cloudKeywordsLarge.sort((a,b) => b.value - a.value);
      console.log('cloudKeywordsLarge', cloudKeywordsLarge);
      const cloudKeywords = cloudKeywordsLarge.slice(0, 50);
      console.log('cloudKeywords', cloudKeywords);
      this.setState({ cloudKeywords });
    }
  }

  componentDidMount() {
    this.propsHandler(this.props);
  }

  componentWillReceiveProps(nextProps) {
    this.propsHandler(nextProps);
  }

  wordClickHandler(word) {
    this.setState({ redirect: true, redirectKeyword: word.text });
  }

  render() {
    const { cloudKeywords } = this.state;
    if (this.state.redirect && this.state.redirectKeyword) {
      return <Redirect push to={`/keywords/${this.state.redirectKeyword}`} />;
    }
    return (
      <div className="main-page">
        <Header />
        <Link to='/search'>
          <SearchBox />
        </Link>
        <div className="wordcloud-wrapper">
          {
            cloudKeywords ?
            <WordCloud
              data={cloudKeywords}
              font={'NanumSquare'}
              onWordClick={this.wordClickHandler.bind(this)}
            /> :
            <LoadingSpinner loading />
          }
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    keywords: state.keywords,
  }
}

export default connect(mapStateToProps)(SearchIndexPage);
