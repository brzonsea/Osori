import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import NavBar from '../components/NavBar/NavBar';
import NameTagger from '../components/NameTagger/NameTagger';
import { ko } from '../lang';
import './AboutUsPage.css';

class AboutUsPage extends Component {
  constructor(props) {
    super(props);
    this.state = {

    }
  }

  render() {
    return(
      <div>
        <NavBar />
        <div className="about-us">
          <NameTagger
            label={ko.NAMETAGGER}
          />
        </div>
      </div>
    );
  }
}

export default AboutUsPage;
