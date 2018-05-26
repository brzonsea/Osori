import React, { Component } from 'react';
import { Link } from 'react-router-dom';
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
