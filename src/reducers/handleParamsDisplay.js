import { PARAMS_DISPLAY } from '../actions/handleParamsDisplay';

export const showParams = (state = false, action = {}) => {
	switch (action.type) {
		case PARAMS_DISPLAY:
			return !state;
		default:
			return state;
	}
};
