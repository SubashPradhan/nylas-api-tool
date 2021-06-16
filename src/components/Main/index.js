import React, { Component } from 'react';
import View from './view';
import { connect } from 'react-redux';
import { handleAccessToken } from '../../actions/handleAccessToken';

class Main extends Component {
	handleChange = e => {
		const { value } = e.target;
		this.props.handleAccessToken(value);
	};

	render() {
		return <View handleChange={this.handleChange} />;
	}
}

const mapStateToProps = state => {
	return {
		accessToken: state.accessToken,
	};
};
export default connect(mapStateToProps, { handleAccessToken })(Main);
