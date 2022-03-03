import * as c from './ActionTypes';

export const requestUserInfo = () => ({
  type: c.REQUEST_USER_INFO
});
export const getUserInfoSuccess = (userInfo) => ({
  type: c.GET_USER_INFO_SUCCESS,
  userInfo
});
export const getUserInfoFailure = (error) => ({
  type: c.GET_USER_INFO_FAILURE,
  error
});
export const requestRepositories = () => ({
  type: c.REQUEST_REPOSITORIES
});
export const getRepositoriesFailure = (error) => ({
  type: c.GET_REPOSITORIES_FAILURE,
  error
});
export const getRepositoriesSuccess = (repositories) => ({
  type: c.GET_REPOSITORIES_SUCCESS,
  repositories
});

export const getAllRepositories = () => {
  return dispatch => {
    dispatch(requestUserInfo);
    const totalPages = fetch(`https://api.github.com/users/jlewilson`)
    .then(response => response.json())
    .then(json => {
      dispatch(getUserInfoSuccess(json));
      return Math.ceil(json["public_repos"]/60);
    })
    .catch((error) => {
      dispatch(getUserInfoFailure(error))
    });
    
    return Promise.all(
      Array.from(
        Array(totalPages),
        (_, i) => fetch(`https://api.github.com/users/jlewilson/repos?per_page=60&page=${i+1}`)
      )
      ).then(
        responses => Promise.all(responses.map(r => r.json()))
      ).then(
        (jsonifiedResponse) => {
          dispatch(getRepositoriesSuccess(jsonifiedResponse.flat()))
        }
      ).catch((error) => {
        dispatch(getRepositoriesFailure(error));
      })
  }
  
}