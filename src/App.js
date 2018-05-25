import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { logoImage } from './assets/images';


import SearchBox from './components/SearchBox/SearchBox';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchActive: false,
    };
  }
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logoImage} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <SearchBox />
      </div>
    );
  }
}

export default App;
