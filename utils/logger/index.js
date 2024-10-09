import "core-js/modules/es.promise.js";
import { logger as emptyLogger } from "./logger.empty.js";
let logger = emptyLogger;
const initPinoLogger = () => {
  import("./logger.pino.js").then(exports => {
    logger = exports.logger;
  });
};
export { logger, initPinoLogger };