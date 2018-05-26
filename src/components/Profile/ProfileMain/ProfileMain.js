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
            {this.props.name}
          </div>
          <div className="second-row">
            {this.props.keywords.map((keyword) => {
              return (
                <div className="keyword">
                  {keyword}
                </div>
              )
            })}
          </div>
          <div className="third-row">
            {this.props.relatedPpl.map((keyword) => {
              return (
                <div className="keyword">
                  {keyword}
                </div>
              )
            })}
          </div>
        </div>
      </div>
    );
  }
}

export default ProfileMain;
