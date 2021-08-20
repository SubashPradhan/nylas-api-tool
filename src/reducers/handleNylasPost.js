import { ON_POST } from '../actions/handleNylasPost';

export const onPost = (state = [], action = {}) => {
	switch (action.type) {
		case ON_POST:
			return action.payload;
		default:
			return state;
	}
};
