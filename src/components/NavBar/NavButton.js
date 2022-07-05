import React from 'react'
import { Link } from 'react-router-dom';
import { useMediaQuery } from '../../Hooks/MediaQuery';

const NavButton = ({to, text}) => {
  const isSmallScreen = useMediaQuery('(max-width: 865px)');
  const [isHovering, setIsHovering] = React.useState(false);
  
  const handleMouseEnter = () => {
    setIsHovering(true);
  };

  const handleMouseLeave = () => {
    setIsHovering(false);
  };

  const styles = {
    linkOuter: {
      textDecoration: "none",
    },
    link: (isSmallScreen, isHovering) => ({
      border: "2px solid black",
      textAlign: "center",
      flex: "1",
      padding: ".7em",
      backgroundColor: isHovering ? "rgba(255, 255, 255, .3)" : "rgba(255, 255, 255, .1)",
      color: "rgba(250, 235, 215, .80)",
      fontWeight: "bold",
      fontSize: isSmallScreen ? ".75em" : "1.17em",
      boxShadow: ".4em .4em .5em #32231A"
    })
  }
  return (
    <React.Fragment>
      <Link to={to} style={styles.linkOuter}>
        <div style={styles.link(isSmallScreen, isHovering)}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}>
          {text}
        </div>
      </Link>
    </React.Fragment>
  )
}

export default NavButton;
