import { Component } from 'react';
import View from './view';

class Response extends Component {
	render() {
		return <View response={this.props.response} />;
	}
}

export default Response;
