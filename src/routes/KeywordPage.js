import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import NavBar from '../components/NavBar/NavBar';
import RelatedPeople from '../components/RelatedPeople/RelatedPeople';
import LoadingSpinner from '../components/LoadingSpinner/LoadingSpinner';
import { CheckEmptyObj, DateParser } from '../lib';
import './KeywordPage.css';

class KeywordPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      keywords: {},
      news: {},
      profiles: {},
    }
  }
  propsHandler(props) {
    console.log('KeywordPage', props);
    const { match, keywords, news, profiles } = props;

    if (!CheckEmptyObj(keywords) && keywords !== this.state.keywords) {
      this.setState({ keywords });
    }
    if (!CheckEmptyObj(news) && news !== this.state.news) {
      this.setState({ news });
    }
    if (!CheckEmptyObj(profiles) && profiles !== this.state.profiles) {
      this.setState({ profiles });
    }
  }
  componentDidMount() {
    this.propsHandler(this.props);
  }

  componentWillReceiveProps(nextProps) {
    this.propsHandler(nextProps);
  }

  render() {
    const { match } = this.props;
    console.log('KeywordPage props', this.props);
    console.log('KeywordPage state', this.state);
    const { profiles, keywords, news } = this.state;
    return(
      <div>
        <NavBar />
        {
          !CheckEmptyObj(profiles) && !CheckEmptyObj(keywords) && !CheckEmptyObj(news) ?
          <div>
            <div className="keyword-title">
              <div className="keyword-title-text">
                {`#${match.params.keyword}`}
              </div>
            </div>
            <RelatedPeople
              allprofiles={profiles}
              keywords={keywords}
              keyword={match.params.keyword}
            />
          </div> :
          <LoadingSpinner loading />
        }
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    keywords: state.keywords,
    profiles: state.profiles,
    news: state.news,
  }
}

export default connect(mapStateToProps)(KeywordPage);
