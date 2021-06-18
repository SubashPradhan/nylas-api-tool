import { DATA_FETCHED } from '../actions/handleData';

export const data = (state = [], action = {}) => {
	switch (action.type) {
		case DATA_FETCHED:
			return action.payload;
		default:
			return state;
	}
};
