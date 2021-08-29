import { Component } from 'react';
import View from './view';
import { connect } from 'react-redux';
import { handlePostParamsDisplay } from '../../actions/handlePostParamsDisplay';
import { handleEndpointChange } from '../../actions/handleEndpointChange';
import { handleNylasPost } from '../../actions/handleNylasPost';
import { handleRequestMethod } from '../../actions/handleRequestMethod';

class PostParams extends Component {
	constructor(props) {
		super(props);

		this.state = {
			postData: null,
			showInput: false,
			postInputs: null,
		};

		this.handleButtonClick = this.handleButtonClick.bind(this);
		this.handleInputChange = this.handleInputChange.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
	}

	handleButtonClick(e, payload) {
		// Set endpoint to the current post button
		const { name } = e.target;
		this.props.handleEndpointChange(name);

		this.setState({
			postInputs: this.handleInputCreation(payload),
			showInput: true,
		});
	}

	handleInputChange(e, field) {
		const { value, name } = e.target;
		// Check if not email as email needs to be send as an array
		const postData =
			name !== 'emails'
				? { ...this.state.postData, [field]: value }
				: { ...this.state.postData, [field]: [value] };
		this.setState({ postData });
		this.setState({ postData });
	}

	// Create function to empty fields on submit
	emptyInputValue() {
		const allInputs = document.querySelectorAll('.post-input');
		allInputs.forEach(input => (input.value = ''));
		// this.setState({ postData: {} });
	}

	// Since this is a Post page we can manually assign 'POST' to the request method
	handleSubmit = async e => {
		e.preventDefault();
		const { postData } = this.state;
		await this.props.handleNylasPost(postData);
		await this.emptyInputValue();
		await this.props.handlePostParamsDisplay();
		await this.props.handleRequestMethod('POST');
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

	// Create a function to change string into camelCase
	// as we will need to pass payload name to create inputs
	changeToCamelCase = str => {
		return str
			.toLowerCase()
			.replace(/[^a-zA-Z0-9]+(.)/g, (m, chr) => chr.toUpperCase());
	};

	render() {
		return (
			<View
				handleButtonClick={this.handleButtonClick}
				handleSubmit={this.handleSubmit}
				changeToCamelCase={this.changeToCamelCase}
				showInput={this.state.showInput}
				showPostParams={this.props.showPostParams}
				handlePostParamsDisplay={this.props.handlePostParamsDisplay}
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
		showPostParams: state.showPostParams,
	};
};

export default connect(mapStateToProps, {
	handlePostParamsDisplay,
	handleEndpointChange,
	handleNylasPost,
	handleRequestMethod,
})(PostParams);
