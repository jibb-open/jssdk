import "core-js/modules/es.global-this.js";
import "core-js/modules/es.promise.js";
import axios from "axios";
class HttpClient {
  async get(url, headers) {
    let options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
    options.headers = headers;
    return axios.get(url, options);
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
globalThis.http = new HttpClient();