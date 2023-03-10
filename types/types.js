"use strict";var _jwtDecode=_interopRequireDefault(require("jwt-decode"));Object.defineProperty(exports,"__esModule",{value:!0}),exports.UserType=exports.UserClaims=exports.MeetingTypes=exports.MeetingClaims=exports.AccessLevel=void 0;function _interopRequireDefault(a){return a&&a.__esModule?a:{default:a}}const MeetingTypes={DEFAULT:0,WHITEBOARD:1};exports.MeetingTypes=MeetingTypes;const AccessLevel={USER:"USER",ADMIN:"ADMIN",SUPERADMIN:"SUPERADMIN"};exports.AccessLevel=AccessLevel;const UserType={UNKNOWN:0,MEMBER:2,ADMIN:3,OWNER:4};exports.UserType=UserType;class StandardClaims{constructor(a){this.token=a,this.claims=(0,_jwtDecode.default)(a),this.expiryTime=new Date(1e3*this.claims.exp)}getSecondsUntilExpiry(){let a=this.expiryTime-Date.now();return 0>a?0:a}getHoursUntilExpiry(){let a=this.getSecondsUntilExpiry();return Math.floor(a/3600)}isExpired(){return 60>=this.getSecondsUntilExpiry()}}class MeetingClaims extends StandardClaims{constructor(a){super(a),this.ownerId=this.claims.data.owner_id,this.meetindId=this.claims.data.meeting_id,this.title=this.claims.data.title,this.capacity=this.claims.data.capacity,this.permission=this.claims.data.permission,this.isTemporary=this.claims.data.is_temporary}}exports.MeetingClaims=MeetingClaims;class UserClaims extends StandardClaims{constructor(a){var b,c;super(a),this.email=null===(b=this.claims.data)||void 0===b?void 0:b.email,this.userId=this.claims.sub,this.organizationId=null===(c=this.claims.data)||void 0===c?void 0:c.organization_id}getUserId(){return this.userId}}exports.UserClaims=UserClaims;