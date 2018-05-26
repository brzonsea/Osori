import React, { Component } from 'react';
import {
  Route,
  Link
} from 'react-router-dom'
import Header from './components/Header/Header';
import './App.css';


import SearchBox from './components/SearchBox/SearchBox';

class SearchIndexPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchActive: false,
    };
  }
  render() {
    return (
      <div className="App">
        <Header />
        <SearchBox />
      </div>
    );
  }
}

export default SearchIndexPage;
