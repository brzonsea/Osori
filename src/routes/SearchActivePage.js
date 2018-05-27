import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import firebase from 'firebase/app';
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
    firebase.database().ref('Profiles')
      .once('value', (snapshot) => {
        console.log('Profiles', snapshot.val());
        this.setState({ profiles: snapshot.val() })
      }
    ).catch(err => {
      console.log('Something Wrong While fetching profiles', err);
      }
    )
  }

  render() {
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

export default SearchActivePage;
