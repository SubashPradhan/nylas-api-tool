import { ENDPOINT_CHANGE } from '../actions/handleEndpointChange';

export const endpoint = (state = null, action = {}) => {
	switch (action.type) {
		case ENDPOINT_CHANGE:
			return action.payload;
		default:
			return state;
	}
};
