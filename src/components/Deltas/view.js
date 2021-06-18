import Response from '../Response';
import '../../styles/email.css';
import Navbar from '../Navbar';

const options = [
	{
		label: 'Deltas',
		value: 'delta/latest_cursor',
	},
];

export default function View(props) {
	const { handleChange, endpoint } = props;

	const deltaAPI = (
		<div className="api-page">
			<h1 className="title">Deltas API</h1>
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
		</div>
	);

	return (
		<>
			<Navbar />
			{deltaAPI}
			<Response />
		</>
	);
}
