import '../../styles/params.css';

export default function View(props) {
	const {
		handleButtonClick,
		handleInputChange,
		handleSubmit,
		handleParamsDisplay,
		showButton,
		showParams,
		params,
	} = props;

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
				autoComplete="off"
				onChange={e => handleInputChange(e, `${param}`)}
			></input>
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
				<div className="params-input-container">{paramsInput}</div>
				{showButton && (
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
