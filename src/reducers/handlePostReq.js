import { DATA_ON_POST } from '../actions/handlePostReq';

export const dataOnPost = (state = [], action = {}) => {
	switch (action.type) {
		case DATA_ON_POST:
			return action.payload;
		default:
			return state;
	}
};
