import { Component } from 'react';
import View from './view';

class Datacenter extends Component {
	state = { showDataCenterSelection: true };

	onDataCenterButtonClick = () => {
		this.setState({
			showDataCenterSelection: false,
		});
	};
	render() {
		return (
			<View
				showDataCenterSelection={this.state.showDataCenterSelection}
				onDataCenterButtonClick={this.onDataCenterButtonClick}
			/>
		);
	}
}

export default Datacenter;
