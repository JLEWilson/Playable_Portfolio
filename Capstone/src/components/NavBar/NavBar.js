import React from 'react';
import { Link } from 'react-router-dom';
import { useMediaQuery } from '../../Hooks/MediaQuery';

function NavBar() {
	const isSmallScreen = useMediaQuery('(max-width: 865px)');
	const navStyles = {
		container: {
			display: "flex",
			backgroundColor: "azure",
			alignItems: "center",
			justifyContent: "center",
			padding: "1em",
			gap: "5%",
		},
		link: isSmallScreen => ({
			border: "2px solid black",
			textAlign: "center",
			flex: "1",
			padding: ".7em",
			fontSize: isSmallScreen ? ".75em" : "1.17em",
			boxShadow: ".2em .2em .5em cyan"
		})
	}

  return(
		<React.Fragment>
			<div style={navStyles.container}>
				<Link to="/">
					<div style={navStyles.link(isSmallScreen)}>
						Playable Portfolio	
					</div>
				</Link>
				<Link to="/portfolio">
					<div style={navStyles.link(isSmallScreen)}>
						Standard Portfolio	
					</div>
				</Link>
				<Link to="/about">
					<div style={navStyles.link(isSmallScreen)}>
						About Me	
					</div>
				</Link>
				<Link to="/contact">
					<div style={navStyles.link(isSmallScreen)}>
						Contact	
					</div>
				</Link>
			</div>
		</React.Fragment>
  )
}

export default NavBar;