import ApiPage from '../ApiPage';
import Params from '../Params';
import PostParams from '../PostParams';
import PutParams from '../PutParams';

const options = [
	{
		label: 'Calendars',
		value: 'calendars',
	},
];

const params = ['view', 'limit', 'offset'];

const postEndpoints = ['calendars'];
const postPayload = {
	calendars: ['name', 'description', 'location', 'timezone'],
};

const putEndpoints = ['calendars'];
const putPayload = {
	calendars: ['id', 'name', 'description', 'location', 'timezone'],
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
