import { Component } from 'react';
import View from './view';
import { connect } from 'react-redux';
import { fetchData } from '../../actions/handleData';

class SearchById extends Component {
	// set endpoint to current parent endpoint (i.e. /messages)
	constructor(props) {
		super(props);
		this.state = {
			searchById: '',
		};
	}

	handleChange = e => {
		const { value } = e.target;
		this.setState({
			searchById: `${this.props.endpoint}/${value}`,
		});
	};

	handleSubmit = e => {
		e.preventDefault();
		const { searchById } = this.state;
		this.props.fetchData(searchById);
	};

	render() {
		return (
			<>
				<View
					handleChange={this.handleChange}
					handleSubmit={this.handleSubmit}
					endpoint={this.props.endpoint}
					searchById={this.state.searchById}
				/>
			</>
		);
	}
}

export default connect(null, { fetchData })(SearchById);
