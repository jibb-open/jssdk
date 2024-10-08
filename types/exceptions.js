export class NotFoundError extends Error {
  constructor(message) {
    super(message);
    this.name = "NotFoundError";
  }
}
export class NotStartedError extends Error {
  constructor(message) {
    super(message);
    this.name = "NotStartedError";
  }
}
export class NotConnectedError extends Error {
  constructor(message) {
    super(message);
    this.name = "NotConnectedError";
  }
}
export class AlreadyStartedError extends Error {
  constructor(message) {
    super(message);
    this.name = "AlreadyStartedError";
  }
}
export class AlreadyConnectedError extends Error {
  constructor(message) {
    super(message);
    this.name = "AlreadyConnectedError";
  }
}
export class PermissionDeniedError extends Error {
  constructor(message) {
    super(message);
    this.name = "PermissionDeniedError";
  }
}
export class InvalidArgumentError extends Error {
  constructor(message) {
    super(message);
    this.name = "InvalidArgumentError";
  }
}
export class InternalError extends Error {
  constructor(code, reason) {
    super(reason);
    this.code = code;
    this.name = "InternalError";
  }
}
export class SessionTimeoutError extends Error {
  constructor(message) {
    super(message);
    this.name = "SessionTimeoutError";
  }
}
export class TooManyConnectionsError extends Error {
  constructor(message) {
    super(message);
    this.name = "TooManyConnectionsError";
  }
}
export class GenericError extends Error {
  constructor(code, reason) {
    super(reason);
    this.code = code;
    this.name = "GenericError";
  }
}