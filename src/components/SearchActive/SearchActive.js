import React, { Component } from 'react';
import './SearchActive.css';

class SearchActive extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchText: '',
    }
  }

  render() {
    return (
      <div className="search-active-container">
        <div className="search-active-box">
          <input className="search-active-input" />
        </div>
      </div>
    );
  }
}

export default SearchActive;
