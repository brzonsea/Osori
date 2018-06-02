import React from 'react';
import { Link } from 'react-router-dom'
import logo from '../../logo.svg';
import './Header.css';

const Header = (props) => {
  return (
    <div className="Header">
      <header className="Header-header">
        <Link to='/' style={{ textDecoration: 'none' }}>
          <img src={logo} className="Header-logo" alt="logo" />
        </Link>
      </header>
    </div>
  );
}

export default Header;
