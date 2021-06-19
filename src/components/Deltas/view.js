import ApiPage from '../ApiPage';
const options = [
	{
		label: 'Deltas',
		value: 'delta/latest_cursor',
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
