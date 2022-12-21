"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.getCameraList=getCameraList,exports.getCameraPreview=getCameraPreview,exports.getClientStatusList=getClientStatusList,exports.sendMessage=sendMessage,exports.setRuntimeConfig=setRuntimeConfig,exports.startStream=startStream,exports.stopStream=stopStream,require("core-js/modules/es.promise.js");var _auth=require("./auth.js"),_config=require("../config.js"),_index=require("../utils/http/index.js");async function getCameraList(a){let b=await _index.http.get("".concat(_config.Config.apiBaseURL,"/v1/eventbus/clients/").concat(a,"/cameras"),await _prepareRequestHeaders());return b.data.items}async function getCameraPreview(a){let{cameraId:b,clientId:c}=a,d=await _index.http.post("".concat(_config.Config.apiBaseURL,"/v1/eventbus/").concat(c,"/preview"),{source:{id:b}},await _prepareRequestHeaders());return d.data.image}async function startStream(a){let{meetingToken:b,surfaceType:c,cameraId:d,sipUri:e,flipLeftRight:f,flipUpDown:g,rotation:h,fixedCorners:i,clientId:j,customCorners:k,enableColor:l,enableEstimation:m}=a,n={config:{surface_type:c},runtime_config:_makeRuntimeConfig({fixedCorners:i,flipLeftRight:f,flipUpDown:g,rotation:h,customCorners:k,enableColor:l,enableEstimation:m}),meeting_token:b};if(!d&&!e)return Promise.reject("Invalid request: either sipUri or cameraId should be specified");if(d&&e)return Promise.reject("Invalid request: both sipUri (".concat(e,") and cameraId (").concat(e,") are specified"));e?n.sip_uri=e:n.camera={id:d};return _index.http.post("".concat(_config.Config.apiBaseURL,"/v1/eventbus/clients/").concat(j,"/start"),{start_request:n},await _prepareRequestHeaders())}async function stopStream(a){return _index.http.post("".concat(_config.Config.apiBaseURL,"/v1/eventbus/").concat(a,"/stop"),{},await _prepareRequestHeaders())}async function sendMessage(a){return _index.http.post("".concat(_config.Config.apiBaseURL,"/v1/eventbus"),a,await _prepareRequestHeaders())}async function setRuntimeConfig(a){let{flipLeftRight:b,flipUpDown:c,rotation:d,fixedCorners:e,customCorners:f,clientId:g,enableColor:h,enableEstimation:i}=a,j={runtime_config_request:{runtime_config:_makeRuntimeConfig({fixedCorners:e,flipLeftRight:b,flipUpDown:c,rotation:d,customCorners:f,enableColor:h,enableEstimation:i})}};return _index.http.post("".concat(_config.Config.apiBaseURL,"/v1/eventbus/").concat(g,"/runtime_config"),j,await _prepareRequestHeaders())}async function getClientStatusList(){let a=await _index.http.get("".concat(_config.Config.apiBaseURL,"/v1/eventbus/clients"),await _prepareRequestHeaders());return a.data.clients}async function _prepareRequestHeaders(){return{"Content-Type":"application/json",Accept:"application/json","x-jibb-user-jwt":await(0,_auth.getUserToken)()}}function _makeRuntimeConfig(a){let{fixedCorners:b,flipLeftRight:c,flipUpDown:d,rotation:e,customCorners:f,enableColor:g,enableEstimation:h}=a;switch(e){case 90:e="1";break;case 180:case-180:e="2";break;case-90:case 270:e="3";break;case 0:case 360:default:e="0";}return{custom_corners:f||[],rotation:e,enable_color:g||!1,fixed_corners:b,enable_estimation:h||!1,flip_up_down:d||!1,flip_left_right:c||!1}}