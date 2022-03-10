import React from 'react';
import { connect } from 'react-redux';
import { getAllRepositories } from '../../actions/index'
import * as c from '../../actions/ActionTypes';
import GitRepository from './GitRepository';
import {v4} from 'uuid'; 

const repoCategories = [
  "favorites",
  "class-projects",
  "front-end",
  "back-end"
]

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
  titleCaseText = (text) => {
    const words = text.split("-");
    const titleCase = words.map(w => w.charAt(0).toUpperCase() + w.slice(1));
    return titleCase.join(" ")
  }
  render() {
    const { error, isLoadingUserInfo, isLoadingRepositories, targetRepos} = this.props;
    
    const styles = {
      container: {
        marginTop: "1em",
        display: "flex",
        gap: "2em",
      },
      categories: {
        flex: "1",
        display: "flex",
        flexDirection: "column",
        gap: "1em"
      },
      repos: {
        flex: "2",
      },
      buttonStyles: {
        backgroundColor: "#84ca94",
        fontSize: "3em",
      },
      loading: {
        color: "lightGray",
        textAlign: "center",
        fontSize: "4em"
      },
      error: {
        color: "#ff0033",
        textAlign: "center",
        fontSize: "4em"
      }
    }
    
    if (error) {
      console.log("error");
      return <div style={styles.error}>Error: {error.message}</div>;
    } else if (isLoadingUserInfo) {
      console.log("loading");
      return <div style={styles.loading}>Gathering User Details...</div>;
    } else if (isLoadingRepositories) {
      console.log("loading");
      return <div style={styles.loading}>Loading all repositories...</div>;
    } else {
      return (
        <div style={styles.container}>
          <div style={styles.categories}>
            {repoCategories.map((category) =>
              <button 
              style={styles.buttonStyles}
              type="button"
              key={v4()}
              onClick={()=> this.setCategory(category)}
              >{this.titleCaseText(category)}</button>
            )}
          </div>
          <div style={styles.repos}>
            {targetRepos.map((repo) =>
              <GitRepository
                key={v4()}
                repo={repo}
              />
            )}
          </div>
        </div>
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
