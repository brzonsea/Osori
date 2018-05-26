import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import Header from '../components/Header/Header';


import SearchBox from '../components/SearchBox/SearchBox';

class SearchIndexPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchActive: false,
    };
  }
  render() {
    return (
      <div>
        <Header />
        <Link to='/search'>
          <SearchBox />
        </Link>
      </div>
    );
  }
}

export default SearchIndexPage;
