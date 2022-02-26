import * as c from './../actions/ActionTypes';

const defaultState = {
  isLoading: false,
  repositories: [],
  error: null
}

export default (state = defaultState, action) => {
  switch(action.type) {
    case c.REQUEST_REPOSITORIES:
      return Object.assign({}, state, {
        isLoading: true
      });
    case c.GET_REPOSITORIES_SUCCESS:
      return Object.assign({}, state, {
        isLoading: false,
        repositories: action.repositories
      });
    case c.GET_REPOSITORIES_FAILURE:
      return Object.assign({}, state, {
        isLoading: false, 
        error: action.error
      });
    default:
      return state;
    }
};