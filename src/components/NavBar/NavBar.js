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
          <Link to='/about-us/' style={{ textDecoration: 'none' }}>
            <div className="About-us">About Us</div>
          </Link>
          <Link to='/' style={{ textDecoration: 'none' }}>
            <img src={logo} className="NavBar-logo" />
          </Link>
          <Link to='/search' style={{ textDecoration: 'none' }}>
            <SearchBoxSmall />
          </Link>
        </header>
      </div>
    );
  }
}

export default NavBar;
