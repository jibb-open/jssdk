import "core-js/modules/es.promise.js";
import { getUserToken } from './auth.js';
import { Config } from '../config.js';
import { http } from "../utils/http/index.js";
export async function getCameraList(clientId) {
  let response = await http.get("".concat(Config.apiBaseURL, "/v1/eventbus/clients/").concat(clientId, "/cameras"), await _prepareRequestHeaders());
  return response.data.items;
}
export async function getCameraPreview(_ref) {
  let {
    cameraId,
    clientId
  } = _ref;
  let body = {
    source: {
      id: cameraId
    }
  };
  let response = await http.get("".concat(Config.apiBaseURL, "/v1/eventbus/clients/").concat(clientId, "/cameras/").concat(cameraId), await _prepareRequestHeaders());
  return response.data.image;
}
export async function startStream(_ref2) {
  let {
    meetingToken,
    surfaceType,
    cameraId,
    sipUri,
    flipLeftRight,
    flipUpDown,
    rotation,
    fixedCorners,
    clientId,
    customCorners,
    enableColor,
    enableEstimation
  } = _ref2;
  let request = {
    config: {
      surface_type: surfaceType
    },
    runtime_config: _makeRuntimeConfig({
      fixedCorners,
      flipLeftRight,
      flipUpDown,
      rotation,
      customCorners,
      enableColor,
      enableEstimation
    }),
    meeting_token: meetingToken
  };
  if (!cameraId && !sipUri) {
    return Promise.reject("Invalid request: either sipUri or cameraId should be specified");
  }
  if (cameraId && sipUri) {
    return Promise.reject("Invalid request: both sipUri (".concat(sipUri, ") and cameraId (").concat(sipUri, ") are specified"));
  } else if (sipUri) {
    request["sip_uri"] = sipUri;
  } else {
    request["camera"] = {
      id: cameraId
    };
  }
  let body = {
    start_request: request
  };
  return http.post("".concat(Config.apiBaseURL, "/v1/eventbus/clients/").concat(clientId, "/start"), body, await _prepareRequestHeaders());
}
export async function stopStream(clientId) {
  let body = {};
  return http.post("".concat(Config.apiBaseURL, "/v1/eventbus/").concat(clientId, "/stop"), body, await _prepareRequestHeaders());
}
export async function sendMessage(body) {
  return http.post("".concat(Config.apiBaseURL, "/v1/eventbus"), body, await _prepareRequestHeaders());
}
export async function setRuntimeConfig(_ref3) {
  let {
    flipLeftRight,
    flipUpDown,
    rotation,
    fixedCorners,
    customCorners,
    clientId,
    enableColor,
    enableEstimation
  } = _ref3;
  let body = {
    runtime_config_request: {
      runtime_config: _makeRuntimeConfig({
        fixedCorners,
        flipLeftRight,
        flipUpDown,
        rotation,
        customCorners,
        enableColor,
        enableEstimation
      })
    }
  };
  return http.post("".concat(Config.apiBaseURL, "/v1/eventbus/").concat(clientId, "/runtime_config"), body, await _prepareRequestHeaders());
}
export async function getClientStatusList() {
  let response = await http.get("".concat(Config.apiBaseURL, "/v1/eventbus/clients"), await _prepareRequestHeaders());
  return response.data.clients;
}
async function _prepareRequestHeaders() {
  return {
    "Content-Type": "application/json",
    Accept: "application/json",
    "x-jibb-user-jwt": await getUserToken()
  };
}
function _makeRuntimeConfig(_ref4) {
  let {
    fixedCorners,
    flipLeftRight,
    flipUpDown,
    rotation,
    customCorners,
    enableColor,
    enableEstimation
  } = _ref4;
  switch (rotation) {
    case 90:
      rotation = "1";
      break;
    case 180:
    case -180:
      rotation = "2";
      break;
    case -90:
    case 270:
      rotation = "3";
      break;
    case 0:
    case 360:
    default:
      rotation = "0";
      break;
  }
  return {
    custom_corners: customCorners || [],
    rotation: rotation,
    enable_color: enableColor || false,
    fixed_corners: fixedCorners,
    enable_estimation: enableEstimation || false,
    flip_up_down: flipUpDown || false,
    flip_left_right: flipLeftRight || false
  };
}