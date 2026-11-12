import "core-js/modules/es.weak-map.js";
import "core-js/modules/web.dom-collections.iterator.js";
function _classPrivateMethodInitSpec(e, a) { _checkPrivateRedeclaration(e, a), a.add(e); }
function _classPrivateFieldInitSpec(e, t, a) { _checkPrivateRedeclaration(e, t), t.set(e, a); }
function _checkPrivateRedeclaration(e, t) { if (t.has(e)) throw new TypeError("Cannot initialize the same private elements twice on an object"); }
function _classPrivateFieldGet(s, a) { return s.get(_assertClassBrand(s, a)); }
function _classPrivateFieldSet(s, a, r) { return s.set(_assertClassBrand(s, a), r), r; }
function _assertClassBrand(e, t, n) { if ("function" == typeof e ? e === t : e.has(t)) return arguments.length < 3 ? t : n; throw new TypeError("Private element is not present on this object"); }
import { PermissionDeniedError, SessionTimeoutError, TooManyConnectionsError } from "../types/exceptions.js";
import { logger } from "../utils/logger/index.js";
import { ConnectionBase } from "./connection_base.js";
var _started = new WeakMap();
var _connectionTimer = new WeakMap();
var _resetCountersTimer = new WeakMap();
var _RetryConnection_brand = new WeakSet();
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
    this.setCounters(props);
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
    var _props$maxRetryCount, _props$minRetryInterv, _props$maxRetryInterv;
    let props = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {
      maxRetryCount: 10,
      minRetryIntervalMs: 500,
      maxRetryIntervalMs: 32000
    };
    this.maxRetryCount = (_props$maxRetryCount = props.maxRetryCount) !== null && _props$maxRetryCount !== void 0 ? _props$maxRetryCount : 10;
    this.minRetryIntervalMs = (_props$minRetryInterv = props.minRetryIntervalMs) !== null && _props$minRetryInterv !== void 0 ? _props$minRetryInterv : 500;
    this.maxRetryIntervalMs = (_props$maxRetryInterv = props.maxRetryIntervalMs) !== null && _props$maxRetryInterv !== void 0 ? _props$maxRetryInterv : 32000;
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
  clearTimeout(_classPrivateFieldGet(_connectionTimer, this));
  clearTimeout(_classPrivateFieldGet(_resetCountersTimer, this));
  this.retryCount = this.retryCount + 1;
  this.nexRetryTime = Date.now() + diff + this.retryIntervalMs;
  this.retryIntervalMs = Math.min(this.retryIntervalMs * 2, this.maxRetryIntervalMs);
  _classPrivateFieldSet(_connectionTimer, this, setTimeout(() => {
    if (!this.isStarted()) return;
    this.connect().catch(err => {
      if (!this.isStarted()) return;
      this.onError(err);
      _assertClassBrand(_RetryConnection_brand, this, _reconnect).call(this);
    });
  }, diff));
  _classPrivateFieldSet(_resetCountersTimer, this, setTimeout(() => {
    _assertClassBrand(_RetryConnection_brand, this, _resetCounters).call(this);
  }, 60000));
}
function _resetCounters() {
  this.retryCount = 0;
  this.retryIntervalMs = Math.min(this.minRetryIntervalMs, this.maxRetryIntervalMs);
  this.nexRetryTime = Date.now();
}