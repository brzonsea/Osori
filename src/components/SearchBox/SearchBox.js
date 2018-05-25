import React, { Component } from 'react';
import IoIosSearch from 'react-icons/lib/io/ios-search'
import { searchIcon } from '../../assets/images';
import { ko } from '../../lang';
import './SearchBox.css';

class SearchBox extends Component {

  render() {
    return (
      <div className="search-container">
        <div className="search-box">
          <div className="search-box-input-container">
            <IoIosSearch className="search-icon" />
            <div className="search-box-placeholder">
            {ko.SEARCHBOXPLACEHOLDER}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default SearchBox;
