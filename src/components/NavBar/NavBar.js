import React, { Component } from 'react';
import SearchBoxSmall from './SearchBoxSmall/SearchBoxSmall';
import logo from '../../logo.svg';
import './NavBar.css';

class NavBar extends Component {
  constructor(props) {
    super(props);
    this.state = {

    }
  }

  render() {
    return(
      <div className="NavBar">
        <header className="NavBar-header">
          <div className="About-us">About Us</div>
          <img src={logo} className="NavBar-logo" />
          <SearchBoxSmall />
        </header>
      </div>
    );
  }
}

export default NavBar;
