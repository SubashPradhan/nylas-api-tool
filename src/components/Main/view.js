import React from 'react';
import '../../styles/main.css';
import NylasLogo from '../../assets/Nylas-logo.svg';

export default function View() {
	return (
		<>
			<img src={NylasLogo} className="nylas-logo"></img>
			<h1 className="title">Welcome to the Nylas API</h1>
			<h2 className="sub-title"> Fetch every data with a click.</h2>
			<div></div>
		</>
	);
}
