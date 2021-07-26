import ApiPage from '../ApiPage';

const options = [
	{
		label: 'Account',
		value: 'account',
	},
];

export default function View(props) {
	const { pageName, endpoint } = props;

	return (
		<>
			<ApiPage options={options} pageName={pageName} endpoint={endpoint} />
		</>
	);
}
