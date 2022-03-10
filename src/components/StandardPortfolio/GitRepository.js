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
			backgroundColor: "#84ca94",
			marginBottom: ".5em"
		},
		topics: {
			padding: "2px .7em ",
			margin: "0 .6em 1em",
			textAlign: "center",
			listStyle: "none",
			border: "2px solid black", 
			borderRadius: "16px",
			backgroundColor: "#84ca94"
		},
		flexCenter: {
			display: "flex",
			justifyContent: "center"
		},
		buttons: {
			margin: " 0 1em 1em",
			backgroundColor: "LightGreen",
			borderRadius: "6px"
		},
		hr: {
			borderColor: "#2a5633",
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
			<hr style={repoStyles.hr}/>
			<p>{repo.description}</p>
			<ul style={repoStyles.flexCenter}>
				{repo.topics.map((topic, index) => 
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