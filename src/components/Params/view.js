import '../../styles/params.css';
const params = ['limit', 'in', 'offset', 'view'];

export default function View(props) {
	const { handleButtonClick } = props;

	const paramsButton = params.map((param, i) => {
		return (
			<button
				key={i}
				name={param}
				className="params-button"
				onClick={e => handleButtonClick(e)}
			>
				{param}
			</button>
		);
	});

	const paramsInput = params.map((param, i) => {
		return (
			<input
				name={param}
				id={param}
				key={i}
				placeholder={param}
				className="params-input"
			></input>
		);
	});

	return (
		<>
			<div className="params-container">
				<div>{paramsButton}</div>
				<div>{paramsInput}</div>
			</div>
		</>
	);
}
