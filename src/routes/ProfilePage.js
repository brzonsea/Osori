import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import firebase from 'firebase/app';
import NavBar from '../components/NavBar/NavBar';
import ProfileMain from '../components/Profile/ProfileMain/ProfileMain';
import KeywordTimeline from '../components/KeywordTimeline/KeywordTimeline';
import NewsList from '../components/NewsList/NewsList';
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
    console.log('match props', this.props.match);
    let id;
    if (this.props.match.params.id) {
      id = this.props.match.params.id;
      let fetchedProfile;
      firebase.database().ref(`Profiles/${id}`)
        .once('value', (snapshot) => {
          console.log('Fetched Profile', snapshot.val());
          fetchedProfile = snapshot.val();
          const { Name, Keywords, News, Nickname, Position, Photo } = fetchedProfile;
          const keywordsList = this.keywordsHandler(Keywords);
          this.setState({
            name: Name,
            keywords: keywordsList,
            newsList: News,
            nicknames: Nickname,
            positions: Position,
            profilePicURL: Photo,
          })
        }).catch(err => {
          console.log('Something Wrong While fetching Profile', err);
        });
    }
  }

  render() {
    return (
      <div>
        <NavBar />
        <div className="Profile-box">
          <ProfileMain
            name={this.state.name}
            keywords={this.state.keywords}
            relatedPpl={this.state.relatedPpl}
            profilePicURL={this.state.profilePicURL}
          />
          <KeywordTimeline />
        </div>
        <div>
          <NewsList
            newsList={this.state.newsList}
          />
        </div>
      </div>
    );
  }
}

export default ProfilePage;
