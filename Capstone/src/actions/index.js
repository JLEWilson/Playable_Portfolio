import * as c from './ActionTypes'

export const requestRepositories = () => ({
  type: c.REQUEST_REPOSITORIES
});

export const getRepositoriesSuccess = (repositories) => ({
  type: c.GET_REPOSITORIES_SUCCESS,
  repositories
});

export const getRepositoriesFailure = (error) => ({
  type: c.GET_REPOSITORIES_FAILURE,
  error
});

export const makeApiCall = () => {
  return dispatch => {
    dispatch(requestRepositories);
    return fetch(`https://api.github.com/users/jlewilson/repos?sort=created`)
      .then(response => response.json())
      .then(
        (jsonifiedResponse) => {
          dispatch(getRepositoriesSuccess(jsonifiedResponse));
        })
      .catch((error) => {
        dispatch(getRepositoriesFailure(error));
      });
  }
}