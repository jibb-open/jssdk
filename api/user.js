import "core-js/modules/es.promise.js";
import { Config } from "../config.js";
import { getUserToken } from "./auth.js";
import { http } from "../utils/http/index.js";
export async function getUserInfo() {
  let headers = {
    "Content-Type": "application/json",
    Accept: "application/json",
    "x-jibb-user-jwt": await getUserToken()
  };
  let response = await http.get("".concat(Config.apiBaseURL, "/v1/users/me"), headers);
  return response.data;
}
export async function activateUser(orgId) {
  let headers = {
    "Content-Type": "application/json",
    Accept: "application/json",
    "x-jibb-user-jwt": await getUserToken()
  };
  let body = {
    organizationId: orgId
  };
  return http.post("".concat(Config.apiBaseURL, "/v1/users/activate"), body, headers);
}