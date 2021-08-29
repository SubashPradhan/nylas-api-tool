export const REQUEST_METHOD = 'REQUEST_METHOD';

const handleRequestMethodPayload = payload => ({
	type: REQUEST_METHOD,
	payload,
});

export const handleRequestMethod = requestMethod => dispatch => {
	return dispatch(handleRequestMethodPayload(requestMethod));
};
