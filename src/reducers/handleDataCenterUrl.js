import { DATA_CENTER_URL } from '../actions/handleDataCenterUrl';

export const currentDataCenterUrl = (state = null, action = {}) => {
	switch (action.type) {
		case DATA_CENTER_URL:
			return action.payload;
		default:
			return state;
	}
};
