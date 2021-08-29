import ApiPage from '../ApiPage';
import Params from '../Params';
import PostParams from '../PostParams';

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
