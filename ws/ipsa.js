"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.IPSA=void 0,require("core-js/modules/es.promise.js"),require("core-js/modules/web.dom-collections.iterator.js"),require("core-js/modules/web.url.js"),require("core-js/modules/web.url-search-params.js"),require("core-js/modules/es.array-buffer.constructor.js"),require("core-js/modules/es.array-buffer.slice.js"),require("core-js/modules/es.typed-array.uint8-array.js"),require("core-js/modules/es.typed-array.fill.js"),require("core-js/modules/es.typed-array.set.js"),require("core-js/modules/es.typed-array.sort.js"),require("core-js/modules/es.typed-array.to-locale-string.js");var _config=require("../config.js"),_index=require("../utils/logger/index.js"),_retry_connection=require("./retry_connection.js"),_connection_base=require("./connection_base.js"),_types=require("../types/types.js"),_proto=require("../types/proto.js"),_auth=require("../api/auth.js");function _classPrivateMethodInitSpec(a,b){_checkPrivateRedeclaration(a,b),b.add(a)}function _classPrivateFieldInitSpec(a,b,c){_checkPrivateRedeclaration(a,b),b.set(a,c)}function _checkPrivateRedeclaration(a,b){if(b.has(a))throw new TypeError("Cannot initialize the same private elements twice on an object")}function _classPrivateFieldGet(a,b){var c=_classExtractFieldDescriptor(a,b,"get");return _classApplyDescriptorGet(a,c)}function _classApplyDescriptorGet(a,b){return b.get?b.get.call(a):b.value}function _classPrivateMethodGet(a,b,c){if(!b.has(a))throw new TypeError("attempted to get private field on non-instance");return c}function _classPrivateFieldSet(a,b,c){var d=_classExtractFieldDescriptor(a,b,"set");return _classApplyDescriptorSet(a,d,c),c}function _classExtractFieldDescriptor(a,b,c){if(!b.has(a))throw new TypeError("attempted to "+c+" private field on non-instance");return b.get(a)}function _classApplyDescriptorSet(a,b,c){if(b.set)b.set.call(a,c);else{if(!b.writable)throw new TypeError("attempted to set read only private field");b.value=c}}const ErrorCode=_proto.types.Code;var _expiryTimer=/*#__PURE__*/new WeakMap,_handlers=/*#__PURE__*/new WeakMap,_write=/*#__PURE__*/new WeakSet,_handleMessage=/*#__PURE__*/new WeakSet,_setConfig=/*#__PURE__*/new WeakSet;class IPSAClass extends _retry_connection.RetryConnection{constructor(){super("ipsa"),_classPrivateMethodInitSpec(this,_setConfig),_classPrivateMethodInitSpec(this,_handleMessage),_classPrivateMethodInitSpec(this,_write),_classPrivateFieldInitSpec(this,_expiryTimer,{writable:!0,value:void 0}),_classPrivateFieldInitSpec(this,_handlers,{writable:!0,value:void 0}),this.socket=null,_classPrivateFieldSet(this,_handlers,{}),_classPrivateFieldSet(this,_expiryTimer,null),this.meetingToken=null}async start(a){let{meetingToken:b,request:c,onError:d,onResponse:e,onConnected:f,onDisconnected:g}=a;if(!e||!d)throw new Error("bad request");if(this.isStarted())throw new Error("already started");this.setRuntimeConfig(c.runtimeConfig),_classPrivateMethodGet(this,_setConfig,_setConfig2).call(this,c.config),this.meetingToken=b,_classPrivateFieldSet(this,_handlers,{onErrorMessage:d,onConnected:f,onDisconnected:g,onResponse:e}),super.start()}stop(){clearTimeout(_classPrivateFieldGet(this,_expiryTimer)),this.configRequest=null,this.runtimeConfigRequest=null,super.stop()}disconnect(){super.disconnect(),null!=this.socket&&(this.socket.close(),this.socket=null)}onConnected(){let a=_classPrivateFieldGet(this,_handlers).onConnected;a&&a()}onDisconnected(){let a=_classPrivateFieldGet(this,_handlers).onDisconnected;a&&a()}onErrorMessage(a){let b=_classPrivateFieldGet(this,_handlers).onErrorMessage;b&&b(a)}onResponse(a){let b=_classPrivateFieldGet(this,_handlers).onResponse;b&&b(a)}async connect(){if(this.getConnectionStatus()!=_connection_base.ConnectionStatus.DISCONNECTED)return;super.connect();let a=new _types.MeetingClaims(this.meetingToken),b=a.getSecondsUntilExpiry();if(0>=b)return this.onErrorMessage(ErrorCode.ERR_TIMEOUT,"token expired"),void this.stop();clearTimeout(_classPrivateFieldGet(this,_expiryTimer)),_classPrivateFieldSet(this,_expiryTimer,setTimeout(()=>{this.stop(),this.onErrorMessage(ErrorCode.ERR_TIMEOUT,"token expired")},b));let c=await(0,_auth.getUserToken)({minExpiry:b}),d=a.meetindId;_index.logger.info("Connecting IPSA to meeting ".concat(d,"..."));let e=new URL(_config.Config.apiBaseURL),f="wss://".concat(e.hostname,"/ws/ipsa/").concat(d,"?user_token=").concat(c,"&meeting_token=").concat(this.meetingToken);this.socket=new WebSocket(f),this.socket.binaryType="arraybuffer",this.socket.addEventListener("open",async()=>{try{await _classPrivateMethodGet(this,_write,_write2).call(this,this.configRequest),await _classPrivateMethodGet(this,_write,_write2).call(this,this.runtimeConfigRequest),this.onConnected()}catch(a){return _index.logger.error(a),void this.disconnect()}}),this.socket.addEventListener("close",()=>{this.onDisconnected()}),this.socket.addEventListener("message",a=>{_classPrivateMethodGet(this,_handleMessage,_handleMessage2).call(this,a.data)}),this.socket.addEventListener("error",a=>{this.onErrorMessage(ErrorCode.ERR_IO,a)})}writeData(a){let b=this.socket.bufferedAmount;0<b&&_index.logger.warn("ipsa: low internet speed connection [buffer size: ".concat(b));let c=_proto.ipsa.Request.create({ipsa:{data:a}});return _classPrivateMethodGet(this,_write,_write2).call(this,c)}setRuntimeConfig(a){let b=_proto.ipsa.Request.create({runtimeConfig:a});this.runtimeConfigRequest=b,this.isConnected()&&_classPrivateMethodGet(this,_write,_write2).call(this,b)}}async function _write2(a){let b=_proto.ipsa.Request.verify(a);if(b)throw new Error("invalid message: "+b);if(a){let b=_proto.ipsa.Request.encode(a).finish();this.socket.send(b)}}async function _handleMessage2(a){var b,c,d,e;try{if(a instanceof ArrayBuffer){let b=new Uint8Array(a),c=_proto.ipsa.Response.decode(b);return void this.onResponse(c)}}catch(a){_index.logger.error(a)}try{switch(a=JSON.parse(a),a.code){case ErrorCode.ERR_TOO_MANY_CONNECTIONS:case ErrorCode.ERR_UNAUTHORIZED:case ErrorCode.ERR_BAD_REQUEST:this.onErrorMessage(null===(b=a)||void 0===b?void 0:b.code,null===(c=a)||void 0===c?void 0:c.reason),this.stop();break;default:this.onInfoMessage(null===(d=a)||void 0===d?void 0:d.code,null===(e=a)||void 0===e?void 0:e.reason);}}catch(a){_index.logger.error(a)}}function _setConfig2(a){let b=_proto.ipsa.Request.create({config:a});this.configRequest=b,this.isConnected()&&_classPrivateMethodGet(this,_write,_write2).call(this,b)}let IPSA=new IPSAClass;exports.IPSA=IPSA;