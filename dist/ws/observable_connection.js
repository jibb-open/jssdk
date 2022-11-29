"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.ObservableConnection=void 0,require("core-js/modules/web.dom-collections.iterator.js"),require("core-js/modules/esnext.aggregate-error.js"),require("core-js/modules/es.promise.js"),require("core-js/modules/esnext.promise.any.js");var _index=require("../utils/logger/index.js"),_connection_base=require("./connection_base.js");class ObservableConnection extends _connection_base.ConnectionBase{constructor(a){super(a),this.observers=new Map}subscribe(a,b){this.observers.set(a,b)}unsubscribeAll(){this.observers=new Map}unsubscribe(a){try{this.observers.delete(a)}catch(a){_index.logger.error(a)}}notify(a){for(var b=arguments.length,c=Array(1<b?b-1:0),d=1;d<b;d++)c[d-1]=arguments[d];this.observers.forEach(b=>{try{let d=b[a];d!==void 0&&d(...c)}catch(b){_index.logger.error("Error occured notifying event ".concat(a),b)}})}callSubscribers(a){for(var b=arguments.length,c=Array(1<b?b-1:0),d=1;d<b;d++)c[d-1]=arguments[d];let e=[];return this.observers.forEach(b=>{try{let d=b[a];if(void 0!==d){let a=d(...c);e.push(a)}}catch(a){_index.logger.error(a)}}),Promise.any(e)}onDisconnected(){super.onDisconnected(),this.notify("onDisconnected")}onConnected(){super.onConnected(),this.notify("onConnected")}onStopped(){super.onStopped(),this.notify("onStopped")}onErrorMessage(a,b){super.onErrorMessage(a,b),this.notify("onErrorMessage",a,b)}onWarningMessage(a,b){super.onWarningMessage(a,b),this.notify("onWarningMessage",a,b)}onInfoMessage(a,b){super.onInfoMessage(a,b),this.notify("onInfoMessage",a,b)}}exports.ObservableConnection=ObservableConnection;