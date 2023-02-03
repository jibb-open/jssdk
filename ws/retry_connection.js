"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.RetryConnection=void 0,require("core-js/modules/web.dom-collections.iterator.js");var _exceptions=require("../types/exceptions.js"),_index=require("../utils/logger/index.js"),_connection_base=require("./connection_base.js");function _classPrivateMethodInitSpec(a,b){_checkPrivateRedeclaration(a,b),b.add(a)}function _classPrivateFieldInitSpec(a,b,c){_checkPrivateRedeclaration(a,b),b.set(a,c)}function _checkPrivateRedeclaration(a,b){if(b.has(a))throw new TypeError("Cannot initialize the same private elements twice on an object")}function _classPrivateFieldGet(a,b){var c=_classExtractFieldDescriptor(a,b,"get");return _classApplyDescriptorGet(a,c)}function _classApplyDescriptorGet(a,b){return b.get?b.get.call(a):b.value}function _classPrivateMethodGet(a,b,c){if(!b.has(a))throw new TypeError("attempted to get private field on non-instance");return c}function _classPrivateFieldSet(a,b,c){var d=_classExtractFieldDescriptor(a,b,"set");return _classApplyDescriptorSet(a,d,c),c}function _classExtractFieldDescriptor(a,b,c){if(!b.has(a))throw new TypeError("attempted to "+c+" private field on non-instance");return b.get(a)}function _classApplyDescriptorSet(a,b,c){if(b.set)b.set.call(a,c);else{if(!b.writable)throw new TypeError("attempted to set read only private field");b.value=c}}var _started=/*#__PURE__*/new WeakMap,_connectionTimer=/*#__PURE__*/new WeakMap,_resetCountersTimer=/*#__PURE__*/new WeakMap,_reconnect=/*#__PURE__*/new WeakSet,_resetCounters=/*#__PURE__*/new WeakSet;class RetryConnection extends _connection_base.ConnectionBase{constructor(a){let b=1<arguments.length&&arguments[1]!==void 0?arguments[1]:{maxRetryCount:10,minRetryIntervalMs:500,maxRetryIntervalMs:32e3};super(a),_classPrivateMethodInitSpec(this,_resetCounters),_classPrivateMethodInitSpec(this,_reconnect),_classPrivateFieldInitSpec(this,_started,{writable:!0,value:void 0}),_classPrivateFieldInitSpec(this,_connectionTimer,{writable:!0,value:void 0}),_classPrivateFieldInitSpec(this,_resetCountersTimer,{writable:!0,value:void 0}),this.maxRetryCount=b.maxRetryCount||10,this.minRetryIntervalMs=b.minRetryIntervalMs||500,this.maxRetryIntervalMs=b.maxRetryIntervalMs||32e3,_classPrivateFieldSet(this,_connectionTimer,null),_classPrivateFieldSet(this,_resetCountersTimer,null),_classPrivateFieldSet(this,_started,!1),_classPrivateMethodGet(this,_resetCounters,_resetCounters2).call(this)}start(){this.isStarted()||(_index.logger.info("".concat(this.name,": starting...")),_classPrivateFieldSet(this,_started,!0),_classPrivateMethodGet(this,_resetCounters,_resetCounters2).call(this),_classPrivateMethodGet(this,_reconnect,_reconnect2).call(this),this.onStarted())}stop(){_index.logger.info("".concat(this.name,": stopping...")),_classPrivateFieldSet(this,_started,!1),this.disconnect(),this.onStopped()}isStarted(){return _classPrivateFieldGet(this,_started)}onDisconnected(){super.onDisconnected(),_classPrivateMethodGet(this,_reconnect,_reconnect2).call(this)}onStarted(){}onStopped(){}onError(a){super.onError(a),(a instanceof _exceptions.TooManyConnectionsError||a instanceof _exceptions.PermissionDeniedError||a instanceof _exceptions.SessionTimeoutError)&&this.stop()}disconnect(){clearTimeout(_classPrivateFieldGet(this,_connectionTimer)),clearTimeout(_classPrivateFieldGet(this,_resetCountersTimer)),super.disconnect()}}exports.RetryConnection=RetryConnection;function _reconnect2(){if(this.isStarted()){if(this.retryCount>this.maxRetryCount)return void this.stop();let a=Math.max(this.nexRetryTime-Date.now(),0);0<a&&(_index.logger.debug(this),_index.logger.info("".concat(this.name,": retrying connection in ").concat(this.retryIntervalMs,"ms]"))),clearTimeout(_classPrivateFieldGet(this,_resetCountersTimer)),this.retryIntervalMs=Math.min(2*this.retryIntervalMs,this.maxRetryIntervalMs),++this.retryCount,this.nexRetryTime=Date.now()+this.retryIntervalMs,_classPrivateFieldSet(this,_connectionTimer,setTimeout(()=>{this.connect().catch(a=>{this.onError(a)})},a)),_classPrivateFieldSet(this,_resetCountersTimer,setTimeout(()=>{_classPrivateMethodGet(this,_resetCounters,_resetCounters2).call(this)},6e4))}}function _resetCounters2(){this.retryCount=0,this.retryIntervalMs=this.minRetryIntervalMs,this.nexRetryTime=Date.now()}