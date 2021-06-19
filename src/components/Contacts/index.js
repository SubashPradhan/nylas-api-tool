import { Component } from 'react';
import View from './view';
import { connect } from 'react-redux';
import { fetchData } from '../../actions/handleData';

class Contacts extends Component {
	constructor(props) {
		super(props);

		this.state = {
			endpoint: 'contacts',
			pageName: 'Contact API',
		};
	}

	componentDidMount() {
		this.props.fetchData(this.state.endpoint);
	}

	render() {
		return (
			<>
				<View endpoint={this.props.endpoint} pageName={this.state.pageName} />
			</>
		);
	}
}

export default connect(null, { fetchData })(Contacts);
