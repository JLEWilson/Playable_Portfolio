import React from 'react';
import { v4 } from 'uuid';

function GitRepository(props) {
	const { repo } = props;
	
	function linkToRepository(){
		window.open(repo.html_url);
	}
	function linkToGhPages(){
		window.open("https://" + repo.owner.login + ".github.io/" + repo.name)
	}
	const repoStyles = {
		repoContainer: {
			border: "2px solid black",
			textAlign: "center",
			backgroundColor: "#767778",
			marginBottom: ".5em",
			color: "rgba(235, 250, 215, .80)",
		},
		topics: {
			padding: "2px .7em ",
			margin: "0 .6em 1em",
			textAlign: "center",
			listStyle: "none",
			border: "2px solid black", 
			borderRadius: "16px",
			backgroundColor: "rgba(42,86,51,.5)"
		},
		flexCenter: {
			display: "flex",
			justifyContent: "center"
		},
		buttons: {
			margin: " 0 1em 1em",
			borderRadius: "8px",
			border: "none",
			padding: ".3em 1em",
			backgroundColor: "rgb(41,58,44)",
			color: "rgba(235, 250, 215, .7)",
		}
	}
	
	let pagesButton;
	(repo.has_pages) ?
		pagesButton = <button 
			style={repoStyles.buttons}
			type='button'
			onClick={linkToGhPages}
			>Deployed Project</button> 
		: pagesButton = null;

	return(
		<div style={repoStyles.repoContainer}>
			<h3>{repo.name}</h3>
			
			<p>{repo.description}</p>
			<ul style={repoStyles.flexCenter}>
				{repo.topics.map((topic) => 
					<li 
						key={v4()}
						style={repoStyles.topics}
						>{topic}</li>
				)}
			</ul>
			<button 
				style={repoStyles.buttons}
				type='button' 
				onClick={linkToRepository}
				>Repository</button>
			{pagesButton}
		</div>
	)
}

export default GitRepository;
/*
name
description
Languages
topics
button - html_url
if(has_pages)
button repo.owner.login + "/github.io"/repo.name
*/