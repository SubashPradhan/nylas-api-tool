import { Component } from 'react';
import View from './view';
import { connect } from 'react-redux';
import { handleDataCenterDisplay } from '../../actions/handleDataCenterDisplay';
import { handleDataCenterUrl } from '../../actions/handleDataCenterUrl';

class Datacenter extends Component {
	onDataCenterButtonClick = (e, url) => {
		e.preventDefault();
		this.props.handleDataCenterDisplay();
		this.props.handleDataCenterUrl(url);
	};

	render() {
		return (
			<View
				showDataCenterDisplay={this.props.showDataCenterDisplay}
				onDataCenterButtonClick={this.onDataCenterButtonClick}
			/>
		);
	}
}

const mapStateToProps = state => {
	return {
		showDataCenterDisplay: state.showDataCenterDisplay,
	};
};

export default connect(mapStateToProps, {
	handleDataCenterUrl,
	handleDataCenterDisplay,
})(Datacenter);
