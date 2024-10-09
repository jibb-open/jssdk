import "core-js/modules/es.global-this.js";
import "core-js/modules/es.promise.js";
import { EventBusConnection } from "./eventbus.js";
import { IPSA } from "./ipsa.js";
import { MeetingConnection } from "./meeting.js";
if ((globalThis === null || globalThis === void 0 ? void 0 : globalThis.WebSocket) == undefined) {
  import("isomorphic-ws").then(webSocket => {
    globalThis.WebSocket = webSocket.default;
  });
}
export { MeetingConnection, EventBusConnection, IPSA };