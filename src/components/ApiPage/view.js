import Response from '../Response';
import Navbar from '../Navbar';
import Footer from '../Footer';
import '../../styles/api.css';
import Params from '../Params';

export default function View(props) {
	const {
		handleSelectChange,
		handleSearchChange,
		handleSearchSubmit,
		endpoint,
		options,
		pageName,
		id,
	} = props;

	const API = (
		<div className="api-page">
			<h1 className="title">{pageName}</h1>

			<div className="api-selector">
				<select
					value={endpoint}
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
		</div>
	);
	return (
		<>
			<Navbar />
			{API}
			<Params />
			<Response />
			<Footer />
		</>
	);
}
