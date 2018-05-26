import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import Header from '../components/Header/Header';


import SearchActive from '../components/SearchActive/SearchActive';

class SearchActivePage extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    console.log('Inside SearchActivePage');
    return (
      <div>
        <Header />
        <SearchActive />
      </div>
    );
  }
}

export default SearchActivePage;
