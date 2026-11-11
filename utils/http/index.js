import "core-js/modules/es.global-this.js";
import "core-js/modules/es.object.from-entries.js";
import "core-js/modules/es.promise.js";
import "core-js/modules/web.dom-collections.iterator.js";
let http = globalThis.http;
let axiosReady;
const initAxios = () => {
  if (!axiosReady) {
    axiosReady = import("./http.axios.js").then(_ref => {
      let httpClient = _ref.httpClient;
      http = httpClient;
      return httpClient;
    });
    http = Object.fromEntries(["get", "post", "patch", "put", "delete"].map(method => [method, async function () {
      return (await axiosReady)[method](...arguments);
    }]));
  }
  return axiosReady;
};
export { http, initAxios };