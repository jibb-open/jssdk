"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.TooManyConnectionsError=exports.SessionTimeoutError=exports.PermissionDeniedError=exports.NotStartedError=exports.NotFoundError=exports.NotConnectedError=exports.InvalidArgumentError=exports.InternalError=exports.GenericError=exports.AlreadyStartedError=exports.AlreadyConnectedError=void 0;class NotFoundError extends Error{constructor(a){super(a),this.name="NotFoundError"}}exports.NotFoundError=NotFoundError;class NotStartedError extends Error{constructor(a){super(a),this.name="NotStartedError"}}exports.NotStartedError=NotStartedError;class NotConnectedError extends Error{constructor(a){super(a),this.name="NotConnectedError"}}exports.NotConnectedError=NotConnectedError;class AlreadyStartedError extends Error{constructor(a){super(a),this.name="AlreadyStartedError"}}exports.AlreadyStartedError=AlreadyStartedError;class AlreadyConnectedError extends Error{constructor(a){super(a),this.name="AlreadyConnectedError"}}exports.AlreadyConnectedError=AlreadyConnectedError;class PermissionDeniedError extends Error{constructor(a){super(a),this.name="PermissionDeniedError"}}exports.PermissionDeniedError=PermissionDeniedError;class InvalidArgumentError extends Error{constructor(a){super(a),this.name="InvalidArgumentError"}}exports.InvalidArgumentError=InvalidArgumentError;class InternalError extends Error{constructor(a,b){super(b),this.code=a,this.name="InternalError"}}exports.InternalError=InternalError;class SessionTimeoutError extends Error{constructor(a){super(a),this.name="SessionTimeoutError"}}exports.SessionTimeoutError=SessionTimeoutError;class TooManyConnectionsError extends Error{constructor(a){super(a),this.name="TooManyConnectionsError"}}exports.TooManyConnectionsError=TooManyConnectionsError;class GenericError extends Error{constructor(a,b){super(b),this.code=a,this.name="GenericError"}}exports.GenericError=GenericError;