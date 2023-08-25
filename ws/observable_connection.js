"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.ObservableRetryConnection=exports.Observable=void 0,require("core-js/modules/web.dom-collections.iterator.js"),require("core-js/modules/es.weak-map.js");var _index=require("../utils/logger/index.js"),_retry_connection=require("./retry_connection.js");function _classPrivateFieldInitSpec(a,b,c){_checkPrivateRedeclaration(a,b),b.set(a,c)}function _checkPrivateRedeclaration(a,b){if(b.has(a))throw new TypeError("Cannot initialize the same private elements twice on an object")}function _classPrivateFieldGet(a,b){var c=_classExtractFieldDescriptor(a,b,"get");return _classApplyDescriptorGet(a,c)}function _classApplyDescriptorGet(a,b){return b.get?b.get.call(a):b.value}function _classPrivateFieldSet(a,b,c){var d=_classExtractFieldDescriptor(a,b,"set");return _classApplyDescriptorSet(a,d,c),c}function _classExtractFieldDescriptor(a,b,c){if(!b.has(a))throw new TypeError("attempted to "+c+" private field on non-instance");return b.get(a)}function _classApplyDescriptorSet(a,b,c){if(b.set)b.set.call(a,c);else{if(!b.writable)throw new TypeError("attempted to set read only private field");b.value=c}}var _lastId=/*#__PURE__*/new WeakMap;class Observable{constructor(){_classPrivateFieldInitSpec(this,_lastId,{writable:!0,value:void 0}),this.observers=new Map,_classPrivateFieldSet(this,_lastId,0)}addEventListener(a){return _classPrivateFieldSet(this,_lastId,_classPrivateFieldGet(this,_lastId)+1),this.observers.set(_classPrivateFieldGet(this,_lastId),a),_classPrivateFieldGet(this,_lastId)}removeEventListeners(){this.observers=new Map}removeEventListener(a){try{this.observers.delete(a)}catch(a){_index.logger.error(a)}}notify(a){for(var b=arguments.length,c=Array(1<b?b-1:0),d=1;d<b;d++)c[d-1]=arguments[d];this.observers.forEach(b=>{try{let d=b[a];d&&d(...c)}catch(b){_index.logger.error("Error occured notifying event ".concat(a),b)}})}}exports.Observable=Observable;class ObservableRetryConnection extends _retry_connection.RetryConnection{constructor(a){let b=1<arguments.length&&arguments[1]!==void 0?arguments[1]:{maxRetryCount:10,minRetryIntervalMs:500,maxRetryIntervalMs:32e3};super(a,b),this.observable=new Observable}addEventListener(a){return this.observable.addEventListener(a)}removeEventListeners(){this.observable.removeEventListeners()}removeEventListener(a){this.observable.removeEventListener(a)}notify(a){for(var b=arguments.length,c=Array(1<b?b-1:0),d=1;d<b;d++)c[d-1]=arguments[d];this.observable.notify(a,...c)}onDisconnected(){super.onDisconnected(),this.observable.notify("onDisconnected")}onConnected(){super.onConnected(),this.observable.notify("onConnected")}onStarted(){super.onStarted(),this.observable.notify("onStarted")}onStopped(){super.onStopped(),this.observable.notify("onStopped")}onError(a){super.onError(a),this.observable.notify("onError",a)}}exports.ObservableRetryConnection=ObservableRetryConnection;