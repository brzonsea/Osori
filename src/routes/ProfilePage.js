import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import firebase from 'firebase/app';
import NavBar from '../components/NavBar/NavBar';
import ProfileMain from '../components/Profile/ProfileMain/ProfileMain';
import KeywordTimeline from '../components/KeywordTimeline/KeywordTimeline';
import NewsList from '../components/NewsList/NewsList';
import LoadingSpinner from '../components/LoadingSpinner/LoadingSpinner';
import { ProfileObjToList, CheckEmptyObj, DateParser } from '../lib';
import './ProfilePage.css';

class ProfilePage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      keywords: {},
      news: {},
      profiles: {},
      relatedPpl: [],
      newsList: [],
      positions: [],
      nicknames: [],
      fetchedProfile: null,
      profilePicURL: '',
      allNews: null,
      scrollToId: 0,
      scrollToIdPrev: 0,
      datesFormattedList: [],
    }
  }

  propsHandler(props) {
    console.log('ProfilePage', props);
    const { match, keywords, news, profiles } = props;

    if (!CheckEmptyObj(keywords) && keywords !== this.state.keywords) {
      this.setState({ keywords });
    }
    if (!CheckEmptyObj(news) && news !== this.state.news) {
      this.setState({ news });
    }
    if (!CheckEmptyObj(profiles) && profiles !== this.state.profiles) {
      if (match.params.id) {
        const id = match.params.id;
        if (profiles && profiles[id]) {
          const fetchedProfile = profiles[id];
          const keywordDatesList = Object.keys(fetchedProfile.Keywords);
          keywordDatesList.sort((a,b) => {return a - b});
          const datesFormattedList = keywordDatesList.map((date) => {
            const { year, month, day } = DateParser(date);
            return `${year}.${month}.${day}`
          })
          console.log('datesFormattedList', datesFormattedList);
          this.setState({ profiles, datesFormattedList, fetchedProfile,
            scrollToId: keywordDatesList.length - 1
          });
        }
      }
    }
  }
  onKeywordClick = (index) => {
    const elementId = this.state.datesFormattedList[index];
    console.log('elementId', elementId);
    const element = document.getElementById(elementId);
    console.log('element', element);
    element.scrollIntoView(true); 
      this.setState({ scrollToId: index, scrollToIdPrev: this.state.scrollToId });
  }

  componentDidMount() {
    this.propsHandler(this.props);
  }
  componentWillReceiveProps(nextProps) {
    this.propsHandler(nextProps);
  }

  render() {
    console.log('Inside ProfilePage render', this.props);
    const { match } = this.props;
    const { profiles, keywords, news, fetchedProfile, datesFormattedList } = this.state;
    console.log(this.state);

    return (
      <div>
        <NavBar />
        {
          fetchedProfile && !CheckEmptyObj(keywords) && !CheckEmptyObj(news) ?
          <div>
            <div className="Profile-box">
              <ProfileMain
                name={fetchedProfile.Name}
                keywords={fetchedProfile.Keywords}
                relatedPpl={fetchedProfile.relatedPpl}
                profilePicURL={fetchedProfile.Photo}
              />
              <KeywordTimeline
                keywords={fetchedProfile.Keywords}
                onClick={this.onKeywordClick.bind(this)}
                scrollToId={this.state.scrollToId}
                datesFormattedList={datesFormattedList}
              />
            </div>
            <div>
              <NewsList
                newsList={fetchedProfile.News}
                allNews={this.state.news}
                keywords={fetchedProfile.Keywords}
              />
            </div>
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

export default connect(mapStateToProps)(ProfilePage);
