"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.IPSA=void 0,require("core-js/modules/es.promise.js"),require("core-js/modules/web.dom-collections.iterator.js"),require("core-js/modules/web.url.js"),require("core-js/modules/web.url-search-params.js"),require("core-js/modules/es.array.reduce.js"),require("core-js/modules/es.array-buffer.constructor.js"),require("core-js/modules/es.array-buffer.slice.js"),require("core-js/modules/es.typed-array.uint8-array.js"),require("core-js/modules/es.typed-array.fill.js"),require("core-js/modules/es.typed-array.set.js"),require("core-js/modules/es.typed-array.sort.js"),require("core-js/modules/es.typed-array.to-locale-string.js");var _config=require("../config.js"),_index=require("../utils/logger/index.js"),_retry_connection=require("./retry_connection.js"),_connection_base=require("./connection_base.js"),_types=require("../types/types.js"),_proto=require("../types/proto.js");function _classPrivateMethodInitSpec(a,b){_checkPrivateRedeclaration(a,b),b.add(a)}function _classPrivateFieldInitSpec(a,b,c){_checkPrivateRedeclaration(a,b),b.set(a,c)}function _checkPrivateRedeclaration(a,b){if(b.has(a))throw new TypeError("Cannot initialize the same private elements twice on an object")}function _classPrivateFieldGet(a,b){var c=_classExtractFieldDescriptor(a,b,"get");return _classApplyDescriptorGet(a,c)}function _classApplyDescriptorGet(a,b){return b.get?b.get.call(a):b.value}function _classPrivateMethodGet(a,b,c){if(!b.has(a))throw new TypeError("attempted to get private field on non-instance");return c}function _classPrivateFieldSet(a,b,c){var d=_classExtractFieldDescriptor(a,b,"set");return _classApplyDescriptorSet(a,d,c),c}function _classExtractFieldDescriptor(a,b,c){if(!b.has(a))throw new TypeError("attempted to "+c+" private field on non-instance");return b.get(a)}function _classApplyDescriptorSet(a,b,c){if(b.set)b.set.call(a,c);else{if(!b.writable)throw new TypeError("attempted to set read only private field");b.value=c}}const ErrorCode=_proto.types.Code;var _expiryTimer=/*#__PURE__*/new WeakMap,_clear=/*#__PURE__*/new WeakSet,_write=/*#__PURE__*/new WeakSet,_handleMessage=/*#__PURE__*/new WeakSet,_onResponse=/*#__PURE__*/new WeakSet,_writeInputImage=/*#__PURE__*/new WeakSet,_setConfig=/*#__PURE__*/new WeakSet;class IPSAClass extends _retry_connection.RetryConnection{constructor(){super("ipsa"),_classPrivateMethodInitSpec(this,_setConfig),_classPrivateMethodInitSpec(this,_writeInputImage),_classPrivateMethodInitSpec(this,_onResponse),_classPrivateMethodInitSpec(this,_handleMessage),_classPrivateMethodInitSpec(this,_write),_classPrivateMethodInitSpec(this,_clear),_classPrivateFieldInitSpec(this,_expiryTimer,{writable:!0,value:void 0}),this.socket=null,this.onInputImage=null,this.onError=null,this.onResponse=null,this.userToken=null,_classPrivateFieldSet(this,_expiryTimer,null),_classPrivateMethodGet(this,_clear,_clear2).call(this),this.meetingId=null}start(a){let{userToken:b,request:c,onInputImage:d,onError:e,onResponse:f}=a;if(!this.isStarted()){let a=new _types.MeetingClaims(c.config.meetingToken);this.setRuntimeConfig(c.runtimeConfig),_classPrivateMethodGet(this,_setConfig,_setConfig2).call(this,c.config),this.onInputImage=d,this.onError=e,this.onResponse=f,this.userToken=b,this.meetingId=a.meetindId;let g=new _types.UserClaims(this.userToken),h=Math.min(g.getSecondsUntilExpiry(),a.getSecondsUntilExpiry());if(0>=h)return void this.onErrorMessage(ErrorCode.ERR_TIMEOUT,"token expired");_classPrivateFieldSet(this,_expiryTimer,setTimeout(()=>{this.stop(),this.onErrorMessage(ErrorCode.ERR_TIMEOUT,"token expired")},h))}super.start()}stop(){clearTimeout(_classPrivateFieldGet(this,_expiryTimer)),_classPrivateMethodGet(this,_clear,_clear2).call(this),super.stop()}disconnect(){super.disconnect(),null!=this.socket&&(this.socket.close(),this.socket=null)}async connect(){if(this.getConnectionStatus()!=_connection_base.ConnectionStatus.DISCONNECTED)return;super.connect();let a=this.configRequest.config.meetingToken,b=this.meetingId;try{let a=new _types.UserClaims(this.userToken);if(a.isExpired())return void this.onErrorMessage(ErrorCode.ERR_TIMEOUT,"token expired")}catch(a){return void this.onErrorMessage(ErrorCode.ERR_UNAUTHORIZED,"unauthorized")}_index.logger.info("Connecting IPSA to meeting ".concat(b,"..."));let c=new URL(_config.Config.apiBaseURL),d="wss://".concat(c.hostname,"/ws/ipsa/").concat(b,"?user_token=").concat(this.userToken,"&meeting_token=").concat(a);this.socket=new WebSocket(d),this.socket.binaryType="arraybuffer",this.socket.addEventListener("open",async()=>{try{await _classPrivateMethodGet(this,_write,_write2).call(this,this.configRequest),await _classPrivateMethodGet(this,_write,_write2).call(this,this.runtimeConfigRequest),this.onConnected()}catch(a){return this.onWarningMessage(ErrorCode.ERR_IO,a),void this.disconnect()}let a=()=>{this.isConnected()&&this.isStarted()&&(0<this.socket.bufferedAmount?(_index.logger.warn("ipsa: low internet speed connection"),setTimeout(a,100)):(setTimeout(a,500),_classPrivateMethodGet(this,_writeInputImage,_writeInputImage2).call(this).catch(a=>_index.logger.error(a))))};a()}),this.socket.addEventListener("close",()=>{this.onDisconnected()}),this.socket.addEventListener("message",a=>{_classPrivateMethodGet(this,_handleMessage,_handleMessage2).call(this,a.data)}),this.socket.addEventListener("error",a=>{this.onWarningMessage(ErrorCode.ERR_IO,a)})}getAverageResponseTime(){let a=NaN;try{let b=Array.from(this.stats.values()).map(a=>a.responseTime-a.requestTime).filter(a=>!isNaN(a)),c=b.reduce((c,a)=>c+a);a=c/b.length}catch(a){}return a}setRuntimeConfig(a){let b=_proto.ipsa.Request.create({runtimeConfig:a});this.runtimeConfigRequest=b,this.isConnected()&&_classPrivateMethodGet(this,_write,_write2).call(this,b)}}function _clear2(){this.configRequest=null,this.runtimeConfigRequest=null,this.stats=new Map,this.requestId=0}async function _write2(a){let b=_proto.ipsa.Request.verify(a);if(b)throw new Error("invalid message: "+b);if(a){let b=_proto.ipsa.Request.encode(a).finish();this.socket.send(b)}}async function _handleMessage2(a){var b,c,d,e;try{if(a instanceof ArrayBuffer){let b=new Uint8Array(a),c=_proto.ipsa.Response.decode(b);return void _classPrivateMethodGet(this,_onResponse,_onResponse2).call(this,c)}}catch(a){_index.logger.error(a)}try{switch(a=JSON.parse(a),a.code){case ErrorCode.ERR_TOO_MANY_CONNECTIONS:case ErrorCode.ERR_UNAUTHORIZED:case ErrorCode.ERR_BAD_REQUEST:this.onErrorMessage(null===(b=a)||void 0===b?void 0:b.code,null===(c=a)||void 0===c?void 0:c.reason),this.stop();break;default:this.onInfoMessage(null===(d=a)||void 0===d?void 0:d.code,null===(e=a)||void 0===e?void 0:e.reason);}}catch(a){this.onWarningMessage(ErrorCode.ERR_IO,a)}}function _onResponse2(a){if(100<=a.id){let b=a.id-100,c=this.stats.get(b)||{};c.responseTime=performance.now(),this.stats.set(b,c)}this.onResponse&&this.onResponse(a)}async function _writeInputImage2(){let a=await this.onInputImage();this.requestId=(this.requestId+1)%8,this.stats.set(this.requestId,{requestTime:performance.now()});let b=_proto.ipsa.Request.create({id:this.requestId+100,ipsa:{data:a}});_classPrivateMethodGet(this,_write,_write2).call(this,b)}function _setConfig2(a){let b=_proto.ipsa.Request.create({config:a});this.configRequest=b,this.isConnected()&&_classPrivateMethodGet(this,_write,_write2).call(this,b)}let IPSA=new IPSAClass;exports.IPSA=IPSA;