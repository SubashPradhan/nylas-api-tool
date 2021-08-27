import Navbar from '../Navbar';
import '../../styles/schedule.css';
import Response from '../Response';
import PostParams from '../PostParams';
import Datacenter from '../Datacenter';

const postEndpoints = ['calendars/free-busy'];
const postPayload = {
	calendarsFreeBusy: ['start_time', 'end_time', 'emails'],
	calendarsAvailabilityConsecutive: [
		'duration_minutes',
		'start_time',
		'end_time',
		'interval_minutes',
	],
};

export default function View(props) {
	const { handleScheduleButton, handlePostParamsDisplay, onPost } = props;

	return (
		<>
			<Navbar />
			<Datacenter />
			<div className="schedule-container">
				<button
					type="button"
					id="schedule-editor"
					className="schedule-button"
					onClick={handleScheduleButton}
				>
					Open Schedule Editor
				</button>
				<button
					type="button"
					id="schedule-editor"
					className="schedule-button"
					onClick={handlePostParamsDisplay}
				>
					Post /calendars
				</button>
			</div>
			<Response response={onPost} />
			<PostParams postEndpoints={postEndpoints} postPayload={postPayload} />
		</>
	);
}
