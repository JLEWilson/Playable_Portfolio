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

export const githubApiCall = () => {
  return dispatch => {
    dispatch(requestRepositories);
    return fetch(`https://api.github.com/users/jlewilson/repos?per_page=60&page=1`)
      .then(response => response.json())
      .then(
        (jsonifiedResponse) => {
          const allRepos = jsonifiedResponse.push(checkForAdditionalRepositories(2, jsonifiedResponse));
          if(Array.isArray(allRepos)){
            dispatch(
              getRepositoriesSuccess(
                allRepos));
          } else {
            dispatch(
              getRepositoriesSuccess(
                jsonifiedResponse));
          }
        })
      .catch((error) => {
        dispatch(getRepositoriesFailure(error));
      });
  }
}

const checkForAdditionalRepositories = (pageNumber, currentRepositories) => {
  if(currentRepositories.length === 0)
  {
    return [];
  }  
  console.log(currentRepositories);
  fetch(`https://api.github.com/users/jlewilson/repos?per_page=60&page=${pageNumber}`)
    .then(response => response.json())
    .then(
      (jsonifiedResponse) => {
        console.log(jsonifiedResponse);
        return jsonifiedResponse.push(checkForAdditionalRepositories(pageNumber + 1, jsonifiedResponse));
      })
    .catch((error) => {
      return error;
    });
}