import { Component } from 'react';
import View from './view';
import { connect } from 'react-redux';
import { fetchData } from '../../actions/handleData';

class Calendar extends Component {
	constructor(props) {
		super(props);

		this.state = {
			pageEndpoint: 'calendars',
			pageName: 'Calendar API',
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

export default connect(null, { fetchData })(Calendar);
