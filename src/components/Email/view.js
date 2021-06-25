import '../../styles/api.css';
import ApiPage from '../ApiPage';

const options = [
	{
		label: 'Messages',
		value: 'messages?limit=10',
	},
	{
		label: 'Threads',
		value: 'threads?limit=10',
	},
	{
		label: 'Folders',
		value: 'folders',
	},
	{
		label: 'Labels',
		value: 'labels',
	},
	{
		label: 'Files',
		value: 'files',
	},
	{
		label: 'Drafts',
		value: 'drafts',
	},
	{
		label: 'Outbox',
		value: 'outbox',
	},
];

export default function View(props) {
	const { endpoint, pageName } = props;

	return (
		<>
			<ApiPage options={options} pageName={pageName} endpoint={endpoint} />
		</>
	);
}
