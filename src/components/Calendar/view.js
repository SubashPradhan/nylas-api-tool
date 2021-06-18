import Response from '../Response';
import Navbar from '../Navbar';
import '../../styles/email.css';

const options = [
	{
		label: 'Calendars',
		value: 'calendars',
	},
];

export default function View(props) {
	const { handleChange, endpoint } = props;

	const calendarAPI = (
		<div className="api-page">
			<h1 className="title">Calendar API</h1>

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
			{calendarAPI}
			<Response />
		</>
	);
}
