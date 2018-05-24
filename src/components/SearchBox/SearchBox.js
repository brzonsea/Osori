import React, { Component } from 'react';
import { searchIcon } from '../../assets/images';
import { ko } from '../../lang';
import './SearchBox.css';

class SearchBox extends Component {

  render() {
    return (
      <div className="search-container">
        <div className="search-box">
          <input className="search-box-input" type="text" placeholder={ko.SEARCHBOXPLACEHOLDER} />
        </div>
      </div>
    );
  }
}

export default SearchBox;
