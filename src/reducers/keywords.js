const INITIAL_STATE = {};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case 'keywords_fetch_success':
      console.log('action', action);
      return {
        ...state,
        ...action.keywords,
      };
    default:
      return state;
  }
};
