import { combineReducers } from 'redux';
import { accessToken } from './handleAccessToken';
import { data } from './handleData';
import { showMenu } from './handleMenuClick';

export default combineReducers({
	showMenu,
	data,
	accessToken,
});
