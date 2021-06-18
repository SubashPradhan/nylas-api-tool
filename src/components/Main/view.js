import '../../styles/main.css';
import NylasLogo from '../../assets/Nylas-logo.svg';
import { Link } from 'react-router-dom';

export default function View(props) {
	const { handleChange } = props;
	return (
		<div className="main">
			<img
				src={NylasLogo}
				className="nylas-logo"
				alt="Nylas logo"
				title="Nylas is awesome"
			></img>
			<h1 className="title">Welcome to the Nylas API</h1>
			<h2 className="sub-title"> Fetch every data with a click.</h2>
			<div className="access-token-input-field">
				<label className="access-token-label">Enter access token</label>
				<input className="access-token-input" onChange={e => handleChange(e)} />
			</div>
			<div className="api-btn-container">
				<Link to="/email" className="email-btn api-btn">
					Email API
				</Link>
				<Link to="/email" className="email-btn api-btn">
					Calendar API
				</Link>
				<Link to="/contacts" className="email-btn api-btn">
					Contacts API
				</Link>
				<Link to="/email" className="email-btn api-btn">
					Neural API
				</Link>
			</div>
		</div>
	);
}
