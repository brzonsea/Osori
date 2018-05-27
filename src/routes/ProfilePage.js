import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import firebase from 'firebase/app';
import NavBar from '../components/NavBar/NavBar';
import ProfileMain from '../components/Profile/ProfileMain/ProfileMain';
import KeywordTimeline from '../components/KeywordTimeline/KeywordTimeline';
import './ProfilePage.css';

class ProfilePage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '김정은',
      keywords: ['#남북정상회담', '#한반도비핵화', '#늙다리미치광이', '#로켓맨', '#최대다섯개'],
      relatedPpl: ['@문재인', '@김여정', '@도널드트럼프', '@관련인물', '@최대다섯개'],
      newsList: [],
      positions: [],
      nicknames: [],
    }
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
          this.setState({
            name: fetchedProfile.Name,
            keywords: fetchedProfile.Keywords,
            newsList: fetchedProfile.News,
            positions: fetchedProfile.Position,
            nicknames: fetchedProfile.Nickname,
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
          />
          <KeywordTimeline />
        </div>
      </div>
    );
  }
}

export default ProfilePage;
