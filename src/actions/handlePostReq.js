import request from 'superagent';
import { nylasUrl } from '../constants';

export const DATA_ON_POST = 'DATA_ON_POST';

const fetchDataPayload = payload => ({
	type: DATA_ON_POST,
	payload,
});

export const handlePostReq = (clientSecret, endpoint) => async dispatch => {
	try {
		const response = await request.get(`${nylasUrl}/${endpoint}`).set({
			Authorization: 'Basic ' + clientSecret,
		});
		const action = await fetchDataPayload(response);
		// Clean up later
		console.log('HERE RESULT', response);
		return dispatch(action);
	} catch (error) {
		const action = await fetchDataPayload(error);
		return dispatch(action);
	}
};
