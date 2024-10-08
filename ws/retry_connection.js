import "core-js/modules/es.weak-map.js";
import "core-js/modules/web.dom-collections.iterator.js";
function _classPrivateMethodInitSpec(obj, privateSet) { _checkPrivateRedeclaration(obj, privateSet); privateSet.add(obj); }
function _classPrivateFieldInitSpec(obj, privateMap, value) { _checkPrivateRedeclaration(obj, privateMap); privateMap.set(obj, value); }
function _checkPrivateRedeclaration(obj, privateCollection) { if (privateCollection.has(obj)) { throw new TypeError("Cannot initialize the same private elements twice on an object"); } }
function _classPrivateFieldGet(s, a) { return s.get(_assertClassBrand(s, a)); }
function _classPrivateFieldSet(s, a, r) { return s.set(_assertClassBrand(s, a), r), r; }
function _assertClassBrand(e, t, n) { if ("function" == typeof e ? e === t : e.has(t)) return arguments.length < 3 ? t : n; throw new TypeError("Private element is not present on this object"); }
import { PermissionDeniedError, SessionTimeoutError, TooManyConnectionsError } from "../types/exceptions.js";
import { logger } from "../utils/logger/index.js";
import { ConnectionBase } from "./connection_base.js";
var _started = /*#__PURE__*/new WeakMap();
var _connectionTimer = /*#__PURE__*/new WeakMap();
var _resetCountersTimer = /*#__PURE__*/new WeakMap();
var _RetryConnection_brand = /*#__PURE__*/new WeakSet();
export class RetryConnection extends ConnectionBase {
  constructor(connectionName) {
    let props = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {
      maxRetryCount: 10,
      minRetryIntervalMs: 500,
      maxRetryIntervalMs: 32000
    };
    super(connectionName);
    _classPrivateMethodInitSpec(this, _RetryConnection_brand);
    _classPrivateFieldInitSpec(this, _started, void 0);
    _classPrivateFieldInitSpec(this, _connectionTimer, void 0);
    _classPrivateFieldInitSpec(this, _resetCountersTimer, void 0);
    this.maxRetryCount = props.maxRetryCount || 10;
    this.minRetryIntervalMs = props.minRetryIntervalMs || 500;
    this.maxRetryIntervalMs = props.maxRetryIntervalMs || 32000;
    _classPrivateFieldSet(_connectionTimer, this, null);
    _classPrivateFieldSet(_resetCountersTimer, this, null);
    _classPrivateFieldSet(_started, this, false);
    _assertClassBrand(_RetryConnection_brand, this, _resetCounters).call(this);
  }
  start() {
    if (!this.isStarted()) {
      logger.info("".concat(this.name, ": starting..."));
      _classPrivateFieldSet(_started, this, true);
      _assertClassBrand(_RetryConnection_brand, this, _resetCounters).call(this);
      _assertClassBrand(_RetryConnection_brand, this, _reconnect).call(this);
      this.onStarted();
    }
  }
  stop() {
    logger.info("".concat(this.name, ": stopping..."));
    _classPrivateFieldSet(_started, this, false);
    this.disconnect();
    this.onStopped();
  }
  isStarted() {
    return _classPrivateFieldGet(_started, this);
  }
  onDisconnected() {
    super.onDisconnected();
    _assertClassBrand(_RetryConnection_brand, this, _reconnect).call(this);
  }
  onStarted() {}
  onStopped() {}
  onError(err) {
    super.onError(err);
    if (err instanceof TooManyConnectionsError || err instanceof PermissionDeniedError || err instanceof SessionTimeoutError) this.stop();
  }
  disconnect() {
    clearTimeout(_classPrivateFieldGet(_connectionTimer, this));
    clearTimeout(_classPrivateFieldGet(_resetCountersTimer, this));
    super.disconnect();
  }
  setCounters() {
    let props = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {
      maxRetryCount: 10,
      minRetryIntervalMs: 500,
      maxRetryIntervalMs: 32000
    };
    this.maxRetryCount = props.maxRetryCount || 10;
    this.minRetryIntervalMs = props.minRetryIntervalMs || 500;
    this.maxRetryIntervalMs = props.maxRetryIntervalMs || 32000;
  }
}
function _reconnect() {
  if (!this.isStarted()) return;else if (this.retryCount > this.maxRetryCount) {
    this.stop();
    return;
  }
  let diff = Math.max(this.nexRetryTime - Date.now(), 0);
  if (diff > 0) {
    logger.debug(this);
    logger.info("".concat(this.name, ": retrying connection in ").concat(this.retryIntervalMs, "ms]"));
  }
  clearTimeout(_classPrivateFieldGet(_resetCountersTimer, this));
  this.retryIntervalMs = Math.min(this.retryIntervalMs * 2, this.maxRetryIntervalMs);
  this.retryCount = this.retryCount + 1;
  this.nexRetryTime = Date.now() + this.retryIntervalMs;
  _classPrivateFieldSet(_connectionTimer, this, setTimeout(() => {
    this.connect().catch(err => {
      this.onError(err);
    });
  }, diff));
  _classPrivateFieldSet(_resetCountersTimer, this, setTimeout(() => {
    _assertClassBrand(_RetryConnection_brand, this, _resetCounters).call(this);
  }, 60000));
}
function _resetCounters() {
  this.retryCount = 0;
  this.retryIntervalMs = this.minRetryIntervalMs;
  this.nexRetryTime = Date.now();
}