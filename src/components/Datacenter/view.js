import { dataCenter } from '../../constants';
import '../../styles/dataCenter.css';
import '../../styles/home.css';

export default function View(props) {
	const { showDataCenterSelection, onDataCenterButtonClick } = props;
	return (
		<>
			{showDataCenterSelection && (
				<div className="data-center-selector-page">
					<h1 className="welcome-title">Welcome to the Nylas API</h1>
					<h2 className="sub-title">Fetch every data with a click.</h2>
					<div className="data-center-container">
						<h2 className="select-title">Choose a Data Center</h2>
						{dataCenter.map((center, i) => (
							<>
								<button
									key={i}
									className="data-center-button"
									value={center.value}
									onClick={onDataCenterButtonClick}
								>
									{center.name}
								</button>
							</>
						))}
					</div>
				</div>
			)}
		</>
	);
}
