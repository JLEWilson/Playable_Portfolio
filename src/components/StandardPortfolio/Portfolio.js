import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { getAllRepositories } from '../../actions/index'
import GitRepository from './GitRepository';
import {v4} from 'uuid'; 
import { useDispatch } from 'react-redux';

const repoCategories = [
  "favorites",
  "class-projects",
  "front-end",
  "back-end"
]

const Portfolio = () => {
  const dispatch = useDispatch();
  const [category, setCategory] = useState("favorites")
  const isLoadingUserInfo = useSelector((state) => state.isLoadingUserInfo)
  const isLoadingRepositories = useSelector((state) => state.isLoadingRepositories)
  const error = useSelector((state) => state.error)
  const repositories = useSelector((state) => state.repositories)
  const targetRepos = repositories.filter(r => r.topics.includes(category))

  const titleCaseText = (text) => {
    const words = text.split("-");
    const titleCase = words.map(w => w.charAt(0).toUpperCase() + w.slice(1));
    return titleCase.join(" ")
  }

  useEffect(() =>{
    dispatch(getAllRepositories());
  }, [dispatch])
  
  
  
  const styles = {
    container: {
      marginTop: "3em",
      display: "flex",
      gap: "2em",
    },
    categories: {
      flex: "1",
      display: "flex",
      flexDirection: "column",
      gap: "2em",
    },
    repos: {
      flex: "3",
    },
    buttonStyles: {
      backgroundColor: "rgba(42,86,51,.5)",
      border: "none",
      color: "rgba(235, 250, 215, .6)",
      fontSize: "2em",
      padding: ".75em 0",
      borderRadius: "12px"
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
            onClick={()=> setCategory(category)}
            >{titleCaseText(category)}</button>
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

export default Portfolio;