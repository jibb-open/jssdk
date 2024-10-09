import "core-js/modules/es.global-this.js";
import "core-js/modules/es.promise.js";
let http = globalThis.http;
const initAxios = () => {
  import("./http.axios.js").then(() => {
    http = globalThis.http;
  });
};
export { http, initAxios };