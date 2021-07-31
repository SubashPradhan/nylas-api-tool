import request from 'superagent';
import { nylasUrl } from '../constants';

export const DATA_FETCHED = 'DATA_FETCHED';

const fetchDataPayload = payload => ({
	type: DATA_FETCHED,
	payload,
});

export const fetchData = value => async (dispatch, getState) => {
	const { accessToken } = getState();
	try {
		const response = await request
			.get(`${nylasUrl}/${value}`)
			.set({ Authorization: 'Bearer ' + accessToken });
		const action = await fetchDataPayload(response);
		return dispatch(action);
	} catch (error) {
		const action = await fetchDataPayload(error);
		return dispatch(action);
	}
};
