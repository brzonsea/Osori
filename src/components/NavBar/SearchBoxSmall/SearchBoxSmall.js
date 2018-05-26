import React, { Component } from 'react';
import IoIosSearch from 'react-icons/lib/io/ios-search'
import { ko } from '../../../lang';
import './SearchBoxSmall.css';

class SearchBoxSmall extends Component {

  render() {
    return (
      <div className="search-box-small">
        <div className="search-box-small-input-container">
          <IoIosSearch className="search-icon-small" />
          <div className="search-box-small-placeholder">
            {ko.SEARCHBOXPLACEHOLDER}
          </div>
        </div>
      </div>
    );
  }
}

export default SearchBoxSmall;
