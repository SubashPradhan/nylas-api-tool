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
		const { pageEndpoint } = this.props;
		e.preventDefault();
		await this.props.handlePostReq(pageEndpoint, this.state);

		/// CHECK HERE
		await this.setState({
			clientId: null,
			clientSecret: null,
			accountId: null,
		});
	};

	// Update page response / endpoint on render
	componentDidMount = async () => {
		// const endpoint = 'accounts-management';
		const { pageEndpoint } = this.props;
		await this.props.handlePostReq(pageEndpoint, this.state);
		await this.props.handleEndpointChange(pageEndpoint);
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
