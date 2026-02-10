import "core-js/modules/es.promise.js";
import { Config } from "../config.js";
import { getUserToken } from "./auth.js";
import { http } from "../utils/http/index.js";
export function startRecording() {
  try {
    let options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {
      meetingToken,
      interval,
      sensivityLevel,
      alternativeEmail,
      deviceSerialNumber
    };
    return async function () {
      let meetingToken = options.meetingToken;
      let interval = (options === null || options === void 0 ? void 0 : options.interval) || 0;
      let sensivityLevel = (options === null || options === void 0 ? void 0 : options.sensivityLevel) || 0;
      let altEmail = (options === null || options === void 0 ? void 0 : options.alternativeEmail) || "";
      let deviceSerialNumber = (options === null || options === void 0 ? void 0 : options.deviceSerialNumber) || "";
      let headers = {
        "Content-Type": "application/json",
        Accept: "application/json",
        "x-jibb-user-jwt": await getUserToken(),
        "x-jibb-meeting-jwt": meetingToken
      };
      let body = {
        write_interval: interval,
        level: sensivityLevel,
        alternative_email: altEmail,
        device_serial_number: deviceSerialNumber
      };
      let response = await http.post("".concat(Config.apiBaseURL, "/v1/meetings/recordings/start"), body, headers);
      return response.data;
    }();
  } catch (e) {
    return Promise.reject(e);
  }
}
export async function stopRecording() {
  let headers = {
    "Content-Type": "application/json",
    Accept: "application/json",
    "x-jibb-user-jwt": await getUserToken()
  };
  let body = {};
  let response = await http.post("".concat(Config.apiBaseURL, "/v1/meetings/recordings/stop"), body, headers);
  return response.data;
}
export async function takeSnapshot() {
  let headers = {
    "Content-Type": "application/json",
    Accept: "application/json",
    "x-jibb-user-jwt": await getUserToken()
  };
  let body = {};
  let response = await http.post("".concat(Config.apiBaseURL, "/v1/meetings/recordings/snapshot"), body, headers);
  return response.data;
}