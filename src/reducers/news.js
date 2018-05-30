const INITIAL_STATE = {};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case 'news_fetch_success':
      return {
        ...state,
        ...action.news,
      };
    default:
      return state;
  }
};
