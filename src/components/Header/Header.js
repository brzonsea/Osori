import React from 'react';
import logo from '../../logo.svg';
import './Header.css';

const Header = (props) => {
  return (
    <div className="Header">
      <header className="Header-header">
        <img src={logo} className="Header-logo" alt="logo" />
        <h1 className="Header-title">Welcome to React</h1>
      </header>
    </div>
  );
}

export default Header;
