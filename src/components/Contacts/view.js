import ApiPage from '../ApiPage';
import Params from '../Params';
import PostParams from '../PostParams';

const options = [
	{
		label: 'Contacts',
		value: 'contacts',
	},
];

const params = [
	'limit',
	'offset',
	'email',
	'phone_number',
	'street_address',
	'postal_code',
	'state',
	'country',
	'source',
	'group',
	'recurse',
];

const postEndpoints = ['contacts'];
const postPayload = {
	contacts: [
		'birthday',
		'company_name',
		'emails',
		'job_title',
		'manager_name',
		'middle_name',
		'nickname',
		'office_location',
		'surname',
		'group',
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
