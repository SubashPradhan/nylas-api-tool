import { Component } from 'react';
import View from './view';
import { connect } from 'react-redux';
import { handlePostParamsDisplay } from '../../actions/handlePostParamsDisplay';
import { handleEndpointChange } from '../../actions/handleEndpointChange';
import { handleNylasPost } from '../../actions/handleNylasPost';
import { handleRequestMethod } from '../../actions/handleRequestMethod';

class PostParams extends Component {
	constructor(props) {
		super(props);

		this.state = {
			postData: null,
			showInput: false,
			postInputs: null,
			dataToSend: null,
		};

		this.handleButtonClick = this.handleButtonClick.bind(this);
		this.handleInputChange = this.handleInputChange.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
	}

	handleButtonClick(e, payload) {
		// Set endpoint to the current post button
		const { name } = e.target;
		this.props.handleEndpointChange(name);

		this.setState({
			postInputs: this.handleInputCreation(payload),
			showInput: true,
		});
	}

	handleInputChange(e, field) {
		const { value } = e.target;
		// Check if not email as email needs to be send as an array
		const postData = { ...this.state.postData, [field]: value };
		this.setState({ postData });
	}

	// Function to handle data type while sending
	// Handle each endpoint in a single if else condition
	// Not doing so might result on data conversion issue.
	handlePostData = async data => {
		// Check if some value exists in the given post data and handle their data type to send
		// >> setState: dataToSend
		// Conver give data into an array
		const arrayOfDatas = await Object.keys(data);

		// Check if the endpoint is contacts and has emails field
		// This needs to be done on the top as free-busy also has emails field
		if (
			(this.props.endpoint === 'contacts' && arrayOfDatas.includes('email')) ||
			(this.props.endpoint === 'contacts' && arrayOfDatas.includes('type'))
		) {
			const { email, type } = data;
			const dataToSend = { ...data, emails: [{ email: email, type: type }] };
			await this.setState({ dataToSend });
		}

		// Check if the data contains to field and convert into to:[{}] /send
		else if (arrayOfDatas.includes('to')) {
			const { to } = data;
			const dataToSend = { ...data, to: [{ email: to }] };
			await this.setState({ dataToSend });
		}

		// Check if data contains emails field free/busy
		else if (arrayOfDatas.includes('emails')) {
			const { emails } = data;
			const dataToSend = { ...data, emails: [emails] };
			await this.setState({ dataToSend });
		}

		// Check if data contains participants field /events
		else if (
			arrayOfDatas.includes('participants') ||
			arrayOfDatas.includes('when_unix_timestamp')
		) {
			const { participants, when_unix_timestamp } = data;
			const dataToSend = {
				...data,
				participants: [{ email: participants }],
				when: { time: when_unix_timestamp },
			};
			this.setState({ dataToSend });
		}

		// If none of above then setState to the same data
		else {
			this.setState({ dataToSend: data });
		}
	};

	// Create function to empty fields on submit
	emptyInputValue() {
		const allInputs = document.querySelectorAll('.post-input');
		allInputs.forEach(input => (input.value = ''));
		this.setState({ postData: {} });
	}

	// Since this is a Post page we can manually assign 'POST' to the request method
	handleSubmit = async e => {
		e.preventDefault();
		const { postData } = this.state;
		// First wait for data to porcess and setState dataToSend using handlePostData func
		await this.handlePostData(postData);
		// Get dataToSend state from state, if you try to get it before this will cause issue
		const { dataToSend } = this.state;
		await this.props.handleNylasPost(dataToSend);
		await this.emptyInputValue();
		await this.props.handlePostParamsDisplay();
		await this.props.handleRequestMethod('POST');
	};

	// Create a function to create inputs
	handleInputCreation = rawData => {
		const postInput = rawData.map((param, i) => {
			return (
				<input
					name={param}
					id={param}
					key={i}
					placeholder={param}
					className="post-input"
					autoComplete="off"
					onChange={e => this.handleInputChange(e, `${param}`)}
				></input>
			);
		});
		return postInput;
	};

	// Create a function to change string into camelCase
	// as we will need to pass payload name to create inputs
	changeToCamelCase = str => {
		return str
			.toLowerCase()
			.replace(/[^a-zA-Z0-9]+(.)/g, (m, chr) => chr.toUpperCase());
	};

	render() {
		return (
			<View
				handleButtonClick={this.handleButtonClick}
				handleSubmit={this.handleSubmit}
				changeToCamelCase={this.changeToCamelCase}
				showInput={this.state.showInput}
				showPostParams={this.props.showPostParams}
				handlePostParamsDisplay={this.props.handlePostParamsDisplay}
				postEndpoints={this.props.postEndpoints}
				postInputs={this.state.postInputs}
				postPayload={this.props.postPayload}
			/>
		);
	}
}

const mapStateToProps = state => {
	return {
		endpoint: state.endpoint,
		showPostParams: state.showPostParams,
	};
};

export default connect(mapStateToProps, {
	handlePostParamsDisplay,
	handleEndpointChange,
	handleNylasPost,
	handleRequestMethod,
})(PostParams);
