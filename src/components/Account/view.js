import ApiPage from '../ApiPage';

const options = [
	{
		label: 'Account',
		value: 'account',
	},
];

export default function View(props) {
	const { pageName, pageEndpoint } = props;

	return (
		<>
			<ApiPage
				options={options}
				pageName={pageName}
				pageEndpoint={pageEndpoint}
			/>
		</>
	);
}
