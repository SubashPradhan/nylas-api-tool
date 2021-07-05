import '../../styles/params.css';

export default function View(props) {
	const {
		handleButtonClick,
		handleInputChange,
		handleSubmit,
		showButton,
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
			<div className="params-container">
				<h4 className="select-params-text">Select params</h4>
				<div className="params-button-container">{paramsButton}</div>
				<div className="params-input-container">{paramsInput}</div>
				{showButton && (
					<button className="submit-params" onClick={e => handleSubmit(e)}>
						Search
					</button>
				)}
			</div>
		</>
	);
}
