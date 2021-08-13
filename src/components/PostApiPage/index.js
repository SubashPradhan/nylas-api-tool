import { Component } from 'react';
import View from './view';
import { connect } from 'react-redux';
import { handleEndpointChange } from '../../actions/handleEndpointChange';
import { handlePostReq } from '../../actions/handlePostReq';
import { fetchData } from '../../actions/handleData';

class PostApiPage extends Component {
	constructor(props) {
		super(props);
		this.state = {
			clientId: null,
			clientSecret: null,
			accountId: null,
		};
	}

	handleSelectChange = async e => {
		const { value } = e.target;
		await this.setState({
			currentSelect: value,
		});
		await this.props.handleEndpointChange(value);
	};

	handleInputChange = (e, field) => {
		const { value } = e.target;
		this.setState({
			[field]: value,
		});
	};

	handleSubmit = async e => {
		e.preventDefault();
		const { clientId, clientSecret, accountId } = this.state;
		const endpoint = await `a/${clientId}/accounts/${accountId}`;
		await this.props.handlePostReq(clientSecret, endpoint);
	};

	// Update page response / endpoint on render
	componentDidMount = async () => {
		const { clientId, clientSecret } = this.state;
		const endpoint = await `a/${clientId}/accounts`;
		await this.props.handleEndpointChange(endpoint);
		await this.props.handlePostReq(clientSecret, endpoint);
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
					handleInputChange={this.handleInputChange}
					handleSubmit={this.handleSubmit}
					pageName={this.props.pageName}
					options={this.props.options}
					pageEndpoint={this.props.pageEndpoint}
					currentSelect={this.state.currentSelect}
					isLoaded={this.state.isLoaded}
					clientId={this.state.clientId}
					clientSecret={this.state.clientSecret}
					accountId={this.state.accountId}
					dataOnPost={this.props.dataOnPost}
				/>
			</>
		);
	}
}

const mapStateToProps = state => {
	return {
		dataOnPost: state.dataOnPost,
		endpoint: state.endpoint,
	};
};

export default connect(mapStateToProps, {
	handleEndpointChange,
	fetchData,
	handlePostReq,
})(PostApiPage);
