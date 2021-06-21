import Navbar from '../Navbar';
import '../../styles/schedule.css';
export default function View(props) {
	const { handleScheduleButton } = props;
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
			</div>
		</>
	);
}
