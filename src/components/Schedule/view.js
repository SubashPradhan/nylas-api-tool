import Navbar from '../Navbar';
import '../../styles/schedule.css';
import Response from '../Response';
import PostParams from '../PostParams';

const postEndpoints = ['availability/consecutive', 'free-busy'];
const postPayload = {
	freeBusy: ['start_time', 'end_time', 'emails'],
	availabilityConsecutive: [
		'duration_minutes',
		'start_time',
		'end_time',
		'interval_minutes',
	],
};

export default function View(props) {
	const { handleScheduleButton } = props;
	const data = { response: { test: 'hello' } };

	return (
		<>
			<Navbar />
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
					// onClick={handleScheduleButton}
				>
					Fetch free-busy
				</button>
			</div>
			<Response response={data} />
			<PostParams postEndpoints={postEndpoints} postPayload={postPayload} />
		</>
	);
}
