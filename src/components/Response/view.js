import '../../styles/response.css';

export default function View(props) {
	const { response } = props;

	const statusColor =
		response.status <= 299
			? 'green'
			: response.status <= 399
			? 'orange'
			: 'red';

	const accountId =
		response.body && Array.isArray(response.body) && response.body.length
			? response.body[0].account_id
			: response.body
			? response.body.account_id
			: 'Access token required ';

	const responsePayload = response.body ? response.body : response.response;

	return (
		<div className="response-body">
			<div className="json-body">
				<div className="response-status">
					<div className="status">
						<div className={statusColor}></div>
						<div className="status-code">Status: {response.status}</div>
					</div>
					<div>Account_id: {accountId}</div>
				</div>
				<code>
					<pre>{JSON.stringify(responsePayload, undefined, 2)}</pre>
				</code>
			</div>
		</div>
	);
}
