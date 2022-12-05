"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.EventBusConnection=void 0,require("core-js/modules/web.dom-collections.iterator.js"),require("core-js/modules/es.promise.js"),require("core-js/modules/web.url.js"),require("core-js/modules/web.url-search-params.js"),require("core-js/modules/es.array-buffer.constructor.js"),require("core-js/modules/es.array-buffer.slice.js"),require("core-js/modules/es.typed-array.uint8-array.js"),require("core-js/modules/es.typed-array.fill.js"),require("core-js/modules/es.typed-array.set.js"),require("core-js/modules/es.typed-array.sort.js"),require("core-js/modules/es.typed-array.to-locale-string.js");var _config=require("../config.js"),_index=require("../utils/logger/index.js"),_exceptions=require("../types/exceptions.js"),_retry_connection=require("./retry_connection.js"),_connection_base=require("./connection_base.js"),_types=require("../types/types.js"),_proto=require("../types/proto.js"),_auth=require("../api/auth.js");function _defineProperty(a,b,c){return b in a?Object.defineProperty(a,b,{value:c,enumerable:!0,configurable:!0,writable:!0}):a[b]=c,a}function _classPrivateMethodInitSpec(a,b){_checkPrivateRedeclaration(a,b),b.add(a)}function _classPrivateFieldInitSpec(a,b,c){_checkPrivateRedeclaration(a,b),b.set(a,c)}function _checkPrivateRedeclaration(a,b){if(b.has(a))throw new TypeError("Cannot initialize the same private elements twice on an object")}function _classPrivateMethodGet(a,b,c){if(!b.has(a))throw new TypeError("attempted to get private field on non-instance");return c}function _classPrivateFieldGet(a,b){var c=_classExtractFieldDescriptor(a,b,"get");return _classApplyDescriptorGet(a,c)}function _classApplyDescriptorGet(a,b){return b.get?b.get.call(a):b.value}function _classPrivateFieldSet(a,b,c){var d=_classExtractFieldDescriptor(a,b,"set");return _classApplyDescriptorSet(a,d,c),c}function _classExtractFieldDescriptor(a,b,c){if(!b.has(a))throw new TypeError("attempted to "+c+" private field on non-instance");return b.get(a)}function _classApplyDescriptorSet(a,b,c){if(b.set)b.set.call(a,c);else{if(!b.writable)throw new TypeError("attempted to set read only private field");b.value=c}}const ClientType=_proto.types.ClientType,ErrorCode=_proto.types.Code,BusMessage=_proto.cilix.BusMessage;function getClientNameByType(a){let b=Object.entries(ClientType).find(b=>{let[c,d]=b;return d==a});if(!b)throw new _exceptions.InvalidArgumentError("Invalid client type: ".concat(a));let c=b[0].toLowerCase();return c}var _expiryTimer=/*#__PURE__*/new WeakMap,_handleMessage=/*#__PURE__*/new WeakSet;class WSConnection extends _retry_connection.RetryConnection{constructor(a,b){let c=getClientNameByType(a).toLowerCase();super("eventbus-".concat(c)),_classPrivateMethodInitSpec(this,_handleMessage),_classPrivateFieldInitSpec(this,_expiryTimer,{writable:!0,value:void 0}),this.clientType=a,this.socket=null,this.userToken=null,this.clientName=c,this.name=b,_classPrivateFieldSet(this,_expiryTimer,null)}async start(){this.userToken=await _auth.Auth.getUserToken(),this.userClaims=new _types.UserClaims(this.userToken);let a=this.userClaims.getSecondsUntilExpiry();return 0>=a?void this.onErrorMessage(ErrorCode.ERR_TIMEOUT,"token expired"):void(_classPrivateFieldSet(this,_expiryTimer,setTimeout(()=>{this.stop(),this.onErrorMessage(ErrorCode.ERR_TIMEOUT,"token expired")},a)),super.start())}async stop(){clearTimeout(_classPrivateFieldGet(this,_expiryTimer)),super.stop()}disconnect(){null!=this.socket&&(this.socket.close(),this.socket=null,_index.logger.info("eventbus disconnect ",this.clientName)),super.disconnect()}async write(a){await super.waitForConnection(),_index.logger.debug("".concat(this.getName(),".write: "),BusMessage.toObject(a));let b=BusMessage.encode(a).finish();this.socket.send(b)}writeObject(a){let b=BusMessage.verify(a);if(b)throw new Error(b);let c=BusMessage.fromObject(a);return this.write(c)}async connect(){if(this.getConnectionStatus()!=_connection_base.ConnectionStatus.DISCONNECTED)return;super.connect();let a=this;try{let b=new _types.UserClaims(this.userToken);if(b.isExpired())return void a.onErrorMessage(ErrorCode.ERR_TIMEOUT,"token expired")}catch(b){return _index.logger.error(e),void a.onErrorMessage(ErrorCode.ERR_UNAUTHORIZED,"unauthorized")}let b=new URL(_config.Config.apiBaseURL),c="wss://".concat(b.hostname,"/ws/eventbus/").concat(this.clientName,"?user_token=").concat(this.userToken,"&name=").concat(this.name);this.socket=new WebSocket(c),this.socket.binaryType="arraybuffer",this.socket.addEventListener("open",()=>{a.onConnected()}),this.socket.addEventListener("close",()=>{a.onDisconnected()}),this.socket.addEventListener("message",b=>{_classPrivateMethodGet(a,_handleMessage,_handleMessage2).call(a,b.data)}),this.socket.addEventListener("error",b=>{a.onWarningMessage(ErrorCode.ERR_IO,b)})}onMessage(a){_index.logger.debug(a)}}async function _handleMessage2(a){try{if(a instanceof ArrayBuffer){let b=new Uint8Array(a),c=BusMessage.decode(b);return b=null,_index.logger.debug("".concat(this.getName(),".read: "),c),void this.onMessage(c)}}catch(a){_index.logger.error(a)}try{let b=JSON.parse(a);switch(b.code){case ErrorCode.ERR_TOO_MANY_CONNECTIONS:case ErrorCode.ERR_UNAUTHORIZED:case ErrorCode.ERR_BAD_REQUEST:case ErrorCode.ERR_TIMEOUT:this.onErrorMessage(b.code,b.reason);break;default:this.onInfoMessage(b.code,b.reason);}}catch(a){this.onWarningMessage(ErrorCode.ERR_IO,a)}}var _sendPreview=/*#__PURE__*/new WeakSet,_onCameraListRequest=/*#__PURE__*/new WeakSet,_onCameraListResponse=/*#__PURE__*/new WeakSet,_onClientConnected=/*#__PURE__*/new WeakSet,_onClientDisconnected=/*#__PURE__*/new WeakSet,_onRuntimeConfigRequest=/*#__PURE__*/new WeakSet,_onStopRequest=/*#__PURE__*/new WeakSet,_onPreviewRequest=/*#__PURE__*/new WeakSet,_onPreviewResponse=/*#__PURE__*/new WeakSet,_onStartRequest=/*#__PURE__*/new WeakSet,_onCornersReceived=/*#__PURE__*/new WeakSet,_onIPSAResponse=/*#__PURE__*/new WeakSet,_onTooManyPublishers=/*#__PURE__*/new WeakSet,_onRecordingStarted=/*#__PURE__*/new WeakSet,_onRecordingStopped=/*#__PURE__*/new WeakSet;class EventBusConnection extends WSConnection{static getInstance(){let a=0<arguments.length&&void 0!==arguments[0]?arguments[0]:ClientType.WEBAPP,b=1<arguments.length&&void 0!==arguments[1]?arguments[1]:"",d=EventBusConnection.instances.get(a);return d||(d=new EventBusConnection(a,b),EventBusConnection.instances.set(a,d)),d}constructor(){let a=0<arguments.length&&arguments[0]!==void 0?arguments[0]:ClientType.WEBAPP,b=1<arguments.length&&arguments[1]!==void 0?arguments[1]:"";super(a,b),_classPrivateMethodInitSpec(this,_onRecordingStopped),_classPrivateMethodInitSpec(this,_onRecordingStarted),_classPrivateMethodInitSpec(this,_onTooManyPublishers),_classPrivateMethodInitSpec(this,_onIPSAResponse),_classPrivateMethodInitSpec(this,_onCornersReceived),_classPrivateMethodInitSpec(this,_onStartRequest),_classPrivateMethodInitSpec(this,_onPreviewResponse),_classPrivateMethodInitSpec(this,_onPreviewRequest),_classPrivateMethodInitSpec(this,_onStopRequest),_classPrivateMethodInitSpec(this,_onRuntimeConfigRequest),_classPrivateMethodInitSpec(this,_onClientDisconnected),_classPrivateMethodInitSpec(this,_onClientConnected),_classPrivateMethodInitSpec(this,_onCameraListResponse),_classPrivateMethodInitSpec(this,_onCameraListRequest),_classPrivateMethodInitSpec(this,_sendPreview)}async onMessage(a){if(a&&"object"==typeof a)try{a.clientConnected&&_classPrivateMethodGet(this,_onClientConnected,_onClientConnected2).call(this,a),a.clientDisconnected&&_classPrivateMethodGet(this,_onClientDisconnected,_onClientDisconnected2).call(this,a),a.cameraListRequest&&_classPrivateMethodGet(this,_onCameraListRequest,_onCameraListRequest2).call(this,a),a.cameraListResponse&&_classPrivateMethodGet(this,_onCameraListResponse,_onCameraListResponse2).call(this,a),a.runtimeConfigRequest&&_classPrivateMethodGet(this,_onRuntimeConfigRequest,_onRuntimeConfigRequest2).call(this,a),a.startRequest&&_classPrivateMethodGet(this,_onStartRequest,_onStartRequest2).call(this,a),a.stopRequest&&_classPrivateMethodGet(this,_onStopRequest,_onStopRequest2).call(this,a),a.previewRequest&&_classPrivateMethodGet(this,_onPreviewRequest,_onPreviewRequest2).call(this,a),a.previewResponse&&_classPrivateMethodGet(this,_onPreviewResponse,_onPreviewResponse2).call(this,a),a.ipsaResponse&&_classPrivateMethodGet(this,_onIPSAResponse,_onIPSAResponse2).call(this,a),a.tooManyPublishers&&_classPrivateMethodGet(this,_onTooManyPublishers,_onTooManyPublishers2).call(this,a),a.recordingStarted&&_classPrivateMethodGet(this,_onRecordingStarted,_onRecordingStarted2).call(this,a),a.recordingStopped&&_classPrivateMethodGet(this,_onRecordingStopped,_onRecordingStopped2).call(this,a)}catch(a){_index.logger.error(a)}}stopStream(a){return this.writeObject({stopRequest:{},dst:{id:a}})}stopAllStreams(){return this.writeObject({stopRequest:{}})}startStream(a){let{config:b,runtimeConfig:c,camera:d,sipUri:f,clientId:g}=a;return this.writeObject({startRequest:{config:b,runtimeConfig:c,camera:d,sipUri:f},dst:{id:g}})}requestCameraPreview(a,b){return this.writeObject({previewRequest:{source:{id:b}},dst:{id:a}})}setRuntimeConfig(a,b){return this.writeObject({runtimeConfigRequest:b,dst:{id:a}})}getCameraList(a){return this.write({cameraListRequest:{},dst:{id:a}})}sendCameraList(a,b,c){return this.writeObject({cameraListResponse:{items:a},src:b,dst:c})}getClientStatusList(){return this.writeObject({clientStatusRequest:{}})}}exports.EventBusConnection=EventBusConnection;function _sendPreview2(a,b){return this.write({previewResponse:{image:a},dst:b})}async function _onCameraListRequest2(a){let b=await this.callSubscribers("onCameraListRequest",a.cameraListRequest);this.sendCameraList(b,a.dst,a.src)}function _onCameraListResponse2(a){this.notify("onCameraListResponse",a.cameraListResponse)}function _onClientConnected2(a){_index.logger.info("".concat(this.getName(),": client connected: "),a.src),this.notify("onClientConnected",a.src)}function _onClientDisconnected2(a){_index.logger.warn("".concat(this.getName(),": client disconnected: "),a.src),this.notify("onClientDisconnected",a.src)}function _onRuntimeConfigRequest2(a){this.notify("onRuntimeConfigRequest",a.runtimeConfigRequest)}function _onStopRequest2(a){this.notify("onStopRequest",a.stopRequest)}async function _onPreviewRequest2(a){let b=await this.callSubscribers("onPreviewRequest",a.previewRequest);_classPrivateMethodGet(this,_sendPreview,_sendPreview2).call(this,b,a.src)}function _onPreviewResponse2(a){this.notify("onPreviewResponse",a.previewResponse)}function _onStartRequest2(a){var b,c;let d=a.startRequest;null!==d&&void 0!==d&&null!==(b=d.camera)&&void 0!==b&&b.id||null!==d&&void 0!==d&&d.sipUri||null===d||void 0===d||null===(c=d.inputSource)||void 0===c||!c.id||(d.camera={id:d.inputSource.id}),this.notify("onStartRequest",d)}function _onCornersReceived2(a){this.notify("onCornersReceived",a.corners.corners)}function _onIPSAResponse2(a){a&&this.notify("onIPSAResponse",a.ipsaResponse)}function _onTooManyPublishers2(a){this.notify("onTooManyPublishers",a.tooManyPublishers)}function _onRecordingStarted2(a){this.notify("onRecordingStarted",a.recordingStarted)}function _onRecordingStopped2(a){this.notify("onRecordingStopped",a.recordingStopped)}_defineProperty(EventBusConnection,"instances",new Map);