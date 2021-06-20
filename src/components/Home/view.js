import { Link } from 'react-router-dom';
import '../../styles/home.css';
import Navbar from '../Navbar';

export default function View(props) {
	const { handleChange } = props;

	const homePage = (
		<div className="home">
			<h1 className="title">Welcome to the Nylas API</h1>
			<h2 className="sub-title"> Fetch every data with a click.</h2>
			<div className="access-token-input-field">
				<label className="access-token-label">Enter access token</label>
				<input
					className="access-token-input"
					onChange={e => handleChange(e)}
					placeholder="Enter access token"
				/>
			</div>
			<div className="api-btn-container">
				<Link to="/email" className="email-btn api-btn">
					Email API
				</Link>
				<Link to="/calendars" className="email-btn api-btn">
					Calendar API
				</Link>
				<Link to="/contacts" className="email-btn api-btn">
					Contacts API
				</Link>
				<Link to="/deltas" className="email-btn api-btn">
					Deltas API
				</Link>
			</div>
		</div>
	);
	return (
		<>
			<Navbar />
			{homePage}
		</>
	);
}
