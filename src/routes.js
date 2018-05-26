import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import App from './App';
import LoadingSpinner from './components/LoadingSpinner/LoadingSpinner';

class Routes extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoading: true,
    }
  }

  componentDidMount() {
    this.setState({ isLoading: false });
  }

  render() {
    return (
      this.state.isLoading ? <LoadingSpinner loading />
      : <App />
    )
  }
}

export default Routes;
