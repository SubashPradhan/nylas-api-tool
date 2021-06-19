export const PAGE_CHANGE = 'PAGE_CHANGE';

const handlePageChangePayload = payload => ({
	type: PAGE_CHANGE,
	payload,
});

export const handlePageChange = page => dispatch => {
	return dispatch(handlePageChangePayload(page));
};
