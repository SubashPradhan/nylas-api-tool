import '../../styles/api.css';
import ApiPage from '../ApiPage';
import Params from '../Params';
import PostParams from '../PostParams';
import PutParams from '../PutParams';

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

const postEndpoints = ['send', 'drafts', 'folders', 'labels'];
const postPayload = {
	send: ['subject', 'to', 'reply_to_messge_id', 'body', 'file_ids'],
	drafts: ['subject', 'to', 'reply_to_messge_id', 'body', 'file_ids'],
	folders: ['display_name'],
	labels: ['display_name'],
};

// Create putPayload as this will have additional id on it.
const putEndpoints = ['messages', 'drafts', 'folders', 'labels'];
const putPayload = {
	messages: ['id', 'subject', 'to', 'reply_to_messge_id', 'body', 'file_ids'],
	drafts: ['id', 'subject', 'to', 'reply_to_messge_id', 'body', 'file_ids'],
	folders: ['id', 'display_name'],
	labels: ['id', 'display_name'],
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
