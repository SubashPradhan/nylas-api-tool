import ApiPage from '../ApiPage';

const options = [
	{
		label: 'Calendars',
		value: 'calendars',
	},
];

export default function View(props) {
	const { endpoint, pageName } = props;
	return (
		<>
			<ApiPage options={options} pageName={pageName} endpoint={endpoint} />
		</>
	);
}
