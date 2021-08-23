import { combineReducers } from 'redux';
import { accessToken } from './handleAccessToken';
import { data } from './handleData';
import { showMenu } from './handleMenuClick';
import { endpoint } from './handleEndpointChange';
import { showParams } from './handleParamsDisplay';
import { showPostParams } from './handlePostParamsDisplay';
import { dataOnPost } from './handlePostReq';
import { onPost } from './handleNylasPost';

export default combineReducers({
	showMenu,
	data,
	accessToken,
	endpoint,
	showParams,
	showPostParams,
	dataOnPost,
	onPost,
});
