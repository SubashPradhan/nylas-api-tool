import '../../styles/params.css';

const freeBusy = ['start_time', 'end_time', 'emails'];
const test = ['duration_minutes', 'start_time', 'end_time', 'interval_minutes'];

export default function View(props) {
	const {
		handleButtonClick,
		handleInputChange,
		handleInputCreation,
		handleSubmit,
		handleParamsDisplay,
		showButton,
		showParams,
		postParams,
		postPayload,
	} = props;

	const paramsButton = postParams.map((param, i) => {
		// const postPayload = param === ''

		const payload = window[freeBusy];
		return (
			<button
				key={i}
				name={param}
				className="params-button"
				onClick={e => handleButtonClick(e, payload)}
			>
				{param}
			</button>
		);
	});
	// const paramsInput = handleInputCreation(freeBusy);

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
				<div className="params-input-container">
					{showButton && postPayload}
				</div>
				{/* {showButton && ( */}
				<button className="submit-params" onClick={e => handleSubmit(e)}>
					Search
				</button>
				{/* )} */}
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
