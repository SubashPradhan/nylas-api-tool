export const DATA_CENTER_DISPLAY = 'DATA_CENTER_DISPLAY';

const handleDataCenterDisplayPayload = payload => ({
	type: DATA_CENTER_DISPLAY,
	payload,
});

export const handleDataCenterDisplay = () => dispatch => {
	return dispatch(handleDataCenterDisplayPayload());
};
