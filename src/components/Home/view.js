import { Link } from 'react-router-dom';
import { pageLinks } from '../../constants';
import '../../styles/home.css';
import Navbar from '../Navbar';
import Footer from '../Footer';

export default function View(props) {
	const { handleChange } = props;

	const homePage = (
		<div className="home">
			<h1 className="main-title">Welcome to the Nylas API</h1>
			<h2 className="sub-title"> Fetch every data with a click.</h2>
			<div className="access-token-input-field">
				<label className="access-token-label">Enter access token</label>
				<input
					className="access-token-input"
					onChange={e => handleChange(e)}
					placeholder="Enter access token"
				/>
			</div>
			<div className="api-btn-container">
				{pageLinks.map((link, i) => (
					<Link key={i} to={link.value} className="api-btn">
						{link.name}
					</Link>
				))}
			</div>
		</div>
	);
	return (
		<>
			<Navbar />
			{homePage}
			<Footer />
		</>
	);
}
