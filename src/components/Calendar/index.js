import { Component } from 'react';
import View from './view';
import { connect } from 'react-redux';
import { fetchData } from '../../actions/handleData';

class Calendar extends Component {
	constructor(props) {
		super(props);

		this.state = {
			endpoint: 'calendars',
		};

		this.handleChange = this.handleChange.bind(this);
	}

	async handleChange(e) {
		const { value } = e.target;
		await this.setState({
			endpoint: value,
		});
		await this.props.fetchData(this.state.endpoint);
	}

	componentDidMount() {
		this.props.fetchData(this.state.endpoint);
	}

	render() {
		console.log(this.props.data);
		return (
			<>
				<View handleChange={this.handleChange} endpoint={this.state.endpoint} />
			</>
		);
	}
}

export default connect(null, { fetchData })(Calendar);
