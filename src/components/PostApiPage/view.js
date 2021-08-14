import Response from '../Response';
import Navbar from '../Navbar';
import Footer from '../Footer';
import '../../styles/api.css';
import '../../styles/postApi.css';

export default function View(props) {
	const {
		handleSelectChange,
		handleInputChange,
		handleSubmit,
		options,
		pageName,
		currentSelect,
		dataOnPost,
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
				{isLoaded ? (
					<p>
						Current request:{' '}
						{dataOnPost.response
							? dataOnPost.response.req.url
							: dataOnPost.req.url}
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
					onChange={e => handleInputChange(e, 'clientId')}
				/>
				<input
					className="client-form-input"
					name="client-secret"
					placeholder="Client Secret"
					onChange={e => handleInputChange(e, 'clientSecret')}
				/>
				<input
					className="client-form-input"
					name="account-id"
					placeholder="Search by acc ID optional"
					onChange={e => handleInputChange(e, 'accountId')}
				/>
				<button className="submit-button" onClick={e => handleSubmit(e)}>
					Submit
				</button>
			</div>
		</div>
	);
	return (
		<>
			<Navbar />
			{APIPost}
			<Response response={dataOnPost} />
			<Footer />
		</>
	);
}
