import { Link } from 'react-router-dom';
import '../../styles/email.css';

export default function View() {
	return (
		<div className="email-page">
			<h1 className="header-api">Email API</h1>

			<div className="api-selector">
				<select name="API" className="selector">
					<option
						className="api-option"
						value=""
						disabled="disabled"
						selected="selected"
					>
						Please select an API endpoint.
					</option>
					<option className="api-option" value="threads">
						Threads
					</option>
					<option className="api-option" value="messages">
						Messages
					</option>
					<option className="api-option" value="folders">
						Folders
					</option>
					<option className="api-option" value="labels">
						Labels
					</option>
					<option className="api-option" value="files">
						Files
					</option>
					<option className="api-option" value="drafts">
						Drafts
					</option>
					<option className="api-option" value="outbox">
						Outbox
					</option>
				</select>
			</div>
			<Link to="/">Home</Link>
		</div>
	);
}
