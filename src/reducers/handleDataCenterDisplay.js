import { DATA_CENTER_DISPLAY } from '../actions/handleDataCenterDisplay';

export const showDataCenterDisplay = (state = true, action = {}) => {
	switch (action.type) {
		case DATA_CENTER_DISPLAY:
			return !state;
		default:
			return state;
	}
};
