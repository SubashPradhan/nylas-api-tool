import { Component } from 'react';
import View from './view';
// import { connect } from 'react-redux';
// import { fetchData } from '../../actions/handleData';

class Account extends Component {
	constructor(props) {
		super(props);

		this.state = {
			endpoint: 'account',
			pageName: 'Account API',
		};
	}

	render() {
		return (
			<>
				<View endpoint={this.state.endpoint} pageName={this.state.pageName} />
			</>
		);
	}
}

export default Account;
// export default connect(null, { fetchData })(Account);
