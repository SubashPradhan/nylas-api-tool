import { Component } from 'react';
import View from './view';
import { connect } from 'react-redux';
import { fetchData } from '../../actions/handleData';
import { handleEndpointChange } from '../../actions/handleEndpointChange';
import { handleParamsDisplay } from '../../actions/handleParamsDisplay';

class PostApiPage extends Component {
	constructor(props) {
		super(props);
		this.state = {
			clientID: null,
			clientSecret: null,
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
	};

	// Update page response / endpoint on render
	componentDidMount = async () => {
		const { pageEndpoint } = this.props;
		await this.props.fetchData(pageEndpoint);
		await this.props.handleEndpointChange(pageEndpoint);
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
					pageName={this.props.pageName}
					options={this.props.options}
					pageEndpoint={this.props.pageEndpoint}
					data={this.props.data}
					id={this.state.id}
					currentSelect={this.state.currentSelect}
					isLoaded={this.state.isLoaded}
				/>
			</>
		);
	}
}

const mapStateToProps = state => {
	return {
		data: state.data,
		endpoint: state.endpoint,
	};
};

export default connect(mapStateToProps, {
	fetchData,
	handleEndpointChange,
	handleParamsDisplay,
})(PostApiPage);
