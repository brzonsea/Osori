import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import firebase from 'firebase/app';
import { profilesFetch, keywordsFetch } from '../actions';
import Header from '../components/Header/Header';


import SearchActive from '../components/SearchActive/SearchActive';

class SearchActivePage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      profiles: null,
    }
  }

  componentDidMount() {
    console.log('SearchActivePage', this.props);
    // firebase.database().ref('Profiles')
    //   .once('value', (snapshot) => {
    //     console.log('Profiles', snapshot.val());
    //     this.setState({ profiles: snapshot.val() })
    //   }
    // ).catch(err => {
    //   console.log('Something Wrong While fetching profiles', err);
    //   }
    // )
  }
  componentWillReceiveProps(nextProps) {
    console.log('nextProps', nextProps);
  }
  render() {
    console.log('Profiles', this.props.profiles);
    console.log('Keywords', this.props.keywords);
    console.log('Inside SearchActivePage', this.state.profiles);
    return (
      <div>
        <Header />
        <SearchActive
          profiles={this.state.profiles}
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
