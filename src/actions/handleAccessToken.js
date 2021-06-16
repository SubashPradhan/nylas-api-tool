export const HANDLE_ACCESS_TOKEN = 'HANDLE_ACCESS_TOKEN';

const handleAccessTokenPayload = payload => ({
	type: HANDLE_ACCESS_TOKEN,
	payload,
});

export const handleAccessToken = value => async dispatch => {
	const action = await handleAccessTokenPayload(value);
	return dispatch(action);
};
