import React from 'react';
import NavButton from './NavButton';

const ROUTES = [
	{
		to: "/",
		text: "Home"
	},
	{
		to: "/game",
		text: "Playable Portfolio"
	},
	{
		to: "/portfolio",
		text: "Standard Portfolio"
	},
	{
		to: "/about",
		text: "About"
	},
	{
		to: "/contact",
		text: "Contact"
	},
];

function NavBar() {
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
	}

  return(
		<React.Fragment>
			<div style={navStyles.container}>
				{ROUTES.map((route, index)=> (
					<NavButton to={route.to} text={route.text} key={index}/>
				))}
			</div>
		</React.Fragment>
  )
}

export default NavBar;