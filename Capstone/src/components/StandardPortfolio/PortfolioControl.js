import React from 'react';
import { connect } from 'react-redux';
import {githubApiCall } from '../../actions/index'

class PortfolioControl extends React.Component{
  constructor(props){
    super(props);
  }

  componentDidMount() {
    const { dispatch } = this.props;
    dispatch(githubApiCall());
  }

  render(){
    const { error, isLoaded, repositories } = this.props;

    if(error){
      return <React.Fragment>Error: {error.message}</React.Fragment>
    } else if(isLoaded) {
      return <React.Fragment>Loading...</React.Fragment>
    } else { 
      return(
        <React.Fragment>
          <h1>Repositories: </h1>
          <ul>
            {repositories.map((repo, index) => 
              <li key={index}>
                <h3>{repo.name}</h3>
                <h4>{repo.html_url}</h4>
              </li>
            )}
          </ul>
        </React.Fragment>
      )
    }
  }
}
const mapStateToProps = state => {
  return {
    repositories: state.repositories,
    isLoading: state.isLoading,
    error: state.error
  }
}

export default connect(mapStateToProps)(PortfolioControl);