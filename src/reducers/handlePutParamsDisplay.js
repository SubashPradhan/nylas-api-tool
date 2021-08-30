import { PUT_PARAMS_DISPLAY } from '../actions/handlePutParamsDisplay';

export const showPutParams = (state = false, action = {}) => {
	switch (action.type) {
		case PUT_PARAMS_DISPLAY:
			return !state;
		default:
			return state;
	}
};
