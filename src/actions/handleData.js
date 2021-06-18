import request from 'superagent';
import { nylasUrl } from '../constants';

export const DATA_FETCHED = 'DATA_FETCHED';

const fetchDataPayload = payload => ({
	type: DATA_FETCHED,
	payload,
});

export const fetchData = value => async (dispatch, getState) => {
	const { accessToken } = getState();
	console.log(accessToken);
	try {
		const response = await request
			.get(`${nylasUrl}/${value}`)
			.set({ Authorization: 'Bearer ' + accessToken });
		const action = await fetchDataPayload(response.body);
		console.log('Hello', typeof response);
		console.log('Hello', response);
		return dispatch(action);
	} catch (error) {
		console.log(error);
		const action = await fetchDataPayload(error);
		return dispatch(action);
	}
};
