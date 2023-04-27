"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.ConnectionStatus=exports.ConnectionBase=void 0,require("core-js/modules/es.promise.js"),require("core-js/modules/web.dom-collections.iterator.js");var _index=require("../utils/logger/index.js"),_future=require("../utils/future.js"),_proto=require("../types/proto.js"),_exceptions=require("../types/exceptions.js");function _classPrivateFieldInitSpec(a,b,c){_checkPrivateRedeclaration(a,b),b.set(a,c)}function _checkPrivateRedeclaration(a,b){if(b.has(a))throw new TypeError("Cannot initialize the same private elements twice on an object")}function _classPrivateFieldGet(a,b){var c=_classExtractFieldDescriptor(a,b,"get");return _classApplyDescriptorGet(a,c)}function _classApplyDescriptorGet(a,b){return b.get?b.get.call(a):b.value}function _classPrivateFieldSet(a,b,c){var d=_classExtractFieldDescriptor(a,b,"set");return _classApplyDescriptorSet(a,d,c),c}function _classExtractFieldDescriptor(a,b,c){if(!b.has(a))throw new TypeError("attempted to "+c+" private field on non-instance");return b.get(a)}function _classApplyDescriptorSet(a,b,c){if(b.set)b.set.call(a,c);else{if(!b.writable)throw new TypeError("attempted to set read only private field");b.value=c}}const ErrorCode=_proto.types.Code,ConnectionStatus={CONNECTED:"CONNECTED",DISCONNECTED:"DISCONNECTED",CONNECTING:"CONNECTING"};exports.ConnectionStatus=ConnectionStatus;var _connectionStatus=/*#__PURE__*/new WeakMap,_connectionFuture=/*#__PURE__*/new WeakMap,_socket=/*#__PURE__*/new WeakMap;class ConnectionBase{constructor(a){_classPrivateFieldInitSpec(this,_connectionStatus,{writable:!0,value:void 0}),_classPrivateFieldInitSpec(this,_connectionFuture,{writable:!0,value:void 0}),_classPrivateFieldInitSpec(this,_socket,{writable:!0,value:void 0}),this.name=a,_classPrivateFieldSet(this,_connectionStatus,ConnectionStatus.DISCONNECTED),_classPrivateFieldSet(this,_connectionFuture,new _future.Future),_classPrivateFieldGet(this,_connectionFuture).reject("disconnected"),_classPrivateFieldSet(this,_socket,null)}async connect(){if(null==_classPrivateFieldGet(this,_socket)){_index.logger.info("".concat(this.name,": connecting ...")),_classPrivateFieldSet(this,_connectionStatus,ConnectionStatus.CONNECTING),_classPrivateFieldSet(this,_connectionFuture,new _future.Future);let a=await this.getURI();_classPrivateFieldSet(this,_socket,new WebSocket(a)),_classPrivateFieldGet(this,_socket).binaryType="arraybuffer",_classPrivateFieldGet(this,_socket).addEventListener("open",()=>{this.onConnected()}),_classPrivateFieldGet(this,_socket).addEventListener("close",()=>{this.onDisconnected()}),_classPrivateFieldGet(this,_socket).addEventListener("message",a=>{this.onData(a.data)}),_classPrivateFieldGet(this,_socket).addEventListener("error",a=>{this.onError(a)})}}async getURI(){throw new Error("connection.getURI is not implemented")}disconnect(){null!=_classPrivateFieldGet(this,_socket)&&(_classPrivateFieldGet(this,_socket).close(),_classPrivateFieldSet(this,_socket,null),_index.logger.info("connection disconnected: ",this.name))}async write(a){var b,c;await this.waitForConnection(),null===(b=_classPrivateFieldGet(this,_socket))||void 0===b||null===(c=b.send)||void 0===c?void 0:c.call(b,a)}parseJSONResponse(a){try{let{code:b,reason:c}=JSON.parse(a);return b===ErrorCode.ERR_TOO_MANY_CONNECTIONS?this.onError(new _exceptions.TooManyConnectionsError(c)):b===ErrorCode.ERR_UNAUTHORIZED?this.onError(new _exceptions.PermissionDeniedError(c)):b===ErrorCode.ERR_BAD_REQUEST?(this.stop(),this.onError(new _exceptions.InvalidArgumentError(c))):b===ErrorCode.ERR_TIMEOUT?this.onError(new _exceptions.SessionTimeoutError(c)):this.onError(new _exceptions.GenericError(b,c))}catch(a){this.onError(a)}}getBufferedAmount(){return _classPrivateFieldGet(this,_socket)?_classPrivateFieldGet(this,_socket).bufferedAmount:0}onConnected(){_index.logger.info("".concat(this.name,": connected")),_classPrivateFieldSet(this,_connectionStatus,ConnectionStatus.CONNECTED),_classPrivateFieldGet(this,_connectionFuture).set("connected")}onDisconnected(){null!=_classPrivateFieldGet(this,_socket)&&(_classPrivateFieldGet(this,_socket).close(),_classPrivateFieldSet(this,_socket,null),_index.logger.info("connection disconnected: ",this.name)),_index.logger.warn("".concat(this.name,": disconnected")),_classPrivateFieldSet(this,_connectionStatus,ConnectionStatus.DISCONNECTED),_classPrivateFieldGet(this,_connectionFuture).reject("disconnected")}isConnected(){return _classPrivateFieldGet(this,_connectionStatus)==ConnectionStatus.CONNECTED}waitForConnection(){return _classPrivateFieldGet(this,_connectionFuture).get()}getConnectionStatus(){return _classPrivateFieldGet(this,_connectionStatus)}onData(){}onError(a){_index.logger.warn("".concat(this.name,": onError: ").concat(a))}}exports.ConnectionBase=ConnectionBase;