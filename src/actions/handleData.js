import request from 'superagent';

export const DATA_FETCHED = 'DATA_FETCHED';

const fetchDataPayload = payload => ({
	type: DATA_FETCHED,
	payload,
});

export const fetchData = value => async (dispatch, getState) => {
	const { accessToken, currentDataCenterUrl } = getState();
	try {
		const response = await request
			.get(`${currentDataCenterUrl}/${value}`)
			.set({ Authorization: 'Bearer ' + accessToken });
		const action = await fetchDataPayload(response);
		return dispatch(action);
	} catch (error) {
		const action = await fetchDataPayload(error);
		return dispatch(action);
	}
};
