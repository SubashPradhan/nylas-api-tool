import React from 'react';
import { Link } from 'react-router-dom';
import NylasLogo from '../../assets/Nylas-logo.svg';
import { pageLinks } from '../../constants';
import '../../styles/navbar.css';

export default function View(props) {
	const { handleMenu, showMenu } = props;

	const navLinksContents = (
		<div className="navbar-links-contents" onClick={e => handleMenu(e)}>
			{pageLinks.map((link, i) => (
				<Link key={i} to={link.value} className="navbar-links">
					{link.name}
				</Link>
			))}
			;
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
							className="nylas-logo-img"
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
