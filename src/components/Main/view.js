import '../../styles/main.css';
import NylasLogo from '../../assets/Nylas-logo.svg';
import { Link } from 'react-router-dom';

export default function View(props) {
	return (
		<>
			<img
				src={NylasLogo}
				className="nylas-logo"
				alt="Nylas logo"
				title="Nylas is awesome"
			></img>
			<h1 className="title">Welcome to the Nylas API</h1>
			<h2 className="sub-title"> Fetch every data with a click.</h2>
			<div className="api-btn-container">
				<Link to="/email" className="email-btn api-btn">
					Email API
				</Link>
				<Link to="/email" className="email-btn api-btn">
					Calendar API
				</Link>
				<Link to="/email" className="email-btn api-btn">
					Contacts API
				</Link>
				<Link to="/email" className="email-btn api-btn">
					Neural API
				</Link>
			</div>
		</>
	);
}
