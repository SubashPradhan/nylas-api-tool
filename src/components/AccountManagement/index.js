import { Component } from 'react';
import View from './view';

class AccountManagement extends Component {
	constructor(props) {
		super(props);
		this.state = {
			pageEndpoint: 'a/client_id/accounts',
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

export default AccountManagement;
