import React, { Component } from 'react';
import GoogleImages from 'google-images';
import { exampleProfile } from '../../../assets/images';
import './ProfileMain.css';

const API_KEY = 'AIzaSyC8L-IC-hN1-5TDxemn91lTMEc4RWHkTsI';
const CSE_ID = '006609745617069818875:lbvun3-obqi';
const client = new GoogleImages(CSE_ID, API_KEY);

class ProfileMain extends Component {
  constructor(props) {
    super(props);
    this.state = {
      profilePicURL: '',
    }
  }

  componentWillReceiveProps(nextProps) {
    const { name } = nextProps;
    if (false && name) {
      console.log('client', client, name);
      client.search(name)
        .then(images => {
          console.log('images fetched by google', images);
          if (images.length !== 0) {
            this.setState({ profilePicURL: images[0].thumbnail.url })
          }
          /*
          [{
          "url": "http://steveangello.com/boss.jpg",
          "type": "image/jpeg",
          "width": 1024,
          "height": 768,
          "size": 102451,
          "thumbnail": {
          "url": "http://steveangello.com/thumbnail.jpg",
          "width": 512,
          "height": 512
        }
      }]
      */
    }).catch(err => {
      console.log('Something wrong while fetching image search ', err);
    });
    }
  }

  render() {
    return(
      <div className="Profile-Main-Container">
        <div className="Profile-picture-container">
          <img src={false ? this.state.profilePicURL : exampleProfile} className="Profile-picture" />
        </div>
        <div className="Profile-Main-Right-Container">
          <div className="first-row">
            {this.props.name}
          </div>
          <div className="second-row">
            {this.props.keywords && this.props.keywords.map((keyword, index) => {
              if (index > 5) return;
              return (
                <div className="keyword">
                  {`#${keyword}`}
                </div>
              )
            })}
          </div>
          {false && <div className="third-row">
            {this.props.relatedPpl.map((keyword) => {
              return (
                <div className="keyword">
                  {keyword}
                </div>
              )
            })}
          </div>}
        </div>
      </div>
    );
  }
}

export default ProfileMain;
