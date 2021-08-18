import { Component } from 'react';
import View from './view';
import { connect } from 'react-redux';
import { fetchData } from '../../actions/handleData';
import { handleParamsDisplay } from '../../actions/handleParamsDisplay';

class PostParams extends Component {
	constructor(props) {
		super(props);

		this.state = {
			// Get the params from the parent component and change to object
			myParams: this.props.postParams.reduce(
				(o, key) => ({ ...o, [key]: '' }),
				{},
			),
			showButton: false,
			postPayload: null,
		};

		this.handleButtonClick = this.handleButtonClick.bind(this);
		this.handleInputChange = this.handleInputChange.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
	}

	handleButtonClick(e, postPayload) {
		const { name } = e.target;
		const currentInput = document.getElementById(`${name}`);
		// await currentInput.classList.add('show');
		this.setState({
			postPayload: this.handleInputCreation([postPayload]),
			showButton: true,
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
					className="params-input"
					autoComplete="off"
					onChange={e => this.handleInputChange(e, `${param}`)}
				></input>
			);
		});
		return postInput;
	};

	render() {
		return (
			<View
				handleButtonClick={this.handleButtonClick}
				handleInputChange={this.handleInputChange}
				handleSubmit={this.handleSubmit}
				handleInputCreation={this.handleInputCreation}
				showButton={this.state.showButton}
				showParams={this.props.showParams}
				handleParamsDisplay={this.props.handleParamsDisplay}
				postParams={this.props.postParams}
				postPayload={this.state.postPayload}
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

export default connect(mapStateToProps, { fetchData, handleParamsDisplay })(
	PostParams,
);
