import ApiPage from '../ApiPage';
import Params from '../Params';

const options = [
	{
		label: 'Calendars',
		value: 'calendars',
	},
];

const params = ['view', 'limit', 'offset'];

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
