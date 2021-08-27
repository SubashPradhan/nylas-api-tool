export const DATA_CENTER_URL = 'DATA_CENTER_URL';

const handleDataCenterUrlPayload = payload => ({
	type: DATA_CENTER_URL,
	payload,
});

export const handleDataCenterUrl = url => dispatch => {
	return dispatch(handleDataCenterUrlPayload(url));
};
