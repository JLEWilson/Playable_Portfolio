import React, {useEffect, useState} from 'react'
import { useLocation } from 'react-router-dom';

//This whole container component is a workaround to remove unity from the dom

const AppContainer = (props) => {
  const location = useLocation();
  const [ lastPage, setLastPage ] = useState()
  useEffect(() => {
    if(lastPage === '/game' && location.pathname !== '/game'){
      window.location.reload()
    }
    setLastPage(location.pathname)
  }, [location.pathname, lastPage]);

  return (
    <>{props.children}</>
  )
}
export default AppContainer
