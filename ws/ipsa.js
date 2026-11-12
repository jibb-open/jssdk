var _IPSAClass;
import "core-js/modules/es.array-buffer.constructor.js";
import "core-js/modules/es.array-buffer.slice.js";
import "core-js/modules/es.promise.js";
import "core-js/modules/es.typed-array.uint8-array.js";
import "core-js/modules/es.typed-array.fill.js";
import "core-js/modules/es.typed-array.set.js";
import "core-js/modules/es.typed-array.sort.js";
import "core-js/modules/es.typed-array.to-locale-string.js";
import "core-js/modules/es.weak-map.js";
import "core-js/modules/web.dom-collections.iterator.js";
import "core-js/modules/web.url.js";
import "core-js/modules/web.url.to-json.js";
import "core-js/modules/web.url-search-params.js";
function _classPrivateMethodInitSpec(e, a) { _checkPrivateRedeclaration(e, a), a.add(e); }
function _superPropGet(t, o, e, r) { var p = _get(_getPrototypeOf(1 & r ? t.prototype : t), o, e); return 2 & r && "function" == typeof p ? function (t) { return p.apply(e, t); } : p; }
function _get() { return _get = "undefined" != typeof Reflect && Reflect.get ? Reflect.get.bind() : function (e, t, r) { var p = _superPropBase(e, t); if (p) { var n = Object.getOwnPropertyDescriptor(p, t); return n.get ? n.get.call(arguments.length < 3 ? e : r) : n.value; } }, _get.apply(null, arguments); }
function _superPropBase(t, o) { for (; !{}.hasOwnProperty.call(t, o) && null !== (t = _getPrototypeOf(t));); return t; }
function _getPrototypeOf(t) { return _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function (t) { return t.__proto__ || Object.getPrototypeOf(t); }, _getPrototypeOf(t); }
function _classPrivateFieldInitSpec(e, t, a) { _checkPrivateRedeclaration(e, t), t.set(e, a); }
function _checkPrivateRedeclaration(e, t) { if (t.has(e)) throw new TypeError("Cannot initialize the same private elements twice on an object"); }
function _classPrivateFieldGet(s, a) { return s.get(_assertClassBrand(s, a)); }
function _classPrivateFieldSet(s, a, r) { return s.set(_assertClassBrand(s, a), r), r; }
function _assertClassBrand(e, t, n) { if ("function" == typeof e ? e === t : e.has(t)) return arguments.length < 3 ? t : n; throw new TypeError("Private element is not present on this object"); }
import { Config as SDKConfig } from "../config.js";
import { logger } from "../utils/logger/index.js";
import { MeetingClaims, UserClaims } from "../types/types.js";
import { ipsa } from "../types/proto.js";
import { getUserToken } from "../api/auth.js";
import { ObservableRetryConnection } from "./observable_connection.js";
import { AlreadyStartedError, InvalidArgumentError, PermissionDeniedError, SessionTimeoutError } from "../types/exceptions.js";
var _meetingExpiryTimer = new WeakMap();
var _IPSAClass_brand = new WeakSet();
class IPSAClass extends ObservableRetryConnection {
  constructor(options) {
    super('ipsa', options);
    _classPrivateMethodInitSpec(this, _IPSAClass_brand);
    _classPrivateFieldInitSpec(this, _meetingExpiryTimer, void 0);
    this.socket = null;
    _classPrivateFieldSet(_meetingExpiryTimer, this, null);
    this.meetingToken = null;
    this.meetingClaims = null;
  }
  async start(_ref) {
    let meetingToken = _ref.meetingToken,
      request = _ref.request;
    if (this.isStarted()) {
      this.onError(new AlreadyStartedError("already started"));
      return;
    }
    this.setRuntimeConfig(request.runtimeConfig);
    _assertClassBrand(_IPSAClass_brand, this, _setConfig).call(this, request.config);
    this.meetingToken = meetingToken;
    this.meetingClaims = new MeetingClaims(this.meetingToken);
    let seconds = this.meetingClaims.getSecondsUntilExpiry();
    if (seconds <= 0) {
      let e = new PermissionDeniedError("meeting token expired");
      this.onError(e);
      throw e;
    } else {
      clearTimeout(_classPrivateFieldGet(_meetingExpiryTimer, this));
      _classPrivateFieldSet(_meetingExpiryTimer, this, setTimeout(() => {
        let e = new SessionTimeoutError("meeting token expired");
        this.onError(e);
      }, seconds * 1000));
    }
    super.start();
  }
  stop() {
    clearTimeout(_classPrivateFieldGet(_meetingExpiryTimer, this));
    this.configRequest = null;
    this.runtimeConfigRequest = null;
    super.stop();
  }
  async getURI() {
    let userToken;
    try {
      userToken = await getUserToken({
        minExpiry: 3600
      });
      let claims = new UserClaims(userToken);
      let seconds = claims.getSecondsUntilExpiry();
      if (seconds <= 0) {
        let e = new PermissionDeniedError("user token expired");
        throw e;
      }
    } catch (err) {
      let e = new PermissionDeniedError(err);
      throw e;
    }
    let meetingId = this.meetingClaims.meetindId;
    logger.info("Starting IPSA...");
    let base = new URL(SDKConfig.apiBaseURL);
    let url = base.host + (base.pathname !== '/' ? base.pathname : '');
    return "wss://".concat(url, "/ws/ipsa/").concat(meetingId, "?user_token=").concat(userToken, "&meeting_token=").concat(this.meetingToken);
  }
  onData(msg) {
    try {
      if (msg instanceof ArrayBuffer) {
        let buffer = new Uint8Array(msg);
        let response = ipsa.Response.decode(buffer);
        this.notify('onResponse', response);
        return;
      }
    } catch (err) {
      logger.error(err);
    }
    this.parseJSONResponse(msg);
  }
  writeData(data) {
    let sz = this.getBufferedAmount();
    if (sz > 0) logger.warn("ipsa: low internet speed connection. [buffer size: ".concat(sz, "]"));
    let request = ipsa.Request.create({
      ipsa: {
        data: data
      }
    });
    return _assertClassBrand(_IPSAClass_brand, this, _write).call(this, request);
  }
  onConnected() {
    super.onConnected();
    _assertClassBrand(_IPSAClass_brand, this, _writeConfig).call(this, this.configRequest);
    _assertClassBrand(_IPSAClass_brand, this, _writeConfig).call(this, this.runtimeConfigRequest);
  }
  setRuntimeConfig(cfg) {
    if (!cfg) throw new InvalidArgumentError("bad request");
    let request = ipsa.Request.create({
      runtimeConfig: cfg
    });
    this.runtimeConfigRequest = request;
    if (this.isConnected()) _assertClassBrand(_IPSAClass_brand, this, _writeConfig).call(this, request);
  }
}
_IPSAClass = IPSAClass;
async function _write(msg) {
  let err = ipsa.Request.verify(msg);
  if (err) {
    let e = new InvalidArgumentError("invalid message: " + err);
    this.onError(e);
    throw e;
  }
  if (msg) {
    let data = ipsa.Request.encode(msg).finish();
    return _superPropGet(_IPSAClass.prototype, "write", this, 2)([data]);
  }
}
function _writeConfig(request) {
  _assertClassBrand(_IPSAClass_brand, this, _write).call(this, request).catch(err => {
    if (this.isStarted()) this.onError(err);
  });
}
function _setConfig(cfg) {
  if (!cfg) throw new InvalidArgumentError("bad request");
  let request = ipsa.Request.create({
    config: cfg
  });
  this.configRequest = request;
}
export let IPSA = new IPSAClass({
  maxRetryCount: 10,
  minRetryIntervalMs: 500,
  maxRetryIntervalMs: 4000
});