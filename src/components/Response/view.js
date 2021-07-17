import '../../styles/response.css';

export default function View(props) {
	const { data } = props;
	const statusColor = data.status ? 'red' : 'green';
	const accountId =
		data.length && Array.isArray(data)
			? data[0].account_id
			: data.account_id
			? data.account_id
			: 'Access token required ';

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
					<pre>{JSON.stringify(data, undefined, 2)}</pre>
				</code>
			</div>
		</div>
	);
}
