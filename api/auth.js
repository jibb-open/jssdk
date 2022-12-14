"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.configure=configure,exports.generateAPIKey=generateAPIKey,exports.generateCustomAuthPassword=generateCustomAuthPassword,exports.getUserClaims=getUserClaims,exports.getUserToken=getUserToken,exports.logout=logout,exports.setUserToken=setUserToken,require("core-js/modules/web.dom-collections.iterator.js"),require("core-js/modules/es.promise.js");var _config=require("../config.js"),_types=require("../types/types.js"),_index=require("../utils/http/index.js");let _apiKey,_userClaims=new Map,_getIdToken=async()=>{throw new Error("not implemented")};function configure(a){let{apiKey:b,getIdToken:c}=a;b&&(_apiKey=b),c&&(_getIdToken=c),_userClaims.clear()}function setUserToken(a){let b=1<arguments.length&&arguments[1]!==void 0?arguments[1]:_types.AccessLevel.USER;if(a){let d=new _types.UserClaims(a);d.isExpired()||_userClaims.set(b,d)}}async function getUserClaims(){return getUserToken().then(()=>_userClaims.get(_types.AccessLevel.USER))}async function getUserToken(){let{minExpiry:a,accessLevel:b}=0<arguments.length&&void 0!==arguments[0]?arguments[0]:{},c=_userClaims.get(b),d=!1;a=a||1800,b=b||_types.AccessLevel.USER;let e=c?c.getSecondsUntilExpiry():0;if(60>e?(c=void 0,d=!0):e<a&&(d=!0),!0===d)return _refreshUserToken(b).then(a=>(setUserToken(a,b),a)).catch(()=>{if(c)return c.token;throw new Error("unable to create user token")});if(c)return Promise.resolve(c.token);throw new Error("could not create user token")}function logout(){_apiKey=void 0,_userClaims.clear()}async function generateAPIKey(){let a={"Content-Type":"application/json",Accept:"application/json","x-jibb-user-jwt":await getUserToken()},b=await _index.http.get("".concat(_config.Config.apiBaseURL,"/v1/auth/apikey"),a);return b.data.apiKey}async function generateCustomAuthPassword(){let a={"Content-Type":"application/json",Accept:"application/json","x-jibb-id-jwt":await _getIdToken()},b=await _index.http.get("".concat(_config.Config.apiBaseURL,"/v1/auth/custom"),a);return b.data.password}async function _getUserTokenFromApiKey(a){let b,c={api_key:_apiKey};switch(a){case _types.AccessLevel.ADMIN:b="".concat(_config.Config.apiBaseURL,"/v1/admin/auth/token");break;case _types.AccessLevel.SUPERADMIN:b="".concat(_config.Config.apiBaseURL,"/v1/superadmin/auth/token");break;default:b="".concat(_config.Config.apiBaseURL,"/v1/auth/token");}let d=await _index.http.post(b,c,{"Content-Type":"application/json",Accept:"application/json"});return d.data.token}async function _getUserTokenFromIDToken(a){let b,c={"Content-Type":"application/json",Accept:"application/json","x-jibb-id-jwt":await _getIdToken()};switch(a){case _types.AccessLevel.ADMIN:b="".concat(_config.Config.apiBaseURL,"/v1/admin/auth/token");break;case _types.AccessLevel.SUPERADMIN:b="".concat(_config.Config.apiBaseURL,"/v1/superadmin/auth/token");break;default:b="".concat(_config.Config.apiBaseURL,"/v1/auth/token");}let d=await _index.http.post(b,{},c);return d.data.token}async function _refreshUserToken(a){return _apiKey?_getUserTokenFromApiKey(a):_getUserTokenFromIDToken(a)}