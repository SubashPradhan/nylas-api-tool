import { HANDLE_ACCESS_TOKEN } from '../actions/handleAccessToken';

export const accessToken = (state = null, action = {}) => {
	switch (action.type) {
		case HANDLE_ACCESS_TOKEN:
			return action.payload;
		default:
			return state;
	}
};
