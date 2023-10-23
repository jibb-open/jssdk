"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.EventBusConnection=void 0,require("core-js/modules/es.promise.js"),require("core-js/modules/web.dom-collections.iterator.js"),require("core-js/modules/web.url.js"),require("core-js/modules/web.url-search-params.js"),require("core-js/modules/es.array-buffer.constructor.js"),require("core-js/modules/es.array-buffer.slice.js"),require("core-js/modules/es.typed-array.uint8-array.js"),require("core-js/modules/es.typed-array.fill.js"),require("core-js/modules/es.typed-array.set.js"),require("core-js/modules/es.typed-array.sort.js"),require("core-js/modules/es.typed-array.to-locale-string.js"),require("core-js/modules/es.weak-map.js"),require("core-js/modules/esnext.aggregate-error.js"),require("core-js/modules/esnext.promise.any.js");var _config=require("../config.js"),_index=require("../utils/logger/index.js"),_exceptions=require("../types/exceptions.js"),_types=require("../types/types.js"),_proto=require("../types/proto.js"),_auth=require("../api/auth.js"),_observable_connection=require("./observable_connection.js");function _classPrivateMethodInitSpec(a,b){_checkPrivateRedeclaration(a,b),b.add(a)}function _classPrivateFieldInitSpec(a,b,c){_checkPrivateRedeclaration(a,b),b.set(a,c)}function _checkPrivateRedeclaration(a,b){if(b.has(a))throw new TypeError("Cannot initialize the same private elements twice on an object")}function _classPrivateMethodGet(a,b,c){if(!b.has(a))throw new TypeError("attempted to get private field on non-instance");return c}function _classPrivateFieldGet(a,b){var c=_classExtractFieldDescriptor(a,b,"get");return _classApplyDescriptorGet(a,c)}function _classApplyDescriptorGet(a,b){return b.get?b.get.call(a):b.value}function _classPrivateFieldSet(a,b,c){var d=_classExtractFieldDescriptor(a,b,"set");return _classApplyDescriptorSet(a,d,c),c}function _classExtractFieldDescriptor(a,b,c){if(!b.has(a))throw new TypeError("attempted to "+c+" private field on non-instance");return b.get(a)}function _classApplyDescriptorSet(a,b,c){if(b.set)b.set.call(a,c);else{if(!b.writable)throw new TypeError("attempted to set read only private field");b.value=c}}const ClientType=_proto.types.ClientType,BusMessage=_proto.cilix.BusMessage;let instance,clientType=ClientType.WEBAPP,clientName="client";const observable=new _observable_connection.Observable;var _expiryTimer=/*#__PURE__*/new WeakMap,_onMessage=/*#__PURE__*/new WeakSet,_getClientTypeAsString=/*#__PURE__*/new WeakSet,_sendPreview=/*#__PURE__*/new WeakSet,_onCameraListRequest=/*#__PURE__*/new WeakSet,_onCameraListResponse=/*#__PURE__*/new WeakSet,_onClientConnected=/*#__PURE__*/new WeakSet,_onClientDisconnected=/*#__PURE__*/new WeakSet,_onRuntimeConfigRequest=/*#__PURE__*/new WeakSet,_onStopRequest=/*#__PURE__*/new WeakSet,_onPreviewRequest=/*#__PURE__*/new WeakSet,_onPreviewResponse=/*#__PURE__*/new WeakSet,_onStartRequest=/*#__PURE__*/new WeakSet,_onCornersReceived=/*#__PURE__*/new WeakSet,_onIPSAResponse=/*#__PURE__*/new WeakSet,_onTooManyPublishers=/*#__PURE__*/new WeakSet,_onRecordingStarted=/*#__PURE__*/new WeakSet,_onRecordingStopped=/*#__PURE__*/new WeakSet,_callSubscribers=/*#__PURE__*/new WeakSet;class EventBusConnection extends _observable_connection.ObservableRetryConnection{static getInstance(){return instance||(instance=new EventBusConnection),instance}static addEventListener(a){return observable.addEventListener(a)}static removeEventListener(a){observable.removeEventListener(a)}static setClientName(a){clientName=a}static setClientType(a){clientType=a}constructor(){super("eventbus-".concat(clientName)),_classPrivateMethodInitSpec(this,_callSubscribers),_classPrivateMethodInitSpec(this,_onRecordingStopped),_classPrivateMethodInitSpec(this,_onRecordingStarted),_classPrivateMethodInitSpec(this,_onTooManyPublishers),_classPrivateMethodInitSpec(this,_onIPSAResponse),_classPrivateMethodInitSpec(this,_onCornersReceived),_classPrivateMethodInitSpec(this,_onStartRequest),_classPrivateMethodInitSpec(this,_onPreviewResponse),_classPrivateMethodInitSpec(this,_onPreviewRequest),_classPrivateMethodInitSpec(this,_onStopRequest),_classPrivateMethodInitSpec(this,_onRuntimeConfigRequest),_classPrivateMethodInitSpec(this,_onClientDisconnected),_classPrivateMethodInitSpec(this,_onClientConnected),_classPrivateMethodInitSpec(this,_onCameraListResponse),_classPrivateMethodInitSpec(this,_onCameraListRequest),_classPrivateMethodInitSpec(this,_sendPreview),_classPrivateMethodInitSpec(this,_getClientTypeAsString),_classPrivateMethodInitSpec(this,_onMessage),_classPrivateFieldInitSpec(this,_expiryTimer,{writable:!0,value:void 0}),this.observable=observable,this.userToken=null,_classPrivateFieldSet(this,_expiryTimer,null)}async stop(){clearTimeout(_classPrivateFieldGet(this,_expiryTimer)),super.stop()}async write(a){_index.logger.debug("".concat(this.name,".write: "),BusMessage.toObject(a));let b=BusMessage.encode(a).finish();return super.write(b)}writeObject(a){let b=BusMessage.verify(a);if(b)throw new Error(b);let c=BusMessage.fromObject(a);return this.write(c)}async getURI(){try{this.userToken=await(0,_auth.getUserToken)(),this.userClaims=new _types.UserClaims(this.userToken);let a=this.userClaims.getSecondsUntilExpiry();if(0>=a){let a=new _exceptions.PermissionDeniedError("user token expired");throw this.onError(a),a}_classPrivateFieldSet(this,_expiryTimer,setTimeout(()=>{this.onError(new _exceptions.SessionTimeoutError("user token expired"))},a))}catch(a){let b=new _exceptions.PermissionDeniedError(a);throw this.onError(b),b}let a=new URL(_config.Config.apiBaseURL),b=_classPrivateMethodGet(this,_getClientTypeAsString,_getClientTypeAsString2).call(this,clientType);return"wss://".concat(a.host,"/ws/eventbus/").concat(b,"?user_token=").concat(this.userToken,"&name=").concat(clientName)}onData(a){try{if(a instanceof ArrayBuffer){let b=new Uint8Array(a),c=BusMessage.decode(b);return b=null,_index.logger.debug("".concat(this.name,".read: "),c),void _classPrivateMethodGet(this,_onMessage,_onMessage2).call(this,c)}}catch(a){_index.logger.error(a)}this.parseJSONResponse(a)}stopStream(a){return this.writeObject({stopRequest:{},dst:{id:a}})}stopAllStreams(){return this.writeObject({stopRequest:{}})}startStream(a){let{config:b,runtimeConfig:c,camera:d,clientId:e,meetingToken:f}=a;return this.writeObject({startRequest:{config:b,runtimeConfig:c,camera:d,meetingToken:f},dst:{id:e}})}requestCameraPreview(a,b){return this.writeObject({previewRequest:{source:{id:b}},dst:{id:a}})}setRuntimeConfig(a,b){return this.writeObject({runtimeConfigRequest:b,dst:{id:a}})}getCameraList(a){return this.writeObject({cameraListRequest:{},dst:{id:a}})}sendCameraList(a,b,c){return this.writeObject({cameraListResponse:{items:a},src:b,dst:c})}getClientStatusList(){return this.writeObject({clientStatusRequest:{}})}}exports.EventBusConnection=EventBusConnection;async function _onMessage2(a){if(a&&"object"==typeof a)try{a.clientConnected&&_classPrivateMethodGet(this,_onClientConnected,_onClientConnected2).call(this,a),a.clientDisconnected&&_classPrivateMethodGet(this,_onClientDisconnected,_onClientDisconnected2).call(this,a),a.cameraListRequest&&_classPrivateMethodGet(this,_onCameraListRequest,_onCameraListRequest2).call(this,a),a.cameraListResponse&&_classPrivateMethodGet(this,_onCameraListResponse,_onCameraListResponse2).call(this,a),a.runtimeConfigRequest&&_classPrivateMethodGet(this,_onRuntimeConfigRequest,_onRuntimeConfigRequest2).call(this,a),a.startRequest&&_classPrivateMethodGet(this,_onStartRequest,_onStartRequest2).call(this,a),a.stopRequest&&_classPrivateMethodGet(this,_onStopRequest,_onStopRequest2).call(this,a),a.previewRequest&&_classPrivateMethodGet(this,_onPreviewRequest,_onPreviewRequest2).call(this,a),a.previewResponse&&_classPrivateMethodGet(this,_onPreviewResponse,_onPreviewResponse2).call(this,a),a.ipsaResponse&&_classPrivateMethodGet(this,_onIPSAResponse,_onIPSAResponse2).call(this,a),a.tooManyPublishers&&_classPrivateMethodGet(this,_onTooManyPublishers,_onTooManyPublishers2).call(this,a),a.recordingStarted&&_classPrivateMethodGet(this,_onRecordingStarted,_onRecordingStarted2).call(this,a),a.recordingStopped&&_classPrivateMethodGet(this,_onRecordingStopped,_onRecordingStopped2).call(this,a)}catch(a){_index.logger.error(a)}}function _getClientTypeAsString2(a){let b=Object.entries(ClientType).find(b=>{let[c,d]=b;return d==a});if(!b)throw new _exceptions.InvalidArgumentError("Invalid client type: ".concat(a));let c=b[0].toLowerCase();return c}function _sendPreview2(a,b){this.writeObject({previewResponse:{image:a},dst:b})}async function _onCameraListRequest2(a){let b=await _classPrivateMethodGet(this,_callSubscribers,_callSubscribers2).call(this,"onCameraListRequest",a.cameraListRequest);this.sendCameraList(b,a.dst,a.src)}function _onCameraListResponse2(a){observable.notify("onCameraListResponse",a.cameraListResponse)}function _onClientConnected2(a){_index.logger.info("".concat(this.name,": client connected: "),a.src),observable.notify("onClientConnected",a.src)}function _onClientDisconnected2(a){_index.logger.warn("".concat(this.name,": client disconnected: "),a.src),observable.notify("onClientDisconnected",a.src)}function _onRuntimeConfigRequest2(a){observable.notify("onRuntimeConfigRequest",a.runtimeConfigRequest)}function _onStopRequest2(a){observable.notify("onStopRequest",a.stopRequest)}async function _onPreviewRequest2(a){let b=await _classPrivateMethodGet(this,_callSubscribers,_callSubscribers2).call(this,"onPreviewRequest",a.previewRequest);_classPrivateMethodGet(this,_sendPreview,_sendPreview2).call(this,b,a.src)}function _onPreviewResponse2(a){observable.notify("onPreviewResponse",a.previewResponse)}function _onStartRequest2(a){var b,c;let d=a.startRequest;!(null!==d&&void 0!==d&&null!==(b=d.camera)&&void 0!==b&&b.id)&&null!==d&&void 0!==d&&null!==(c=d.inputSource)&&void 0!==c&&c.id&&(d.camera={id:d.inputSource.id}),observable.notify("onStartRequest",d)}function _onCornersReceived2(a){observable.notify("onCornersReceived",a.corners.corners)}function _onIPSAResponse2(a){a&&observable.notify("onIPSAResponse",a.ipsaResponse)}function _onTooManyPublishers2(a){observable.notify("onTooManyPublishers",a.tooManyPublishers)}function _onRecordingStarted2(a){observable.notify("onRecordingStarted",a.recordingStarted)}function _onRecordingStopped2(a){observable.notify("onRecordingStopped",a.recordingStopped)}function _callSubscribers2(a){for(var b=arguments.length,c=Array(1<b?b-1:0),d=1;d<b;d++)c[d-1]=arguments[d];let e=[...observable.observers].map(b=>{let[c,d]=b;return d[a]}).filter(a=>a!==void 0).map(a=>a(...c));return Promise.any(e)}