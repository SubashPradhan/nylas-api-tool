import { combineReducers } from 'redux';
import { accessToken } from './handleAccessToken';
import { data } from './handleData';
import { showMenu } from './handleMenuClick';
import { endpoint } from './handleEndpointChange';
import { showParams } from './handleParamsDisplay';
import { showPostParams } from './handlePostParamsDisplay';
import { showPutParams } from './handlePutParamsDisplay';
import { dataOnPost } from './handlePostReq';
import { onPost } from './handleNylasPost';
import { onPut } from './handleNylasPut';
import { showDataCenterDisplay } from './handleDataCenterDisplay';
import { currentDataCenterUrl } from './handleDataCenterUrl';
import { requestMethod } from './handleRequestMethod';

export default combineReducers({
	showMenu,
	data,
	accessToken,
	endpoint,
	showParams,
	showPostParams,
	dataOnPost,
	onPost,
	onPut,
	showDataCenterDisplay,
	currentDataCenterUrl,
	requestMethod,
	showPutParams,
});
