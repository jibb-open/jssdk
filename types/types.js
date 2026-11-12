function _slicedToArray(r, e) { return _arrayWithHoles(r) || _iterableToArrayLimit(r, e) || _unsupportedIterableToArray(r, e) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t.return && (u = t.return(), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(r) { if (Array.isArray(r)) return r; }
import "core-js/modules/es.symbol.description.js";
import "core-js/modules/es.object.from-entries.js";
import "core-js/modules/es.regexp.exec.js";
import "core-js/modules/es.regexp.test.js";
import "core-js/modules/es.regexp.to-string.js";
import "core-js/modules/es.weak-map.js";
import "core-js/modules/esnext.iterator.constructor.js";
import "core-js/modules/esnext.iterator.map.js";
import "core-js/modules/web.dom-collections.iterator.js";
function _classPrivateMethodInitSpec(e, a) { _checkPrivateRedeclaration(e, a), a.add(e); }
function _classPrivateFieldInitSpec(e, t, a) { _checkPrivateRedeclaration(e, t), t.set(e, a); }
function _checkPrivateRedeclaration(e, t) { if (t.has(e)) throw new TypeError("Cannot initialize the same private elements twice on an object"); }
function _classPrivateFieldGet(s, a) { return s.get(_assertClassBrand(s, a)); }
function _classPrivateFieldSet(s, a, r) { return s.set(_assertClassBrand(s, a), r), r; }
function _assertClassBrand(e, t, n) { if ("function" == typeof e ? e === t : e.has(t)) return arguments.length < 3 ? t : n; throw new TypeError("Private element is not present on this object"); }
import jwt_decode from "jwt-decode";
export const MeetingTypes = {
  DEFAULT: 0,
  WHITEBOARD: 1
};
export const AccessLevel = {
  USER: "USER",
  ADMIN: "ADMIN",
  SUPERADMIN: "SUPERADMIN"
};
export const UserType = {
  UNKNOWN: 0,
  MEMBER: 2,
  ADMIN: 3,
  OWNER: 4
};
export const Action = {
  NEW: "NEW",
  CANCEL: "CANCEL",
  CHANGE: "CHANGE"
};
export const RenewalTerm = {
  MANUAL: "0",
  AUTO: "12"
};
export const SkuAction = {
  ADD: "0",
  MODIFIED: "1",
  DELETE: "2",
  NO_CHANGE: "3"
};
var _billingFrequencies = new WeakMap();
var _name = new WeakMap();
var _JibbPlan_brand = new WeakSet();
class JibbPlan {
  constructor(name, count) {
    _classPrivateMethodInitSpec(this, _JibbPlan_brand);
    _classPrivateFieldInitSpec(this, _billingFrequencies, void 0);
    _classPrivateFieldInitSpec(this, _name, void 0);
    _classPrivateFieldSet(_name, this, name);
    _classPrivateFieldSet(_billingFrequencies, this, new Map());
    if (count > 0) {
      _assertClassBrand(_JibbPlan_brand, this, _createBillingFrequencies).call(this, count);
    }
  }
  getPlanName() {
    return _classPrivateFieldGet(_name, this);
  }
  getBillingFrequencies() {
    return _classPrivateFieldGet(_billingFrequencies, this);
  }
}
function _createBillingFrequencies(month) {
  for (let i = 12; i <= month; i++) {
    let text = "Every ".concat(i, " Months");
    _classPrivateFieldGet(_billingFrequencies, this).set(text, "".concat(i));
  }
}
export class JibbPilot extends JibbPlan {
  constructor() {
    super("JIBB-Pilot", 0);
    super.getBillingFrequencies().set('Every 3 Months', "3");
  }
}
export class JibbRoom extends JibbPlan {
  constructor() {
    super("JIBB-Room", 60);
  }
}
export class JibbUser extends JibbPlan {
  constructor() {
    super("JIBB-User", 60);
  }
}
export class JibbStarterPack extends JibbPlan {
  constructor() {
    super("JIBB-Starter-Pack", 60);
  }
}
export class JibbPlans {
  constructor() {
    this.starterPack = new JibbStarterPack();
    this.jibbRoom = new JibbRoom();
    this.jibbUser = new JibbUser();
    this.jibbPilot = new JibbPilot();
  }
  getAllPlan() {
    let pList = [];
    pList.push(this.starterPack);
    pList.push(this.jibbRoom);
    pList.push(this.jibbUser);
    pList.push(this.jibbPilot);
    return pList;
  }
  getAllPlanNames() {
    let pList = [];
    pList.push(this.starterPack.getPlanName());
    pList.push(this.jibbRoom.getPlanName());
    pList.push(this.jibbUser.getPlanName());
    pList.push(this.jibbPilot.getPlanName());
    return pList;
  }
  getPlan(planName) {
    switch (planName) {
      case this.starterPack.getPlanName():
        return this.starterPack;
      case this.jibbRoom.getPlanName():
        return this.jibbRoom;
      case this.jibbUser.getPlanName():
        return this.jibbUser;
      case this.jibbPilot.getPlanName():
        return this.jibbPilot;
      default:
        return undefined;
    }
  }
}
class StandardClaims {
  constructor(token) {
    this.token = token;
    this.claims = jwt_decode(token);
    this.expiryTime = new Date(this.claims.exp * 1000);
  }
  getSecondsUntilExpiry() {
    const seconds = (this.expiryTime.getTime() - Date.now()) / 1000;
    return Number.isFinite(seconds) ? Math.max(0, seconds) : 0;
  }
  getHoursUntilExpiry() {
    let sec = this.getSecondsUntilExpiry();
    return Math.floor(sec / 3600);
  }
  isExpired() {
    return this.getSecondsUntilExpiry() <= 60;
  }
}
export class MeetingClaims extends StandardClaims {
  constructor(token) {
    super(token);
    this.ownerId = this.claims.data.owner_id;
    this.meetindId = this.claims.data.meeting_id;
    this.title = this.claims.data.title;
    this.capacity = this.claims.data.capacity;
    this.permission = this.claims.data.permission;
    this.isTemporary = this.claims.data.is_temporary;
  }
}
export class UserClaims extends StandardClaims {
  constructor(token) {
    var _this$claims$data, _this$claims$data2, _this$claims$data3;
    super(token);
    this.email = (_this$claims$data = this.claims.data) === null || _this$claims$data === void 0 ? void 0 : _this$claims$data.email;
    this.userId = this.claims.sub;
    this.organizationId = (_this$claims$data2 = this.claims.data) === null || _this$claims$data2 === void 0 ? void 0 : _this$claims$data2.organization_id;
    this.organizationName = (_this$claims$data3 = this.claims.data) === null || _this$claims$data3 === void 0 ? void 0 : _this$claims$data3.organization_name;
  }
  getUserId() {
    return this.userId;
  }
}
export const ShareMeetingStatus = Object.freeze({
  UNKNOWN_SHARE_MEETING_STATUS: 0,
  SENT: 1,
  PENDING_BOT: 2,
  CURRENT_MEETING_NOT_FOUND: 3,
  MICROSOFT_TEAM_NOT_CONNECTED: 4
});
export const ShareMeetingStatusName = Object.freeze(Object.fromEntries(Object.entries(ShareMeetingStatus).map(_ref => {
  let _ref2 = _slicedToArray(_ref, 2),
    k = _ref2[0],
    v = _ref2[1];
  return [v, k];
})));
export const ShareMeetingStatusCode = ShareMeetingStatus;
export function normalizeShareMeetingStatus(input) {
  if (typeof input === "number" && Number.isFinite(input)) return input;
  if (typeof input === "string") {
    const code = ShareMeetingStatus[input];
    if (typeof code === "number") return code;
    const upper = input.toUpperCase();
    const code2 = ShareMeetingStatus[upper];
    if (typeof code2 === "number") return code2;
  }
  return ShareMeetingStatus.UNKNOWN_SHARE_MEETING_STATUS;
}