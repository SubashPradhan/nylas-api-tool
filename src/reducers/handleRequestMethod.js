import { REQUEST_METHOD } from '../actions/handleRequestMethod';

// Set state to GET as this will be the default behaviour.
export const requestMethod = (state = 'GET', action = {}) => {
	switch (action.type) {
		case REQUEST_METHOD:
			return action.payload;
		default:
			return state;
	}
};
