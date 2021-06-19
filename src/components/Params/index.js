import { Component } from 'react';
import View from './view';

class Params extends Component {
	constructor(props) {
		super(props);

		this.handleButtonClick = this.handleButtonClick.bind(this);
	}

	handleButtonClick(e) {
		const { name } = e.target;
		const currentInput = document.getElementById(`${name}`);
		currentInput.classList.add('show');
	}

	render() {
		return <View handleButtonClick={this.handleButtonClick} />;
	}
}

export default Params;
