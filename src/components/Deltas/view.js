import { Link } from 'react-router-dom';
import Response from '../Response';
import '../../styles/email.css';

export default function View(props) {
	const { handleChange, endpoint } = props;
	const options = [
		{
			label: 'Deltas',
			value: 'delta/latest_cursor',
		},
	];

	return (
		<div className="email-page">
			<h1 className="header-api">Deltas API</h1>
			<h2>Work In Progress</h2>
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
			<Response />
			<Link to="/">Home</Link>
		</div>
	);
}
