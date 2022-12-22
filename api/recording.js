"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.startRecording=startRecording,exports.stopRecording=stopRecording,exports.takeSnapshot=takeSnapshot,require("core-js/modules/es.promise.js");var _config=require("../config.js"),_auth=require("./auth.js"),_index=require("../utils/http/index.js");async function startRecording(){let a=0<arguments.length&&arguments[0]!==void 0?arguments[0]:{email,meetingId,meetingToken,title:"UNTITLED",interval,sensivityLevel};return async function(){let b=null===a||void 0===a?void 0:a.email,c=null===a||void 0===a?void 0:a.meetingToken,d=(null===a||void 0===a?void 0:a.title)||"UNTITLED",e=null===a||void 0===a?void 0:a.meetingId,f=(null===a||void 0===a?void 0:a.interval)||0,g=(null===a||void 0===a?void 0:a.sensivityLevel)||0,h={"Content-Type":"application/json",Accept:"application/json","x-jibb-user-jwt":await(0,_auth.getUserToken)(),"x-jibb-meeting-jwt":c},i=await _index.http.post("".concat(_config.Config.apiBaseURL,"/v1/meetings/recordings/start"),{title:d,write_interval:f,meeting_id:e,email:b,level:g},h);return i.data}()}async function stopRecording(){let a={"Content-Type":"application/json",Accept:"application/json","x-jibb-user-jwt":await(0,_auth.getUserToken)()},b=await _index.http.post("".concat(_config.Config.apiBaseURL,"/v1/meetings/recordings/stop"),{},a);return b.data}async function takeSnapshot(){let a={"Content-Type":"application/json",Accept:"application/json","x-jibb-user-jwt":await(0,_auth.getUserToken)()},b=await _index.http.post("".concat(_config.Config.apiBaseURL,"/v1/meetings/recordings/snapshot"),{},a);return b.data}