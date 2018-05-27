import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import Routes from './routes';
import './index.css';
import registerServiceWorker from './registerServiceWorker';
import firebase from 'firebase';

// Initialize Firebase
const config = {
  apiKey: "AIzaSyC8L-IC-hN1-5TDxemn91lTMEc4RWHkTsI",
  authDomain: "osori-7e197.firebaseapp.com",
  databaseURL: "https://osori-7e197.firebaseio.com",
  projectId: "osori-7e197",
  storageBucket: "osori-7e197.appspot.com",
  messagingSenderId: "311080843165"
};
firebase.initializeApp(config);


ReactDOM.render(
  <Router>
    <Routes />
  </Router>,
  document.getElementById('root')
);
registerServiceWorker();
