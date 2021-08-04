import { Component } from 'react';
import View from './view';
import { connect } from 'react-redux';
import { handleEndpointChange } from '../../actions/handleEndpointChange';

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
		await this.props.handleEndpointChange(value);
	};

	// Update page response / endpoint on render
	componentDidMount = async () => {
		const { pageEndpoint } = this.props;
		await this.props.handleEndpointChange(pageEndpoint);
		// wait for data to load and then set loading to false
		// await this.setState({
		// 	isLoaded: true,
		// });
	};

	render() {
		return (
			<>
				<View
					handleSelectChange={this.handleSelectChange}
					pageName={this.props.pageName}
					options={this.props.options}
					pageEndpoint={this.props.pageEndpoint}
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
	handleEndpointChange,
})(PostApiPage);
