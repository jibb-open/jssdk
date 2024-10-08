import "core-js/modules/es.weak-map.js";
import "core-js/modules/web.dom-collections.iterator.js";
function _classPrivateFieldInitSpec(obj, privateMap, value) { _checkPrivateRedeclaration(obj, privateMap); privateMap.set(obj, value); }
function _checkPrivateRedeclaration(obj, privateCollection) { if (privateCollection.has(obj)) { throw new TypeError("Cannot initialize the same private elements twice on an object"); } }
function _classPrivateFieldGet(s, a) { return s.get(_assertClassBrand(s, a)); }
function _classPrivateFieldSet(s, a, r) { return s.set(_assertClassBrand(s, a), r), r; }
function _assertClassBrand(e, t, n) { if ("function" == typeof e ? e === t : e.has(t)) return arguments.length < 3 ? t : n; throw new TypeError("Private element is not present on this object"); }
import { logger } from "../utils/logger/index.js";
import { RetryConnection } from "./retry_connection.js";
var _lastId = /*#__PURE__*/new WeakMap();
export class Observable {
  constructor() {
    _classPrivateFieldInitSpec(this, _lastId, void 0);
    this.observers = new Map();
    _classPrivateFieldSet(_lastId, this, 0);
  }
  addEventListener(observer) {
    _classPrivateFieldSet(_lastId, this, _classPrivateFieldGet(_lastId, this) + 1);
    this.observers.set(_classPrivateFieldGet(_lastId, this), observer);
    return _classPrivateFieldGet(_lastId, this);
  }
  removeEventListeners() {
    this.observers = new Map();
  }
  removeEventListener(id) {
    try {
      this.observers.delete(id);
    } catch (err) {
      logger.error(err);
    }
  }
  notify(eventName) {
    for (var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
      args[_key - 1] = arguments[_key];
    }
    this.observers.forEach(o => {
      try {
        let fn = o[eventName];
        fn && fn(...args);
      } catch (err) {
        logger.error("Error occured notifying event ".concat(eventName), err);
      }
    });
  }
}
export class ObservableRetryConnection extends RetryConnection {
  constructor(connectionName) {
    let props = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {
      maxRetryCount: 10,
      minRetryIntervalMs: 500,
      maxRetryIntervalMs: 32000
    };
    super(connectionName, props);
    this.observable = new Observable();
  }
  addEventListener(observer) {
    return this.observable.addEventListener(observer);
  }
  removeEventListeners() {
    this.observable.removeEventListeners();
  }
  removeEventListener(id) {
    this.observable.removeEventListener(id);
  }
  notify(eventName) {
    for (var _len2 = arguments.length, args = new Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++) {
      args[_key2 - 1] = arguments[_key2];
    }
    this.observable.notify(eventName, ...args);
  }
  onDisconnected() {
    super.onDisconnected();
    this.observable.notify("onDisconnected");
  }
  onConnected() {
    super.onConnected();
    this.observable.notify("onConnected");
  }
  onStarted() {
    super.onStarted();
    this.observable.notify("onStarted");
  }
  onStopped() {
    super.onStopped();
    this.observable.notify("onStopped");
  }
  onError(e) {
    super.onError(e);
    this.observable.notify("onError", e);
  }
}