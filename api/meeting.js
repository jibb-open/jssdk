import "core-js/modules/es.json.stringify.js";
import "core-js/modules/es.promise.js";
import { Config } from "../config.js";
import { getUserToken } from "./auth.js";
import { logger } from "../utils/logger/index.js";
import { InvalidArgumentError, NotFoundError, PermissionDeniedError } from "../types/exceptions.js";
import { http } from "../utils/http/index.js";
import { UserClaims, MeetingClaims, MeetingTypes } from "../types/types.js";
export async function createMeeting(_ref) {
  let {
    title,
    isTemporary,
    capacity,
    meetingType
  } = _ref;
  let headers = {
    "Content-Type": "application/json",
    Accept: "application/json",
    "x-jibb-user-jwt": await getUserToken()
  };
  let body = {
    title: title || "",
    isTemporary: isTemporary || false,
    capacity: capacity || 2,
    meetingType: meetingType || MeetingTypes.DEFAULT
  };
  let response = await http.post("".concat(Config.apiBaseURL, "/v1/meetings"), body, headers);
  return response.data.meetingId;
}
export async function createTemporaryShare(_ref2) {
  let {
    meetingId,
    permission,
    expiry,
    auxData
  } = _ref2;
  let headers = {
    "Content-Type": "application/json",
    Accept: "application/json",
    "x-jibb-user-jwt": await getUserToken()
  };
  let body = {
    permission: permission,
    expiry: {
      seconds: expiry || 3600
    },
    auxilary: auxData || {}
  };
  let response = await http.post("".concat(Config.apiBaseURL, "/v1/meetings/").concat(meetingId, "/temp-shares"), body, headers);
  return response.data.shareId;
}
export async function getMeetingTokenFromTempShareId(_ref3) {
  let {
    meetingId,
    shareId
  } = _ref3;
  let headers = {
    "Content-Type": "application/json",
    Accept: "application/json"
  };
  let response = await http.get("".concat(Config.apiBaseURL, "/v1/meetings/").concat(meetingId, "/temp-shares/").concat(shareId), headers);
  return response.data.token;
}
export async function deleteMeetingImages(_ref4) {
  let {
    meetingId,
    mtoken
  } = _ref4;
  let headers = {
    "Content-Type": "application/json",
    Accept: "application/json",
    "x-jibb-user-jwt": await getUserToken(),
    "x-jibb-meeting-jwt": mtoken
  };
  return http.delete("".concat(Config.apiBaseURL, "/v1/meetings/").concat(meetingId, "/images"), headers);
}
export async function getMeetingImages(_ref5) {
  let {
    meetingId,
    meetingToken
  } = _ref5;
  let headers = {
    "Content-Type": "application/json",
    Accept: "application/json",
    "x-jibb-user-jwt": await getUserToken(),
    "x-jibb-meeting-jwt": meetingToken
  };
  let response = await http.get("".concat(Config.apiBaseURL, "/v1/meetings/").concat(meetingId, "/images"), headers);
  return response.data;
}
export async function getMeetingImage(_ref6) {
  let {
    meetingId,
    meetingToken,
    imageId
  } = _ref6;
  let headers = {
    "Content-Type": "application/json",
    Accept: "application/json",
    "x-jibb-user-jwt": await getUserToken(),
    "x-jibb-meeting-jwt": meetingToken
  };
  let response = await http.get("".concat(Config.apiBaseURL, "/v1/meetings/").concat(meetingId, "/images/").concat(imageId), headers);
  return response.data;
}
export async function startMeeting(_ref7) {
  let {
    meetingId,
    meetingToken
  } = _ref7;
  let headers = {
    "Content-Type": "application/json",
    Accept: "application/json",
    "x-jibb-meeting-jwt": meetingToken
  };
  try {
    let body = {};
    return await http.post("".concat(Config.apiBaseURL, "/v1/meetings/").concat(meetingId, "/actions/start"), body, headers);
  } catch (e) {
    var _e$response;
    if ((e === null || e === void 0 || (_e$response = e.response) === null || _e$response === void 0 ? void 0 : _e$response.status) == 404) throw new NotFoundError();else throw e;
  }
}
export async function endMeeting(_ref8) {
  let {
    meetingId,
    meetingToken
  } = _ref8;
  let headers = {
    "Content-Type": "application/json",
    Accept: "application/json",
    "x-jibb-meeting-jwt": meetingToken
  };
  let body = {};
  return http.post("".concat(Config.apiBaseURL, "/v1/meetings/").concat(meetingId, "/actions/end"), body, headers);
}
export async function deleteMeeting(meetingId) {
  let headers = {
    "Content-Type": "application/json",
    Accept: "application/json",
    "x-jibb-user-jwt": await getUserToken()
  };
  return http.delete("".concat(Config.apiBaseURL, "/v1/meetings/").concat(meetingId), headers);
}
export async function getMeetingToken(_ref9) {
  let {
    meetingId,
    permission,
    expiry = 3600
  } = _ref9;
  let userToken;
  try {
    userToken = await getUserToken();
  } catch (err) {
    logger.error({
      err
    });
    throw new PermissionDeniedError("user is not authenticated");
  }
  try {
    let headers = {
      "Content-Type": "application/json",
      Accept: "application/json",
      "x-jibb-user-jwt": userToken
    };
    let body = {
      permission: permission,
      expiry: {
        seconds: expiry
      }
    };
    let response = await http.post("".concat(Config.apiBaseURL, "/v1/meetings/").concat(meetingId, "/token"), body, headers);
    return response.data.token;
  } catch (err) {
    var _err$response;
    if ((err === null || err === void 0 || (_err$response = err.response) === null || _err$response === void 0 ? void 0 : _err$response.status) == 404) throw new NotFoundError("meeting not found");else throw err;
  }
}
export async function getMeetingList(pagination) {
  let headers = {
    "Content-Type": "application/json",
    Accept: "application/json",
    "x-jibb-user-jwt": await getUserToken()
  };
  if (pagination !== undefined) headers["x-jibb-pagination"] = JSON.stringify(pagination);
  let response = await http.get("".concat(Config.apiBaseURL, "/v1/meetings"), headers);
  pagination = response.headers["x-jibb-pagination"];
  pagination = pagination && JSON.parse(pagination);
  return {
    meetings: response.data.meetings,
    pagination: pagination
  };
}
export async function getMeetingDetails(meetingId) {
  let headers = {
    "Content-Type": "application/json",
    Accept: "application/json",
    "x-jibb-user-jwt": await getUserToken()
  };
  let response = await http.get("".concat(Config.apiBaseURL, "/v1/meetings/").concat(meetingId), headers);
  return response.data;
}
export async function updateMeeting(_ref10) {
  let {
    meetingId,
    title,
    capacity
  } = _ref10;
  let headers = {
    "Content-Type": "application/json",
    Accept: "application/json",
    "x-jibb-user-jwt": await getUserToken()
  };
  let body = {};
  if (title) {
    body["title"] = title;
  }
  if (capacity) {
    body["capacity"] = capacity;
  }
  return http.post("".concat(Config.apiBaseURL, "/v1/meetings/").concat(meetingId), body, headers);
}
export async function isMeetingOwner(meetingToken) {
  try {
    let meetingClaims = new MeetingClaims(meetingToken);
    let userClaims = new UserClaims(await getUserToken());
    return userClaims.userId === meetingClaims.ownerId;
  } catch (err) {
    return false;
  }
}
export async function createShare(_ref11) {
  let {
    email,
    meetingId,
    permission,
    meetingToken
  } = _ref11;
  let headers = {
    "Content-Type": "application/json",
    Accept: "application/json",
    "x-jibb-user-jwt": await getUserToken(),
    "x-jibb-meeting-jwt": meetingToken
  };
  let body = {
    email: email,
    permission: permission
  };
  let response = await http.post("".concat(Config.apiBaseURL, "/v1/meetings/").concat(meetingId, "/shares"), body, headers);
  return response.data;
}
export async function getIncomingShares() {
  let headers = {
    "Content-Type": "application/json",
    Accept: "application/json",
    "x-jibb-user-jwt": await getUserToken()
  };
  let response = await http.get("".concat(Config.apiBaseURL, "/v1/meetings/shares?incoming=true"), headers);
  return response.data.shares;
}
export async function getOutgoingShares() {
  let headers = {
    "Content-Type": "application/json",
    Accept: "application/json",
    "x-jibb-user-jwt": await getUserToken()
  };
  let response = await http.get("".concat(Config.apiBaseURL, "/v1/meetings/shares?outgoing=true"), headers);
  return response.data.shares;
}
export async function deleteShare(shareId) {
  let headers = {
    "Content-Type": "application/json",
    Accept: "application/json",
    "x-jibb-user-jwt": await getUserToken()
  };
  return http.delete("".concat(Config.apiBaseURL, "/v1/meetings/shares/").concat(shareId), headers);
}
export async function updateShare(_ref12) {
  let {
    shareId,
    permission
  } = _ref12;
  let headers = {
    "Content-Type": "application/json",
    Accept: "application/json",
    "x-jibb-user-jwt": await getUserToken()
  };
  let body = {
    permission: permission
  };
  return http.patch("".concat(Config.apiBaseURL, "/v1/meetings/shares/").concat(shareId), body, headers);
}
export async function createShortUrl(_ref13) {
  let {
    meetingToken,
    url
  } = _ref13;
  let headers = {
    "Content-Type": "application/json",
    Accept: "application/json",
    "x-jibb-user-jwt": await getUserToken(),
    "x-jibb-meeting-jwt": meetingToken
  };
  let body = {
    url: url
  };
  let response = await http.post("".concat(Config.apiBaseURL, "/v1/meetings/url-shortener"), body, headers);
  return response.data;
}
export async function getFullUrl(hashKey) {
  let headers = {
    "Content-Type": "application/json",
    Accept: "application/json"
  };
  let response = await http.get("".concat(Config.apiBaseURL, "/v1/meetings/url-shortener/").concat(hashKey), headers);
  return response.data.fullUrl;
}
export async function authorizeShortMeeting(_ref14) {
  let {
    hashKey,
    password
  } = _ref14;
  let headers = {
    "Content-Type": "application/json",
    Accept: "application/json"
  };
  let body = {
    password: password
  };
  let response = await http.post("".concat(Config.apiBaseURL, "/v1/meetings/url-shortener/auth/").concat(hashKey), body, headers);
  return response.status == 200 ? true : false;
}