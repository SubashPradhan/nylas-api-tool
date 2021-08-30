export const PUT_PARAMS_DISPLAY = 'PUT_PARAMS_DISPLAY';

const handlePutParamsDisplayPayload = payload => ({
	type: PUT_PARAMS_DISPLAY,
	payload,
});

export const handlePutParamsDisplay = () => dispatch => {
	return dispatch(handlePutParamsDisplayPayload());
};
