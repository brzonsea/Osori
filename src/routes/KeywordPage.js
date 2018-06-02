import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import NavBar from '../components/NavBar/NavBar';

class KeywordPage extends Component {
  constructor(props) {
    super(props);
    this.state = {

    }
  }

  render() {
    return(
      <div>
        <NavBar />
        <div className="keyword-title">
        </div>
        
      </div>
    );
  }
}

export default KeywordPage;
