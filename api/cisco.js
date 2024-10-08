import "core-js/modules/es.json.stringify.js";
import "core-js/modules/es.promise.js";
import { Config } from "../config.js";
export async function getMacro(_ref) {
  let {
    apiKey,
    selectInputs,
    cameraControl,
    mtr
  } = _ref;
  let body = {
    api_key: apiKey,
    select_inputs: selectInputs,
    camera_controls: cameraControl,
    mtr: mtr
  };
  return httpPost("".concat(Config.apiBaseURL, "/v1/cisco/macro"), body);
}
export async function getJSSDK() {
  return httpGet("".concat(Config.apiBaseURL, "/v1/cisco/jssdk"));
}
export async function getManifest() {
  return httpGet("".concat(Config.apiBaseURL, "/v1/cisco/integration/manifest"));
}
function httpGet(theUrl) {
  let xmlHttp = new XMLHttpRequest();
  xmlHttp.open("GET", theUrl, false);
  xmlHttp.send(null);
  return xmlHttp.responseText;
}
function httpPost(theUrl, body) {
  let xmlHttp = new XMLHttpRequest();
  xmlHttp.open("POST", theUrl, false);
  xmlHttp.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
  xmlHttp.send(JSON.stringify(body));
  return xmlHttp.responseText;
}