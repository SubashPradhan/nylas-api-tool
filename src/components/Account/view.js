import ApiPage from '../ApiPage';
import Params from '../Params';

const options = [
	{
		label: 'Account',
		value: 'account',
	},
];

const params = ['sync_progress'];

export default function View(props) {
	const { pageName, pageEndpoint } = props;

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
