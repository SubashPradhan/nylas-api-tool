import Response from '../Response';
import Navbar from '../Navbar';
import '../../styles/email.css';

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

export default function View(props) {
	const { handleChange, endpoint } = props;

	const emailAPI = (
		<div className="api-page">
			<h1 className="title">Email API</h1>
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
				</select>
			</div>
		</div>
	);
	return (
		<>
			<Navbar />
			{emailAPI}
			<Response />
		</>
	);
}
