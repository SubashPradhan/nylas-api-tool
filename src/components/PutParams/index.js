import { Component } from 'react';
import View from './view';
import { connect } from 'react-redux';
import { handlePutParamsDisplay } from '../../actions/handlePutParamsDisplay';
import { handleEndpointChange } from '../../actions/handleEndpointChange';
import { handleNylasPut } from '../../actions/handleNylasPut';
import { handleRequestMethod } from '../../actions/handleRequestMethod';

class PutParams extends Component {
	constructor(props) {
		super(props);

		this.state = {
			putData: null,
			showInput: false,
			putInputs: null,
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
			putInputs: this.handleInputCreation(payload),
			showInput: true,
		});
	}

	handleInputChange(e, field) {
		const { value } = e.target;
		// Check if not email as email needs to be send as an array
		const putData = { ...this.state.putData, [field]: value };
		this.setState({ putData });
		console.log(putData);
	}

	// Function to handle data type while sending
	// Handle each endpoint in a single if else condition
	// Not doing so might result on data conversion issue.
	handlePostData = async data => {
		// Check if some value exists in the given post data and handle their data type to send
		// >> setState: dataToSend

		// Check if the endpoint is contacts and has emails field
		// This needs to be done on the top as free-busy also has emails field
		if (data !== null) {
			// Convert given data into an array
			const arrayOfDatas = await Object.keys(data);
			// Check if the endpoint is contacts and has emails field
			// This needs to be done on the top as free-busy also has emails field

			if (
				(this.props.endpoint === 'contacts' &&
					arrayOfDatas.includes('email')) ||
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
				await this.setState({ dataToSend });
			} else {
				await this.setState({ dataToSend: data });
			}
		}
		// If none of above then setState to the same data
		else {
			await this.setState({ dataToSend: data });
		}
	};

	// Create function to empty fields on submit
	emptyInputValue() {
		const allInputs = document.querySelectorAll('.post-input');
		allInputs.forEach(input => (input.value = ''));
		this.setState({ putData: {} });
	}

	// Since this is a Post page we can manually assign 'POST' to the request method
	handleSubmit = async e => {
		e.preventDefault();
		const { putData } = this.state;
		// First wait for data to porcess and setState dataToSend using handlePostData func
		await this.handlePostData(putData);
		// Get dataToSend state from state, if you try to get it before this will cause issue
		// Get Id to send it on the request
		const { dataToSend } = this.state;
		const { id } = dataToSend;
		console.log(dataToSend);
		await this.props.handleNylasPut(id, dataToSend);
		await this.emptyInputValue();
		await this.props.handlePutParamsDisplay();
		await this.props.handleRequestMethod('PUT');
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
				showPutParams={this.props.showPutParams}
				handlePutParamsDisplay={this.props.handlePutParamsDisplay}
				putEndpoints={this.props.putEndpoints}
				putInputs={this.state.putInputs}
				putPayload={this.props.putPayload}
			/>
		);
	}
}

const mapStateToProps = state => {
	return {
		endpoint: state.endpoint,
		showPutParams: state.showPutParams,
	};
};

export default connect(mapStateToProps, {
	handlePutParamsDisplay,
	handleEndpointChange,
	handleNylasPut,
	handleRequestMethod,
})(PutParams);
