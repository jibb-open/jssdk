class EmptyLoggerr {
  error() {}
  debug() {}
  warn() {}
  info() {}
  setLevel() {}
}
let logger = new EmptyLoggerr();
export { logger };