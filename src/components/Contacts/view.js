import ApiPage from '../ApiPage';
import Params from '../Params';

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
		</>
	);
}
