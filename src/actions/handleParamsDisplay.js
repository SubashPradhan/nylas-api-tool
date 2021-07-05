export const PARAMS_DISPLAY = 'PARAMS_DISPLAY';

const handleParamsDisplayPayload = payload => ({
	type: PARAMS_DISPLAY,
	payload,
});

export const handleParamsDisplay = () => dispatch => {
	return dispatch(handleParamsDisplayPayload());
};
