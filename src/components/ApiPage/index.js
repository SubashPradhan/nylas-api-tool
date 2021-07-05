import { Component } from 'react';
import View from './view';
import { connect } from 'react-redux';
import { fetchData } from '../../actions/handleData';
import { handleEndpointChange } from '../../actions/handleEndpointChange';
import { handleParamsDisplay } from '../../actions/handleParamsDisplay';

class ApiPage extends Component {
	constructor(props) {
		super(props);
		this.state = {
			id: '',
		};
	}

	handleSelectChange = async e => {
		const { value } = e.target;
		await this.setState({
			endpoint: value,
		});
		await this.props.fetchData(this.state.endpoint);
		await this.props.handleEndpointChange(this.state.endpoint);
	};

	handleSearchChange = async e => {
		const { value } = e.target;
		await this.setState({
			id: value,
		});
	};

	handleSearchSubmit = e => {
		e.preventDefault();
		const { id, endpoint } = this.state;
		const searchEndpoint = !endpoint ? this.props.endpoint : endpoint;
		const searchId = !id ? '' : id;
		this.props.fetchData(`${searchEndpoint}/${searchId}`);
		this.setState({ id: '' });
	};

	// Update page response / endpoint on render
	componentDidMount() {
		const { endpoint } = this.props;
		this.props.fetchData(endpoint);
		this.props.handleEndpointChange(endpoint);
	}

	render() {
		return (
			<>
				<View
					handleSelectChange={this.handleSelectChange}
					handleSearchChange={this.handleSearchChange}
					handleSearchSubmit={this.handleSearchSubmit}
					handleParamsDisplay={this.props.handleParamsDisplay}
					pageName={this.props.pageName}
					options={this.props.options}
					endpoint={this.state.endpoint}
					id={this.state.id}
				/>
			</>
		);
	}
}

export default connect(null, {
	fetchData,
	handleEndpointChange,
	handleParamsDisplay,
})(ApiPage);
