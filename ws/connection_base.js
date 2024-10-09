import "core-js/modules/es.promise.js";
import "core-js/modules/es.weak-map.js";
import "core-js/modules/web.dom-collections.iterator.js";
function _classPrivateFieldInitSpec(obj, privateMap, value) { _checkPrivateRedeclaration(obj, privateMap); privateMap.set(obj, value); }
function _checkPrivateRedeclaration(obj, privateCollection) { if (privateCollection.has(obj)) { throw new TypeError("Cannot initialize the same private elements twice on an object"); } }
function _classPrivateFieldGet(s, a) { return s.get(_assertClassBrand(s, a)); }
function _classPrivateFieldSet(s, a, r) { return s.set(_assertClassBrand(s, a), r), r; }
function _assertClassBrand(e, t, n) { if ("function" == typeof e ? e === t : e.has(t)) return arguments.length < 3 ? t : n; throw new TypeError("Private element is not present on this object"); }
import { logger } from "../utils/logger/index.js";
import { Future } from "../utils/future.js";
import { types } from "../types/proto.js";
import { TooManyConnectionsError, PermissionDeniedError, InvalidArgumentError, SessionTimeoutError, InternalError, GenericError } from "../types/exceptions.js";
const ErrorCode = types.Code;
export const ConnectionStatus = {
  CONNECTED: "CONNECTED",
  DISCONNECTED: "DISCONNECTED",
  CONNECTING: "CONNECTING"
};
var _connectionStatus = /*#__PURE__*/new WeakMap();
var _connectionFuture = /*#__PURE__*/new WeakMap();
var _socket = /*#__PURE__*/new WeakMap();
export class ConnectionBase {
  constructor(name) {
    _classPrivateFieldInitSpec(this, _connectionStatus, void 0);
    _classPrivateFieldInitSpec(this, _connectionFuture, void 0);
    _classPrivateFieldInitSpec(this, _socket, void 0);
    this.name = name;
    _classPrivateFieldSet(_connectionStatus, this, ConnectionStatus.DISCONNECTED);
    _classPrivateFieldSet(_connectionFuture, this, new Future());
    _classPrivateFieldGet(_connectionFuture, this).reject("disconnected");
    _classPrivateFieldSet(_socket, this, null);
  }
  async connect() {
    if (_classPrivateFieldGet(_socket, this) != null) return;
    logger.info("".concat(this.name, ": connecting ..."));
    _classPrivateFieldSet(_connectionStatus, this, ConnectionStatus.CONNECTING);
    _classPrivateFieldSet(_connectionFuture, this, new Future());
    let uri = await this.getURI();
    _classPrivateFieldSet(_socket, this, new WebSocket(uri));
    _classPrivateFieldGet(_socket, this).binaryType = "arraybuffer";
    _classPrivateFieldGet(_socket, this).addEventListener("open", () => {
      this.onConnected();
    });
    _classPrivateFieldGet(_socket, this).addEventListener("close", () => {
      this.onDisconnected();
    });
    _classPrivateFieldGet(_socket, this).addEventListener("message", event => {
      this.onData(event.data);
    });
    _classPrivateFieldGet(_socket, this).addEventListener("error", err => {
      this.onError(err);
    });
  }
  async getURI() {
    throw new Error("connection.getURI is not implemented");
  }
  disconnect() {
    if (_classPrivateFieldGet(_socket, this) != null) {
      _classPrivateFieldGet(_socket, this).close();
      _classPrivateFieldSet(_socket, this, null);
      logger.info("connection disconnected: ", this.name);
    }
  }
  async write(data) {
    var _classPrivateFieldGet2, _classPrivateFieldGet3;
    await this.waitForConnection();
    (_classPrivateFieldGet2 = _classPrivateFieldGet(_socket, this)) === null || _classPrivateFieldGet2 === void 0 || (_classPrivateFieldGet3 = _classPrivateFieldGet2.send) === null || _classPrivateFieldGet3 === void 0 || _classPrivateFieldGet3.call(_classPrivateFieldGet2, data);
  }
  parseJSONResponse(msg) {
    try {
      let {
        code,
        reason
      } = JSON.parse(msg);
      switch (code) {
        case ErrorCode.ERR_TOO_MANY_CONNECTIONS:
          return this.onError(new TooManyConnectionsError(reason));
        case ErrorCode.ERR_UNAUTHORIZED:
          return this.onError(new PermissionDeniedError(reason));
        case ErrorCode.ERR_BAD_REQUEST:
          this.stop();
          return this.onError(new InvalidArgumentError(reason));
        case ErrorCode.ERR_TIMEOUT:
          return this.onError(new SessionTimeoutError(reason));
        case ErrorCode.ERR_INTERNAL:
          return this.onError(new InternalError(code, reason));
        default:
          return this.onError(new GenericError(code, reason));
      }
    } catch (e) {
      this.onError(e);
    }
  }
  getBufferedAmount() {
    return _classPrivateFieldGet(_socket, this) ? _classPrivateFieldGet(_socket, this).bufferedAmount : 0;
  }
  onConnected() {
    logger.info("".concat(this.name, ": connected"));
    _classPrivateFieldSet(_connectionStatus, this, ConnectionStatus.CONNECTED);
    _classPrivateFieldGet(_connectionFuture, this).set("connected");
  }
  onDisconnected() {
    if (_classPrivateFieldGet(_socket, this) != null) {
      _classPrivateFieldGet(_socket, this).close();
      _classPrivateFieldSet(_socket, this, null);
      logger.info("connection disconnected: ", this.name);
    }
    logger.warn("".concat(this.name, ": disconnected"));
    _classPrivateFieldSet(_connectionStatus, this, ConnectionStatus.DISCONNECTED);
    _classPrivateFieldGet(_connectionFuture, this).reject("disconnected");
  }
  isConnected() {
    return _classPrivateFieldGet(_connectionStatus, this) == ConnectionStatus.CONNECTED;
  }
  waitForConnection() {
    return _classPrivateFieldGet(_connectionFuture, this).get();
  }
  getConnectionStatus() {
    return _classPrivateFieldGet(_connectionStatus, this);
  }
  onData(_data) {}
  onError(err) {
    logger.warn("".concat(this.name, ": onError: ").concat(err));
  }
}