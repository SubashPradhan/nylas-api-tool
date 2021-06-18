import { Component } from 'react';
import View from './view';
import { connect } from 'react-redux';

class Response extends Component {
	render() {
		return <View data={this.props.data} />;
	}
}

const mapStateToProps = state => {
	return {
		data: state.data,
	};
};

export default connect(mapStateToProps, null)(Response);
