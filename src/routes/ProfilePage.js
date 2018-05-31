import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import firebase from 'firebase/app';
import NavBar from '../components/NavBar/NavBar';
import ProfileMain from '../components/Profile/ProfileMain/ProfileMain';
import KeywordTimeline from '../components/KeywordTimeline/KeywordTimeline';
import NewsList from '../components/NewsList/NewsList';
import ProfileObjToList from '../lib/ProfileObjToList';
import './ProfilePage.css';

class ProfilePage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      keywords: [],
      relatedPpl: [],
      newsList: [],
      positions: [],
      nicknames: [],
      profilePicURL: '',
      allNews: null,
    }
  }

  keywordsHandler(keywordsObj) {
    const keywordDates = Object.keys(keywordsObj);
    console.log('keywordDates', keywordDates);
    keywordDates.sort((a,b) => { return b - a; });
    console.log('keywordDates sorted, recent first', keywordDates);
    const keywordList = keywordDates.map((key) => {
      return { date: key, keywords: keywordsObj[key] }
    });
    console.log('keywordList', keywordList);
    return keywordList;
  }
  componentDidMount() {
    console.log('Profilepage componentDidMount', this.props);
  }
  componentWillReceiveProps(nextProps) {
    console.log('nextProps', nextProps);
    console.log('this.props.profiles', this.props.profiles);
    console.log('match props', this.props.match);
    const isSameNews = this.props.news === nextProps.news;
    const isSameProfiles = this.props.profiles === nextProps.profiles;
    const isSameKeywords = this.props.keywords === nextProps.keywords;
    if (isSameNews && isSameKeywords && isSameProfiles) return;

    const { match, profiles, keywords, news } = nextProps;
    let id;
    if (match.params.id) {
      id = match.params.id;
      if (profiles && profiles[id]) {
        const fetchedProfile = profiles[id];
        console.log('fetchedProfile', fetchedProfile);
        const { Name, Keywords, News, Nickname, Position, Photo } = fetchedProfile;
        this.setState({
          name: Name,
          keywords: Keywords,
          newsList: News,
          nicknames: Nickname,
          positions: Position,
          profilePicURL: Photo,
        })
      }
    }

    if (Object.keys(news).length !== 0) {
      this.setState({
        allNews: news
      })
    }
  }

  render() {
    console.log('Inside ProfilePage render', this.props);
    const { match, profiles, keywords, news } = this.props;
    let id;
    let fetchedProfile;
    if (match.params.id) {
      id = match.params.id;
      if (profiles && profiles[id]) {
        fetchedProfile = profiles[id];
      }
    }
    return (
      <div>
        <NavBar />
        <div className="Profile-box">
          {fetchedProfile &&
            <ProfileMain
            name={fetchedProfile.Name}
            keywords={fetchedProfile.Keywords}
            relatedPpl={fetchedProfile.relatedPpl}
            profilePicURL={fetchedProfile.Photo}
            />
          }
          <KeywordTimeline />
        </div>
        <div>
          {fetchedProfile && Object.keys(news).length !== 0 &&
            <NewsList
              newsList={fetchedProfile.News}
              allNews={news}
              keywords={fetchedProfile.Keywords}
            />
          }
        </div>
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
