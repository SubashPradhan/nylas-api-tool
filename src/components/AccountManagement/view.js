import PostApiPage from '../PostApiPage';

const options = [
	{
		label: 'Accounts',
		value: 'accounts',
	},
];

export default function View(props) {
	const { pageEndpoint, pageName } = props;
	return (
		<>
			<PostApiPage
				options={options}
				pageName={pageName}
				pageEndpoint={pageEndpoint}
			/>
		</>
	);
}
