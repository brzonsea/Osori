import React, { Component } from 'react';
import { Route, Switch, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { profilesFetch, keywordsFetch, newsFetch } from './actions';
import SearchIndexPage from './routes/SearchIndexPage';
import SearchActivePage from './routes/SearchActivePage';
import LoadingSpinner from './components/LoadingSpinner/LoadingSpinner';
import ProfilePage from './routes/ProfilePage';

class Routes extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoading: false,
    }
  }

  componentDidMount() {
    // Firebase Realtime DB 에서 모든 정보 가져오기
    this.props.profilesFetch();
    this.props.keywordsFetch();
    this.props.newsFetch();
    this.setState({ isLoading: false });
  }

  render() {
    console.log('routes', this.props);
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

const mapStateToProps = (state) => {
  console.log('mapStateToProps', state);
  return {
    keywords: state.keywords,
    profiles: state.profiles,
    news: state.news
  }
}

export default withRouter(connect(mapStateToProps, { profilesFetch, keywordsFetch, newsFetch })(Routes));
