import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from 'react-bootstrap'

function NavBar() {
	const navStyles = {
		display: "flex"
	}
	
  return(
		<React.Fragment>
			<div style={navStyles}>
				<Link to="/">
					<Button>
						<h2>Playable Portfolio</h2>
					</Button>
				</Link>
				<Link to="/portfolio">
					<Button>
						<h2>Standard Portfolio</h2>
					</Button>
				</Link>
				<Link to="/about">
					<Button>
						<h2>About Me</h2>
					</Button>
				</Link>
				<Link to="/contact">
					<Button>
						<h2>Contact</h2>
					</Button>
				</Link>
			</div>
		</React.Fragment>
  )
}

export default NavBar;