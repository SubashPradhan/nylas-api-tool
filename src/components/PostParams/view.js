import '../../styles/params.css';

export default function View(props) {
	const {
		handleButtonClick,
		handleSubmit,
		handleParamsDisplay,
		changeToCamelCase,
		showInput,
		showParams,
		postEndpoints,
		postInputs,
		postPayload,
	} = props;

	const paramsButton = postEndpoints.map((param, i) => {
		// Change current name to camelCase to pass in the postPayload object
		const currentParam = changeToCamelCase(param);
		const currentPostPayload = postPayload[`${currentParam}`];
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
					showParams
						? 'params-container display-params-container'
						: 'params-container'
				}
			>
				<h4 className="select-params-text">Select params</h4>
				<div className="params-button-container">{paramsButton}</div>
				<div className="params-input-container">{showInput && postInputs}</div>
				{showInput && (
					<button className="submit-params" onClick={e => handleSubmit(e)}>
						Search
					</button>
				)}
				<div className="close-params" onClick={handleParamsDisplay}>
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
