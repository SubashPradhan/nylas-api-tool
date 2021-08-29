import ApiPage from '../ApiPage';
import Params from '../Params';
import PostParams from '../PostParams';

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

const postEndpoints = ['events'];
const postPayload = {
	events: [
		'title',
		'calendar_id',
		'busy',
		'read_only',
		'when',
		'participants_name',
		'participants_email',
	],
};

export default function View(props) {
	const { pageEndpoint, pageName } = props;
	return (
		<>
			<ApiPage
				options={options}
				pageName={pageName}
				pageEndpoint={pageEndpoint}
			/>
			<Params params={params} />
			<PostParams postEndpoints={postEndpoints} postPayload={postPayload} />
		</>
	);
}
