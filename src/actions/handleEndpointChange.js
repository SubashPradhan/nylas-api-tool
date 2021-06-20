export const ENDPOINT_CHANGE = 'ENDPOINT_CHANGE';

const handleEndpointChangePayload = payload => ({
	type: ENDPOINT_CHANGE,
	payload,
});

export const handleEndpointChange = endpoint => dispatch => {
	return dispatch(handleEndpointChangePayload(endpoint));
};
