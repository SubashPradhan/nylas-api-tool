import { combineReducers } from 'redux';
import { accessToken } from './handleAccessToken';
import { data } from './handleData';
import { showMenu } from './handleMenuClick';
import { endpoint } from './handleEndpointChange';

export default combineReducers({
	showMenu,
	data,
	accessToken,
	endpoint,
});
