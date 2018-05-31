import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Autosuggest from 'react-autosuggest';
import ProfileObjToList from '../../lib/ProfileObjToList';
import './SearchActive.css';

class SearchActive extends Component {
  constructor(props) {
    super(props);
    this.state = {
      profilesList: [],
      suggestions: [],
      value: '',
    }
  }

  escapeRegexCharacters = (str) => {
    return str.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
  }

  getSuggestions = (value) => {
    // const inputValue = value.trim().toLowerCase();
    const escapedValue = this.escapeRegexCharacters(value.trim());
    const inputValue = escapedValue.toLowerCase();
    const inputLength = inputValue.length;
    if (inputValue === '') {
      return [];
    }
    const { profiles } = this.props;
    const profilesList = ProfileObjToList(profiles);
    console.log('inside getSuggestions', profiles, inputLength);
    const regex = new RegExp('\\b' + escapedValue, 'i');
    return inputLength === 0 ? [] : profilesList.filter(profile => {
      if (profile.key === '0') return;
      const compareString = profile.Name.toLowerCase().slice(0, inputLength);
      return compareString === inputValue
    }
    );
  }

  getSuggestionValue(suggestion) {
    console.log('getSuggestionValue', suggestion);
    return `${suggestion.Name}`;
  }

  onChange = (event, { newValue, method }) => {
    this.setState({
      value: newValue
    });
  };

  handleSearchChange = (event) => {
    this.setState({
      value: event.target.value,
    });
  }

  // Use your imagination to render suggestions.
  renderSuggestion = suggestion => {
    console.log('Suggestion', suggestion);
    return (
      <Link to={`/profile/${suggestion.key}`}>
        <div className="Suggestion-box">
          {suggestion.Name}
        </div>
      </Link>
    );
  }

  // Autosuggest will call this function every time you need to update suggestions.
  // You already implemented this logic above, so just use it.
  onSuggestionsFetchRequested = ({ value }) => {
    this.setState({
      suggestions: this.getSuggestions(value)
    });
  };

  // Autosuggest will call this function every time you need to clear suggestions.
  onSuggestionsClearRequested = () => {
    this.setState({
      suggestions: []
    });
  };


  render() {
    console.log('props', this.props);
    const { value, suggestions, profilesList } = this.state;
    const inputProps = {
      value,
      onChange: this.onChange
    };

    return (
      <div className="search-active-container">
        <Autosuggest
          suggestions={suggestions}
          onSuggestionsFetchRequested={this.onSuggestionsFetchRequested}
          onSuggestionsClearRequested={this.onSuggestionsClearRequested}
          getSuggestionValue={this.getSuggestionValue}
          renderSuggestion={this.renderSuggestion}
          inputProps={inputProps}
        />
      </div>
    );
  }
}

export default SearchActive;
