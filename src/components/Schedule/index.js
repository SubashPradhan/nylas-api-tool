import { Component } from 'react';
import View from './view';
import { connect } from 'react-redux';

const nylas = window.nylas;

class Schedule extends Component {
	handleScheduleButton = () => {
		// Invoke the schedule editor when a user clicks on the button
		nylas.scheduler.show({
			auth: {
				// Account access_token with active calendar scope
				accessToken: `${this.props.accessToken}`,
			},
			style: {
				// Style the schedule editor
				tintColor: '#32325d',
				backgroundColor: 'white',
			},
			defaults: {
				event: {
					title: '30-min Coffee Meeting',
					duration: 30,
				},
			},
		});
	};

	// Add nylas scheduler script when loading this page
	componentDidMount() {
		const script = document.createElement('script');
		script.src =
			'https://schedule.nylas.com/schedule-editor/v1.0/schedule-editor.js';
		script.type = 'text/javascript';
		script.async = true;
		document.body.appendChild(script);
	}

	render() {
		return (
			<>
				<View handleScheduleButton={this.handleScheduleButton} />
			</>
		);
	}
}

const mapStateToProps = state => {
	return {
		accessToken: state.accessToken,
	};
};

export default connect(mapStateToProps, null)(Schedule);
