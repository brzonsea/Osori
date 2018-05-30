const INITIAL_STATE = {};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case 'profiles_fetch_success':
      return {
        ...state,
        ...action.profiles,
      };
    default:
      return state;
  }
};
