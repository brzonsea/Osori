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
    const { profilesList } = this.state;
    console.log('inside getSuggestions', profilesList, inputLength);
    const regex = new RegExp('\\b' + escapedValue, 'i');
    return inputLength === 0 ? [] : this.state.profilesList.filter(profile => {
      if (profile.key === '0') return;
      const compareString = profile.Name.toLowerCase().slice(0, inputLength);
      return compareString === inputValue
    }
    );
    // return this.state.profile.filter(profile => regex.test(this.getSuggestionValue(profile.name)));
  }

  getSuggestionValue(suggestion) {
    console.log('getSuggestionValue', suggestion);
    return `${suggestion.Name}`;
  }

  componentWillReceiveProps(nextProps) {
    const { profiles, keywords } = nextProps;
    const sameProfiles = this.props.profiles === profiles;
    const sameKeywords = this.props.keywords === keywords;
    if ( sameProfiles && sameKeywords ) return;
    console.log('SearchActive Profiles props', profiles);
    console.log(this.props.profiles === profiles);
    console.log('SearchActive Keywords props', keywords);
    console.log(this.props.keywords === keywords);
    if (profiles) {
      const profilesList = ProfileObjToList(profiles);
      console.log('profileList', profilesList);
      this.setState({ profilesList })
    }
    // if (nextProps.profiles) {
    //   const keyAppendList = nextProps.profiles.map((profile, index) => {
    //     return (
    //       {
    //         ...profile,
    //         key: index
    //       }
    //     );
    //   });
    //   console.log('keyAppendList', keyAppendList);
    //   this.setState({ profilesList: keyAppendList });
    // }
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
    const { value, suggestions, profilesList } = this.state;
    console.log('Profiles List', profilesList);
    console.log('Suggestions List', suggestions);
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
