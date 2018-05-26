import React, { Component } from 'react';
import { exampleProfile } from '../../../assets/images';
import './ProfileMain.css';

class ProfileMain extends Component {
  constructor(props) {
    super(props);
    this.state = {

    }
  }

  render() {
    return(
      <div className="Profile-Main-Container">
        <div className="Profile-picture-container">
          <img src={exampleProfile} className="Profile-picture" />
        </div>
        <div className="Profile-Main-Right-Container">
          <div className="first-row">
            김정은
          </div>
          <div className="second-row">
            #남북정상회담
          </div>
        </div>
      </div>
    );
  }
}

export default ProfileMain;
