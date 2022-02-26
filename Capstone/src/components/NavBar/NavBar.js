import React from 'react';
import { Link } from 'react-router-dom';

function NavBar() {
	const navStyles = {
		display: "flex",
    backgroundColor: "azure",
    alignItems: "center",
		justifyContent: "center",
    padding: "1em",
		gap: "5%",
	}
	const divStyles = {
		border: "2px solid black",
		textAlign: "center",
		flex: "1",
		padding: ".7em",
		boxShadow: ".2em .2em .5em cyan"
	}
  return(
		<React.Fragment>
			<div style={navStyles}>
				<Link to="/">
					<div style={divStyles}>
						<h3>Playable Portfolio</h3>
					</div>
				</Link>
				<Link to="/portfolio">
					<div style={divStyles}>
						<h3>Standard Portfolio</h3>
					</div>
				</Link>
				<Link to="/about">
					<div style={divStyles}>
						<h3>About Me</h3>
					</div>
				</Link>
				<Link to="/contact">
					<div style={divStyles}>
						<h3>Contact</h3>
					</div>
				</Link>
			</div>
		</React.Fragment>
  )
}

export default NavBar;