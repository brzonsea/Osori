import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import SearchIndexPage from './routes/SearchIndexPage';
import SearchActivePage from './routes/SearchActivePage';
import LoadingSpinner from './components/LoadingSpinner/LoadingSpinner';
import ProfilePage from './routes/ProfilePage';

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
      :
      <Switch>
        <Route exact path='/' component={SearchIndexPage} />
        <Route path='/search' component={SearchActivePage} />
        <Route path='/profile/:id' component={ProfilePage} />
      </Switch>
    )
  }
}

export default Routes;
