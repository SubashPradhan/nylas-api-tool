import { ON_PUT } from '../actions/handleNylasPut';

export const onPut = (state = [], action = {}) => {
	switch (action.type) {
		case ON_PUT:
			return action.payload;
		default:
			return state;
	}
};
