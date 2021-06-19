import '../../styles/search.css';

export default function View(props) {
	const { handleChange, endpoint, handleSubmit, searchById } = props;

	return (
		<div className="search-container">
			<label className="search-label">Search By ID:</label>
			<input
				name="search-by-id"
				className="search-id"
				onChange={e => handleChange(e)}
			/>
			<button onClick={handleSubmit}>Search</button>
		</div>
	);
}
