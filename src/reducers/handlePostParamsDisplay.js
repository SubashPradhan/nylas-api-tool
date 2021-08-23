import { POST_PARAMS_DISPLAY } from '../actions/handlePostParamsDisplay';

export const showPostParams = (state = false, action = {}) => {
	switch (action.type) {
		case POST_PARAMS_DISPLAY:
			return !state;
		default:
			return state;
	}
};
