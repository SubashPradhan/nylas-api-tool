import PostApiPage from '../PostApiPage';
// import Params from '../Params';

const options = [
	{
		label: 'Accounts',
		value: 'accounts',
	},
];

// const params = ['view', 'limit', 'offset'];

export default function View(props) {
	const { pageEndpoint, pageName } = props;
	return (
		<>
			<PostApiPage
				options={options}
				pageName={pageName}
				pageEndpoint={pageEndpoint}
			/>
			{/* <Params params={params} /> */}
		</>
	);
}
