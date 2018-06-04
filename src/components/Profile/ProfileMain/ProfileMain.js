import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './ProfileMain.css';

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
