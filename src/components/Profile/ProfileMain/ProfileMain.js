import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import GoogleImages from 'google-images';
import './ProfileMain.css';

const API_KEY = 'AIzaSyC8L-IC-hN1-5TDxemn91lTMEc4RWHkTsI';
const CSE_ID = '006609745617069818875:lbvun3-obqi';
const client = new GoogleImages(CSE_ID, API_KEY);

class ProfileMain extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      keywords: null,
      profilePicURL: '',
      relatedPpl: [],
    }
  }

  componentDidMount() {
    this.propsHandler(this.props);
  }

  componentWillReceiveProps(nextProps) {
    this.propsHandler(nextProps);
  }

  propsHandler(props) {
    const { name, keywords, profilePicURL, relatedPpl } = props;
    this.setState({
      name,
      keywords,
      profilePicURL,
      relatedPpl
    })
  }

  fetchGoogleImage(name) {
    client.search(name)
        .then(images => {
          if (images.length !== 0) {
            this.setState({ profilePicURL: images[0].thumbnail.url })
          }
    }).catch(err => {
      console.log('Something wrong while fetching image search ', err);
    });
  }

  render() {
    return(
      <div className="Profile-Main-Container">
        <div className="Profile-picture-container">
          <img src={this.state.profilePicURL} className="Profile-picture" />
        </div>
        <div className="Profile-Main-Right-Container">
          <div className="first-row">
            {this.state.name}
          </div>
          <div className="second-row">
            {this.state.keywords
              && this.state.keywords.map((keyword, index) => {
              if (index > 5) return;
              return (
                <Link to={`/keywords/${keyword}`} style={{ textDecoration: 'none' }} key={index}>
                  <div className="keyword" key={index}>
                    {`#${keyword}`}
                  </div>
                </Link>
              )
            })
          }
          </div>
        </div>
      </div>
    );
  }
}

export default ProfileMain;
