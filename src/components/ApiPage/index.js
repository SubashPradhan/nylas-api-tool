import { Component } from 'react';
import View from './view';
import { connect } from 'react-redux';
import { fetchData } from '../../actions/handleData';
import { handleEndpointChange } from '../../actions/handleEndpointChange';
import { handleParamsDisplay } from '../../actions/handleParamsDisplay';
import { handlePostParamsDisplay } from '../../actions/handlePostParamsDisplay';
import { handlePutParamsDisplay } from '../../actions/handlePutParamsDisplay';
import { handleRequestMethod } from '../../actions/handleRequestMethod';

class ApiPage extends Component {
	constructor(props) {
		super(props);
		this.state = {
			id: '',
			currentSelect: '',
			isLoaded: false,
		};
	}

	handleSelectChange = async e => {
		const { value } = e.target;
		await this.setState({
			currentSelect: value,
		});
		await this.props.fetchData(value);
		await this.props.handleEndpointChange(value);
		await this.props.handleRequestMethod('GET');
	};

	handleSearchChange = async e => {
		const { value } = e.target;
		await this.setState({
			id: value,
		});
	};

	handleSearchSubmit = async e => {
		e.preventDefault();
		const { endpoint, pageEndpoint } = this.props;
		// Catch send endpoint as this is a special condition, which will cause CORS issue
		// If clicked from create /send >> message search this will end calling /send/{search-ID}
		// If endpoint is send while searching with ID set it back to messages as pageEndpoint is messages
		if (endpoint === 'send') {
			await this.props.handleEndpointChange(pageEndpoint);
		}
		const { id } = this.state;
		// Use this.props.endpoint as this will be changed above with if condition
		const searchEndpoint = this.props.endpoint;
		const searchId = !id ? '' : id;
		this.props.fetchData(`${searchEndpoint}/${searchId}`);
		this.setState({ id: '' });
		this.props.handleRequestMethod('GET');
	};

	// Update page response / endpoint on render
	// Everytime API page loads make sure is a GET request as a default bahaviour
	componentDidMount = async () => {
		const { pageEndpoint } = this.props;
		await this.props.fetchData(pageEndpoint);
		await this.props.handleEndpointChange(pageEndpoint);
		await this.props.handleRequestMethod('GET');
		// wait for data to load and then set loading to false
		await this.setState({
			isLoaded: true,
		});
	};

	render() {
		return (
			<>
				<View
					handleSelectChange={this.handleSelectChange}
					handleSearchChange={this.handleSearchChange}
					handleSearchSubmit={this.handleSearchSubmit}
					handleParamsDisplay={this.props.handleParamsDisplay}
					handlePostParamsDisplay={this.props.handlePostParamsDisplay}
					handlePutParamsDisplay={this.props.handlePutParamsDisplay}
					pageName={this.props.pageName}
					options={this.props.options}
					pageEndpoint={this.props.pageEndpoint}
					data={this.props.data}
					id={this.state.id}
					currentSelect={this.state.currentSelect}
					isLoaded={this.state.isLoaded}
					onPost={this.props.onPost}
					onPut={this.props.onPut}
					requestMethod={this.props.requestMethod}
				/>
			</>
		);
	}
}

const mapStateToProps = state => {
	return {
		data: state.data,
		onPost: state.onPost,
		onPut: state.onPut,
		endpoint: state.endpoint,
		requestMethod: state.requestMethod,
	};
};

export default connect(mapStateToProps, {
	fetchData,
	handleEndpointChange,
	handleParamsDisplay,
	handlePostParamsDisplay,
	handlePutParamsDisplay,
	handleRequestMethod,
})(ApiPage);
