import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import firebase from 'firebase';
import Header from '../components/Header/Header';


import SearchActive from '../components/SearchActive/SearchActive';

class SearchActivePage extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    firebase.database().ref('Profiles')
      .once('value', (snapshot) => {
        console.log('Profiles', snapshot.val());
      }
    ).catch(err => {
      console.log('Something Wrong While fetching profiles', err);
      }
    )
  }

  render() {
    console.log('Inside SearchActivePage');
    return (
      <div>
        <Header />
        <SearchActive />
      </div>
    );
  }
}

export default SearchActivePage;
