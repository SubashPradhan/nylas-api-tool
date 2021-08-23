export const POST_PARAMS_DISPLAY = 'POST_PARAMS_DISPLAY';

const handlePostParamsDisplayPayload = payload => ({
	type: POST_PARAMS_DISPLAY,
	payload,
});

export const handlePostParamsDisplay = () => dispatch => {
	return dispatch(handlePostParamsDisplayPayload());
};
