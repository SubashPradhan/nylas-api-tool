import ApiPage from '../ApiPage';
import Params from '../Params';
import PostParams from '../PostParams';
import PutParams from '../PutParams';

const options = [
	{
		label: 'Event',
		value: 'events',
	},
];

const params = [
	'limit',
	'offset',
	'calendar_id',
	'event_id',
	'view',
	'title',
	'description',
	'show_cancelled',
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
		'when_unix_timestamp',
		'participants',
		'description',
	],
};
const putEndpoints = ['events'];
const putPayload = {
	events: [
		'id',
		'title',
		'calendar_id',
		'when_unix_timestamp',
		'participants',
		'description',
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
			<PutParams putEndpoints={putEndpoints} putPayload={putPayload} />
		</>
	);
}
