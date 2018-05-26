import React, { Component } from 'react';
import { Link } from 'react-router-dom'
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
          <Link to='/search' style={{ textDecoration: 'none' }}>
            <SearchBoxSmall />
          </Link>
        </header>
      </div>
    );
  }
}

export default NavBar;
