import '../../styles/response.css';

export default function View(props) {
	const { data } = props;

	const statusColor =
		data.status <= 299 ? 'green' : data.status <= 399 ? 'orange' : 'red';

	const accountId =
		data.body && Array.isArray(data.body)
			? data.body[0].account_id
			: data.body
			? data.body.account_id
			: 'Access token required ';

	const dataPayload = data.body ? data.body : data.response;

	return (
		<div className="response-body">
			<div className="json-body">
				<div className="response-status">
					<div className="status">
						<div className={statusColor}></div>
						<div className="status-code">
							Status: {data.status ? data.status : 'OK'}
						</div>
					</div>
					<div>Account_id: {accountId}</div>
				</div>
				<code>
					<pre>{JSON.stringify(dataPayload, undefined, 2)}</pre>
				</code>
			</div>
		</div>
	);
}
