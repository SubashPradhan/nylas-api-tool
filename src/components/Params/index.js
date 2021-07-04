import { Component } from 'react';
import View from './view';
import { fetchData } from '../../actions/handleData';
import { connect } from 'react-redux';

class Params extends Component {
	constructor(props) {
		super(props);

		this.state = {
			// Get the params from the parent component and change to object
			myParams: this.props.params.reduce((o, key) => ({ ...o, [key]: '' }), {}),
			showButton: false,
		};

		this.handleButtonClick = this.handleButtonClick.bind(this);
		this.handleInputChange = this.handleInputChange.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
	}

	handleButtonClick(e) {
		const { name } = e.target;
		const currentInput = document.getElementById(`${name}`);
		currentInput.classList.add('show');
		this.setState({
			showButton: true,
		});
	}

	handleInputChange(e, field) {
		const { value } = e.target;
		const myParams = { ...this.state.myParams, [field]: value };
		this.setState({ myParams });
	}

	handleSubmit(e) {
		const { myParams } = this.state;
		e.preventDefault();
		// Create array of passed parameters with key pair values
		const arrOfParams = Object.keys(myParams).map(key => [key, myParams[key]]);

		// Check if value exist param[1]
		// Create query to pass in the API call that matches Nylas calls.
		const filteredParams = arrOfParams.filter(param => param[1] && param);
		const myQuery = filteredParams.join('&').replace(/,/g, '=');
		this.props.fetchData(`${this.props.endpoint}?${myQuery}`);
	}

	render() {
		return (
			<View
				handleButtonClick={this.handleButtonClick}
				handleInputChange={this.handleInputChange}
				handleSubmit={this.handleSubmit}
				showButton={this.state.showButton}
				params={this.props.params}
			/>
		);
	}
}

const mapStateToProps = state => {
	return {
		endpoint: state.endpoint,
	};
};

export default connect(mapStateToProps, { fetchData })(Params);
