import * as WebexBot from "./webexbot.js";
import * as Meeting from "./meeting.js";
import * as User from "./user.js";
import * as Auth from "./auth.js";
import * as EventBus from "./eventbus.js";
import * as Recording from "./recording.js";
import { Whiteboard } from "./whiteboard.js";
import { initPinoLogger } from "../utils/logger/index.js";
import { initAxios } from "../utils/http/index.js";
initPinoLogger();
initAxios();
export { WebexBot, Meeting, Auth, User, Recording, Whiteboard, EventBus };
export default {
  WebexBot,
  Meeting,
  Auth,
  User,
  Recording,
  Whiteboard,
  EventBus
};