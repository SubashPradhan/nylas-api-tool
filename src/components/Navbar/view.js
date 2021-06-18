import React from 'react';
import { Link } from 'react-router-dom';
import NylasLogo from '../../assets/Nylas-logo.svg';
import '../../styles/navbar.css';

export default function View(props) {
	const { handleMenu, showMenu } = props;

	const navLinksContents = (
		<div className="navbar-links-contents">
			<Link to="/" className="navbar-links">
				Home
			</Link>
			<Link to="/email" className="navbar-links">
				Email API
			</Link>
			<Link to="/calendars" className="navbar-links">
				Calendar API
			</Link>
			<Link to="/contacts" className="navbar-links">
				Contact API
			</Link>
			<Link to="/deltas" className="navbar-links">
				Deltas API
			</Link>
		</div>
	);

	return (
		<div className="navigation-container">
			<div
				className={
					showMenu
						? 'navbar-show navbar-container'
						: ' navbar-hide navbar-container'
				}
			>
				{navLinksContents}
			</div>

			<div className="menu-wrapper">
				<div className="nylas-logo">
					<Link to="/">
						<img
							src={NylasLogo}
							title="Nylas"
							alt="Nylas Logo"
							className={showMenu ? 'hide' : 'nylas-logo-img'}
						/>
					</Link>
				</div>
				<div className="menu-container" onClick={e => handleMenu(e)}>
					<div
						className={showMenu ? 'burger-line-one-clicked' : 'burger-line-one'}
					></div>
					<div
						className={showMenu ? 'burger-line-two-clicked' : 'burger-line-two'}
					></div>
					<div
						className={
							showMenu ? 'burger-line-three-clicked' : 'burger-line-three'
						}
					></div>
				</div>
			</div>
		</div>
	);
}
