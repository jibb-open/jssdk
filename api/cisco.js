"use strict";var _config=require("../config.js");Object.defineProperty(exports,"__esModule",{value:!0}),exports.getJSSDK=getJSSDK,exports.getMacro=getMacro,require("core-js/modules/es.promise.js"),require("core-js/modules/es.json.stringify.js");async function getMacro(a){let{apiKey:b,email:c,selectInputs:d,emailEdit:e,cameraControl:f,customCorners:g}=a;return httpPost("".concat(_config.Config.apiBaseURL,"/v1/cisco/macro"),{api_key:b,email:c,select_inputs:d,email_edit:e,camera_controls:f,custom_corners:g})}async function getJSSDK(){return httpGet("".concat(_config.Config.apiBaseURL,"/v1/cisco/jssdk"))}function httpGet(a){let b=new XMLHttpRequest;return b.open("GET",a,!1),b.send(null),b.responseText}function httpPost(a,b){let c=new XMLHttpRequest;return c.open("POST",a,!1),c.setRequestHeader("Content-Type","application/json;charset=UTF-8"),c.send(JSON.stringify(b)),c.responseText}