import { Link } from 'react-router-dom';
import Response from '../Response';
import '../../styles/email.css';

export default function View(props) {
	const { handleChange, endpoint } = props;
	console.log(endpoint);
	const options = [
		{
			label: 'Messages',
			value: 'messages',
		},
		{
			label: 'Threads',
			value: 'threads',
		},
		{
			label: 'Folders',
			value: 'folders',
		},
		{
			label: 'Labels',
			value: 'labels',
		},
		{
			label: 'Files',
			value: 'files',
		},
		{
			label: 'Drafts',
			value: 'drafts',
		},
		{
			label: 'Outbox',
			value: 'outbox',
		},
	];

	return (
		<div className="email-page">
			<h1 className="header-api">Email API</h1>

			<div className="api-selector">
				<select
					value={endpoint}
					name="API"
					className="selector"
					onChange={e => handleChange(e)}
				>
					{options.map((option, i) => (
						<option key={i} value={option.value}>
							{option.label}
						</option>
					))}

					{/* <option className="api-option" disabled="disabled">
						Choose an API endpoint
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
					</option> */}
				</select>
			</div>
			<Response />
			<Link to="/">Home</Link>
		</div>
	);
}
