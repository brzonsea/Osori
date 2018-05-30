import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import firebase from 'firebase/app';
import Header from '../components/Header/Header';


import SearchActive from '../components/SearchActive/SearchActive';

class SearchActivePage extends Component {
  constructor(props) {
    super(props);
    this.state = {
    }
  }

  render() {
    return (
      <div>
        <Header />
        <SearchActive
          profiles={this.props.profiles}
          keywords={this.props.keywords}
        />
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  console.log('mapStateToProps', state);
  return {
    keywords: state.keywords,
    profiles: state.profiles
  }
}

export default connect(mapStateToProps)(SearchActivePage);
