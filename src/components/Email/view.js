import '../../styles/api.css';
import ApiPage from '../ApiPage';
import Params from '../Params';

const options = [
	{
		label: 'Messages',
		value: 'messages',
	},
	{
		label: 'Threads',
		value: 'threads',
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

const params = [
	'limit',
	'in',
	'offset',
	'view',
	'subject',
	'any_email',
	'to',
	'from',
	'cc',
	'bcc',
	'unread',
	'starred',
	'filename',
	'last_message_before',
	'last_message_after',
];

export default function View(props) {
	const { endpoint, pageName } = props;

	return (
		<>
			<ApiPage options={options} pageName={pageName} endpoint={endpoint} />
			<Params params={params} />
		</>
	);
}
