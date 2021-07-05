import ApiPage from '../ApiPage';
import Params from '../Params';

const options = [
	{
		label: 'Event',
		value: 'events',
	},
];

const params = [
	'show_cancelled',
	'limit',
	'offset',
	'calendar_id',
	'title',
	'description',
	'location',
	'starts_before',
	'starts_after',
	'ends_before',
	'ends_after',
	'metadata_key',
	'metadata_value',
	'metadata_pair',
	'expand_recurring',
];
export default function View(props) {
	const { endpoint, pageName } = props;
	return (
		<>
			<ApiPage options={options} pageName={pageName} endpoint={endpoint} />
			<Params params={params} />
		</>
	);
}
