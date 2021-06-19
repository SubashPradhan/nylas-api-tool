import { Component } from 'react';
import View from './view';
import { connect } from 'react-redux';
import { fetchData } from '../../actions/handleData';

class ApiPage extends Component {
	constructor(props) {
		super(props);

		this.state = {
			endpoint: null,
			pageName: null,
			options: null,
		};
	}

	handleChange = async e => {
		const { value } = e.target;
		await this.setState({
			endpoint: value,
		});
		await this.props.fetchData(this.state.endpoint);
	};

	componentDidMount() {
		this.props.fetchData(this.state.endpoint);
	}

	render() {
		return (
			<>
				<View
					handleChange={this.handleChange}
					endpoint={this.props.endpoint}
					pageName={this.props.pageName}
					options={this.props.options}
				/>
			</>
		);
	}
}

export default connect(null, { fetchData })(ApiPage);
