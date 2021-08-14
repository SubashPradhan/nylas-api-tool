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
		// CHECK HERE
		const endpoint = 'accounts-management';
		await this.props.handlePostReq(endpoint, this.state);
	};

	// Update page response / endpoint on render
	componentDidMount = async () => {
		const endpoint = 'accounts-management';
		await this.props.handlePostReq(endpoint, this.state);
		await this.props.handleEndpointChange(endpoint);
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
