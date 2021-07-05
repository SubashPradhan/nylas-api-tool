import { combineReducers } from 'redux';
import { accessToken } from './handleAccessToken';
import { data } from './handleData';
import { showMenu } from './handleMenuClick';
import { endpoint } from './handleEndpointChange';
import { showParams } from './handleParamsDisplay';

export default combineReducers({
	showMenu,
	data,
	accessToken,
	endpoint,
	showParams,
});
