import '../../styles/params.css';

export default function View(props) {
	const {
		handleButtonClick,
		handleSubmit,
		handlePutParamsDisplay,
		changeToCamelCase,
		showInput,
		showPutParams,
		postEndpoints,
		putInputs,
		putPayload,
	} = props;

	const paramsButton = postEndpoints.map((param, i) => {
		// Change current name to camelCase to pass in the putPayload object
		const currentParam = changeToCamelCase(param);
		const currentPostPayload = putPayload[`${currentParam}`];

		return (
			<button
				key={i}
				name={param}
				className="params-button"
				onClick={e => handleButtonClick(e, currentPostPayload)}
			>
				{param}
			</button>
		);
	});

	return (
		<>
			<div
				className={
					showPutParams
						? 'params-container display-params-container'
						: 'params-container'
				}
			>
				<h4 className="select-params-text">Select Endpoints</h4>
				<div className="params-button-container">{paramsButton}</div>
				<div className="params-input-container">{showInput && putInputs}</div>
				{showInput && (
					<button className="submit-params" onClick={e => handleSubmit(e)}>
						Send
					</button>
				)}
				<div className="close-params" onClick={handlePutParamsDisplay}>
					X
				</div>
				<div className="reference-links-container">
					<a
						href="https://developer.nylas.com/docs/connectivity"
						target="_blank"
						className="reference-links"
						rel="noreferrer"
					>
						Nylas Docs
					</a>
					<a
						href="https://www.unixtimestamp.com/"
						target="_blank"
						className="reference-links"
						rel="noreferrer"
					>
						Unix Time Converter
					</a>
				</div>
			</div>
		</>
	);
}
