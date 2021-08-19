import { Component } from 'react';
import View from './view';
import { connect } from 'react-redux';
import { handleParamsDisplay } from '../../actions/handleParamsDisplay';

class PostParams extends Component {
	constructor(props) {
		super(props);

		this.state = {
			// Get the params from the parent component and change to object
			myParams: this.props.postEndpoints.reduce(
				(o, key) => ({ ...o, [key]: '' }),
				{},
			),
			showInput: false,
			postInputs: null,
		};

		this.handleButtonClick = this.handleButtonClick.bind(this);
		this.handleInputChange = this.handleInputChange.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
	}

	handleButtonClick(e, payload) {
		// const { name } = e.target;
		// const currentInput = document.getElementById(`${name}`);
		// await currentInput.classList.add('show');
		this.setState({
			postInputs: this.handleInputCreation(payload),
			showInput: true,
		});
	}

	handleInputChange(e, field) {
		const { value } = e.target;
		const myParams = { ...this.state.myParams, [field]: value };
		this.setState({ myParams });
	}

	// Create function to empty fields on submit
	emptyInputValue() {
		const allInputs = document.querySelectorAll('.params-input');
		allInputs.forEach(input => (input.value = ''));
		this.setState({ myParams: {} });
	}

	handleSubmit = e => {
		const { myParams } = this.state;
		e.preventDefault();
		// Create array of passed parameters with key pair values
		const arrOfParams = Object.keys(myParams).map(key => [key, myParams[key]]);

		// Check if value exist param[1]
		// Create query to pass in the API call that matches Nylas calls.
		const filteredParams = arrOfParams.filter(param => param[1] && param);
		const myQuery = filteredParams.join('&').replace(/,/g, '=');
		this.props.fetchData(`${this.props.endpoint}?${myQuery}`);
		this.emptyInputValue();
		this.props.handleParamsDisplay();
	};

	// Create a function to create inputs
	handleInputCreation = rawData => {
		const postInput = rawData.map((param, i) => {
			return (
				<input
					name={param}
					id={param}
					key={i}
					placeholder={param}
					className="post-input"
					autoComplete="off"
					onChange={e => this.handleInputChange(e, `${param}`)}
				></input>
			);
		});
		return postInput;
	};

	// Create a function to change string into camelCase as we will need to pass payload name to create inputs
	changeToCamelCase = str => {
		return str
			.toLowerCase()
			.replace(/[^a-zA-Z0-9]+(.)/g, (m, chr) => chr.toUpperCase());
	};

	render() {
		return (
			<View
				handleButtonClick={this.handleButtonClick}
				handleInputChange={this.handleInputChange}
				handleSubmit={this.handleSubmit}
				changeToCamelCase={this.changeToCamelCase}
				showInput={this.state.showInput}
				showParams={this.props.showParams}
				handleParamsDisplay={this.props.handleParamsDisplay}
				postEndpoints={this.props.postEndpoints}
				postInputs={this.state.postInputs}
				postPayload={this.props.postPayload}
			/>
		);
	}
}

const mapStateToProps = state => {
	return {
		endpoint: state.endpoint,
		showParams: state.showParams,
	};
};

export default connect(mapStateToProps, { handleParamsDisplay })(PostParams);
