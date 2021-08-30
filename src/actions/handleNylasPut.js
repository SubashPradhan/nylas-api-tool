import request from 'superagent';

export const ON_PUT = 'ON_PUT';

const nylasPutPayload = payload => ({
	type: ON_PUT,
	payload,
});

export const handleNylasPut = (id, putData) => async (dispatch, getState) => {
	const { accessToken, endpoint, currentDataCenterUrl } = getState();
	// PUT request requires id therefore get ID from the input data and pass it to the url
	// Fix the put url manipulation
	try {
		const response = await request
			.put(`${currentDataCenterUrl}/${endpoint}/${id}`)
			.set({ Authorization: 'Bearer ' + accessToken })
			.send(putData);
		const action = await nylasPutPayload(response);
		return dispatch(action);
	} catch (error) {
		const action = await nylasPutPayload(error);
		return dispatch(action);
	}
};
