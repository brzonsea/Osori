import { combineReducers } from 'redux';
import profilesReducer from './profiles';
import keywordsReducer from './keywords';
import newsReducer from './news';

const INITIAL_STATE = {};


const appReducer = combineReducers({
  profiles: profilesReducer,
  keywords: keywordsReducer,
  news: newsReducer,
});

const rootReducer = (state = INITIAL_STATE, action) => {
  return appReducer(state, action)
}

export default rootReducer;
