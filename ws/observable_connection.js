"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.ObservableRetryConnection=exports.Observable=void 0,require("core-js/modules/web.dom-collections.iterator.js");var _index=require("../utils/logger/index.js"),_retry_connection=require("./retry_connection.js");class Observable{constructor(){this.observers=new Map}subscribe(a,b){this.observers.set(a,b)}unsubscribeAll(){this.observers=new Map}unsubscribe(a){try{this.observers.delete(a)}catch(a){_index.logger.error(a)}}notify(a){for(var b=arguments.length,c=Array(1<b?b-1:0),d=1;d<b;d++)c[d-1]=arguments[d];this.observers.forEach(b=>{try{let d=b[a];d&&d(...c)}catch(b){_index.logger.error("Error occured notifying event ".concat(a),b)}})}}exports.Observable=Observable;class ObservableRetryConnection extends _retry_connection.RetryConnection{constructor(a){let b=1<arguments.length&&arguments[1]!==void 0?arguments[1]:{maxRetryCount:10,minRetryIntervalMs:500,maxRetryIntervalMs:32e3};super(a,b),this.observable=new Observable}subscribe(a,b){this.observable.subscribe(a,b)}unsubscribeAll(){this.observable.unsubscribeAll()}unsubscribe(a){this.observable.unsubscribe(a)}onDisconnected(){super.onDisconnected(),this.observable.notify("onDisconnected")}onConnected(){super.onConnected(),this.observable.notify("onConnected")}onStarted(){super.onStarted(),this.observable.notify("onStarted")}onStopped(){super.onStopped(),this.observable.notify("onStopped")}onError(a){super.onError(a),this.observable.notify("onError",a)}}exports.ObservableRetryConnection=ObservableRetryConnection;