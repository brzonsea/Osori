import React, { Component } from 'react';
import './SearchActive.css';

class SearchActive extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchText: '',
    }
  }

  handleSearchChange = (event) => {
    this.setState({
      searchText: event.target.value,
    });
  }

  render() {
    console.log('SearchText', this.state.searchText);
    return (
      <div className="search-active-container">
        <div className="search-active-box">
          <input className="search-active-input" type="text" onChange={this.handleSearchChange} />
        </div>
      </div>
    );
  }
}

export default SearchActive;
