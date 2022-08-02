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
  return async dispatch => {
    dispatch(requestUserInfo);
    const userInfo = await getUserData();
    if(userInfo instanceof Error){
      dispatch(getUserInfoFailure(userInfo.message));
      return;
    } else {
      dispatch(getUserInfoSuccess(userInfo));
    }
    const totalPages = Math.ceil(userInfo["public_repos"]/60);
    
    const repositories = await getRepositories(totalPages);
    if(repositories instanceof Error){
      dispatch(getRepositoriesFailure(repositories.message));
      return;
    } else {
      dispatch(getRepositoriesSuccess(repositories));
    }
  }
}
const getUserData = async () => {
  try {
    const response = await fetch(`https://api.github.com/users/jlewilson`);
    if (!response.ok) {
      const errorMessage = `${response.status} ${response.statusText}`;
      throw new Error(errorMessage);
    } else {
      return response.json();
    }
  } catch(error){
    return error;
  }
}

const getRepositories = async (totalPages) => {
  try {
    const responses = await Promise.all(
      Array.from(
        Array(totalPages),
        (_, i) => fetch(`https://api.github.com/users/jlewilson/repos?sort=pushed&per_page=60&page=${i+1}`)
      ));
    const json = await Promise.all(responses.map(r => r.json()));
    return json.flat();
  } catch(error){
    return error;
  }
}