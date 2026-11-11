import "core-js/modules/es.promise.js";
import { Config } from '../config.js';
import { http } from "../utils/http/index.js";
export async function shareImage(_ref) {
  let meetingToken = _ref.meetingToken,
    message = _ref.message,
    data = _ref.data,
    mimeType = _ref.mimeType;
  let headers = {
    "Content-Type": "application/json",
    Accept: "application/json",
    "x-jibb-meeting-jwt": meetingToken
  };
  let body = {
    message: message,
    data: data,
    mimeType: mimeType
  };
  let response = await http.post("".concat(Config.apiBaseURL, "/v1/webexbot/message"), body, headers);
  return response.data;
}