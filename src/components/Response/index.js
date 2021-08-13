import { Component } from 'react';
import View from './view';
import { connect } from 'react-redux';

class Response extends Component {
	render() {
		return <View response={this.props.response} />;
	}
}

const mapStateToProps = state => {
	return {
		data: state.data,
	};
};

export default connect(mapStateToProps, null)(Response);
