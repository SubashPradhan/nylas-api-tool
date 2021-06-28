import { Component } from 'react';
import View from './view';
import { fetchData } from '../../actions/handleData';
import { connect } from 'react-redux';

class Params extends Component {
	constructor(props) {
		super(props);
		this.state = {
			limit: '',
			in: '',
			offset: '',
			view: '',
		};

		this.handleButtonClick = this.handleButtonClick.bind(this);
		this.handleInputChange = this.handleInputChange.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
	}

	handleButtonClick(e) {
		const { name } = e.target;
		const currentInput = document.getElementById(`${name}`);
		currentInput.classList.add('show');
	}

	handleInputChange(e, field) {
		const { value } = e.target;
		this.setState({ [field]: value });
	}

	handleSubmit(e) {
		e.preventDefault();
		// Create array of passed parameters with key pair values
		const arrOfParams = Object.keys(this.state).map(key => [
			key,
			this.state[key],
		]);

		// Check if value exist param[1]
		// Create query to pass in the API call that matches Nylas calls.
		const myParams = arrOfParams.filter(param => param[1] && param);
		const myQuery = myParams.join('&').replace(/,/g, '=');
		this.props.fetchData(`${this.props.endpoint}?${myQuery}`);
	}

	render() {
		return (
			<View
				handleButtonClick={this.handleButtonClick}
				handleInputChange={this.handleInputChange}
				handleSubmit={this.handleSubmit}
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
