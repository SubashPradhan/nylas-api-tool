import { accessToken } from './handleAccessToken';
import { data } from './handleData';
import { combineReducers } from 'redux';

export default combineReducers({
	data,
	accessToken,
});
