import "core-js/modules/es.array-buffer.constructor.js";
import "core-js/modules/es.array-buffer.slice.js";
import "core-js/modules/es.promise.js";
import "core-js/modules/es.typed-array.uint8-array.js";
import "core-js/modules/es.typed-array.fill.js";
import "core-js/modules/es.typed-array.set.js";
import "core-js/modules/es.typed-array.sort.js";
import "core-js/modules/es.typed-array.to-locale-string.js";
import "core-js/modules/es.weak-map.js";
import "core-js/modules/esnext.aggregate-error.js";
import "core-js/modules/esnext.promise.any.js";
import "core-js/modules/web.dom-collections.iterator.js";
import "core-js/modules/web.url.js";
import "core-js/modules/web.url.to-json.js";
import "core-js/modules/web.url-search-params.js";
function _classPrivateMethodInitSpec(obj, privateSet) { _checkPrivateRedeclaration(obj, privateSet); privateSet.add(obj); }
function _classPrivateFieldInitSpec(obj, privateMap, value) { _checkPrivateRedeclaration(obj, privateMap); privateMap.set(obj, value); }
function _checkPrivateRedeclaration(obj, privateCollection) { if (privateCollection.has(obj)) { throw new TypeError("Cannot initialize the same private elements twice on an object"); } }
function _classPrivateFieldGet(s, a) { return s.get(_assertClassBrand(s, a)); }
function _classPrivateFieldSet(s, a, r) { return s.set(_assertClassBrand(s, a), r), r; }
function _assertClassBrand(e, t, n) { if ("function" == typeof e ? e === t : e.has(t)) return arguments.length < 3 ? t : n; throw new TypeError("Private element is not present on this object"); }
import { Config } from "../config.js";
import { logger } from "../utils/logger/index.js";
import { InvalidArgumentError, PermissionDeniedError, SessionTimeoutError } from '../types/exceptions.js';
import { UserClaims } from "../types/types.js";
import { types, cilix } from "../types/proto.js";
import { getUserToken } from "../api/auth.js";
import { Observable, ObservableRetryConnection } from "./observable_connection.js";
const ClientType = types.ClientType;
const BusMessage = cilix.BusMessage;
let clientType = ClientType.WEBAPP;
let clientName = "client";
let instance = undefined;
const observable = new Observable();
var _expiryTimer = /*#__PURE__*/new WeakMap();
var _EventBusConnection_brand = /*#__PURE__*/new WeakSet();
class EventBusConnection extends ObservableRetryConnection {
  static getInstance() {
    if (!instance) instance = new EventBusConnection();
    return instance;
  }
  static addEventListener(observer) {
    return observable.addEventListener(observer);
  }
  static removeEventListener(id) {
    observable.removeEventListener(id);
  }
  static setClientName(name) {
    clientName = name;
  }
  static setClientType(t) {
    clientType = t;
  }
  constructor() {
    super("eventbus-".concat(clientName));
    _classPrivateMethodInitSpec(this, _EventBusConnection_brand);
    _classPrivateFieldInitSpec(this, _expiryTimer, void 0);
    this.observable = observable;
    this.userToken = null;
    _classPrivateFieldSet(_expiryTimer, this, null);
  }
  async stop() {
    clearTimeout(_classPrivateFieldGet(_expiryTimer, this));
    super.stop();
  }
  async write(msg) {
    logger.debug("".concat(this.name, ".write: "), BusMessage.toObject(msg));
    let data = BusMessage.encode(msg).finish();
    return super.write(data);
  }
  writeObject(msg) {
    let err = BusMessage.verify(msg);
    if (err) throw new Error(err);
    let request = BusMessage.fromObject(msg);
    return this.write(request);
  }
  async getURI() {
    try {
      this.userToken = await getUserToken();
      this.userClaims = new UserClaims(this.userToken);
      let seconds = this.userClaims.getSecondsUntilExpiry();
      if (seconds <= 0) {
        let e = new PermissionDeniedError("user token expired");
        this.onError(e);
        throw e;
      }
      _classPrivateFieldSet(_expiryTimer, this, setTimeout(() => {
        this.onError(new SessionTimeoutError("user token expired"));
      }, seconds));
    } catch (err) {
      let e = new PermissionDeniedError(err);
      this.onError(e);
      throw e;
    }
    let base = new URL(Config.apiBaseURL);
    let url = base.host + (base.pathname !== '/' ? base.pathname : '');
    let typeStr = _assertClassBrand(_EventBusConnection_brand, this, _getClientTypeAsString).call(this, clientType);
    return "wss://".concat(url, "/ws/eventbus/").concat(typeStr, "?user_token=").concat(this.userToken, "&name=").concat(clientName);
  }
  onData(msg) {
    try {
      if (msg instanceof ArrayBuffer) {
        let buffer = new Uint8Array(msg);
        let response = BusMessage.decode(buffer);
        buffer = null;
        logger.debug("".concat(this.name, ".read: "), response);
        _assertClassBrand(_EventBusConnection_brand, this, _onMessage).call(this, response);
        return;
      }
    } catch (err) {
      logger.error(err);
    }
    this.parseJSONResponse(msg);
  }
  stopStream(clientId) {
    return this.writeObject({
      stopRequest: {},
      dst: {
        id: clientId
      }
    });
  }
  stopAllStreams() {
    return this.writeObject({
      stopRequest: {}
    });
  }
  startStream(_ref) {
    let {
      config,
      runtimeConfig,
      camera,
      clientId,
      meetingToken
    } = _ref;
    return this.writeObject({
      startRequest: {
        config,
        runtimeConfig,
        camera,
        meetingToken
      },
      dst: {
        id: clientId
      }
    });
  }
  requestCameraPreview(clientId, sourceId) {
    return this.writeObject({
      previewRequest: {
        source: {
          id: sourceId
        }
      },
      dst: {
        id: clientId
      }
    });
  }
  setRuntimeConfig(clientId, cfg) {
    return this.writeObject({
      runtimeConfigRequest: cfg,
      dst: {
        id: clientId
      }
    });
  }
  getCameraList(clientId) {
    return this.writeObject({
      cameraListRequest: {},
      dst: {
        id: clientId
      }
    });
  }
  sendCameraList(camList, src, dst) {
    let response = {
      cameraListResponse: {
        items: camList
      },
      src: src,
      dst: dst
    };
    return this.writeObject(response);
  }
  getClientStatusList() {
    let request = {
      clientStatusRequest: {}
    };
    return this.writeObject(request);
  }
}
async function _onMessage(msg) {
  if (!msg || typeof msg !== 'object') return;
  try {
    msg.clientConnected && _assertClassBrand(_EventBusConnection_brand, this, _onClientConnected).call(this, msg);
    msg.clientDisconnected && _assertClassBrand(_EventBusConnection_brand, this, _onClientDisconnected).call(this, msg);
    msg.cameraListRequest && _assertClassBrand(_EventBusConnection_brand, this, _onCameraListRequest).call(this, msg);
    msg.cameraListResponse && _assertClassBrand(_EventBusConnection_brand, this, _onCameraListResponse).call(this, msg);
    msg.runtimeConfigRequest && _assertClassBrand(_EventBusConnection_brand, this, _onRuntimeConfigRequest).call(this, msg);
    msg.startRequest && _assertClassBrand(_EventBusConnection_brand, this, _onStartRequest).call(this, msg);
    msg.stopRequest && _assertClassBrand(_EventBusConnection_brand, this, _onStopRequest).call(this, msg);
    msg.previewRequest && _assertClassBrand(_EventBusConnection_brand, this, _onPreviewRequest).call(this, msg);
    msg.previewResponse && _assertClassBrand(_EventBusConnection_brand, this, _onPreviewResponse).call(this, msg);
    msg.ipsaResponse && _assertClassBrand(_EventBusConnection_brand, this, _onIPSAResponse).call(this, msg);
    msg.tooManyPublishers && _assertClassBrand(_EventBusConnection_brand, this, _onTooManyPublishers).call(this, msg);
    msg.recordingStarted && _assertClassBrand(_EventBusConnection_brand, this, _onRecordingStarted).call(this, msg);
    msg.recordingStopped && _assertClassBrand(_EventBusConnection_brand, this, _onRecordingStopped).call(this, msg);
  } catch (e) {
    logger.error(e);
  }
}
function _getClientTypeAsString(clientType) {
  let found = Object.entries(ClientType).find(_ref2 => {
    let [k, v] = _ref2;
    return v == clientType;
  });
  if (!found) throw new InvalidArgumentError("Invalid client type: ".concat(clientType));
  let name = found[0].toLowerCase();
  return name;
}
function _sendPreview(image, dst) {
  this.writeObject({
    previewResponse: {
      image: image
    },
    dst: dst
  });
}
async function _onCameraListRequest(msg) {
  let response = await _assertClassBrand(_EventBusConnection_brand, this, _callSubscribers).call(this, 'onCameraListRequest', msg.cameraListRequest);
  this.sendCameraList(response, msg.dst, msg.src);
}
function _onCameraListResponse(msg) {
  observable.notify('onCameraListResponse', msg.cameraListResponse);
}
function _onClientConnected(msg) {
  logger.info("".concat(this.name, ": client connected: "), msg.src);
  observable.notify('onClientConnected', msg.src);
}
function _onClientDisconnected(msg) {
  logger.warn("".concat(this.name, ": client disconnected: "), msg.src);
  observable.notify('onClientDisconnected', msg.src);
}
function _onRuntimeConfigRequest(msg) {
  observable.notify('onRuntimeConfigRequest', msg.runtimeConfigRequest);
}
function _onStopRequest(msg) {
  observable.notify('onStopRequest', msg.stopRequest);
}
async function _onPreviewRequest(msg) {
  let response = await _assertClassBrand(_EventBusConnection_brand, this, _callSubscribers).call(this, 'onPreviewRequest', msg.previewRequest);
  _assertClassBrand(_EventBusConnection_brand, this, _sendPreview).call(this, response, msg.src);
}
function _onPreviewResponse(msg) {
  observable.notify('onPreviewResponse', msg.previewResponse);
}
function _onStartRequest(msg) {
  var _req$camera, _req$inputSource;
  let req = msg.startRequest;
  if (!(req !== null && req !== void 0 && (_req$camera = req.camera) !== null && _req$camera !== void 0 && _req$camera.id) && req !== null && req !== void 0 && (_req$inputSource = req.inputSource) !== null && _req$inputSource !== void 0 && _req$inputSource.id) {
    req.camera = {
      id: req.inputSource.id
    };
  }
  observable.notify('onStartRequest', req);
}
function _onCornersReceived(msg) {
  observable.notify('onCornersReceived', msg.corners.corners);
}
function _onIPSAResponse(msg) {
  msg && observable.notify('onIPSAResponse', msg.ipsaResponse);
}
function _onTooManyPublishers(msg) {
  observable.notify('onTooManyPublishers', msg.tooManyPublishers);
}
function _onRecordingStarted(msg) {
  observable.notify('onRecordingStarted', msg.recordingStarted);
}
function _onRecordingStopped(msg) {
  observable.notify('onRecordingStopped', msg.recordingStopped);
}
function _callSubscribers(functionName) {
  for (var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
    args[_key - 1] = arguments[_key];
  }
  let promises = [...observable.observers].map(_ref3 => {
    let [k, o] = _ref3;
    return o[functionName];
  }).filter(fn => fn !== undefined).map(fn => fn(...args));
  return Promise.any(promises);
}
export { EventBusConnection };