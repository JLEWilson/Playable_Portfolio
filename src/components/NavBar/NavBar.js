import React from 'react';
import { Link } from 'react-router-dom';
import { useMediaQuery } from '../../Hooks/MediaQuery';

function NavBar() {
	const isSmallScreen = useMediaQuery('(max-width: 865px)');
	const navStyles = {
		container: {
			display: "flex",
			backgroundColor: "rgba(255, 255, 255, .1)",
			alignItems: "center",
			justifyContent: "center",
			padding: "1em",
			gap: "5%",
			borderRadius: "12px"
		},
		linkOuter: {
			textDecoration: "none",
		},
		link: isSmallScreen => ({
			border: "2px solid black",
			textAlign: "center",
			flex: "1",
			padding: ".7em",
			color: "rgba(250, 235, 215, .80)",
			fontWeight: "bold",
			fontSize: isSmallScreen ? ".75em" : "1.17em",
			boxShadow: ".4em .4em .5em #32231A"
		})
	}

  return(
		<React.Fragment>
			<div style={navStyles.container}>
				<Link to="/Playable_Portfolio/" style={navStyles.linkOuter}>
					<div style={navStyles.link(isSmallScreen)}>
						Playable Portfolio	
					</div>
				</Link>
				<Link to="/Playable_Portfolio/portfolio" style={navStyles.linkOuter}>
					<div style={navStyles.link(isSmallScreen)}>
						Standard Portfolio	
					</div>
				</Link>
				<Link to="/Playable_Portfolio/about" style={navStyles.linkOuter}>
					<div style={navStyles.link(isSmallScreen)}>
						About Me	
					</div>
				</Link>
				<Link to="/Playable_Portfolio/contact" style={navStyles.linkOuter}>
					<div style={navStyles.link(isSmallScreen)}>
						Contact	
					</div>
				</Link>
			</div>
		</React.Fragment>
  )
}

export default NavBar;