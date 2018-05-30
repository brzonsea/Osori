import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import { connect } from 'react-redux';
import { profilesFetch, keywordsFetch } from './actions';
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
    this.props.profilesFetch();
    this.props.keywordsFetch();
    this.setState({ isLoading: false });
  }

  render() {
    console.log('routes', this.props);
    return (
      this.state.isLoading ? <LoadingSpinner loading />
      :
      <Switch>
        <Route exact path='/' component={SearchIndexPage} />
        <Route path='/search' component={SearchActivePage} profiles={'abcdefg'} />
        <Route path='/profile/:id' component={ProfilePage} />
      </Switch>
    )
  }
}

const mapStateToProps = (state) => {
  console.log('mapStateToProps', state);
  return {
    keywords: state.keywords,
    profiles: state.profiles
  }
}

export default connect(mapStateToProps, { profilesFetch, keywordsFetch })(Routes);
