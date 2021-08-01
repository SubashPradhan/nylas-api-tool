import Response from '../Response';
import Navbar from '../Navbar';
import Footer from '../Footer';
import '../../styles/api.css';
import '../../styles/postApi.css';

export default function View(props) {
	const {
		handleSelectChange,
		// handleSearchChange,
		// handleSearchSubmit,
		// handleParamsDisplay,
		options,
		pageName,
		// id,
		currentSelect,
		// data,
		isLoaded,
	} = props;

	const APIPost = (
		<div className="api-page">
			<h1 className="title">{pageName}</h1>

			<div className="api-selector">
				<select
					value={currentSelect}
					name="API"
					className="selector"
					onChange={e => handleSelectChange(e)}
				>
					{options.map((option, i) => (
						<option key={i} value={option.value}>
							{option.label}
						</option>
					))}
				</select>
			</div>
			<div className="https-request">
				{/* // Make sure that the data is loaded first before to avoid page crash */}
				{isLoaded ? (
					<p>
						Current request:{' '}
						{/* {data.response ? data.response.req.url : data.req.url} */}
					</p>
				) : (
					<p>Loading...</p>
				)}
			</div>

			<div className="client-form">
				<input
					className="client-form-input"
					name="client-id"
					placeholder="Client ID"
				/>
				<input
					className="client-form-input"
					name="client-secret"
					placeholder="Basic Encoded Client Secret"
				/>
				<button className="submit-button">Submit</button>
			</div>
		</div>
	);
	return (
		<>
			<Navbar />
			{APIPost}
			<Response />
			<Footer />
		</>
	);
}
