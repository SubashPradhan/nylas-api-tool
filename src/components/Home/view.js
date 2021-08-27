import { Link } from 'react-router-dom';
import { pageLinks } from '../../constants';
import '../../styles/home.css';
import Navbar from '../Navbar';
import Footer from '../Footer';
import Datacenter from '../Datacenter';

export default function View(props) {
	const { handleChange } = props;

	const homePage = (
		<div className="home">
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
		<div className="main-page">
			<Navbar />
			<Datacenter />
			{homePage}
			<Footer />
		</div>
	);
}
