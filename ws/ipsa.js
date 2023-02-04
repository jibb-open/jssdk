"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.IPSA=void 0,require("core-js/modules/es.promise.js"),require("core-js/modules/web.dom-collections.iterator.js"),require("core-js/modules/web.url.js"),require("core-js/modules/web.url-search-params.js"),require("core-js/modules/es.array-buffer.constructor.js"),require("core-js/modules/es.array-buffer.slice.js"),require("core-js/modules/es.typed-array.uint8-array.js"),require("core-js/modules/es.typed-array.fill.js"),require("core-js/modules/es.typed-array.set.js"),require("core-js/modules/es.typed-array.sort.js"),require("core-js/modules/es.typed-array.to-locale-string.js");var _config=require("../config.js"),_index=require("../utils/logger/index.js"),_types=require("../types/types.js"),_proto=require("../types/proto.js"),_auth=require("../api/auth.js"),_observable_connection=require("./observable_connection.js"),_exceptions=require("../types/exceptions.js");function _classPrivateMethodInitSpec(a,b){_checkPrivateRedeclaration(a,b),b.add(a)}function _get(){return _get="undefined"!=typeof Reflect&&Reflect.get?Reflect.get.bind():function(a,b,c){var d=_superPropBase(a,b);if(d){var e=Object.getOwnPropertyDescriptor(d,b);return e.get?e.get.call(3>arguments.length?a:c):e.value}},_get.apply(this,arguments)}function _superPropBase(a,b){for(;!Object.prototype.hasOwnProperty.call(a,b)&&(a=_getPrototypeOf(a),null!==a););return a}function _getPrototypeOf(a){return _getPrototypeOf=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(a){return a.__proto__||Object.getPrototypeOf(a)},_getPrototypeOf(a)}function _classPrivateFieldInitSpec(a,b,c){_checkPrivateRedeclaration(a,b),b.set(a,c)}function _checkPrivateRedeclaration(a,b){if(b.has(a))throw new TypeError("Cannot initialize the same private elements twice on an object")}function _classPrivateFieldGet(a,b){var c=_classExtractFieldDescriptor(a,b,"get");return _classApplyDescriptorGet(a,c)}function _classApplyDescriptorGet(a,b){return b.get?b.get.call(a):b.value}function _classPrivateMethodGet(a,b,c){if(!b.has(a))throw new TypeError("attempted to get private field on non-instance");return c}function _classPrivateFieldSet(a,b,c){var d=_classExtractFieldDescriptor(a,b,"set");return _classApplyDescriptorSet(a,d,c),c}function _classExtractFieldDescriptor(a,b,c){if(!b.has(a))throw new TypeError("attempted to "+c+" private field on non-instance");return b.get(a)}function _classApplyDescriptorSet(a,b,c){if(b.set)b.set.call(a,c);else{if(!b.writable)throw new TypeError("attempted to set read only private field");b.value=c}}var _meetingExpiryTimer=/*#__PURE__*/new WeakMap,_write=/*#__PURE__*/new WeakSet,_setConfig=/*#__PURE__*/new WeakSet;class IPSAClass extends _observable_connection.ObservableRetryConnection{constructor(a){super("ipsa",a),_classPrivateMethodInitSpec(this,_setConfig),_classPrivateMethodInitSpec(this,_write),_classPrivateFieldInitSpec(this,_meetingExpiryTimer,{writable:!0,value:void 0}),this.socket=null,_classPrivateFieldSet(this,_meetingExpiryTimer,null),this.meetingToken=null,this.meetingClaims=null}async start(a){let{meetingToken:b,request:c}=a;if(this.isStarted())return void this.onError(new _exceptions.AlreadyStartedError("already started"));this.setRuntimeConfig(c.runtimeConfig),_classPrivateMethodGet(this,_setConfig,_setConfig2).call(this,c.config),this.meetingToken=b,this.meetingClaims=new _types.MeetingClaims(this.meetingToken);let d=this.meetingClaims.getSecondsUntilExpiry();if(0>=d){let a=new _exceptions.PermissionDeniedError("meeting token expired");throw this.onError(a),a}else clearTimeout(_classPrivateFieldGet(this,_meetingExpiryTimer)),_classPrivateFieldSet(this,_meetingExpiryTimer,setTimeout(()=>{let a=new _exceptions.SessionTimeoutError("meeting token expired");this.onError(a)},d));super.start()}stop(){clearTimeout(_classPrivateFieldGet(this,_meetingExpiryTimer)),this.configRequest=null,this.runtimeConfigRequest=null,super.stop()}async getURI(){let a;try{a=await(0,_auth.getUserToken)({minExpiry:3600});let b=new _types.UserClaims(a),c=b.getSecondsUntilExpiry();if(0>=c){let a=new _exceptions.PermissionDeniedError("user token expired");throw this.onError(a),a}}catch(a){let b=new _exceptions.PermissionDeniedError(a);throw this.onError(b),b}let b=this.meetingClaims.meetindId;_index.logger.info("Starting IPSA...");let c=new URL(_config.Config.apiBaseURL);return"wss://".concat(c.hostname,"/ws/ipsa/").concat(b,"?user_token=").concat(a,"&meeting_token=").concat(this.meetingToken)}onData(a){try{if(a instanceof ArrayBuffer){let b=new Uint8Array(a),c=_proto.ipsa.Response.decode(b);return void this.notify("onResponse",c)}}catch(a){_index.logger.error(a)}this.parseJSONResponse(a)}writeData(a){let b=this.getBufferedAmount();0<b&&_index.logger.warn("ipsa: low internet speed connection. [buffer size: ".concat(b,"]"));let c=_proto.ipsa.Request.create({ipsa:{data:a}});return _classPrivateMethodGet(this,_write,_write2).call(this,c)}onConnected(){super.onConnected(),_classPrivateMethodGet(this,_write,_write2).call(this,this.configRequest),_classPrivateMethodGet(this,_write,_write2).call(this,this.runtimeConfigRequest)}setRuntimeConfig(a){if(!a)throw new _exceptions.InvalidArgumentError("bad request");let b=_proto.ipsa.Request.create({runtimeConfig:a});this.runtimeConfigRequest=b,this.isConnected()&&_classPrivateMethodGet(this,_write,_write2).call(this,b)}}async function _write2(a){if(!this.isStarted()){let a=new _exceptions.NotConnectedError("not started");throw this.onError(a),a}if(!this.isConnected()){let a=new _exceptions.NotConnectedError("not connected");throw this.onError(a),a}let b=_proto.ipsa.Request.verify(a);if(b){let a=new _exceptions.InvalidArgumentError("invalid message: "+b);throw this.onError(a),a}if(a){let b=_proto.ipsa.Request.encode(a).finish();_get(_getPrototypeOf(IPSAClass.prototype),"write",this).call(this,b)}}function _setConfig2(a){if(!a)throw new _exceptions.InvalidArgumentError("bad request");let b=_proto.ipsa.Request.create({config:a});this.configRequest=b}let IPSA=new IPSAClass({maxRetryCount:10,minRetryIntervalMs:500,maxRetryIntervalMs:4e3});exports.IPSA=IPSA;