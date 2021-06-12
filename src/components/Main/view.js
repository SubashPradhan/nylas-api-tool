import React from 'react';
import '../../styles/main.css';
import NylasLogo from '../../assets/Nylas-logo.svg';

export default function View() {
	return (
		<>
			<img src={NylasLogo} className="nylas-logo" alt="Nylas logo"></img>
			<h1 className="title">Welcome to the Nylas API</h1>
			<h2 className="sub-title"> Fetch every data with a click.</h2>
			<div className="api-btn-container">
				<button className="email-btn api-btn">Email API</button>
				<button className="calendar-btn api-btn">Calendar API</button>
				<button className="contacts-btn api-btn">Contacts API</button>
				<button className="neural-btn api-btn">Neural API</button>
			</div>
		</>
	);
}
