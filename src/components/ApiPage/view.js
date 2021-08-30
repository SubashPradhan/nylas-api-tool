import Response from '../Response';
import Navbar from '../Navbar';
import Footer from '../Footer';
import Datacenter from '../Datacenter';
import '../../styles/api.css';
import { onPut } from '../../reducers/handleNylasPut';

export default function View(props) {
	const {
		handleSelectChange,
		handleSearchChange,
		handleSearchSubmit,
		handleParamsDisplay,
		handlePostParamsDisplay,
		handlePutParamsDisplay,
		options,
		pageName,
		id,
		currentSelect,
		data,
		isLoaded,
		onPost,
		onPut,
		requestMethod,
	} = props;

	// Change the data on the Response component depending on the request Method
	// For future reference this logic needs to be changed when there will be other methods as PUT, DELETE

	// Create a function to handle data on given method
	const handleDisplayData = method => {
		if (method === 'POST') {
			return onPost;
		} else if (method === 'PUT') {
			return onPut;
		} else {
			return data;
		}
	};

	// Set current data using the handleDisplayData Func
	const currentDisplayData = handleDisplayData(requestMethod);

	console.log('LOG', currentDisplayData);

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
						{currentDisplayData.response
							? currentDisplayData.response.req.url
							: currentDisplayData.req.url}
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
						Add params
					</button>
					<button
						className="add-params-button"
						onClick={handlePostParamsDisplay}
					>
						Create
					</button>
					<button
						className="add-params-button"
						onClick={handlePutParamsDisplay}
					>
						Update
					</button>
				</div>
			</div>
		</div>
	);

	return (
		<>
			<Navbar />
			<Datacenter />
			{API}
			<Response response={currentDisplayData} />
			<Footer />
		</>
	);
}
