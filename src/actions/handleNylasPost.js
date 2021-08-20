import request from 'superagent';
import { nylasUrl } from '../constants';

export const ON_POST = 'ON_POST';

const nylasPostPayload = payload => ({
	type: ON_POST,
	payload,
});

export const handleNylasPost = postData => async (dispatch, getState) => {
	const { accessToken, endpoint } = getState();
	// Fix the post url manipulation
	try {
		const response = await request
			.post(`${nylasUrl}/calendars/${endpoint}`)
			.set({ Authorization: 'Bearer ' + accessToken })
			.send(postData);
		const action = await nylasPostPayload(response);
		return dispatch(action);
	} catch (error) {
		const action = await nylasPostPayload(error);
		return dispatch(action);
	}
};
