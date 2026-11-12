function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == typeof i ? i : i + ""; }
function _toPrimitive(t, e) { if ("object" != typeof t || !t) return t; var r; if ("undefined" != typeof Symbol && void 0 !== (r = t[Symbol.toPrimitive])) { var i = r.call(t, e || "default"); if ("object" != typeof i) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === e ? String : Number)(t); }
import "core-js/modules/es.symbol.description.js";
import "core-js/modules/es.global-this.js";
import "core-js/modules/es.promise.js";
import "core-js/modules/esnext.iterator.constructor.js";
import "core-js/modules/esnext.iterator.filter.js";
import "core-js/modules/esnext.iterator.for-each.js";
import axios from "axios";
class HttpClient {
  async get(url, headers) {
    let options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
    return axios.get(url, _objectSpread(_objectSpread({}, options), {}, {
      headers
    }));
  }
  async post(url) {
    let body = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
    let headers = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
    return axios.post(url, body, {
      headers: headers
    });
  }
  async patch(url) {
    let body = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
    let headers = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
    return axios.patch(url, body, {
      headers: headers
    });
  }
  async put(url) {
    let body = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
    let headers = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
    return axios.put(url, body, {
      headers: headers
    });
  }
  async delete(url) {
    let headers = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
    return axios.delete(url, {
      headers: headers
    });
  }
}
export const httpClient = new HttpClient();
globalThis.http = httpClient;