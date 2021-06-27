import '../styles/footer.css';

export default function Footer() {
	return (
		<div>
			<div className="footer">
				Made with
				<span role="img" aria-label="cool">
					{' '}
					💖{' '}
				</span>
				Nylas © {new Date().getFullYear()}
			</div>
		</div>
	);
}
