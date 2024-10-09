import "core-js/modules/es.promise.js";
import "core-js/modules/web.dom-collections.iterator.js";
import { Config } from "../config.js";
import { AccessLevel, UserClaims } from "../types/types.js";
import { http } from "../utils/http/index.js";
let _userClaims = new Map();
let _apiKey = undefined;
let _getIdToken = async () => {
  throw new Error("not implemented");
};
export function configure(_ref) {
  let {
    apiKey,
    getIdToken
  } = _ref;
  if (apiKey) _apiKey = apiKey;
  if (getIdToken) _getIdToken = getIdToken;
  _userClaims.clear();
}
export function setUserToken(token) {
  let accessLevel = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : AccessLevel.USER;
  if (!token) return;
  let c = new UserClaims(token);
  if (!c.isExpired()) _userClaims.set(accessLevel, c);
}
export async function getUserClaims() {
  return getUserToken().then(_token => {
    return _userClaims.get(AccessLevel.USER);
  });
}
export async function getUserToken() {
  let {
    minExpiry,
    accessLevel
  } = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  minExpiry = minExpiry || 30 * 60;
  accessLevel = accessLevel || AccessLevel.USER;
  let claim = _userClaims.get(accessLevel);
  let refresh = false;
  let exp = claim ? claim.getSecondsUntilExpiry() : 0;
  if (exp < 60) {
    claim = undefined;
    refresh = true;
  } else if (exp < minExpiry) refresh = true;
  if (refresh) {
    return _refreshUserToken(accessLevel).then(token => {
      setUserToken(token, accessLevel);
      return token;
    }).catch(_err => {
      if (claim) return claim.token;else throw _err;
    });
  } else {
    if (claim) return claim.token;else throw new Error("could not create user token");
  }
}
export function logout() {
  _apiKey = undefined;
  _userClaims.clear();
}
export async function generateAPIKey() {
  let headers = {
    "Content-Type": "application/json",
    Accept: "application/json",
    "x-jibb-user-jwt": await getUserToken()
  };
  let response = await http.get("".concat(Config.apiBaseURL, "/v1/auth/apikey"), headers);
  return response.data.apiKey;
}
export async function generateCustomAuthPassword() {
  let headers = {
    "Content-Type": "application/json",
    Accept: "application/json",
    "x-jibb-id-jwt": await _getIdToken()
  };
  let response = await http.get("".concat(Config.apiBaseURL, "/v1/auth/custom"), headers);
  return response.data.password;
}
async function _getUserTokenFromApiKey(accessLevel) {
  let headers = {
    "Content-Type": "application/json",
    Accept: "application/json"
  };
  let body = {
    api_key: _apiKey
  };
  let url;
  switch (accessLevel) {
    case AccessLevel.ADMIN:
      url = "".concat(Config.apiBaseURL, "/v1/admin/auth/token");
      break;
    case AccessLevel.SUPERADMIN:
      url = "".concat(Config.apiBaseURL, "/v1/superadmin/auth/token");
      break;
    default:
      url = "".concat(Config.apiBaseURL, "/v1/auth/token");
      break;
  }
  let response = await http.post(url, body, headers);
  return response.data.token;
}
async function _getUserTokenFromIDToken(accessLevel) {
  let headers = {
    "Content-Type": "application/json",
    Accept: "application/json",
    "x-jibb-id-jwt": await _getIdToken()
  };
  let body = {};
  let url;
  switch (accessLevel) {
    case AccessLevel.ADMIN:
      url = "".concat(Config.apiBaseURL, "/v1/admin/auth/token");
      break;
    case AccessLevel.SUPERADMIN:
      url = "".concat(Config.apiBaseURL, "/v1/superadmin/auth/token");
      break;
    default:
      url = "".concat(Config.apiBaseURL, "/v1/auth/token");
      break;
  }
  let response = await http.post(url, body, headers);
  return response.data.token;
}
async function _refreshUserToken(accessLevel) {
  if (_apiKey) return _getUserTokenFromApiKey(accessLevel);
  return _getUserTokenFromIDToken(accessLevel);
}