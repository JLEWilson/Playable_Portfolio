import React from 'react';
import { connect } from 'react-redux';
import { getAllRepositories } from '../../actions/index'
import * as c from '../../actions/ActionTypes';

export class PortfolioControl extends React.Component{
  constructor(props){
    super(props);
  }

  componentDidMount() {
    const { dispatch } = this.props;
    dispatch(getAllRepositories());
  }
  componentDidUpdate(prevProps){
    if(prevProps.repositories !== this.props.repositories){
      this.setCategory("favorites");
    }
  }

  setCategory = (category) => {
    const { dispatch } = this.props;
    const action = {
      type: c.SET_CATEGORY,
      category: category
    }
    dispatch(action);
  }

  render() {
    const { error, isLoadingUserInfo, isLoadingRepositories, userInfo, targetRepos} = this.props;
    if (error) {
      console.log("error");
      return <React.Fragment>Error: {error.message}</React.Fragment>;
    } else if (isLoadingUserInfo) {
      console.log("loading");
      return <React.Fragment>Gathering User Details...</React.Fragment>;
    } else if (isLoadingRepositories) {
      console.log("loading");
      return <React.Fragment>Loading all repositories...</React.Fragment>;
    } else {
      return (
        <React.Fragment>
          <h1>userInfo</h1>
          <ul>
            {targetRepos.map((repo, index) =>
              <li key={index}>
                <h3>{index}: {repo.name}</h3>
              </li>
            )}
          </ul>
        </React.Fragment>
      );
    }
  }
}
const mapStateToProps = state => {
  return {
    userInfo: state.userInfo,
    isLoadingUserInfo: state.isLoadingUserInfo,
    isLoadingRepositories: state.isLoadingRepositories,
    error: state.error,
    repositories: state.repositories,
    category: state.category,
    targetRepos: state.targetRepos
  }
}
export default connect(mapStateToProps)(PortfolioControl);