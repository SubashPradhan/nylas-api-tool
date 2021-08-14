import { Component } from 'react';
import View from './view';
import { connect } from 'react-redux';
import { handlePostReq } from '../../actions/handlePostReq';

class AccountManagement extends Component {
	constructor(props) {
		super(props);
		this.state = {
			pageEndpoint: 'accounts-management',
			pageName: 'Account Management',
		};
	}

	render() {
		return (
			<>
				<View
					pageEndpoint={this.state.pageEndpoint}
					pageName={this.state.pageName}
				/>
			</>
		);
	}
}

export default connect(null, { handlePostReq })(AccountManagement);
