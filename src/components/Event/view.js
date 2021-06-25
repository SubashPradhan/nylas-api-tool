import ApiPage from '../ApiPage';

const options = [
	{
		label: 'Event',
		value: 'events',
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