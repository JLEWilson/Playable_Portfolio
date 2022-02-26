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
      .then(jsonifiedResponse => jsonifiedResponse.concat(checkForAdditionalRepositories(2, jsonifiedResponse)))
      .then(
        (allRepositories) => {
          console.log(allRepositories);
          if(Array.isArray(allRepositories)){
            dispatch(
              getRepositoriesSuccess(
                allRepositories));
          } else {
            throw(allRepositories)
          }
        })
      .catch((error) => {
        dispatch(getRepositoriesFailure(error));
      });
  }
}

async function checkForAdditionalRepositories (pageNumber, currentRepositories){
  console.log(currentRepositories);
  if(currentRepositories.length === 0)
  {
    return [];
  }  
  fetch(`https://api.github.com/users/jlewilson/repos?per_page=60&page=${pageNumber}`)
    .then(response => response.json())
    .then(
      (jsonifiedResponse) => {
        return jsonifiedResponse.concat(checkForAdditionalRepositories(pageNumber + 1, jsonifiedResponse));
      })
    .catch((error) => {
      return error;
    });
}