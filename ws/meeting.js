"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.MeetingConnection=void 0,require("core-js/modules/es.global-this.js"),require("core-js/modules/es.promise.js"),require("core-js/modules/web.dom-collections.iterator.js"),require("core-js/modules/web.url.js"),require("core-js/modules/web.url-search-params.js"),require("core-js/modules/es.array-buffer.constructor.js"),require("core-js/modules/es.array-buffer.slice.js"),require("core-js/modules/es.typed-array.uint8-array.js"),require("core-js/modules/es.typed-array.fill.js"),require("core-js/modules/es.typed-array.set.js"),require("core-js/modules/es.typed-array.sort.js"),require("core-js/modules/es.typed-array.to-locale-string.js"),require("core-js/modules/es.weak-map.js");var _auth=require("../api/auth.js"),_config=require("../config.js"),_index=require("../utils/logger/index.js"),_types=require("../types/types.js"),_proto=require("../types/proto.js"),_exceptions=require("../types/exceptions.js"),_observable_connection=require("./observable_connection.js");function _classPrivateMethodInitSpec(a,b){_checkPrivateRedeclaration(a,b),b.add(a)}function _classPrivateFieldInitSpec(a,b,c){_checkPrivateRedeclaration(a,b),b.set(a,c)}function _checkPrivateRedeclaration(a,b){if(b.has(a))throw new TypeError("Cannot initialize the same private elements twice on an object")}function _classPrivateMethodGet(a,b,c){if(!b.has(a))throw new TypeError("attempted to get private field on non-instance");return c}function _classPrivateFieldGet(a,b){var c=_classExtractFieldDescriptor(a,b,"get");return _classApplyDescriptorGet(a,c)}function _classApplyDescriptorGet(a,b){return b.get?b.get.call(a):b.value}function _classPrivateFieldSet(a,b,c){var d=_classExtractFieldDescriptor(a,b,"set");return _classApplyDescriptorSet(a,d,c),c}function _classExtractFieldDescriptor(a,b,c){if(!b.has(a))throw new TypeError("attempted to "+c+" private field on non-instance");return b.get(a)}function _classApplyDescriptorSet(a,b,c){if(b.set)b.set.call(a,c);else{if(!b.writable)throw new TypeError("attempted to set read only private field");b.value=c}}function _getRequireWildcardCache(a){if("function"!=typeof WeakMap)return null;var b=new WeakMap,c=new WeakMap;return(_getRequireWildcardCache=function(a){return a?c:b})(a)}function _interopRequireWildcard(a,b){if(!b&&a&&a.__esModule)return a;if(null===a||"object"!=typeof a&&"function"!=typeof a)return{default:a};var c=_getRequireWildcardCache(b);if(c&&c.has(a))return c.get(a);var d={},e=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var f in a)if("default"!=f&&Object.prototype.hasOwnProperty.call(a,f)){var g=e?Object.getOwnPropertyDescriptor(a,f):null;g&&(g.get||g.set)?Object.defineProperty(d,f,g):d[f]=a[f]}return d.default=a,c&&c.set(a,d),d}let Message=_proto.meeting.Message,ErrorCode=_proto.types.Code;(null===globalThis||void 0===globalThis?void 0:globalThis.WebSocket)==null&&Promise.resolve().then(()=>_interopRequireWildcard(require("isomorphic-ws"))).then(a=>{globalThis.WebSocket=a.default}).catch(a=>{console.log(a)});var _expiryTimer=/*#__PURE__*/new WeakMap,_sendImageAck=/*#__PURE__*/new WeakSet;class MeetingConnectionImp extends _observable_connection.ObservableRetryConnection{constructor(){let a=0<arguments.length&&arguments[0]!==void 0?arguments[0]:{maxRetryCount:10,minRetryIntervalMs:500,maxRetryIntervalMs:32e3};super("meeting",a),_classPrivateMethodInitSpec(this,_sendImageAck),_classPrivateFieldInitSpec(this,_expiryTimer,{writable:!0,value:void 0}),this.meetingId=null,this.meetingToken=null,_classPrivateFieldSet(this,_expiryTimer,null)}start(a){this.meetingToken=a,this.meetingClaims=new _types.MeetingClaims(a),this.meetingId=this.meetingClaims.meetindId,this.name="meeting-".concat(this.meetingId);let b=this.meetingClaims.getSecondsUntilExpiry();if(0>=b){let a=new _exceptions.PermissionDeniedError("meeting token expired");throw this.onError(a),a}_classPrivateFieldSet(this,_expiryTimer,setTimeout(()=>{this.stop(),this.onError(new _exceptions.SessionTimeoutError("meeting token expired"))},b)),super.start()}stop(){clearTimeout(_classPrivateFieldGet(this,_expiryTimer)),super.stop()}async getURI(){try{if(this.meetingClaims.isExpired()){let a=new _exceptions.PermissionDeniedError("meeting token expired");throw this.onError(a),a}}catch(a){let b=new _exceptions.PermissionDeniedError(a);throw b}let a=new URL(_config.Config.apiBaseURL);return"wss://"+a.host+"/ws/meetings/"+this.meetingId+"?meeting_token="+this.meetingToken}async onData(a){try{if(a instanceof ArrayBuffer){let b=new Uint8Array(a),c=Message.decode(b);return null!==c&&void 0!==c&&c.update&&(this.notify("onMeetingUpdate",c.update),await _classPrivateMethodGet(this,_sendImageAck,_sendImageAck2).call(this,c.update.userId)),null!==c&&void 0!==c&&c.drawing&&this.notify("onDrawing",c.drawing),void(null!==c&&void 0!==c&&c.pointer?this.notify("onPointer",c):null!==c&&void 0!==c&&c.join?this.notify("onMeetingJoin",c.join):null!==c&&void 0!==c&&c.leave&&this.notify("onMeetingLeave",c.leave))}}catch(a){_index.logger.error(a)}this.parseJSONResponse(a)}async sendPointer(a,b,c){let d="";try{let a=await(0,_auth.getUserClaims)();d=a.email}catch(a){d=c}let e=Message.fromObject({pointer:{email:d,x:a,y:b}}),f=Message.encode(e).finish();await this.write(f)}async sendDrawing(a){let{email:b,data:c}=a,d=Message.fromObject({drawing:{email:b,data:c}});_index.logger.debug("".concat(this.name,".Drawing: "),Message.toObject(d));let e=Message.encode(d).finish();await this.write(e)}}async function _sendImageAck2(a){let b=Message.fromObject({imageAck:{userId:a}}),c=Message.encode(b).finish();await this.write(c)}let MeetingConnection=new MeetingConnectionImp({maxRetryCount:10,minRetryIntervalMs:500,maxRetryIntervalMs:8e3});exports.MeetingConnection=MeetingConnection;