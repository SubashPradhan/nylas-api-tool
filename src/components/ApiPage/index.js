import { Component } from 'react';
import View from './view';
import { connect } from 'react-redux';
import { fetchData } from '../../actions/handleData';
import { handleEndpointChange } from '../../actions/handleEndpointChange';
import { handleParamsDisplay } from '../../actions/handleParamsDisplay';
import { handlePostParamsDisplay } from '../../actions/handlePostParamsDisplay';
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
	};

	handleSearchChange = async e => {
		const { value } = e.target;
		await this.setState({
			id: value,
		});
	};

	handleSearchSubmit = e => {
		e.preventDefault();
		const { endpoint } = this.props;
		const { id } = this.state;
		const searchEndpoint = !endpoint ? this.props.endpoint : endpoint;
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
					pageName={this.props.pageName}
					options={this.props.options}
					pageEndpoint={this.props.pageEndpoint}
					data={this.props.data}
					id={this.state.id}
					currentSelect={this.state.currentSelect}
					isLoaded={this.state.isLoaded}
					onPost={this.props.onPost}
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
		endpoint: state.endpoint,
		requestMethod: state.requestMethod,
	};
};

export default connect(mapStateToProps, {
	fetchData,
	handleEndpointChange,
	handleParamsDisplay,
	handlePostParamsDisplay,
	handleRequestMethod,
})(ApiPage);
