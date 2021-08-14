import request from 'superagent';
import { postEndpoint } from '../constants';

export const DATA_ON_POST = 'DATA_ON_POST';

const fetchDataPayload = payload => ({
	type: DATA_ON_POST,
	payload,
});

export const handlePostReq = (endpoint, postData) => async dispatch => {
	try {
		const response = await request
			.post(`${postEndpoint}/${endpoint}`)
			.send(postData);
		const action = await fetchDataPayload(response);
		return dispatch(action);
	} catch (error) {
		const action = await fetchDataPayload(error);
		return dispatch(action);
	}
};
