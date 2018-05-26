import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import NavBar from '../components/NavBar/NavBar';

class ProfilePage extends Component {
  constructor(props) {
    super(props);
    this.state = {

    }
  }
  render() {
    return (
      <div>
        <NavBar />
      </div>
    );
  }
}

export default ProfilePage;
