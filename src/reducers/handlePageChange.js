import { PAGE_CHANGE } from '../actions/handlePageChange';

export const page = (state = null, action = {}) => {
	switch (action.type) {
		case PAGE_CHANGE:
			return action.payload;
		default:
			return state;
	}
};
