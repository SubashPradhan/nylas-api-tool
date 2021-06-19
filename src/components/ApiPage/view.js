import Response from '../Response';
import Navbar from '../Navbar';
// import Params from '../Params';
import '../../styles/email.css';

export default function View(props) {
	const { handleChange, endpoint, options, pageName } = props;
	console.log(props);

	const API = (
		<div className="api-page">
			<h1 className="title">{pageName}</h1>
			<div className="api-selector">
				<select
					value={endpoint}
					name="API"
					className="selector"
					onChange={e => handleChange(e)}
				>
					{options.map((option, i) => (
						<option key={i} value={option.value}>
							{option.label}
						</option>
					))}
				</select>
			</div>
		</div>
	);
	return (
		<>
			<Navbar />
			<div>{API}</div>
			{/* <Params /> */}
			<Response />
		</>
	);
}
