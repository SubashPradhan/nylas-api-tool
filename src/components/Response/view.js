import '../../styles/response.css';

export default function View(props) {
	const { data } = props;
	return (
		<div className="response-body">
			<h4 className="response-header">Response Body</h4>
			<div className="json-body">
				<pre>{JSON.stringify(data, undefined, 2)} </pre>
				<br />
			</div>
		</div>
	);
}
