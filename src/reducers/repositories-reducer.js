import * as c from './../actions/ActionTypes';

let initialState = {
  isLoadingUserInfo: false,
  isLoadingRepositories: false,
  userInfo: {},
  error: null,
  repositories: [],
  category: "favorites",
  targetRepos: []
}

export default (state = initialState, action) => {
  switch (action.type) {
    case c.REQUEST_USER_INFO:
      return Object.assign({}, state, {
        isLoadingUserInfo: true
      });
    case c.GET_USER_INFO_SUCCESS:
      return Object.assign({}, state, {
        isLoadingUserInfo: false,
        userInfo: action.userInfo
      });
    case c.GET_USER_INFO_FAILURE:
      return Object.assign({}, state, {
        isLoadingUserInfo: false,
        error: action.error
      });
    case c.REQUEST_REPOSITORIES:
      return Object.assign({}, state, {
        isLoadingRepositories: true,
      });
    case c.GET_REPOSITORIES_SUCCESS:
      return Object.assign({}, state, {
        isLoadingRepositories: false,
        repositories: action.repositories
      });
    case c.GET_REPOSITORIES_FAILURE:
      return Object.assign({}, state, {
        isLoadingRepositories: false,
        error: action.error
      });
    default:
      return state;
    }
};