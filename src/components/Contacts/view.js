import ApiPage from '../ApiPage';
import Params from '../Params';
import PostParams from '../PostParams';
import PutParams from '../PutParams';

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
		'email',
		'type',
		'given_name',
		'middle_name',
		'surname',
		'nickname',
		'company_name',
		'office_location',
		'group',
		'birthday',
		'job_title',
		'manager_name',
	],
};
const putEndpoints = ['contacts'];
const putPayload = {
	contacts: [
		'id',
		'email',
		'type',
		'given_name',
		'middle_name',
		'surname',
		'nickname',
		'company_name',
		'office_location',
		'group',
		'birthday',
		'job_title',
		'manager_name',
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
