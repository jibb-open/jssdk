function _classPrivateMethodInitSpec(obj, privateSet) { _checkPrivateRedeclaration(obj, privateSet); privateSet.add(obj); }
function _classPrivateFieldInitSpec(obj, privateMap, value) { _checkPrivateRedeclaration(obj, privateMap); privateMap.set(obj, value); }
function _checkPrivateRedeclaration(obj, privateCollection) { if (privateCollection.has(obj)) { throw new TypeError("Cannot initialize the same private elements twice on an object"); } }
function _classPrivateFieldGet(s, a) { return s.get(_assertClassBrand(s, a)); }
function _classPrivateFieldSet(s, a, r) { return s.set(_assertClassBrand(s, a), r), r; }
function _assertClassBrand(e, t, n) { if ("function" == typeof e ? e === t : e.has(t)) return arguments.length < 3 ? t : n; throw new TypeError("Private element is not present on this object"); }
import "core-js/modules/es.array-buffer.constructor.js";
import "core-js/modules/es.array-buffer.slice.js";
import "core-js/modules/es.global-this.js";
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
import { getUserClaims } from '../api/auth.js';
import { Config } from "../config.js";
import { logger } from "../utils/logger/index.js";
import { MeetingClaims } from "../types/types.js";
import { meeting, types } from "../types/proto.js";
import { PermissionDeniedError, SessionTimeoutError } from '../types/exceptions.js';
import { ObservableRetryConnection } from './observable_connection.js';
let Message = meeting.Message;
let ErrorCode = types.Code;
if ((globalThis === null || globalThis === void 0 ? void 0 : globalThis.WebSocket) == undefined) {
  import("isomorphic-ws").then(webSocket => {
    globalThis.WebSocket = webSocket.default;
  }).catch(err => {
    console.log(err);
  });
}
var _expiryTimer = /*#__PURE__*/new WeakMap();
var _MeetingConnectionImp_brand = /*#__PURE__*/new WeakSet();
class MeetingConnectionImp extends ObservableRetryConnection {
  constructor() {
    let options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {
      maxRetryCount: 10,
      minRetryIntervalMs: 500,
      maxRetryIntervalMs: 32000
    };
    super('meeting', options);
    _classPrivateMethodInitSpec(this, _MeetingConnectionImp_brand);
    _classPrivateFieldInitSpec(this, _expiryTimer, void 0);
    this.meetingId = null;
    this.meetingToken = null;
    _classPrivateFieldSet(_expiryTimer, this, null);
  }
  start(meetingToken) {
    this.meetingToken = meetingToken;
    this.meetingClaims = new MeetingClaims(meetingToken);
    this.meetingId = this.meetingClaims.meetindId;
    this.name = "meeting-".concat(this.meetingId);
    let seconds = this.meetingClaims.getSecondsUntilExpiry();
    if (seconds <= 0) {
      let e = new PermissionDeniedError("meeting token expired");
      this.onError(e);
      throw e;
    }
    _classPrivateFieldSet(_expiryTimer, this, setTimeout(() => {
      this.stop();
      this.onError(new SessionTimeoutError("meeting token expired"));
    }, seconds));
    super.start();
  }
  stop() {
    clearTimeout(_classPrivateFieldGet(_expiryTimer, this));
    super.stop();
  }
  async getURI() {
    try {
      if (this.meetingClaims.isExpired()) {
        let e = new PermissionDeniedError("meeting token expired");
        this.onError(e);
        throw e;
      }
    } catch (err) {
      let e = new PermissionDeniedError(err);
      throw e;
    }
    let base = new URL(Config.apiBaseURL);
    let url = base.host + (base.pathname !== '/' ? base.pathname : '');
    return "wss://" + url + "/ws/meetings/" + this.meetingId + "?meeting_token=" + this.meetingToken;
  }
  async onData(msg) {
    try {
      if (msg instanceof ArrayBuffer) {
        let buffer = new Uint8Array(msg);
        let event = Message.decode(buffer);
        if (event !== null && event !== void 0 && event.update) {
          this.notify('onMeetingUpdate', event.update);
          await _assertClassBrand(_MeetingConnectionImp_brand, this, _sendImageAck).call(this, event.update.userId);
        }
        if (event !== null && event !== void 0 && event.drawing) this.notify('onDrawing', event.drawing);else if (event !== null && event !== void 0 && event.mousePointer) this.notify('onMousePointer', event.mousePointer);else if (event !== null && event !== void 0 && event.indexPointer) this.notify('onIndexPointer', event.indexPointer);else if (event !== null && event !== void 0 && event.join) this.notify('onMeetingJoin', event.join);else if (event !== null && event !== void 0 && event.leave) this.notify('onMeetingLeave', event.leave);
        return;
      }
    } catch (err) {
      logger.error(err);
    }
    this.parseJSONResponse(msg);
  }
  async sendMousePointer(x, y, email) {
    let username = "";
    if (email != "") {
      username = email;
    } else {
      try {
        let claims = await getUserClaims();
        username = claims.email;
      } catch (err) {
        username = email;
      }
    }
    let msg = Message.fromObject({
      mousePointer: {
        email: username,
        x: x,
        y: y
      }
    });
    let buf = Message.encode(msg).finish();
    await this.write(buf);
  }
  async sendIndexPointer(x, y, email) {
    let username = "";
    if (email != "") {
      username = email;
    } else {
      try {
        let claims = await getUserClaims();
        username = claims.email;
      } catch (err) {
        username = email;
      }
    }
    let msg = Message.fromObject({
      indexPointer: {
        email: username,
        x: x,
        y: y
      }
    });
    let buf = Message.encode(msg).finish();
    await this.write(buf);
  }
  async sendDrawing(_ref) {
    let {
      email,
      data
    } = _ref;
    let msg = Message.fromObject({
      drawing: {
        email: email,
        data: data
      }
    });
    logger.debug("".concat(this.name, ".Drawing: "), Message.toObject(msg));
    let buf = Message.encode(msg).finish();
    await this.write(buf);
  }
}
async function _sendImageAck(userId) {
  let msg = Message.fromObject({
    imageAck: {
      userId: userId
    }
  });
  let buf = Message.encode(msg).finish();
  await this.write(buf);
}
export let MeetingConnection = new MeetingConnectionImp({
  maxRetryCount: 10,
  minRetryIntervalMs: 500,
  maxRetryIntervalMs: 8000
});