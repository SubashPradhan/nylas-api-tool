import Response from '../Response';
import Navbar from '../Navbar';
import Footer from '../Footer';
import '../../styles/api.css';

export default function View(props) {
	const {
		handleSelectChange,
		handleSearchChange,
		handleSearchSubmit,
		handleParamsDisplay,
		handlePostParamsDisplay,
		options,
		pageName,
		id,
		currentSelect,
		data,
		isLoaded,
	} = props;

	const API = (
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
						{data.response ? data.response.req.url : data.req.url}
					</p>
				) : (
					<p>Loading...</p>
				)}
			</div>

			<div className="button-container">
				<div className="search-container">
					<input
						value={id}
						name="search-by-id"
						placeholder="Search By ID"
						className="search-input"
						onChange={e => handleSearchChange(e)}
					/>
					<button onClick={handleSearchSubmit} className="search-button">
						Search
					</button>
				</div>
				<div className="add-params-button-container">
					<button className="add-params-button" onClick={handleParamsDisplay}>
						Add extra params
					</button>
					<button
						className="add-params-button"
						onClick={handlePostParamsDisplay}
					>
						Post requests
					</button>
				</div>
			</div>
		</div>
	);
	return (
		<>
			<Navbar />
			{API}
			<Response response={data} />
			<Footer />
		</>
	);
}
