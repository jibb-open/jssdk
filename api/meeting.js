"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.authorizeShortMeeting=authorizeShortMeeting,exports.createMeeting=createMeeting,exports.createShare=createShare,exports.createShortUrl=createShortUrl,exports.createTemporaryShare=createTemporaryShare,exports.deleteMeeting=deleteMeeting,exports.deleteMeetingImages=deleteMeetingImages,exports.deleteShare=deleteShare,exports.endMeeting=endMeeting,exports.getFullUrl=getFullUrl,exports.getIncomingShares=getIncomingShares,exports.getMeetingDetails=getMeetingDetails,exports.getMeetingImage=getMeetingImage,exports.getMeetingImages=getMeetingImages,exports.getMeetingList=getMeetingList,exports.getMeetingToken=getMeetingToken,exports.getMeetingTokenFromTempShareId=getMeetingTokenFromTempShareId,exports.getOutgoingShares=getOutgoingShares,exports.isMeetingOwner=isMeetingOwner,exports.startMeeting=startMeeting,exports.updateMeeting=updateMeeting,exports.updateShare=updateShare,require("core-js/modules/es.promise.js"),require("core-js/modules/es.json.stringify.js");var _config=require("../config.js"),_auth=require("./auth.js"),_index=require("../utils/logger/index.js"),_exceptions=require("../types/exceptions.js"),_index2=require("../utils/http/index.js"),_types=require("../types/types.js");async function createMeeting(a){let{title:b,isTemporary:c,capacity:d,meetingType:e}=a,f={"Content-Type":"application/json",Accept:"application/json","x-jibb-user-jwt":await(0,_auth.getUserToken)()},g={title:b||"",isTemporary:c||!1,capacity:d||2,meetingType:e||_types.MeetingTypes.DEFAULT},h=await _index2.http.post("".concat(_config.Config.apiBaseURL,"/v1/meetings"),g,f);return h.data.meetingId}async function createTemporaryShare(a){let{meetingId:b,permission:c,expiry:d,auxData:e}=a,f={"Content-Type":"application/json",Accept:"application/json","x-jibb-user-jwt":await(0,_auth.getUserToken)()},g=await _index2.http.post("".concat(_config.Config.apiBaseURL,"/v1/meetings/").concat(b,"/temp-shares"),{permission:c,expiry:{seconds:d||3600},auxilary:e||{}},f);return g.data.shareId}async function getMeetingTokenFromTempShareId(a){let{meetingId:b,shareId:c}=a,d=await _index2.http.get("".concat(_config.Config.apiBaseURL,"/v1/meetings/").concat(b,"/temp-shares/").concat(c),{"Content-Type":"application/json",Accept:"application/json"});return d.data.token}async function deleteMeetingImages(a){let{meetingId:b,mtoken:c}=a,d={"Content-Type":"application/json",Accept:"application/json","x-jibb-user-jwt":await(0,_auth.getUserToken)(),"x-jibb-meeting-jwt":c};return _index2.http.delete("".concat(_config.Config.apiBaseURL,"/v1/meetings/").concat(b,"/images"),d)}async function getMeetingImages(a){let{meetingId:b,meetingToken:c}=a,d={"Content-Type":"application/json",Accept:"application/json","x-jibb-user-jwt":await(0,_auth.getUserToken)(),"x-jibb-meeting-jwt":c},e=await _index2.http.get("".concat(_config.Config.apiBaseURL,"/v1/meetings/").concat(b,"/images"),d);return e.data}async function getMeetingImage(a){let{meetingId:b,meetingToken:c,imageId:d}=a,e={"Content-Type":"application/json",Accept:"application/json","x-jibb-user-jwt":await(0,_auth.getUserToken)(),"x-jibb-meeting-jwt":c},f=await _index2.http.get("".concat(_config.Config.apiBaseURL,"/v1/meetings/").concat(b,"/images/").concat(d),e);return f.data}async function startMeeting(a){let{meetingId:b,meetingToken:c}=a;try{return await _index2.http.post("".concat(_config.Config.apiBaseURL,"/v1/meetings/").concat(b,"/actions/start"),{},{"Content-Type":"application/json",Accept:"application/json","x-jibb-meeting-jwt":c})}catch(a){var d;if(404==(null===a||void 0===a||null===(d=a.response)||void 0===d?void 0:d.status))throw new _exceptions.NotFoundError;else throw a}}async function endMeeting(a){let{meetingId:b,meetingToken:c}=a;return _index2.http.post("".concat(_config.Config.apiBaseURL,"/v1/meetings/").concat(b,"/actions/end"),{},{"Content-Type":"application/json",Accept:"application/json","x-jibb-meeting-jwt":c})}async function deleteMeeting(a){let b={"Content-Type":"application/json",Accept:"application/json","x-jibb-user-jwt":await(0,_auth.getUserToken)()};return _index2.http.delete("".concat(_config.Config.apiBaseURL,"/v1/meetings/").concat(a),b)}async function getMeetingToken(a){let b,{meetingId:c,permission:d,expiry:e=3600}=a;try{b=await(0,_auth.getUserToken)()}catch(a){throw _index.logger.error({err:a}),new _exceptions.PermissionDeniedError("user is not authenticated")}try{let a={"Content-Type":"application/json",Accept:"application/json","x-jibb-user-jwt":b},f=await _index2.http.post("".concat(_config.Config.apiBaseURL,"/v1/meetings/").concat(c,"/token"),{permission:d,expiry:{seconds:e}},a);return f.data.token}catch(a){var f;if(404==(null===a||void 0===a||null===(f=a.response)||void 0===f?void 0:f.status))throw new _exceptions.NotFoundError("meeting not found");else throw a}}async function getMeetingList(a){let b={"Content-Type":"application/json",Accept:"application/json","x-jibb-user-jwt":await(0,_auth.getUserToken)()};void 0!==a&&(b["x-jibb-pagination"]=JSON.stringify(a));let c=await _index2.http.get("".concat(_config.Config.apiBaseURL,"/v1/meetings"),b);return a=c.headers["x-jibb-pagination"],a=a&&JSON.parse(a),{meetings:c.data.meetings,pagination:a}}async function getMeetingDetails(a){let b={"Content-Type":"application/json",Accept:"application/json","x-jibb-user-jwt":await(0,_auth.getUserToken)()},c=await _index2.http.get("".concat(_config.Config.apiBaseURL,"/v1/meetings/").concat(a),b);return c.data}async function updateMeeting(a){let{meetingId:b,title:c,capacity:d}=a,e={"Content-Type":"application/json",Accept:"application/json","x-jibb-user-jwt":await(0,_auth.getUserToken)()},f={};return c&&(f.title=c),d&&(f.capacity=d),_index2.http.post("".concat(_config.Config.apiBaseURL,"/v1/meetings/").concat(b),f,e)}async function isMeetingOwner(a){try{let b=new _types.MeetingClaims(a),c=new _types.UserClaims(await(0,_auth.getUserToken)());return c.userId===b.ownerId}catch(a){return!1}}async function createShare(a){let{email:b,meetingId:c,permission:d,meetingToken:e}=a,f={"Content-Type":"application/json",Accept:"application/json","x-jibb-user-jwt":await(0,_auth.getUserToken)(),"x-jibb-meeting-jwt":e},g=await _index2.http.post("".concat(_config.Config.apiBaseURL,"/v1/meetings/").concat(c,"/shares"),{email:b,permission:d},f);return g.data}async function getIncomingShares(){let a={"Content-Type":"application/json",Accept:"application/json","x-jibb-user-jwt":await(0,_auth.getUserToken)()},b=await _index2.http.get("".concat(_config.Config.apiBaseURL,"/v1/meetings/shares?incoming=true"),a);return b.data.shares}async function getOutgoingShares(){let a={"Content-Type":"application/json",Accept:"application/json","x-jibb-user-jwt":await(0,_auth.getUserToken)()},b=await _index2.http.get("".concat(_config.Config.apiBaseURL,"/v1/meetings/shares?outgoing=true"),a);return b.data.shares}async function deleteShare(a){let b={"Content-Type":"application/json",Accept:"application/json","x-jibb-user-jwt":await(0,_auth.getUserToken)()};return _index2.http.delete("".concat(_config.Config.apiBaseURL,"/v1/meetings/shares/").concat(a),b)}async function updateShare(a){let{shareId:b,permission:c}=a,d={"Content-Type":"application/json",Accept:"application/json","x-jibb-user-jwt":await(0,_auth.getUserToken)()};return _index2.http.patch("".concat(_config.Config.apiBaseURL,"/v1/meetings/shares/").concat(b),{permission:c},d)}async function createShortUrl(a){let{meetingToken:b,url:c}=a,d={"Content-Type":"application/json",Accept:"application/json","x-jibb-user-jwt":await(0,_auth.getUserToken)(),"x-jibb-meeting-jwt":b},e=await _index2.http.post("".concat(_config.Config.apiBaseURL,"/v1/meetings/url-shortener"),{url:c},d);return e.data}async function getFullUrl(a){let b=await _index2.http.get("".concat(_config.Config.apiBaseURL,"/v1/meetings/url-shortener/").concat(a),{"Content-Type":"application/json",Accept:"application/json"});return b.data.fullUrl}async function authorizeShortMeeting(a){let{fullUrl:b,password:c}=a,d=await _index2.http.post("".concat(_config.Config.apiBaseURL,"/v1/meetings/url-shortener/auth"),{fullUrl:b,password:c},{"Content-Type":"application/json",Accept:"application/json"});return!(200!=d.status)}