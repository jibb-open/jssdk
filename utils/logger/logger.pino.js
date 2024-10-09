import Pino from "pino";
let logger = new Pino({
  browser: {
    asObject: false
  },
  timestamp: false,
  level: "warn"
});
logger.setLevel = level => {
  logger.level = level;
};
export { logger };