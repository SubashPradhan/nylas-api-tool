import '../../styles/response.css';

export default function View(props) {
	const { data } = props;
	const statusColor = data.status ? 'red' : 'green';

	return (
		<div className="response-body">
			<div className="json-body">
				<h4 className="response-header">Response Body</h4>
				<div className="response-status">
					<div className={statusColor}></div>
					<div className="status-code">{data.status}</div>
				</div>
				<pre>{JSON.stringify(data, undefined, 2)} </pre>
			</div>
		</div>
	);
}
