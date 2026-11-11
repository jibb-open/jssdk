import "core-js/modules/es.promise.js";
import "core-js/modules/es.weak-map.js";
import "core-js/modules/web.dom-collections.iterator.js";
function _classPrivateMethodInitSpec(e, a) { _checkPrivateRedeclaration(e, a), a.add(e); }
function _classPrivateFieldInitSpec(e, t, a) { _checkPrivateRedeclaration(e, t), t.set(e, a); }
function _checkPrivateRedeclaration(e, t) { if (t.has(e)) throw new TypeError("Cannot initialize the same private elements twice on an object"); }
function _classPrivateFieldGet(s, a) { return s.get(_assertClassBrand(s, a)); }
function _classPrivateFieldSet(s, a, r) { return s.set(_assertClassBrand(s, a), r), r; }
function _assertClassBrand(e, t, n) { if ("function" == typeof e ? e === t : e.has(t)) return arguments.length < 3 ? t : n; throw new TypeError("Private element is not present on this object"); }
import { logger } from "../utils/logger/index.js";
import { Future } from "../utils/future.js";
import { types } from "../types/proto.js";
import { TooManyConnectionsError, PermissionDeniedError, InvalidArgumentError, SessionTimeoutError, InternalError, GenericError, NotConnectedError } from "../types/exceptions.js";
const ErrorCode = types.Code;
export const ConnectionStatus = {
  CONNECTED: "CONNECTED",
  DISCONNECTED: "DISCONNECTED",
  CONNECTING: "CONNECTING"
};
var _connectionStatus = new WeakMap();
var _connectionFuture = new WeakMap();
var _socket = new WeakMap();
var _connectionAttempt = new WeakMap();
var _ConnectionBase_brand = new WeakSet();
export class ConnectionBase {
  constructor(name) {
    _classPrivateMethodInitSpec(this, _ConnectionBase_brand);
    _classPrivateFieldInitSpec(this, _connectionStatus, void 0);
    _classPrivateFieldInitSpec(this, _connectionFuture, void 0);
    _classPrivateFieldInitSpec(this, _socket, void 0);
    _classPrivateFieldInitSpec(this, _connectionAttempt, void 0);
    this.name = name;
    _classPrivateFieldSet(_connectionStatus, this, ConnectionStatus.DISCONNECTED);
    _classPrivateFieldSet(_connectionFuture, this, new Future());
    _classPrivateFieldGet(_connectionFuture, this).reject("disconnected");
    _classPrivateFieldSet(_socket, this, null);
    _classPrivateFieldSet(_connectionAttempt, this, 0);
  }
  async connect() {
    var _this$connectionAttem;
    if (_classPrivateFieldGet(_socket, this) != null || _classPrivateFieldGet(_connectionStatus, this) === ConnectionStatus.CONNECTING) return;
    logger.info("".concat(this.name, ": connecting ..."));
    _classPrivateFieldSet(_connectionStatus, this, ConnectionStatus.CONNECTING);
    _classPrivateFieldSet(_connectionFuture, this, new Future());
    const attempt = _classPrivateFieldSet(_connectionAttempt, this, (_this$connectionAttem = _classPrivateFieldGet(_connectionAttempt, this), ++_this$connectionAttem));
    try {
      const uri = await this.getURI();
      if (attempt !== _classPrivateFieldGet(_connectionAttempt, this)) return;
      const socket = new WebSocket(uri);
      _classPrivateFieldSet(_socket, this, socket);
      const isCurrent = () => attempt === _classPrivateFieldGet(_connectionAttempt, this) && _classPrivateFieldGet(_socket, this) === socket;
      socket.binaryType = "arraybuffer";
      socket.addEventListener("open", () => {
        if (isCurrent()) this.onConnected();
      });
      socket.addEventListener("close", () => {
        if (isCurrent()) this.onDisconnected();
      });
      socket.addEventListener("message", event => {
        if (isCurrent()) this.onData(event.data);
      });
      socket.addEventListener("error", err => {
        if (isCurrent()) this.onError(err);
      });
    } catch (err) {
      if (attempt !== _classPrivateFieldGet(_connectionAttempt, this)) return;
      this.disconnect();
      throw err;
    }
  }
  async getURI() {
    throw new Error("connection.getURI is not implemented");
  }
  disconnect() {
    const hadSocket = _classPrivateFieldGet(_socket, this) != null;
    _assertClassBrand(_ConnectionBase_brand, this, _closeSocket).call(this);
    if (hadSocket) this.onDisconnected();
  }
  async write(data) {
    await this.waitForConnection();
    if (!this.isConnected() || !_classPrivateFieldGet(_socket, this)) throw new NotConnectedError("connection disconnected");
    _classPrivateFieldGet(_socket, this).send(data);
  }
  parseJSONResponse(msg) {
    try {
      let _JSON$parse = JSON.parse(msg),
        code = _JSON$parse.code,
        reason = _JSON$parse.reason;
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
    _assertClassBrand(_ConnectionBase_brand, this, _closeSocket).call(this);
    logger.warn("".concat(this.name, ": disconnected"));
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
function _closeSocket() {
  var _this$connectionAttem2;
  _classPrivateFieldSet(_connectionAttempt, this, (_this$connectionAttem2 = _classPrivateFieldGet(_connectionAttempt, this), ++_this$connectionAttem2));
  const socket = _classPrivateFieldGet(_socket, this);
  _classPrivateFieldSet(_socket, this, null);
  _classPrivateFieldSet(_connectionStatus, this, ConnectionStatus.DISCONNECTED);
  _classPrivateFieldGet(_connectionFuture, this).reject("disconnected");
  _classPrivateFieldSet(_connectionFuture, this, new Future());
  _classPrivateFieldGet(_connectionFuture, this).reject("disconnected");
  if (socket != null) {
    socket.close();
    logger.info("connection disconnected: ", this.name);
  }
}