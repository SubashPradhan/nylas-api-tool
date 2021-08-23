import { Component } from 'react';
import View from './view';
import { connect } from 'react-redux';
import { handlePostParamsDisplay } from '../../actions/handlePostParamsDisplay';

const nylas = window.nylas;

class Schedule extends Component {
	handleScheduleButton = async () => {
		try {
			const nylasAccessToken = await this.props.accessToken;
			// Invoke the schedule editor when a user clicks on the button
			await nylas.scheduler.show({
				auth: {
					// Account access_token with active calendar scope
					accessToken: `${nylasAccessToken}`,
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
		} catch (error) {
			console.log(error);
		}
	};

	render() {
		return (
			<>
				<View
					handleScheduleButton={this.handleScheduleButton}
					handlePostParamsDisplay={this.props.handlePostParamsDisplay}
					onPost={this.props.onPost}
				/>
			</>
		);
	}
}

const mapStateToProps = state => {
	return {
		accessToken: state.accessToken,
		onPost: state.onPost,
	};
};

export default connect(mapStateToProps, { handlePostParamsDisplay })(Schedule);
