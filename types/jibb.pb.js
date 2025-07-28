import "core-js/modules/es.parse-int.js";
import "core-js/modules/es.regexp.to-string.js";
import $protobuf from "protobufjs/minimal.js";
const $Reader = $protobuf.Reader,
  $Writer = $protobuf.Writer,
  $util = $protobuf.util;
const $root = $protobuf.roots["default"] || ($protobuf.roots["default"] = {});
export const types = $root.types = (() => {
  const types = {};
  types.Code = function () {
    const valuesById = {},
      values = Object.create(valuesById);
    values[valuesById[0] = "SUCCESS"] = 0;
    values[valuesById[4000] = "ERR_IO"] = 4000;
    values[valuesById[4001] = "ERR_CLOSED"] = 4001;
    values[valuesById[4002] = "ERR_TIMEOUT"] = 4002;
    values[valuesById[4003] = "ERR_BAD_REQUEST"] = 4003;
    values[valuesById[4004] = "ERR_UNAUTHORIZED"] = 4004;
    values[valuesById[4005] = "ERR_INTERNAL"] = 4005;
    values[valuesById[4006] = "ERR_TOO_MANY_CONNECTIONS"] = 4006;
    values[valuesById[4008] = "ERR_OUT_OF_LICENSE"] = 4008;
    return values;
  }();
  types.ErrorLevel = function () {
    const valuesById = {},
      values = Object.create(valuesById);
    values[valuesById[0] = "DEBUG"] = 0;
    values[valuesById[1] = "INFO"] = 1;
    values[valuesById[2] = "WARNING"] = 2;
    values[valuesById[3] = "ERROR"] = 3;
    values[valuesById[4] = "CRITICAL"] = 4;
    return values;
  }();
  types.Error = function () {
    function Error(p) {
      if (p) for (var ks = Object.keys(p), i = 0; i < ks.length; ++i) if (p[ks[i]] != null) this[ks[i]] = p[ks[i]];
    }
    Error.prototype.level = 0;
    Error.prototype.code = 0;
    Error.prototype.reason = "";
    Error.create = function create(properties) {
      return new Error(properties);
    };
    Error.encode = function encode(m, w) {
      if (!w) w = $Writer.create();
      if (m.level != null && Object.hasOwnProperty.call(m, "level")) w.uint32(8).int32(m.level);
      if (m.code != null && Object.hasOwnProperty.call(m, "code")) w.uint32(16).int32(m.code);
      if (m.reason != null && Object.hasOwnProperty.call(m, "reason")) w.uint32(26).string(m.reason);
      return w;
    };
    Error.encodeDelimited = function encodeDelimited(message, writer) {
      return this.encode(message, writer).ldelim();
    };
    Error.decode = function decode(r, l) {
      if (!(r instanceof $Reader)) r = $Reader.create(r);
      var c = l === undefined ? r.len : r.pos + l,
        m = new $root.types.Error();
      while (r.pos < c) {
        var t = r.uint32();
        switch (t >>> 3) {
          case 1:
            m.level = r.int32();
            break;
          case 2:
            m.code = r.int32();
            break;
          case 3:
            m.reason = r.string();
            break;
          default:
            r.skipType(t & 7);
            break;
        }
      }
      return m;
    };
    Error.decodeDelimited = function decodeDelimited(reader) {
      if (!(reader instanceof $Reader)) reader = new $Reader(reader);
      return this.decode(reader, reader.uint32());
    };
    Error.verify = function verify(m) {
      if (typeof m !== "object" || m === null) return "object expected";
      if (m.level != null && m.hasOwnProperty("level")) {
        switch (m.level) {
          default:
            return "level: enum value expected";
          case 0:
          case 1:
          case 2:
          case 3:
          case 4:
            break;
        }
      }
      if (m.code != null && m.hasOwnProperty("code")) {
        switch (m.code) {
          default:
            return "code: enum value expected";
          case 0:
          case 4000:
          case 4001:
          case 4002:
          case 4003:
          case 4004:
          case 4005:
          case 4006:
          case 4008:
            break;
        }
      }
      if (m.reason != null && m.hasOwnProperty("reason")) {
        if (!$util.isString(m.reason)) return "reason: string expected";
      }
      return null;
    };
    Error.fromObject = function fromObject(d) {
      if (d instanceof $root.types.Error) return d;
      var m = new $root.types.Error();
      switch (d.level) {
        case "DEBUG":
        case 0:
          m.level = 0;
          break;
        case "INFO":
        case 1:
          m.level = 1;
          break;
        case "WARNING":
        case 2:
          m.level = 2;
          break;
        case "ERROR":
        case 3:
          m.level = 3;
          break;
        case "CRITICAL":
        case 4:
          m.level = 4;
          break;
      }
      switch (d.code) {
        case "SUCCESS":
        case 0:
          m.code = 0;
          break;
        case "ERR_IO":
        case 4000:
          m.code = 4000;
          break;
        case "ERR_CLOSED":
        case 4001:
          m.code = 4001;
          break;
        case "ERR_TIMEOUT":
        case 4002:
          m.code = 4002;
          break;
        case "ERR_BAD_REQUEST":
        case 4003:
          m.code = 4003;
          break;
        case "ERR_UNAUTHORIZED":
        case 4004:
          m.code = 4004;
          break;
        case "ERR_INTERNAL":
        case 4005:
          m.code = 4005;
          break;
        case "ERR_TOO_MANY_CONNECTIONS":
        case 4006:
          m.code = 4006;
          break;
        case "ERR_OUT_OF_LICENSE":
        case 4008:
          m.code = 4008;
          break;
      }
      if (d.reason != null) {
        m.reason = String(d.reason);
      }
      return m;
    };
    Error.toObject = function toObject(m, o) {
      if (!o) o = {};
      var d = {};
      if (o.defaults) {
        d.level = o.enums === String ? "DEBUG" : 0;
        d.code = o.enums === String ? "SUCCESS" : 0;
        d.reason = "";
      }
      if (m.level != null && m.hasOwnProperty("level")) {
        d.level = o.enums === String ? $root.types.ErrorLevel[m.level] : m.level;
      }
      if (m.code != null && m.hasOwnProperty("code")) {
        d.code = o.enums === String ? $root.types.Code[m.code] : m.code;
      }
      if (m.reason != null && m.hasOwnProperty("reason")) {
        d.reason = m.reason;
      }
      return d;
    };
    Error.prototype.toJSON = function toJSON() {
      return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };
    return Error;
  }();
  types.TriState = function () {
    const valuesById = {},
      values = Object.create(valuesById);
    values[valuesById[0] = "DEFAULT"] = 0;
    values[valuesById[1] = "ENABLE"] = 1;
    values[valuesById[2] = "DISABLE"] = 2;
    return values;
  }();
  types.SurfaceType = function () {
    const valuesById = {},
      values = Object.create(valuesById);
    values[valuesById[0] = "UNKNOWN"] = 0;
    values[valuesById[1] = "PAPER"] = 1;
    values[valuesById[2] = "WHITEBOARD"] = 2;
    return values;
  }();
  types.ClientType = function () {
    const valuesById = {},
      values = Object.create(valuesById);
    values[valuesById[0] = "UNKNOWN_CLIENT_TYPE"] = 0;
    values["ANY"] = 0;
    values[valuesById[1] = "IPSA"] = 1;
    values[valuesById[2] = "MOBILE"] = 2;
    values[valuesById[3] = "WEBAPP"] = 3;
    values[valuesById[4] = "COMPANION"] = 4;
    values["ipsa"] = 1;
    values["mobile"] = 2;
    values["webapp"] = 3;
    values["companion"] = 4;
    return values;
  }();
  types.ClientDetails = function () {
    function ClientDetails(p) {
      if (p) for (var ks = Object.keys(p), i = 0; i < ks.length; ++i) if (p[ks[i]] != null) this[ks[i]] = p[ks[i]];
    }
    ClientDetails.prototype.clientType = 0;
    ClientDetails.prototype.id = "";
    ClientDetails.prototype.name = "";
    ClientDetails.create = function create(properties) {
      return new ClientDetails(properties);
    };
    ClientDetails.encode = function encode(m, w) {
      if (!w) w = $Writer.create();
      if (m.clientType != null && Object.hasOwnProperty.call(m, "clientType")) w.uint32(8).int32(m.clientType);
      if (m.id != null && Object.hasOwnProperty.call(m, "id")) w.uint32(18).string(m.id);
      if (m.name != null && Object.hasOwnProperty.call(m, "name")) w.uint32(26).string(m.name);
      return w;
    };
    ClientDetails.encodeDelimited = function encodeDelimited(message, writer) {
      return this.encode(message, writer).ldelim();
    };
    ClientDetails.decode = function decode(r, l) {
      if (!(r instanceof $Reader)) r = $Reader.create(r);
      var c = l === undefined ? r.len : r.pos + l,
        m = new $root.types.ClientDetails();
      while (r.pos < c) {
        var t = r.uint32();
        switch (t >>> 3) {
          case 1:
            m.clientType = r.int32();
            break;
          case 2:
            m.id = r.string();
            break;
          case 3:
            m.name = r.string();
            break;
          default:
            r.skipType(t & 7);
            break;
        }
      }
      return m;
    };
    ClientDetails.decodeDelimited = function decodeDelimited(reader) {
      if (!(reader instanceof $Reader)) reader = new $Reader(reader);
      return this.decode(reader, reader.uint32());
    };
    ClientDetails.verify = function verify(m) {
      if (typeof m !== "object" || m === null) return "object expected";
      if (m.clientType != null && m.hasOwnProperty("clientType")) {
        switch (m.clientType) {
          default:
            return "clientType: enum value expected";
          case 0:
          case 0:
          case 1:
          case 2:
          case 3:
          case 4:
          case 1:
          case 2:
          case 3:
          case 4:
            break;
        }
      }
      if (m.id != null && m.hasOwnProperty("id")) {
        if (!$util.isString(m.id)) return "id: string expected";
      }
      if (m.name != null && m.hasOwnProperty("name")) {
        if (!$util.isString(m.name)) return "name: string expected";
      }
      return null;
    };
    ClientDetails.fromObject = function fromObject(d) {
      if (d instanceof $root.types.ClientDetails) return d;
      var m = new $root.types.ClientDetails();
      switch (d.clientType) {
        case "UNKNOWN_CLIENT_TYPE":
        case 0:
          m.clientType = 0;
          break;
        case "ANY":
        case 0:
          m.clientType = 0;
          break;
        case "IPSA":
        case 1:
          m.clientType = 1;
          break;
        case "MOBILE":
        case 2:
          m.clientType = 2;
          break;
        case "WEBAPP":
        case 3:
          m.clientType = 3;
          break;
        case "COMPANION":
        case 4:
          m.clientType = 4;
          break;
        case "ipsa":
        case 1:
          m.clientType = 1;
          break;
        case "mobile":
        case 2:
          m.clientType = 2;
          break;
        case "webapp":
        case 3:
          m.clientType = 3;
          break;
        case "companion":
        case 4:
          m.clientType = 4;
          break;
      }
      if (d.id != null) {
        m.id = String(d.id);
      }
      if (d.name != null) {
        m.name = String(d.name);
      }
      return m;
    };
    ClientDetails.toObject = function toObject(m, o) {
      if (!o) o = {};
      var d = {};
      if (o.defaults) {
        d.clientType = o.enums === String ? "UNKNOWN_CLIENT_TYPE" : 0;
        d.id = "";
        d.name = "";
      }
      if (m.clientType != null && m.hasOwnProperty("clientType")) {
        d.clientType = o.enums === String ? $root.types.ClientType[m.clientType] : m.clientType;
      }
      if (m.id != null && m.hasOwnProperty("id")) {
        d.id = m.id;
      }
      if (m.name != null && m.hasOwnProperty("name")) {
        d.name = m.name;
      }
      return d;
    };
    ClientDetails.prototype.toJSON = function toJSON() {
      return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };
    return ClientDetails;
  }();
  types.ContentType = function () {
    const valuesById = {},
      values = Object.create(valuesById);
    values[valuesById[0] = "UNKNOWN_TYPE"] = 0;
    values[valuesById[1] = "IMAGE_JPEG"] = 1;
    values[valuesById[2] = "IMAGE_WEBP"] = 2;
    return values;
  }();
  return types;
})();
export const jibb = $root.jibb = (() => {
  const jibb = {};
  jibb.ipsa = function () {
    const ipsa = {};
    ipsa.v1 = function () {
      const v1 = {};
      v1.StatusCode = function () {
        const valuesById = {},
          values = Object.create(valuesById);
        values[valuesById[0] = "SUCCESS"] = 0;
        values[valuesById[3] = "INVALID_INPUT"] = 3;
        values[valuesById[6] = "SESSION_BUSY"] = 6;
        values[valuesById[110] = "SURFACE_DETECTED"] = 110;
        values[valuesById[100] = "SURFACE_NOT_DETECTED"] = 100;
        values[valuesById[101] = "SURFACE_NOT_STABILIZED"] = 101;
        values[valuesById[103] = "SURFACE_CHANGED"] = 103;
        values[valuesById[104] = "SURFACE_TOO_LEFT"] = 104;
        values[valuesById[105] = "SURFACE_TOO_RIGHT"] = 105;
        values[valuesById[106] = "SURFACE_TOO_CLOSE"] = 106;
        values[valuesById[109] = "SURFACE_TOO_FAR"] = 109;
        values[valuesById[107] = "SURFACE_TOO_DARK"] = 107;
        values[valuesById[108] = "SURFACE_TOO_BRIGHT"] = 108;
        values[valuesById[200] = "INTERNAL_ERROR"] = 200;
        return values;
      }();
      v1.Rotation = function () {
        const valuesById = {},
          values = Object.create(valuesById);
        values[valuesById[0] = "ROTATE_0"] = 0;
        values[valuesById[1] = "ROTATE_90_CLOCKWISE"] = 1;
        values[valuesById[2] = "ROTATE_180"] = 2;
        values[valuesById[3] = "ROTATE_90_COUNTERCLOCKWISE"] = 3;
        return values;
      }();
      v1.Encoding = function () {
        const valuesById = {},
          values = Object.create(valuesById);
        values[valuesById[0] = "JPEG"] = 0;
        values[valuesById[1] = "VP8"] = 1;
        values[valuesById[2] = "VP9"] = 2;
        values[valuesById[3] = "H264"] = 3;
        return values;
      }();
      v1.Config = function () {
        function Config(p) {
          if (p) for (var ks = Object.keys(p), i = 0; i < ks.length; ++i) if (p[ks[i]] != null) this[ks[i]] = p[ks[i]];
        }
        Config.prototype.surfaceType = 0;
        Config.prototype.enableStabilization = 0;
        Config.prototype.enableTransformation = 0;
        Config.prototype.userId = "";
        Config.prototype.mbusTopicStatus = "";
        Config.prototype.mbusTopicImage = "";
        Config.prototype.encoding = 0;
        Config.create = function create(properties) {
          return new Config(properties);
        };
        Config.encode = function encode(m, w) {
          if (!w) w = $Writer.create();
          if (m.surfaceType != null && Object.hasOwnProperty.call(m, "surfaceType")) w.uint32(8).int32(m.surfaceType);
          if (m.enableStabilization != null && Object.hasOwnProperty.call(m, "enableStabilization")) w.uint32(24).int32(m.enableStabilization);
          if (m.enableTransformation != null && Object.hasOwnProperty.call(m, "enableTransformation")) w.uint32(32).int32(m.enableTransformation);
          if (m.userId != null && Object.hasOwnProperty.call(m, "userId")) w.uint32(42).string(m.userId);
          if (m.mbusTopicStatus != null && Object.hasOwnProperty.call(m, "mbusTopicStatus")) w.uint32(58).string(m.mbusTopicStatus);
          if (m.mbusTopicImage != null && Object.hasOwnProperty.call(m, "mbusTopicImage")) w.uint32(66).string(m.mbusTopicImage);
          if (m.encoding != null && Object.hasOwnProperty.call(m, "encoding")) w.uint32(80).int32(m.encoding);
          return w;
        };
        Config.encodeDelimited = function encodeDelimited(message, writer) {
          return this.encode(message, writer).ldelim();
        };
        Config.decode = function decode(r, l) {
          if (!(r instanceof $Reader)) r = $Reader.create(r);
          var c = l === undefined ? r.len : r.pos + l,
            m = new $root.jibb.ipsa.v1.Config();
          while (r.pos < c) {
            var t = r.uint32();
            switch (t >>> 3) {
              case 1:
                m.surfaceType = r.int32();
                break;
              case 3:
                m.enableStabilization = r.int32();
                break;
              case 4:
                m.enableTransformation = r.int32();
                break;
              case 5:
                m.userId = r.string();
                break;
              case 7:
                m.mbusTopicStatus = r.string();
                break;
              case 8:
                m.mbusTopicImage = r.string();
                break;
              case 10:
                m.encoding = r.int32();
                break;
              default:
                r.skipType(t & 7);
                break;
            }
          }
          return m;
        };
        Config.decodeDelimited = function decodeDelimited(reader) {
          if (!(reader instanceof $Reader)) reader = new $Reader(reader);
          return this.decode(reader, reader.uint32());
        };
        Config.verify = function verify(m) {
          if (typeof m !== "object" || m === null) return "object expected";
          if (m.surfaceType != null && m.hasOwnProperty("surfaceType")) {
            switch (m.surfaceType) {
              default:
                return "surfaceType: enum value expected";
              case 0:
              case 1:
              case 2:
                break;
            }
          }
          if (m.enableStabilization != null && m.hasOwnProperty("enableStabilization")) {
            switch (m.enableStabilization) {
              default:
                return "enableStabilization: enum value expected";
              case 0:
              case 1:
              case 2:
                break;
            }
          }
          if (m.enableTransformation != null && m.hasOwnProperty("enableTransformation")) {
            switch (m.enableTransformation) {
              default:
                return "enableTransformation: enum value expected";
              case 0:
              case 1:
              case 2:
                break;
            }
          }
          if (m.userId != null && m.hasOwnProperty("userId")) {
            if (!$util.isString(m.userId)) return "userId: string expected";
          }
          if (m.mbusTopicStatus != null && m.hasOwnProperty("mbusTopicStatus")) {
            if (!$util.isString(m.mbusTopicStatus)) return "mbusTopicStatus: string expected";
          }
          if (m.mbusTopicImage != null && m.hasOwnProperty("mbusTopicImage")) {
            if (!$util.isString(m.mbusTopicImage)) return "mbusTopicImage: string expected";
          }
          if (m.encoding != null && m.hasOwnProperty("encoding")) {
            switch (m.encoding) {
              default:
                return "encoding: enum value expected";
              case 0:
              case 1:
              case 2:
              case 3:
                break;
            }
          }
          return null;
        };
        Config.fromObject = function fromObject(d) {
          if (d instanceof $root.jibb.ipsa.v1.Config) return d;
          var m = new $root.jibb.ipsa.v1.Config();
          switch (d.surfaceType) {
            case "UNKNOWN":
            case 0:
              m.surfaceType = 0;
              break;
            case "PAPER":
            case 1:
              m.surfaceType = 1;
              break;
            case "WHITEBOARD":
            case 2:
              m.surfaceType = 2;
              break;
          }
          switch (d.enableStabilization) {
            case "DEFAULT":
            case 0:
              m.enableStabilization = 0;
              break;
            case "ENABLE":
            case 1:
              m.enableStabilization = 1;
              break;
            case "DISABLE":
            case 2:
              m.enableStabilization = 2;
              break;
          }
          switch (d.enableTransformation) {
            case "DEFAULT":
            case 0:
              m.enableTransformation = 0;
              break;
            case "ENABLE":
            case 1:
              m.enableTransformation = 1;
              break;
            case "DISABLE":
            case 2:
              m.enableTransformation = 2;
              break;
          }
          if (d.userId != null) {
            m.userId = String(d.userId);
          }
          if (d.mbusTopicStatus != null) {
            m.mbusTopicStatus = String(d.mbusTopicStatus);
          }
          if (d.mbusTopicImage != null) {
            m.mbusTopicImage = String(d.mbusTopicImage);
          }
          switch (d.encoding) {
            case "JPEG":
            case 0:
              m.encoding = 0;
              break;
            case "VP8":
            case 1:
              m.encoding = 1;
              break;
            case "VP9":
            case 2:
              m.encoding = 2;
              break;
            case "H264":
            case 3:
              m.encoding = 3;
              break;
          }
          return m;
        };
        Config.toObject = function toObject(m, o) {
          if (!o) o = {};
          var d = {};
          if (o.defaults) {
            d.surfaceType = o.enums === String ? "UNKNOWN" : 0;
            d.enableStabilization = o.enums === String ? "DEFAULT" : 0;
            d.enableTransformation = o.enums === String ? "DEFAULT" : 0;
            d.userId = "";
            d.mbusTopicStatus = "";
            d.mbusTopicImage = "";
            d.encoding = o.enums === String ? "JPEG" : 0;
          }
          if (m.surfaceType != null && m.hasOwnProperty("surfaceType")) {
            d.surfaceType = o.enums === String ? $root.types.SurfaceType[m.surfaceType] : m.surfaceType;
          }
          if (m.enableStabilization != null && m.hasOwnProperty("enableStabilization")) {
            d.enableStabilization = o.enums === String ? $root.types.TriState[m.enableStabilization] : m.enableStabilization;
          }
          if (m.enableTransformation != null && m.hasOwnProperty("enableTransformation")) {
            d.enableTransformation = o.enums === String ? $root.types.TriState[m.enableTransformation] : m.enableTransformation;
          }
          if (m.userId != null && m.hasOwnProperty("userId")) {
            d.userId = m.userId;
          }
          if (m.mbusTopicStatus != null && m.hasOwnProperty("mbusTopicStatus")) {
            d.mbusTopicStatus = m.mbusTopicStatus;
          }
          if (m.mbusTopicImage != null && m.hasOwnProperty("mbusTopicImage")) {
            d.mbusTopicImage = m.mbusTopicImage;
          }
          if (m.encoding != null && m.hasOwnProperty("encoding")) {
            d.encoding = o.enums === String ? $root.jibb.ipsa.v1.Encoding[m.encoding] : m.encoding;
          }
          return d;
        };
        Config.prototype.toJSON = function toJSON() {
          return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };
        return Config;
      }();
      v1.RuntimeConfig = function () {
        function RuntimeConfig(p) {
          this.customCorners = [];
          if (p) for (var ks = Object.keys(p), i = 0; i < ks.length; ++i) if (p[ks[i]] != null) this[ks[i]] = p[ks[i]];
        }
        RuntimeConfig.prototype.customCorners = $util.emptyArray;
        RuntimeConfig.prototype.fixedCorners = false;
        RuntimeConfig.prototype.enableColor = false;
        RuntimeConfig.prototype.rotation = 0;
        RuntimeConfig.prototype.flipUpDown = false;
        RuntimeConfig.prototype.flipLeftRight = false;
        RuntimeConfig.prototype.enableEstimation = false;
        RuntimeConfig.prototype.inputRotation = 0;
        RuntimeConfig.prototype.enableCeTorch = false;
        RuntimeConfig.create = function create(properties) {
          return new RuntimeConfig(properties);
        };
        RuntimeConfig.encode = function encode(m, w) {
          if (!w) w = $Writer.create();
          if (m.customCorners != null && m.customCorners.length) {
            w.uint32(10).fork();
            for (var i = 0; i < m.customCorners.length; ++i) w.sint32(m.customCorners[i]);
            w.ldelim();
          }
          if (m.fixedCorners != null && Object.hasOwnProperty.call(m, "fixedCorners")) w.uint32(16).bool(m.fixedCorners);
          if (m.enableColor != null && Object.hasOwnProperty.call(m, "enableColor")) w.uint32(24).bool(m.enableColor);
          if (m.rotation != null && Object.hasOwnProperty.call(m, "rotation")) w.uint32(32).int32(m.rotation);
          if (m.flipUpDown != null && Object.hasOwnProperty.call(m, "flipUpDown")) w.uint32(40).bool(m.flipUpDown);
          if (m.flipLeftRight != null && Object.hasOwnProperty.call(m, "flipLeftRight")) w.uint32(48).bool(m.flipLeftRight);
          if (m.enableEstimation != null && Object.hasOwnProperty.call(m, "enableEstimation")) w.uint32(56).bool(m.enableEstimation);
          if (m.inputRotation != null && Object.hasOwnProperty.call(m, "inputRotation")) w.uint32(64).int32(m.inputRotation);
          if (m.enableCeTorch != null && Object.hasOwnProperty.call(m, "enableCeTorch")) w.uint32(72).bool(m.enableCeTorch);
          return w;
        };
        RuntimeConfig.encodeDelimited = function encodeDelimited(message, writer) {
          return this.encode(message, writer).ldelim();
        };
        RuntimeConfig.decode = function decode(r, l) {
          if (!(r instanceof $Reader)) r = $Reader.create(r);
          var c = l === undefined ? r.len : r.pos + l,
            m = new $root.jibb.ipsa.v1.RuntimeConfig();
          while (r.pos < c) {
            var t = r.uint32();
            switch (t >>> 3) {
              case 1:
                if (!(m.customCorners && m.customCorners.length)) m.customCorners = [];
                if ((t & 7) === 2) {
                  var c2 = r.uint32() + r.pos;
                  while (r.pos < c2) m.customCorners.push(r.sint32());
                } else m.customCorners.push(r.sint32());
                break;
              case 2:
                m.fixedCorners = r.bool();
                break;
              case 3:
                m.enableColor = r.bool();
                break;
              case 4:
                m.rotation = r.int32();
                break;
              case 5:
                m.flipUpDown = r.bool();
                break;
              case 6:
                m.flipLeftRight = r.bool();
                break;
              case 7:
                m.enableEstimation = r.bool();
                break;
              case 8:
                m.inputRotation = r.int32();
                break;
              case 9:
                m.enableCeTorch = r.bool();
                break;
              default:
                r.skipType(t & 7);
                break;
            }
          }
          return m;
        };
        RuntimeConfig.decodeDelimited = function decodeDelimited(reader) {
          if (!(reader instanceof $Reader)) reader = new $Reader(reader);
          return this.decode(reader, reader.uint32());
        };
        RuntimeConfig.verify = function verify(m) {
          if (typeof m !== "object" || m === null) return "object expected";
          if (m.customCorners != null && m.hasOwnProperty("customCorners")) {
            if (!Array.isArray(m.customCorners)) return "customCorners: array expected";
            for (var i = 0; i < m.customCorners.length; ++i) {
              if (!$util.isInteger(m.customCorners[i])) return "customCorners: integer[] expected";
            }
          }
          if (m.fixedCorners != null && m.hasOwnProperty("fixedCorners")) {
            if (typeof m.fixedCorners !== "boolean") return "fixedCorners: boolean expected";
          }
          if (m.enableColor != null && m.hasOwnProperty("enableColor")) {
            if (typeof m.enableColor !== "boolean") return "enableColor: boolean expected";
          }
          if (m.rotation != null && m.hasOwnProperty("rotation")) {
            switch (m.rotation) {
              default:
                return "rotation: enum value expected";
              case 0:
              case 1:
              case 2:
              case 3:
                break;
            }
          }
          if (m.flipUpDown != null && m.hasOwnProperty("flipUpDown")) {
            if (typeof m.flipUpDown !== "boolean") return "flipUpDown: boolean expected";
          }
          if (m.flipLeftRight != null && m.hasOwnProperty("flipLeftRight")) {
            if (typeof m.flipLeftRight !== "boolean") return "flipLeftRight: boolean expected";
          }
          if (m.enableEstimation != null && m.hasOwnProperty("enableEstimation")) {
            if (typeof m.enableEstimation !== "boolean") return "enableEstimation: boolean expected";
          }
          if (m.inputRotation != null && m.hasOwnProperty("inputRotation")) {
            switch (m.inputRotation) {
              default:
                return "inputRotation: enum value expected";
              case 0:
              case 1:
              case 2:
              case 3:
                break;
            }
          }
          if (m.enableCeTorch != null && m.hasOwnProperty("enableCeTorch")) {
            if (typeof m.enableCeTorch !== "boolean") return "enableCeTorch: boolean expected";
          }
          return null;
        };
        RuntimeConfig.fromObject = function fromObject(d) {
          if (d instanceof $root.jibb.ipsa.v1.RuntimeConfig) return d;
          var m = new $root.jibb.ipsa.v1.RuntimeConfig();
          if (d.customCorners) {
            if (!Array.isArray(d.customCorners)) throw TypeError(".jibb.ipsa.v1.RuntimeConfig.customCorners: array expected");
            m.customCorners = [];
            for (var i = 0; i < d.customCorners.length; ++i) {
              m.customCorners[i] = d.customCorners[i] | 0;
            }
          }
          if (d.fixedCorners != null) {
            m.fixedCorners = Boolean(d.fixedCorners);
          }
          if (d.enableColor != null) {
            m.enableColor = Boolean(d.enableColor);
          }
          switch (d.rotation) {
            case "ROTATE_0":
            case 0:
              m.rotation = 0;
              break;
            case "ROTATE_90_CLOCKWISE":
            case 1:
              m.rotation = 1;
              break;
            case "ROTATE_180":
            case 2:
              m.rotation = 2;
              break;
            case "ROTATE_90_COUNTERCLOCKWISE":
            case 3:
              m.rotation = 3;
              break;
          }
          if (d.flipUpDown != null) {
            m.flipUpDown = Boolean(d.flipUpDown);
          }
          if (d.flipLeftRight != null) {
            m.flipLeftRight = Boolean(d.flipLeftRight);
          }
          if (d.enableEstimation != null) {
            m.enableEstimation = Boolean(d.enableEstimation);
          }
          switch (d.inputRotation) {
            case "ROTATE_0":
            case 0:
              m.inputRotation = 0;
              break;
            case "ROTATE_90_CLOCKWISE":
            case 1:
              m.inputRotation = 1;
              break;
            case "ROTATE_180":
            case 2:
              m.inputRotation = 2;
              break;
            case "ROTATE_90_COUNTERCLOCKWISE":
            case 3:
              m.inputRotation = 3;
              break;
          }
          if (d.enableCeTorch != null) {
            m.enableCeTorch = Boolean(d.enableCeTorch);
          }
          return m;
        };
        RuntimeConfig.toObject = function toObject(m, o) {
          if (!o) o = {};
          var d = {};
          if (o.arrays || o.defaults) {
            d.customCorners = [];
          }
          if (o.defaults) {
            d.fixedCorners = false;
            d.enableColor = false;
            d.rotation = o.enums === String ? "ROTATE_0" : 0;
            d.flipUpDown = false;
            d.flipLeftRight = false;
            d.enableEstimation = false;
            d.inputRotation = o.enums === String ? "ROTATE_0" : 0;
            d.enableCeTorch = false;
          }
          if (m.customCorners && m.customCorners.length) {
            d.customCorners = [];
            for (var j = 0; j < m.customCorners.length; ++j) {
              d.customCorners[j] = m.customCorners[j];
            }
          }
          if (m.fixedCorners != null && m.hasOwnProperty("fixedCorners")) {
            d.fixedCorners = m.fixedCorners;
          }
          if (m.enableColor != null && m.hasOwnProperty("enableColor")) {
            d.enableColor = m.enableColor;
          }
          if (m.rotation != null && m.hasOwnProperty("rotation")) {
            d.rotation = o.enums === String ? $root.jibb.ipsa.v1.Rotation[m.rotation] : m.rotation;
          }
          if (m.flipUpDown != null && m.hasOwnProperty("flipUpDown")) {
            d.flipUpDown = m.flipUpDown;
          }
          if (m.flipLeftRight != null && m.hasOwnProperty("flipLeftRight")) {
            d.flipLeftRight = m.flipLeftRight;
          }
          if (m.enableEstimation != null && m.hasOwnProperty("enableEstimation")) {
            d.enableEstimation = m.enableEstimation;
          }
          if (m.inputRotation != null && m.hasOwnProperty("inputRotation")) {
            d.inputRotation = o.enums === String ? $root.jibb.ipsa.v1.Rotation[m.inputRotation] : m.inputRotation;
          }
          if (m.enableCeTorch != null && m.hasOwnProperty("enableCeTorch")) {
            d.enableCeTorch = m.enableCeTorch;
          }
          return d;
        };
        RuntimeConfig.prototype.toJSON = function toJSON() {
          return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };
        return RuntimeConfig;
      }();
      v1.VersionResponse = function () {
        function VersionResponse(p) {
          if (p) for (var ks = Object.keys(p), i = 0; i < ks.length; ++i) if (p[ks[i]] != null) this[ks[i]] = p[ks[i]];
        }
        VersionResponse.prototype.version = "";
        VersionResponse.create = function create(properties) {
          return new VersionResponse(properties);
        };
        VersionResponse.encode = function encode(m, w) {
          if (!w) w = $Writer.create();
          if (m.version != null && Object.hasOwnProperty.call(m, "version")) w.uint32(10).string(m.version);
          return w;
        };
        VersionResponse.encodeDelimited = function encodeDelimited(message, writer) {
          return this.encode(message, writer).ldelim();
        };
        VersionResponse.decode = function decode(r, l) {
          if (!(r instanceof $Reader)) r = $Reader.create(r);
          var c = l === undefined ? r.len : r.pos + l,
            m = new $root.jibb.ipsa.v1.VersionResponse();
          while (r.pos < c) {
            var t = r.uint32();
            switch (t >>> 3) {
              case 1:
                m.version = r.string();
                break;
              default:
                r.skipType(t & 7);
                break;
            }
          }
          return m;
        };
        VersionResponse.decodeDelimited = function decodeDelimited(reader) {
          if (!(reader instanceof $Reader)) reader = new $Reader(reader);
          return this.decode(reader, reader.uint32());
        };
        VersionResponse.verify = function verify(m) {
          if (typeof m !== "object" || m === null) return "object expected";
          if (m.version != null && m.hasOwnProperty("version")) {
            if (!$util.isString(m.version)) return "version: string expected";
          }
          return null;
        };
        VersionResponse.fromObject = function fromObject(d) {
          if (d instanceof $root.jibb.ipsa.v1.VersionResponse) return d;
          var m = new $root.jibb.ipsa.v1.VersionResponse();
          if (d.version != null) {
            m.version = String(d.version);
          }
          return m;
        };
        VersionResponse.toObject = function toObject(m, o) {
          if (!o) o = {};
          var d = {};
          if (o.defaults) {
            d.version = "";
          }
          if (m.version != null && m.hasOwnProperty("version")) {
            d.version = m.version;
          }
          return d;
        };
        VersionResponse.prototype.toJSON = function toJSON() {
          return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };
        return VersionResponse;
      }();
      v1.SurfaceTransformationRequest = function () {
        function SurfaceTransformationRequest(p) {
          if (p) for (var ks = Object.keys(p), i = 0; i < ks.length; ++i) if (p[ks[i]] != null) this[ks[i]] = p[ks[i]];
        }
        SurfaceTransformationRequest.prototype.surfaceType = 0;
        SurfaceTransformationRequest.prototype.img = $util.newBuffer([]);
        SurfaceTransformationRequest.create = function create(properties) {
          return new SurfaceTransformationRequest(properties);
        };
        SurfaceTransformationRequest.encode = function encode(m, w) {
          if (!w) w = $Writer.create();
          if (m.surfaceType != null && Object.hasOwnProperty.call(m, "surfaceType")) w.uint32(8).int32(m.surfaceType);
          if (m.img != null && Object.hasOwnProperty.call(m, "img")) w.uint32(18).bytes(m.img);
          return w;
        };
        SurfaceTransformationRequest.encodeDelimited = function encodeDelimited(message, writer) {
          return this.encode(message, writer).ldelim();
        };
        SurfaceTransformationRequest.decode = function decode(r, l) {
          if (!(r instanceof $Reader)) r = $Reader.create(r);
          var c = l === undefined ? r.len : r.pos + l,
            m = new $root.jibb.ipsa.v1.SurfaceTransformationRequest();
          while (r.pos < c) {
            var t = r.uint32();
            switch (t >>> 3) {
              case 1:
                m.surfaceType = r.int32();
                break;
              case 2:
                m.img = r.bytes();
                break;
              default:
                r.skipType(t & 7);
                break;
            }
          }
          return m;
        };
        SurfaceTransformationRequest.decodeDelimited = function decodeDelimited(reader) {
          if (!(reader instanceof $Reader)) reader = new $Reader(reader);
          return this.decode(reader, reader.uint32());
        };
        SurfaceTransformationRequest.verify = function verify(m) {
          if (typeof m !== "object" || m === null) return "object expected";
          if (m.surfaceType != null && m.hasOwnProperty("surfaceType")) {
            switch (m.surfaceType) {
              default:
                return "surfaceType: enum value expected";
              case 0:
              case 1:
              case 2:
                break;
            }
          }
          if (m.img != null && m.hasOwnProperty("img")) {
            if (!(m.img && typeof m.img.length === "number" || $util.isString(m.img))) return "img: buffer expected";
          }
          return null;
        };
        SurfaceTransformationRequest.fromObject = function fromObject(d) {
          if (d instanceof $root.jibb.ipsa.v1.SurfaceTransformationRequest) return d;
          var m = new $root.jibb.ipsa.v1.SurfaceTransformationRequest();
          switch (d.surfaceType) {
            case "UNKNOWN":
            case 0:
              m.surfaceType = 0;
              break;
            case "PAPER":
            case 1:
              m.surfaceType = 1;
              break;
            case "WHITEBOARD":
            case 2:
              m.surfaceType = 2;
              break;
          }
          if (d.img != null) {
            if (typeof d.img === "string") $util.base64.decode(d.img, m.img = $util.newBuffer($util.base64.length(d.img)), 0);else if (d.img.length) m.img = d.img;
          }
          return m;
        };
        SurfaceTransformationRequest.toObject = function toObject(m, o) {
          if (!o) o = {};
          var d = {};
          if (o.defaults) {
            d.surfaceType = o.enums === String ? "UNKNOWN" : 0;
            if (o.bytes === String) d.img = "";else {
              d.img = [];
              if (o.bytes !== Array) d.img = $util.newBuffer(d.img);
            }
          }
          if (m.surfaceType != null && m.hasOwnProperty("surfaceType")) {
            d.surfaceType = o.enums === String ? $root.types.SurfaceType[m.surfaceType] : m.surfaceType;
          }
          if (m.img != null && m.hasOwnProperty("img")) {
            d.img = o.bytes === String ? $util.base64.encode(m.img, 0, m.img.length) : o.bytes === Array ? Array.prototype.slice.call(m.img) : m.img;
          }
          return d;
        };
        SurfaceTransformationRequest.prototype.toJSON = function toJSON() {
          return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };
        return SurfaceTransformationRequest;
      }();
      v1.SurfaceTransformationResponse = function () {
        function SurfaceTransformationResponse(p) {
          if (p) for (var ks = Object.keys(p), i = 0; i < ks.length; ++i) if (p[ks[i]] != null) this[ks[i]] = p[ks[i]];
        }
        SurfaceTransformationResponse.prototype.img = $util.newBuffer([]);
        SurfaceTransformationResponse.create = function create(properties) {
          return new SurfaceTransformationResponse(properties);
        };
        SurfaceTransformationResponse.encode = function encode(m, w) {
          if (!w) w = $Writer.create();
          if (m.img != null && Object.hasOwnProperty.call(m, "img")) w.uint32(10).bytes(m.img);
          return w;
        };
        SurfaceTransformationResponse.encodeDelimited = function encodeDelimited(message, writer) {
          return this.encode(message, writer).ldelim();
        };
        SurfaceTransformationResponse.decode = function decode(r, l) {
          if (!(r instanceof $Reader)) r = $Reader.create(r);
          var c = l === undefined ? r.len : r.pos + l,
            m = new $root.jibb.ipsa.v1.SurfaceTransformationResponse();
          while (r.pos < c) {
            var t = r.uint32();
            switch (t >>> 3) {
              case 1:
                m.img = r.bytes();
                break;
              default:
                r.skipType(t & 7);
                break;
            }
          }
          return m;
        };
        SurfaceTransformationResponse.decodeDelimited = function decodeDelimited(reader) {
          if (!(reader instanceof $Reader)) reader = new $Reader(reader);
          return this.decode(reader, reader.uint32());
        };
        SurfaceTransformationResponse.verify = function verify(m) {
          if (typeof m !== "object" || m === null) return "object expected";
          if (m.img != null && m.hasOwnProperty("img")) {
            if (!(m.img && typeof m.img.length === "number" || $util.isString(m.img))) return "img: buffer expected";
          }
          return null;
        };
        SurfaceTransformationResponse.fromObject = function fromObject(d) {
          if (d instanceof $root.jibb.ipsa.v1.SurfaceTransformationResponse) return d;
          var m = new $root.jibb.ipsa.v1.SurfaceTransformationResponse();
          if (d.img != null) {
            if (typeof d.img === "string") $util.base64.decode(d.img, m.img = $util.newBuffer($util.base64.length(d.img)), 0);else if (d.img.length) m.img = d.img;
          }
          return m;
        };
        SurfaceTransformationResponse.toObject = function toObject(m, o) {
          if (!o) o = {};
          var d = {};
          if (o.defaults) {
            if (o.bytes === String) d.img = "";else {
              d.img = [];
              if (o.bytes !== Array) d.img = $util.newBuffer(d.img);
            }
          }
          if (m.img != null && m.hasOwnProperty("img")) {
            d.img = o.bytes === String ? $util.base64.encode(m.img, 0, m.img.length) : o.bytes === Array ? Array.prototype.slice.call(m.img) : m.img;
          }
          return d;
        };
        SurfaceTransformationResponse.prototype.toJSON = function toJSON() {
          return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };
        return SurfaceTransformationResponse;
      }();
      v1.SurfaceSegmentationRequest = function () {
        function SurfaceSegmentationRequest(p) {
          if (p) for (var ks = Object.keys(p), i = 0; i < ks.length; ++i) if (p[ks[i]] != null) this[ks[i]] = p[ks[i]];
        }
        SurfaceSegmentationRequest.prototype.surfaceType = 0;
        SurfaceSegmentationRequest.prototype.overlay = false;
        SurfaceSegmentationRequest.prototype.img = $util.newBuffer([]);
        SurfaceSegmentationRequest.create = function create(properties) {
          return new SurfaceSegmentationRequest(properties);
        };
        SurfaceSegmentationRequest.encode = function encode(m, w) {
          if (!w) w = $Writer.create();
          if (m.surfaceType != null && Object.hasOwnProperty.call(m, "surfaceType")) w.uint32(8).int32(m.surfaceType);
          if (m.overlay != null && Object.hasOwnProperty.call(m, "overlay")) w.uint32(16).bool(m.overlay);
          if (m.img != null && Object.hasOwnProperty.call(m, "img")) w.uint32(26).bytes(m.img);
          return w;
        };
        SurfaceSegmentationRequest.encodeDelimited = function encodeDelimited(message, writer) {
          return this.encode(message, writer).ldelim();
        };
        SurfaceSegmentationRequest.decode = function decode(r, l) {
          if (!(r instanceof $Reader)) r = $Reader.create(r);
          var c = l === undefined ? r.len : r.pos + l,
            m = new $root.jibb.ipsa.v1.SurfaceSegmentationRequest();
          while (r.pos < c) {
            var t = r.uint32();
            switch (t >>> 3) {
              case 1:
                m.surfaceType = r.int32();
                break;
              case 2:
                m.overlay = r.bool();
                break;
              case 3:
                m.img = r.bytes();
                break;
              default:
                r.skipType(t & 7);
                break;
            }
          }
          return m;
        };
        SurfaceSegmentationRequest.decodeDelimited = function decodeDelimited(reader) {
          if (!(reader instanceof $Reader)) reader = new $Reader(reader);
          return this.decode(reader, reader.uint32());
        };
        SurfaceSegmentationRequest.verify = function verify(m) {
          if (typeof m !== "object" || m === null) return "object expected";
          if (m.surfaceType != null && m.hasOwnProperty("surfaceType")) {
            switch (m.surfaceType) {
              default:
                return "surfaceType: enum value expected";
              case 0:
              case 1:
              case 2:
                break;
            }
          }
          if (m.overlay != null && m.hasOwnProperty("overlay")) {
            if (typeof m.overlay !== "boolean") return "overlay: boolean expected";
          }
          if (m.img != null && m.hasOwnProperty("img")) {
            if (!(m.img && typeof m.img.length === "number" || $util.isString(m.img))) return "img: buffer expected";
          }
          return null;
        };
        SurfaceSegmentationRequest.fromObject = function fromObject(d) {
          if (d instanceof $root.jibb.ipsa.v1.SurfaceSegmentationRequest) return d;
          var m = new $root.jibb.ipsa.v1.SurfaceSegmentationRequest();
          switch (d.surfaceType) {
            case "UNKNOWN":
            case 0:
              m.surfaceType = 0;
              break;
            case "PAPER":
            case 1:
              m.surfaceType = 1;
              break;
            case "WHITEBOARD":
            case 2:
              m.surfaceType = 2;
              break;
          }
          if (d.overlay != null) {
            m.overlay = Boolean(d.overlay);
          }
          if (d.img != null) {
            if (typeof d.img === "string") $util.base64.decode(d.img, m.img = $util.newBuffer($util.base64.length(d.img)), 0);else if (d.img.length) m.img = d.img;
          }
          return m;
        };
        SurfaceSegmentationRequest.toObject = function toObject(m, o) {
          if (!o) o = {};
          var d = {};
          if (o.defaults) {
            d.surfaceType = o.enums === String ? "UNKNOWN" : 0;
            d.overlay = false;
            if (o.bytes === String) d.img = "";else {
              d.img = [];
              if (o.bytes !== Array) d.img = $util.newBuffer(d.img);
            }
          }
          if (m.surfaceType != null && m.hasOwnProperty("surfaceType")) {
            d.surfaceType = o.enums === String ? $root.types.SurfaceType[m.surfaceType] : m.surfaceType;
          }
          if (m.overlay != null && m.hasOwnProperty("overlay")) {
            d.overlay = m.overlay;
          }
          if (m.img != null && m.hasOwnProperty("img")) {
            d.img = o.bytes === String ? $util.base64.encode(m.img, 0, m.img.length) : o.bytes === Array ? Array.prototype.slice.call(m.img) : m.img;
          }
          return d;
        };
        SurfaceSegmentationRequest.prototype.toJSON = function toJSON() {
          return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };
        return SurfaceSegmentationRequest;
      }();
      v1.SurfaceSegmentationResponse = function () {
        function SurfaceSegmentationResponse(p) {
          if (p) for (var ks = Object.keys(p), i = 0; i < ks.length; ++i) if (p[ks[i]] != null) this[ks[i]] = p[ks[i]];
        }
        SurfaceSegmentationResponse.prototype.img = $util.newBuffer([]);
        SurfaceSegmentationResponse.create = function create(properties) {
          return new SurfaceSegmentationResponse(properties);
        };
        SurfaceSegmentationResponse.encode = function encode(m, w) {
          if (!w) w = $Writer.create();
          if (m.img != null && Object.hasOwnProperty.call(m, "img")) w.uint32(10).bytes(m.img);
          return w;
        };
        SurfaceSegmentationResponse.encodeDelimited = function encodeDelimited(message, writer) {
          return this.encode(message, writer).ldelim();
        };
        SurfaceSegmentationResponse.decode = function decode(r, l) {
          if (!(r instanceof $Reader)) r = $Reader.create(r);
          var c = l === undefined ? r.len : r.pos + l,
            m = new $root.jibb.ipsa.v1.SurfaceSegmentationResponse();
          while (r.pos < c) {
            var t = r.uint32();
            switch (t >>> 3) {
              case 1:
                m.img = r.bytes();
                break;
              default:
                r.skipType(t & 7);
                break;
            }
          }
          return m;
        };
        SurfaceSegmentationResponse.decodeDelimited = function decodeDelimited(reader) {
          if (!(reader instanceof $Reader)) reader = new $Reader(reader);
          return this.decode(reader, reader.uint32());
        };
        SurfaceSegmentationResponse.verify = function verify(m) {
          if (typeof m !== "object" || m === null) return "object expected";
          if (m.img != null && m.hasOwnProperty("img")) {
            if (!(m.img && typeof m.img.length === "number" || $util.isString(m.img))) return "img: buffer expected";
          }
          return null;
        };
        SurfaceSegmentationResponse.fromObject = function fromObject(d) {
          if (d instanceof $root.jibb.ipsa.v1.SurfaceSegmentationResponse) return d;
          var m = new $root.jibb.ipsa.v1.SurfaceSegmentationResponse();
          if (d.img != null) {
            if (typeof d.img === "string") $util.base64.decode(d.img, m.img = $util.newBuffer($util.base64.length(d.img)), 0);else if (d.img.length) m.img = d.img;
          }
          return m;
        };
        SurfaceSegmentationResponse.toObject = function toObject(m, o) {
          if (!o) o = {};
          var d = {};
          if (o.defaults) {
            if (o.bytes === String) d.img = "";else {
              d.img = [];
              if (o.bytes !== Array) d.img = $util.newBuffer(d.img);
            }
          }
          if (m.img != null && m.hasOwnProperty("img")) {
            d.img = o.bytes === String ? $util.base64.encode(m.img, 0, m.img.length) : o.bytes === Array ? Array.prototype.slice.call(m.img) : m.img;
          }
          return d;
        };
        SurfaceSegmentationResponse.prototype.toJSON = function toJSON() {
          return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };
        return SurfaceSegmentationResponse;
      }();
      v1.SurfaceDetectionRequest = function () {
        function SurfaceDetectionRequest(p) {
          if (p) for (var ks = Object.keys(p), i = 0; i < ks.length; ++i) if (p[ks[i]] != null) this[ks[i]] = p[ks[i]];
        }
        SurfaceDetectionRequest.prototype.surfaceType = 0;
        SurfaceDetectionRequest.prototype.img = $util.newBuffer([]);
        SurfaceDetectionRequest.prototype.overlay = false;
        SurfaceDetectionRequest.create = function create(properties) {
          return new SurfaceDetectionRequest(properties);
        };
        SurfaceDetectionRequest.encode = function encode(m, w) {
          if (!w) w = $Writer.create();
          if (m.surfaceType != null && Object.hasOwnProperty.call(m, "surfaceType")) w.uint32(8).int32(m.surfaceType);
          if (m.img != null && Object.hasOwnProperty.call(m, "img")) w.uint32(18).bytes(m.img);
          if (m.overlay != null && Object.hasOwnProperty.call(m, "overlay")) w.uint32(24).bool(m.overlay);
          return w;
        };
        SurfaceDetectionRequest.encodeDelimited = function encodeDelimited(message, writer) {
          return this.encode(message, writer).ldelim();
        };
        SurfaceDetectionRequest.decode = function decode(r, l) {
          if (!(r instanceof $Reader)) r = $Reader.create(r);
          var c = l === undefined ? r.len : r.pos + l,
            m = new $root.jibb.ipsa.v1.SurfaceDetectionRequest();
          while (r.pos < c) {
            var t = r.uint32();
            switch (t >>> 3) {
              case 1:
                m.surfaceType = r.int32();
                break;
              case 2:
                m.img = r.bytes();
                break;
              case 3:
                m.overlay = r.bool();
                break;
              default:
                r.skipType(t & 7);
                break;
            }
          }
          return m;
        };
        SurfaceDetectionRequest.decodeDelimited = function decodeDelimited(reader) {
          if (!(reader instanceof $Reader)) reader = new $Reader(reader);
          return this.decode(reader, reader.uint32());
        };
        SurfaceDetectionRequest.verify = function verify(m) {
          if (typeof m !== "object" || m === null) return "object expected";
          if (m.surfaceType != null && m.hasOwnProperty("surfaceType")) {
            switch (m.surfaceType) {
              default:
                return "surfaceType: enum value expected";
              case 0:
              case 1:
              case 2:
                break;
            }
          }
          if (m.img != null && m.hasOwnProperty("img")) {
            if (!(m.img && typeof m.img.length === "number" || $util.isString(m.img))) return "img: buffer expected";
          }
          if (m.overlay != null && m.hasOwnProperty("overlay")) {
            if (typeof m.overlay !== "boolean") return "overlay: boolean expected";
          }
          return null;
        };
        SurfaceDetectionRequest.fromObject = function fromObject(d) {
          if (d instanceof $root.jibb.ipsa.v1.SurfaceDetectionRequest) return d;
          var m = new $root.jibb.ipsa.v1.SurfaceDetectionRequest();
          switch (d.surfaceType) {
            case "UNKNOWN":
            case 0:
              m.surfaceType = 0;
              break;
            case "PAPER":
            case 1:
              m.surfaceType = 1;
              break;
            case "WHITEBOARD":
            case 2:
              m.surfaceType = 2;
              break;
          }
          if (d.img != null) {
            if (typeof d.img === "string") $util.base64.decode(d.img, m.img = $util.newBuffer($util.base64.length(d.img)), 0);else if (d.img.length) m.img = d.img;
          }
          if (d.overlay != null) {
            m.overlay = Boolean(d.overlay);
          }
          return m;
        };
        SurfaceDetectionRequest.toObject = function toObject(m, o) {
          if (!o) o = {};
          var d = {};
          if (o.defaults) {
            d.surfaceType = o.enums === String ? "UNKNOWN" : 0;
            if (o.bytes === String) d.img = "";else {
              d.img = [];
              if (o.bytes !== Array) d.img = $util.newBuffer(d.img);
            }
            d.overlay = false;
          }
          if (m.surfaceType != null && m.hasOwnProperty("surfaceType")) {
            d.surfaceType = o.enums === String ? $root.types.SurfaceType[m.surfaceType] : m.surfaceType;
          }
          if (m.img != null && m.hasOwnProperty("img")) {
            d.img = o.bytes === String ? $util.base64.encode(m.img, 0, m.img.length) : o.bytes === Array ? Array.prototype.slice.call(m.img) : m.img;
          }
          if (m.overlay != null && m.hasOwnProperty("overlay")) {
            d.overlay = m.overlay;
          }
          return d;
        };
        SurfaceDetectionRequest.prototype.toJSON = function toJSON() {
          return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };
        return SurfaceDetectionRequest;
      }();
      v1.SurfaceDetectionResponse = function () {
        function SurfaceDetectionResponse(p) {
          this.corners = [];
          if (p) for (var ks = Object.keys(p), i = 0; i < ks.length; ++i) if (p[ks[i]] != null) this[ks[i]] = p[ks[i]];
        }
        SurfaceDetectionResponse.prototype.img = $util.newBuffer([]);
        SurfaceDetectionResponse.prototype.corners = $util.emptyArray;
        SurfaceDetectionResponse.create = function create(properties) {
          return new SurfaceDetectionResponse(properties);
        };
        SurfaceDetectionResponse.encode = function encode(m, w) {
          if (!w) w = $Writer.create();
          if (m.img != null && Object.hasOwnProperty.call(m, "img")) w.uint32(10).bytes(m.img);
          if (m.corners != null && m.corners.length) {
            w.uint32(18).fork();
            for (var i = 0; i < m.corners.length; ++i) w.sint32(m.corners[i]);
            w.ldelim();
          }
          return w;
        };
        SurfaceDetectionResponse.encodeDelimited = function encodeDelimited(message, writer) {
          return this.encode(message, writer).ldelim();
        };
        SurfaceDetectionResponse.decode = function decode(r, l) {
          if (!(r instanceof $Reader)) r = $Reader.create(r);
          var c = l === undefined ? r.len : r.pos + l,
            m = new $root.jibb.ipsa.v1.SurfaceDetectionResponse();
          while (r.pos < c) {
            var t = r.uint32();
            switch (t >>> 3) {
              case 1:
                m.img = r.bytes();
                break;
              case 2:
                if (!(m.corners && m.corners.length)) m.corners = [];
                if ((t & 7) === 2) {
                  var c2 = r.uint32() + r.pos;
                  while (r.pos < c2) m.corners.push(r.sint32());
                } else m.corners.push(r.sint32());
                break;
              default:
                r.skipType(t & 7);
                break;
            }
          }
          return m;
        };
        SurfaceDetectionResponse.decodeDelimited = function decodeDelimited(reader) {
          if (!(reader instanceof $Reader)) reader = new $Reader(reader);
          return this.decode(reader, reader.uint32());
        };
        SurfaceDetectionResponse.verify = function verify(m) {
          if (typeof m !== "object" || m === null) return "object expected";
          if (m.img != null && m.hasOwnProperty("img")) {
            if (!(m.img && typeof m.img.length === "number" || $util.isString(m.img))) return "img: buffer expected";
          }
          if (m.corners != null && m.hasOwnProperty("corners")) {
            if (!Array.isArray(m.corners)) return "corners: array expected";
            for (var i = 0; i < m.corners.length; ++i) {
              if (!$util.isInteger(m.corners[i])) return "corners: integer[] expected";
            }
          }
          return null;
        };
        SurfaceDetectionResponse.fromObject = function fromObject(d) {
          if (d instanceof $root.jibb.ipsa.v1.SurfaceDetectionResponse) return d;
          var m = new $root.jibb.ipsa.v1.SurfaceDetectionResponse();
          if (d.img != null) {
            if (typeof d.img === "string") $util.base64.decode(d.img, m.img = $util.newBuffer($util.base64.length(d.img)), 0);else if (d.img.length) m.img = d.img;
          }
          if (d.corners) {
            if (!Array.isArray(d.corners)) throw TypeError(".jibb.ipsa.v1.SurfaceDetectionResponse.corners: array expected");
            m.corners = [];
            for (var i = 0; i < d.corners.length; ++i) {
              m.corners[i] = d.corners[i] | 0;
            }
          }
          return m;
        };
        SurfaceDetectionResponse.toObject = function toObject(m, o) {
          if (!o) o = {};
          var d = {};
          if (o.arrays || o.defaults) {
            d.corners = [];
          }
          if (o.defaults) {
            if (o.bytes === String) d.img = "";else {
              d.img = [];
              if (o.bytes !== Array) d.img = $util.newBuffer(d.img);
            }
          }
          if (m.img != null && m.hasOwnProperty("img")) {
            d.img = o.bytes === String ? $util.base64.encode(m.img, 0, m.img.length) : o.bytes === Array ? Array.prototype.slice.call(m.img) : m.img;
          }
          if (m.corners && m.corners.length) {
            d.corners = [];
            for (var j = 0; j < m.corners.length; ++j) {
              d.corners[j] = m.corners[j];
            }
          }
          return d;
        };
        SurfaceDetectionResponse.prototype.toJSON = function toJSON() {
          return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };
        return SurfaceDetectionResponse;
      }();
      v1.ObjectRemovalRequest = function () {
        function ObjectRemovalRequest(p) {
          if (p) for (var ks = Object.keys(p), i = 0; i < ks.length; ++i) if (p[ks[i]] != null) this[ks[i]] = p[ks[i]];
        }
        ObjectRemovalRequest.prototype.surfaceType = 0;
        ObjectRemovalRequest.prototype.overlay = false;
        ObjectRemovalRequest.prototype.enableTransformation = false;
        ObjectRemovalRequest.prototype.img = $util.newBuffer([]);
        ObjectRemovalRequest.create = function create(properties) {
          return new ObjectRemovalRequest(properties);
        };
        ObjectRemovalRequest.encode = function encode(m, w) {
          if (!w) w = $Writer.create();
          if (m.surfaceType != null && Object.hasOwnProperty.call(m, "surfaceType")) w.uint32(8).int32(m.surfaceType);
          if (m.overlay != null && Object.hasOwnProperty.call(m, "overlay")) w.uint32(16).bool(m.overlay);
          if (m.enableTransformation != null && Object.hasOwnProperty.call(m, "enableTransformation")) w.uint32(24).bool(m.enableTransformation);
          if (m.img != null && Object.hasOwnProperty.call(m, "img")) w.uint32(34).bytes(m.img);
          return w;
        };
        ObjectRemovalRequest.encodeDelimited = function encodeDelimited(message, writer) {
          return this.encode(message, writer).ldelim();
        };
        ObjectRemovalRequest.decode = function decode(r, l) {
          if (!(r instanceof $Reader)) r = $Reader.create(r);
          var c = l === undefined ? r.len : r.pos + l,
            m = new $root.jibb.ipsa.v1.ObjectRemovalRequest();
          while (r.pos < c) {
            var t = r.uint32();
            switch (t >>> 3) {
              case 1:
                m.surfaceType = r.int32();
                break;
              case 2:
                m.overlay = r.bool();
                break;
              case 3:
                m.enableTransformation = r.bool();
                break;
              case 4:
                m.img = r.bytes();
                break;
              default:
                r.skipType(t & 7);
                break;
            }
          }
          return m;
        };
        ObjectRemovalRequest.decodeDelimited = function decodeDelimited(reader) {
          if (!(reader instanceof $Reader)) reader = new $Reader(reader);
          return this.decode(reader, reader.uint32());
        };
        ObjectRemovalRequest.verify = function verify(m) {
          if (typeof m !== "object" || m === null) return "object expected";
          if (m.surfaceType != null && m.hasOwnProperty("surfaceType")) {
            switch (m.surfaceType) {
              default:
                return "surfaceType: enum value expected";
              case 0:
              case 1:
              case 2:
                break;
            }
          }
          if (m.overlay != null && m.hasOwnProperty("overlay")) {
            if (typeof m.overlay !== "boolean") return "overlay: boolean expected";
          }
          if (m.enableTransformation != null && m.hasOwnProperty("enableTransformation")) {
            if (typeof m.enableTransformation !== "boolean") return "enableTransformation: boolean expected";
          }
          if (m.img != null && m.hasOwnProperty("img")) {
            if (!(m.img && typeof m.img.length === "number" || $util.isString(m.img))) return "img: buffer expected";
          }
          return null;
        };
        ObjectRemovalRequest.fromObject = function fromObject(d) {
          if (d instanceof $root.jibb.ipsa.v1.ObjectRemovalRequest) return d;
          var m = new $root.jibb.ipsa.v1.ObjectRemovalRequest();
          switch (d.surfaceType) {
            case "UNKNOWN":
            case 0:
              m.surfaceType = 0;
              break;
            case "PAPER":
            case 1:
              m.surfaceType = 1;
              break;
            case "WHITEBOARD":
            case 2:
              m.surfaceType = 2;
              break;
          }
          if (d.overlay != null) {
            m.overlay = Boolean(d.overlay);
          }
          if (d.enableTransformation != null) {
            m.enableTransformation = Boolean(d.enableTransformation);
          }
          if (d.img != null) {
            if (typeof d.img === "string") $util.base64.decode(d.img, m.img = $util.newBuffer($util.base64.length(d.img)), 0);else if (d.img.length) m.img = d.img;
          }
          return m;
        };
        ObjectRemovalRequest.toObject = function toObject(m, o) {
          if (!o) o = {};
          var d = {};
          if (o.defaults) {
            d.surfaceType = o.enums === String ? "UNKNOWN" : 0;
            d.overlay = false;
            d.enableTransformation = false;
            if (o.bytes === String) d.img = "";else {
              d.img = [];
              if (o.bytes !== Array) d.img = $util.newBuffer(d.img);
            }
          }
          if (m.surfaceType != null && m.hasOwnProperty("surfaceType")) {
            d.surfaceType = o.enums === String ? $root.types.SurfaceType[m.surfaceType] : m.surfaceType;
          }
          if (m.overlay != null && m.hasOwnProperty("overlay")) {
            d.overlay = m.overlay;
          }
          if (m.enableTransformation != null && m.hasOwnProperty("enableTransformation")) {
            d.enableTransformation = m.enableTransformation;
          }
          if (m.img != null && m.hasOwnProperty("img")) {
            d.img = o.bytes === String ? $util.base64.encode(m.img, 0, m.img.length) : o.bytes === Array ? Array.prototype.slice.call(m.img) : m.img;
          }
          return d;
        };
        ObjectRemovalRequest.prototype.toJSON = function toJSON() {
          return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };
        return ObjectRemovalRequest;
      }();
      v1.ObjectRemovalResponse = function () {
        function ObjectRemovalResponse(p) {
          if (p) for (var ks = Object.keys(p), i = 0; i < ks.length; ++i) if (p[ks[i]] != null) this[ks[i]] = p[ks[i]];
        }
        ObjectRemovalResponse.prototype.img = $util.newBuffer([]);
        ObjectRemovalResponse.create = function create(properties) {
          return new ObjectRemovalResponse(properties);
        };
        ObjectRemovalResponse.encode = function encode(m, w) {
          if (!w) w = $Writer.create();
          if (m.img != null && Object.hasOwnProperty.call(m, "img")) w.uint32(10).bytes(m.img);
          return w;
        };
        ObjectRemovalResponse.encodeDelimited = function encodeDelimited(message, writer) {
          return this.encode(message, writer).ldelim();
        };
        ObjectRemovalResponse.decode = function decode(r, l) {
          if (!(r instanceof $Reader)) r = $Reader.create(r);
          var c = l === undefined ? r.len : r.pos + l,
            m = new $root.jibb.ipsa.v1.ObjectRemovalResponse();
          while (r.pos < c) {
            var t = r.uint32();
            switch (t >>> 3) {
              case 1:
                m.img = r.bytes();
                break;
              default:
                r.skipType(t & 7);
                break;
            }
          }
          return m;
        };
        ObjectRemovalResponse.decodeDelimited = function decodeDelimited(reader) {
          if (!(reader instanceof $Reader)) reader = new $Reader(reader);
          return this.decode(reader, reader.uint32());
        };
        ObjectRemovalResponse.verify = function verify(m) {
          if (typeof m !== "object" || m === null) return "object expected";
          if (m.img != null && m.hasOwnProperty("img")) {
            if (!(m.img && typeof m.img.length === "number" || $util.isString(m.img))) return "img: buffer expected";
          }
          return null;
        };
        ObjectRemovalResponse.fromObject = function fromObject(d) {
          if (d instanceof $root.jibb.ipsa.v1.ObjectRemovalResponse) return d;
          var m = new $root.jibb.ipsa.v1.ObjectRemovalResponse();
          if (d.img != null) {
            if (typeof d.img === "string") $util.base64.decode(d.img, m.img = $util.newBuffer($util.base64.length(d.img)), 0);else if (d.img.length) m.img = d.img;
          }
          return m;
        };
        ObjectRemovalResponse.toObject = function toObject(m, o) {
          if (!o) o = {};
          var d = {};
          if (o.defaults) {
            if (o.bytes === String) d.img = "";else {
              d.img = [];
              if (o.bytes !== Array) d.img = $util.newBuffer(d.img);
            }
          }
          if (m.img != null && m.hasOwnProperty("img")) {
            d.img = o.bytes === String ? $util.base64.encode(m.img, 0, m.img.length) : o.bytes === Array ? Array.prototype.slice.call(m.img) : m.img;
          }
          return d;
        };
        ObjectRemovalResponse.prototype.toJSON = function toJSON() {
          return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };
        return ObjectRemovalResponse;
      }();
      v1.ContentExtractionRequest = function () {
        function ContentExtractionRequest(p) {
          if (p) for (var ks = Object.keys(p), i = 0; i < ks.length; ++i) if (p[ks[i]] != null) this[ks[i]] = p[ks[i]];
        }
        ContentExtractionRequest.prototype.surfaceType = 0;
        ContentExtractionRequest.prototype.enableTransformation = false;
        ContentExtractionRequest.prototype.enableColor = false;
        ContentExtractionRequest.prototype.img = $util.newBuffer([]);
        ContentExtractionRequest.create = function create(properties) {
          return new ContentExtractionRequest(properties);
        };
        ContentExtractionRequest.encode = function encode(m, w) {
          if (!w) w = $Writer.create();
          if (m.surfaceType != null && Object.hasOwnProperty.call(m, "surfaceType")) w.uint32(8).int32(m.surfaceType);
          if (m.enableTransformation != null && Object.hasOwnProperty.call(m, "enableTransformation")) w.uint32(16).bool(m.enableTransformation);
          if (m.img != null && Object.hasOwnProperty.call(m, "img")) w.uint32(26).bytes(m.img);
          if (m.enableColor != null && Object.hasOwnProperty.call(m, "enableColor")) w.uint32(32).bool(m.enableColor);
          return w;
        };
        ContentExtractionRequest.encodeDelimited = function encodeDelimited(message, writer) {
          return this.encode(message, writer).ldelim();
        };
        ContentExtractionRequest.decode = function decode(r, l) {
          if (!(r instanceof $Reader)) r = $Reader.create(r);
          var c = l === undefined ? r.len : r.pos + l,
            m = new $root.jibb.ipsa.v1.ContentExtractionRequest();
          while (r.pos < c) {
            var t = r.uint32();
            switch (t >>> 3) {
              case 1:
                m.surfaceType = r.int32();
                break;
              case 2:
                m.enableTransformation = r.bool();
                break;
              case 4:
                m.enableColor = r.bool();
                break;
              case 3:
                m.img = r.bytes();
                break;
              default:
                r.skipType(t & 7);
                break;
            }
          }
          return m;
        };
        ContentExtractionRequest.decodeDelimited = function decodeDelimited(reader) {
          if (!(reader instanceof $Reader)) reader = new $Reader(reader);
          return this.decode(reader, reader.uint32());
        };
        ContentExtractionRequest.verify = function verify(m) {
          if (typeof m !== "object" || m === null) return "object expected";
          if (m.surfaceType != null && m.hasOwnProperty("surfaceType")) {
            switch (m.surfaceType) {
              default:
                return "surfaceType: enum value expected";
              case 0:
              case 1:
              case 2:
                break;
            }
          }
          if (m.enableTransformation != null && m.hasOwnProperty("enableTransformation")) {
            if (typeof m.enableTransformation !== "boolean") return "enableTransformation: boolean expected";
          }
          if (m.enableColor != null && m.hasOwnProperty("enableColor")) {
            if (typeof m.enableColor !== "boolean") return "enableColor: boolean expected";
          }
          if (m.img != null && m.hasOwnProperty("img")) {
            if (!(m.img && typeof m.img.length === "number" || $util.isString(m.img))) return "img: buffer expected";
          }
          return null;
        };
        ContentExtractionRequest.fromObject = function fromObject(d) {
          if (d instanceof $root.jibb.ipsa.v1.ContentExtractionRequest) return d;
          var m = new $root.jibb.ipsa.v1.ContentExtractionRequest();
          switch (d.surfaceType) {
            case "UNKNOWN":
            case 0:
              m.surfaceType = 0;
              break;
            case "PAPER":
            case 1:
              m.surfaceType = 1;
              break;
            case "WHITEBOARD":
            case 2:
              m.surfaceType = 2;
              break;
          }
          if (d.enableTransformation != null) {
            m.enableTransformation = Boolean(d.enableTransformation);
          }
          if (d.enableColor != null) {
            m.enableColor = Boolean(d.enableColor);
          }
          if (d.img != null) {
            if (typeof d.img === "string") $util.base64.decode(d.img, m.img = $util.newBuffer($util.base64.length(d.img)), 0);else if (d.img.length) m.img = d.img;
          }
          return m;
        };
        ContentExtractionRequest.toObject = function toObject(m, o) {
          if (!o) o = {};
          var d = {};
          if (o.defaults) {
            d.surfaceType = o.enums === String ? "UNKNOWN" : 0;
            d.enableTransformation = false;
            if (o.bytes === String) d.img = "";else {
              d.img = [];
              if (o.bytes !== Array) d.img = $util.newBuffer(d.img);
            }
            d.enableColor = false;
          }
          if (m.surfaceType != null && m.hasOwnProperty("surfaceType")) {
            d.surfaceType = o.enums === String ? $root.types.SurfaceType[m.surfaceType] : m.surfaceType;
          }
          if (m.enableTransformation != null && m.hasOwnProperty("enableTransformation")) {
            d.enableTransformation = m.enableTransformation;
          }
          if (m.img != null && m.hasOwnProperty("img")) {
            d.img = o.bytes === String ? $util.base64.encode(m.img, 0, m.img.length) : o.bytes === Array ? Array.prototype.slice.call(m.img) : m.img;
          }
          if (m.enableColor != null && m.hasOwnProperty("enableColor")) {
            d.enableColor = m.enableColor;
          }
          return d;
        };
        ContentExtractionRequest.prototype.toJSON = function toJSON() {
          return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };
        return ContentExtractionRequest;
      }();
      v1.ContentExtractionResponse = function () {
        function ContentExtractionResponse(p) {
          if (p) for (var ks = Object.keys(p), i = 0; i < ks.length; ++i) if (p[ks[i]] != null) this[ks[i]] = p[ks[i]];
        }
        ContentExtractionResponse.prototype.img = $util.newBuffer([]);
        ContentExtractionResponse.prototype.transformedImg = $util.newBuffer([]);
        ContentExtractionResponse.create = function create(properties) {
          return new ContentExtractionResponse(properties);
        };
        ContentExtractionResponse.encode = function encode(m, w) {
          if (!w) w = $Writer.create();
          if (m.img != null && Object.hasOwnProperty.call(m, "img")) w.uint32(10).bytes(m.img);
          if (m.transformedImg != null && Object.hasOwnProperty.call(m, "transformedImg")) w.uint32(18).bytes(m.transformedImg);
          return w;
        };
        ContentExtractionResponse.encodeDelimited = function encodeDelimited(message, writer) {
          return this.encode(message, writer).ldelim();
        };
        ContentExtractionResponse.decode = function decode(r, l) {
          if (!(r instanceof $Reader)) r = $Reader.create(r);
          var c = l === undefined ? r.len : r.pos + l,
            m = new $root.jibb.ipsa.v1.ContentExtractionResponse();
          while (r.pos < c) {
            var t = r.uint32();
            switch (t >>> 3) {
              case 1:
                m.img = r.bytes();
                break;
              case 2:
                m.transformedImg = r.bytes();
                break;
              default:
                r.skipType(t & 7);
                break;
            }
          }
          return m;
        };
        ContentExtractionResponse.decodeDelimited = function decodeDelimited(reader) {
          if (!(reader instanceof $Reader)) reader = new $Reader(reader);
          return this.decode(reader, reader.uint32());
        };
        ContentExtractionResponse.verify = function verify(m) {
          if (typeof m !== "object" || m === null) return "object expected";
          if (m.img != null && m.hasOwnProperty("img")) {
            if (!(m.img && typeof m.img.length === "number" || $util.isString(m.img))) return "img: buffer expected";
          }
          if (m.transformedImg != null && m.hasOwnProperty("transformedImg")) {
            if (!(m.transformedImg && typeof m.transformedImg.length === "number" || $util.isString(m.transformedImg))) return "transformedImg: buffer expected";
          }
          return null;
        };
        ContentExtractionResponse.fromObject = function fromObject(d) {
          if (d instanceof $root.jibb.ipsa.v1.ContentExtractionResponse) return d;
          var m = new $root.jibb.ipsa.v1.ContentExtractionResponse();
          if (d.img != null) {
            if (typeof d.img === "string") $util.base64.decode(d.img, m.img = $util.newBuffer($util.base64.length(d.img)), 0);else if (d.img.length) m.img = d.img;
          }
          if (d.transformedImg != null) {
            if (typeof d.transformedImg === "string") $util.base64.decode(d.transformedImg, m.transformedImg = $util.newBuffer($util.base64.length(d.transformedImg)), 0);else if (d.transformedImg.length) m.transformedImg = d.transformedImg;
          }
          return m;
        };
        ContentExtractionResponse.toObject = function toObject(m, o) {
          if (!o) o = {};
          var d = {};
          if (o.defaults) {
            if (o.bytes === String) d.img = "";else {
              d.img = [];
              if (o.bytes !== Array) d.img = $util.newBuffer(d.img);
            }
            if (o.bytes === String) d.transformedImg = "";else {
              d.transformedImg = [];
              if (o.bytes !== Array) d.transformedImg = $util.newBuffer(d.transformedImg);
            }
          }
          if (m.img != null && m.hasOwnProperty("img")) {
            d.img = o.bytes === String ? $util.base64.encode(m.img, 0, m.img.length) : o.bytes === Array ? Array.prototype.slice.call(m.img) : m.img;
          }
          if (m.transformedImg != null && m.hasOwnProperty("transformedImg")) {
            d.transformedImg = o.bytes === String ? $util.base64.encode(m.transformedImg, 0, m.transformedImg.length) : o.bytes === Array ? Array.prototype.slice.call(m.transformedImg) : m.transformedImg;
          }
          return d;
        };
        ContentExtractionResponse.prototype.toJSON = function toJSON() {
          return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };
        return ContentExtractionResponse;
      }();
      v1.GetSimilarityRequest = function () {
        function GetSimilarityRequest(p) {
          if (p) for (var ks = Object.keys(p), i = 0; i < ks.length; ++i) if (p[ks[i]] != null) this[ks[i]] = p[ks[i]];
        }
        GetSimilarityRequest.prototype.newImage = $util.newBuffer([]);
        GetSimilarityRequest.prototype.prevImage = $util.newBuffer([]);
        GetSimilarityRequest.prototype.level = 0;
        GetSimilarityRequest.create = function create(properties) {
          return new GetSimilarityRequest(properties);
        };
        GetSimilarityRequest.encode = function encode(m, w) {
          if (!w) w = $Writer.create();
          if (m.newImage != null && Object.hasOwnProperty.call(m, "newImage")) w.uint32(10).bytes(m.newImage);
          if (m.prevImage != null && Object.hasOwnProperty.call(m, "prevImage")) w.uint32(18).bytes(m.prevImage);
          if (m.level != null && Object.hasOwnProperty.call(m, "level")) w.uint32(24).int32(m.level);
          return w;
        };
        GetSimilarityRequest.encodeDelimited = function encodeDelimited(message, writer) {
          return this.encode(message, writer).ldelim();
        };
        GetSimilarityRequest.decode = function decode(r, l) {
          if (!(r instanceof $Reader)) r = $Reader.create(r);
          var c = l === undefined ? r.len : r.pos + l,
            m = new $root.jibb.ipsa.v1.GetSimilarityRequest();
          while (r.pos < c) {
            var t = r.uint32();
            switch (t >>> 3) {
              case 1:
                m.newImage = r.bytes();
                break;
              case 2:
                m.prevImage = r.bytes();
                break;
              case 3:
                m.level = r.int32();
                break;
              default:
                r.skipType(t & 7);
                break;
            }
          }
          return m;
        };
        GetSimilarityRequest.decodeDelimited = function decodeDelimited(reader) {
          if (!(reader instanceof $Reader)) reader = new $Reader(reader);
          return this.decode(reader, reader.uint32());
        };
        GetSimilarityRequest.verify = function verify(m) {
          if (typeof m !== "object" || m === null) return "object expected";
          if (m.newImage != null && m.hasOwnProperty("newImage")) {
            if (!(m.newImage && typeof m.newImage.length === "number" || $util.isString(m.newImage))) return "newImage: buffer expected";
          }
          if (m.prevImage != null && m.hasOwnProperty("prevImage")) {
            if (!(m.prevImage && typeof m.prevImage.length === "number" || $util.isString(m.prevImage))) return "prevImage: buffer expected";
          }
          if (m.level != null && m.hasOwnProperty("level")) {
            switch (m.level) {
              default:
                return "level: enum value expected";
              case 0:
              case 1:
              case 2:
                break;
            }
          }
          return null;
        };
        GetSimilarityRequest.fromObject = function fromObject(d) {
          if (d instanceof $root.jibb.ipsa.v1.GetSimilarityRequest) return d;
          var m = new $root.jibb.ipsa.v1.GetSimilarityRequest();
          if (d.newImage != null) {
            if (typeof d.newImage === "string") $util.base64.decode(d.newImage, m.newImage = $util.newBuffer($util.base64.length(d.newImage)), 0);else if (d.newImage.length) m.newImage = d.newImage;
          }
          if (d.prevImage != null) {
            if (typeof d.prevImage === "string") $util.base64.decode(d.prevImage, m.prevImage = $util.newBuffer($util.base64.length(d.prevImage)), 0);else if (d.prevImage.length) m.prevImage = d.prevImage;
          }
          switch (d.level) {
            case "NORMAL":
            case 0:
              m.level = 0;
              break;
            case "LOW":
            case 1:
              m.level = 1;
              break;
            case "HIGH":
            case 2:
              m.level = 2;
              break;
          }
          return m;
        };
        GetSimilarityRequest.toObject = function toObject(m, o) {
          if (!o) o = {};
          var d = {};
          if (o.defaults) {
            if (o.bytes === String) d.newImage = "";else {
              d.newImage = [];
              if (o.bytes !== Array) d.newImage = $util.newBuffer(d.newImage);
            }
            if (o.bytes === String) d.prevImage = "";else {
              d.prevImage = [];
              if (o.bytes !== Array) d.prevImage = $util.newBuffer(d.prevImage);
            }
            d.level = o.enums === String ? "NORMAL" : 0;
          }
          if (m.newImage != null && m.hasOwnProperty("newImage")) {
            d.newImage = o.bytes === String ? $util.base64.encode(m.newImage, 0, m.newImage.length) : o.bytes === Array ? Array.prototype.slice.call(m.newImage) : m.newImage;
          }
          if (m.prevImage != null && m.hasOwnProperty("prevImage")) {
            d.prevImage = o.bytes === String ? $util.base64.encode(m.prevImage, 0, m.prevImage.length) : o.bytes === Array ? Array.prototype.slice.call(m.prevImage) : m.prevImage;
          }
          if (m.level != null && m.hasOwnProperty("level")) {
            d.level = o.enums === String ? $root.jibb.ipsa.v1.GetSimilarityRequest.SensivityLevel[m.level] : m.level;
          }
          return d;
        };
        GetSimilarityRequest.prototype.toJSON = function toJSON() {
          return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };
        GetSimilarityRequest.SensivityLevel = function () {
          const valuesById = {},
            values = Object.create(valuesById);
          values[valuesById[0] = "NORMAL"] = 0;
          values[valuesById[1] = "LOW"] = 1;
          values[valuesById[2] = "HIGH"] = 2;
          return values;
        }();
        return GetSimilarityRequest;
      }();
      v1.GetSimilarityResponse = function () {
        function GetSimilarityResponse(p) {
          if (p) for (var ks = Object.keys(p), i = 0; i < ks.length; ++i) if (p[ks[i]] != null) this[ks[i]] = p[ks[i]];
        }
        GetSimilarityResponse.prototype.isSimilar = false;
        GetSimilarityResponse.prototype.addedContentCount = 0;
        GetSimilarityResponse.create = function create(properties) {
          return new GetSimilarityResponse(properties);
        };
        GetSimilarityResponse.encode = function encode(m, w) {
          if (!w) w = $Writer.create();
          if (m.isSimilar != null && Object.hasOwnProperty.call(m, "isSimilar")) w.uint32(8).bool(m.isSimilar);
          if (m.addedContentCount != null && Object.hasOwnProperty.call(m, "addedContentCount")) w.uint32(16).int32(m.addedContentCount);
          return w;
        };
        GetSimilarityResponse.encodeDelimited = function encodeDelimited(message, writer) {
          return this.encode(message, writer).ldelim();
        };
        GetSimilarityResponse.decode = function decode(r, l) {
          if (!(r instanceof $Reader)) r = $Reader.create(r);
          var c = l === undefined ? r.len : r.pos + l,
            m = new $root.jibb.ipsa.v1.GetSimilarityResponse();
          while (r.pos < c) {
            var t = r.uint32();
            switch (t >>> 3) {
              case 1:
                m.isSimilar = r.bool();
                break;
              case 2:
                m.addedContentCount = r.int32();
                break;
              default:
                r.skipType(t & 7);
                break;
            }
          }
          return m;
        };
        GetSimilarityResponse.decodeDelimited = function decodeDelimited(reader) {
          if (!(reader instanceof $Reader)) reader = new $Reader(reader);
          return this.decode(reader, reader.uint32());
        };
        GetSimilarityResponse.verify = function verify(m) {
          if (typeof m !== "object" || m === null) return "object expected";
          if (m.isSimilar != null && m.hasOwnProperty("isSimilar")) {
            if (typeof m.isSimilar !== "boolean") return "isSimilar: boolean expected";
          }
          if (m.addedContentCount != null && m.hasOwnProperty("addedContentCount")) {
            if (!$util.isInteger(m.addedContentCount)) return "addedContentCount: integer expected";
          }
          return null;
        };
        GetSimilarityResponse.fromObject = function fromObject(d) {
          if (d instanceof $root.jibb.ipsa.v1.GetSimilarityResponse) return d;
          var m = new $root.jibb.ipsa.v1.GetSimilarityResponse();
          if (d.isSimilar != null) {
            m.isSimilar = Boolean(d.isSimilar);
          }
          if (d.addedContentCount != null) {
            m.addedContentCount = d.addedContentCount | 0;
          }
          return m;
        };
        GetSimilarityResponse.toObject = function toObject(m, o) {
          if (!o) o = {};
          var d = {};
          if (o.defaults) {
            d.isSimilar = false;
            d.addedContentCount = 0;
          }
          if (m.isSimilar != null && m.hasOwnProperty("isSimilar")) {
            d.isSimilar = m.isSimilar;
          }
          if (m.addedContentCount != null && m.hasOwnProperty("addedContentCount")) {
            d.addedContentCount = m.addedContentCount;
          }
          return d;
        };
        GetSimilarityResponse.prototype.toJSON = function toJSON() {
          return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };
        return GetSimilarityResponse;
      }();
      v1.Ipsa = function () {
        function Ipsa(p) {
          if (p) for (var ks = Object.keys(p), i = 0; i < ks.length; ++i) if (p[ks[i]] != null) this[ks[i]] = p[ks[i]];
        }
        Ipsa.prototype.data = $util.newBuffer([]);
        Ipsa.create = function create(properties) {
          return new Ipsa(properties);
        };
        Ipsa.encode = function encode(m, w) {
          if (!w) w = $Writer.create();
          if (m.data != null && Object.hasOwnProperty.call(m, "data")) w.uint32(10).bytes(m.data);
          return w;
        };
        Ipsa.encodeDelimited = function encodeDelimited(message, writer) {
          return this.encode(message, writer).ldelim();
        };
        Ipsa.decode = function decode(r, l) {
          if (!(r instanceof $Reader)) r = $Reader.create(r);
          var c = l === undefined ? r.len : r.pos + l,
            m = new $root.jibb.ipsa.v1.Ipsa();
          while (r.pos < c) {
            var t = r.uint32();
            switch (t >>> 3) {
              case 1:
                m.data = r.bytes();
                break;
              default:
                r.skipType(t & 7);
                break;
            }
          }
          return m;
        };
        Ipsa.decodeDelimited = function decodeDelimited(reader) {
          if (!(reader instanceof $Reader)) reader = new $Reader(reader);
          return this.decode(reader, reader.uint32());
        };
        Ipsa.verify = function verify(m) {
          if (typeof m !== "object" || m === null) return "object expected";
          if (m.data != null && m.hasOwnProperty("data")) {
            if (!(m.data && typeof m.data.length === "number" || $util.isString(m.data))) return "data: buffer expected";
          }
          return null;
        };
        Ipsa.fromObject = function fromObject(d) {
          if (d instanceof $root.jibb.ipsa.v1.Ipsa) return d;
          var m = new $root.jibb.ipsa.v1.Ipsa();
          if (d.data != null) {
            if (typeof d.data === "string") $util.base64.decode(d.data, m.data = $util.newBuffer($util.base64.length(d.data)), 0);else if (d.data.length) m.data = d.data;
          }
          return m;
        };
        Ipsa.toObject = function toObject(m, o) {
          if (!o) o = {};
          var d = {};
          if (o.defaults) {
            if (o.bytes === String) d.data = "";else {
              d.data = [];
              if (o.bytes !== Array) d.data = $util.newBuffer(d.data);
            }
          }
          if (m.data != null && m.hasOwnProperty("data")) {
            d.data = o.bytes === String ? $util.base64.encode(m.data, 0, m.data.length) : o.bytes === Array ? Array.prototype.slice.call(m.data) : m.data;
          }
          return d;
        };
        Ipsa.prototype.toJSON = function toJSON() {
          return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };
        return Ipsa;
      }();
      v1.Request = function () {
        function Request(p) {
          if (p) for (var ks = Object.keys(p), i = 0; i < ks.length; ++i) if (p[ks[i]] != null) this[ks[i]] = p[ks[i]];
        }
        Request.prototype.id = 0;
        Request.prototype.config = null;
        Request.prototype.ipsa = null;
        Request.prototype.resetSession = null;
        Request.prototype.recalibrate = null;
        Request.prototype.runtimeConfig = null;
        Request.prototype.dummy = null;
        let $oneOfFields;
        Object.defineProperty(Request.prototype, "Command", {
          get: $util.oneOfGetter($oneOfFields = ["config", "ipsa", "resetSession", "recalibrate", "runtimeConfig", "dummy"]),
          set: $util.oneOfSetter($oneOfFields)
        });
        Request.create = function create(properties) {
          return new Request(properties);
        };
        Request.encode = function encode(m, w) {
          if (!w) w = $Writer.create();
          if (m.id != null && Object.hasOwnProperty.call(m, "id")) w.uint32(8).int32(m.id);
          if (m.config != null && Object.hasOwnProperty.call(m, "config")) $root.jibb.ipsa.v1.Config.encode(m.config, w.uint32(18).fork()).ldelim();
          if (m.ipsa != null && Object.hasOwnProperty.call(m, "ipsa")) $root.jibb.ipsa.v1.Ipsa.encode(m.ipsa, w.uint32(26).fork()).ldelim();
          if (m.resetSession != null && Object.hasOwnProperty.call(m, "resetSession")) $root.google.protobuf.Empty.encode(m.resetSession, w.uint32(34).fork()).ldelim();
          if (m.recalibrate != null && Object.hasOwnProperty.call(m, "recalibrate")) $root.google.protobuf.Empty.encode(m.recalibrate, w.uint32(42).fork()).ldelim();
          if (m.runtimeConfig != null && Object.hasOwnProperty.call(m, "runtimeConfig")) $root.jibb.ipsa.v1.RuntimeConfig.encode(m.runtimeConfig, w.uint32(50).fork()).ldelim();
          if (m.dummy != null && Object.hasOwnProperty.call(m, "dummy")) $root.google.protobuf.Empty.encode(m.dummy, w.uint32(58).fork()).ldelim();
          return w;
        };
        Request.encodeDelimited = function encodeDelimited(message, writer) {
          return this.encode(message, writer).ldelim();
        };
        Request.decode = function decode(r, l) {
          if (!(r instanceof $Reader)) r = $Reader.create(r);
          var c = l === undefined ? r.len : r.pos + l,
            m = new $root.jibb.ipsa.v1.Request();
          while (r.pos < c) {
            var t = r.uint32();
            switch (t >>> 3) {
              case 1:
                m.id = r.int32();
                break;
              case 2:
                m.config = $root.jibb.ipsa.v1.Config.decode(r, r.uint32());
                break;
              case 3:
                m.ipsa = $root.jibb.ipsa.v1.Ipsa.decode(r, r.uint32());
                break;
              case 4:
                m.resetSession = $root.google.protobuf.Empty.decode(r, r.uint32());
                break;
              case 5:
                m.recalibrate = $root.google.protobuf.Empty.decode(r, r.uint32());
                break;
              case 6:
                m.runtimeConfig = $root.jibb.ipsa.v1.RuntimeConfig.decode(r, r.uint32());
                break;
              case 7:
                m.dummy = $root.google.protobuf.Empty.decode(r, r.uint32());
                break;
              default:
                r.skipType(t & 7);
                break;
            }
          }
          return m;
        };
        Request.decodeDelimited = function decodeDelimited(reader) {
          if (!(reader instanceof $Reader)) reader = new $Reader(reader);
          return this.decode(reader, reader.uint32());
        };
        Request.verify = function verify(m) {
          if (typeof m !== "object" || m === null) return "object expected";
          var p = {};
          if (m.id != null && m.hasOwnProperty("id")) {
            if (!$util.isInteger(m.id)) return "id: integer expected";
          }
          if (m.config != null && m.hasOwnProperty("config")) {
            p.Command = 1;
            {
              var e = $root.jibb.ipsa.v1.Config.verify(m.config);
              if (e) return "config." + e;
            }
          }
          if (m.ipsa != null && m.hasOwnProperty("ipsa")) {
            if (p.Command === 1) return "Command: multiple values";
            p.Command = 1;
            {
              var e = $root.jibb.ipsa.v1.Ipsa.verify(m.ipsa);
              if (e) return "ipsa." + e;
            }
          }
          if (m.resetSession != null && m.hasOwnProperty("resetSession")) {
            if (p.Command === 1) return "Command: multiple values";
            p.Command = 1;
            {
              var e = $root.google.protobuf.Empty.verify(m.resetSession);
              if (e) return "resetSession." + e;
            }
          }
          if (m.recalibrate != null && m.hasOwnProperty("recalibrate")) {
            if (p.Command === 1) return "Command: multiple values";
            p.Command = 1;
            {
              var e = $root.google.protobuf.Empty.verify(m.recalibrate);
              if (e) return "recalibrate." + e;
            }
          }
          if (m.runtimeConfig != null && m.hasOwnProperty("runtimeConfig")) {
            if (p.Command === 1) return "Command: multiple values";
            p.Command = 1;
            {
              var e = $root.jibb.ipsa.v1.RuntimeConfig.verify(m.runtimeConfig);
              if (e) return "runtimeConfig." + e;
            }
          }
          if (m.dummy != null && m.hasOwnProperty("dummy")) {
            if (p.Command === 1) return "Command: multiple values";
            p.Command = 1;
            {
              var e = $root.google.protobuf.Empty.verify(m.dummy);
              if (e) return "dummy." + e;
            }
          }
          return null;
        };
        Request.fromObject = function fromObject(d) {
          if (d instanceof $root.jibb.ipsa.v1.Request) return d;
          var m = new $root.jibb.ipsa.v1.Request();
          if (d.id != null) {
            m.id = d.id | 0;
          }
          if (d.config != null) {
            if (typeof d.config !== "object") throw TypeError(".jibb.ipsa.v1.Request.config: object expected");
            m.config = $root.jibb.ipsa.v1.Config.fromObject(d.config);
          }
          if (d.ipsa != null) {
            if (typeof d.ipsa !== "object") throw TypeError(".jibb.ipsa.v1.Request.ipsa: object expected");
            m.ipsa = $root.jibb.ipsa.v1.Ipsa.fromObject(d.ipsa);
          }
          if (d.resetSession != null) {
            if (typeof d.resetSession !== "object") throw TypeError(".jibb.ipsa.v1.Request.resetSession: object expected");
            m.resetSession = $root.google.protobuf.Empty.fromObject(d.resetSession);
          }
          if (d.recalibrate != null) {
            if (typeof d.recalibrate !== "object") throw TypeError(".jibb.ipsa.v1.Request.recalibrate: object expected");
            m.recalibrate = $root.google.protobuf.Empty.fromObject(d.recalibrate);
          }
          if (d.runtimeConfig != null) {
            if (typeof d.runtimeConfig !== "object") throw TypeError(".jibb.ipsa.v1.Request.runtimeConfig: object expected");
            m.runtimeConfig = $root.jibb.ipsa.v1.RuntimeConfig.fromObject(d.runtimeConfig);
          }
          if (d.dummy != null) {
            if (typeof d.dummy !== "object") throw TypeError(".jibb.ipsa.v1.Request.dummy: object expected");
            m.dummy = $root.google.protobuf.Empty.fromObject(d.dummy);
          }
          return m;
        };
        Request.toObject = function toObject(m, o) {
          if (!o) o = {};
          var d = {};
          if (o.defaults) {
            d.id = 0;
          }
          if (m.id != null && m.hasOwnProperty("id")) {
            d.id = m.id;
          }
          if (m.config != null && m.hasOwnProperty("config")) {
            d.config = $root.jibb.ipsa.v1.Config.toObject(m.config, o);
            if (o.oneofs) d.Command = "config";
          }
          if (m.ipsa != null && m.hasOwnProperty("ipsa")) {
            d.ipsa = $root.jibb.ipsa.v1.Ipsa.toObject(m.ipsa, o);
            if (o.oneofs) d.Command = "ipsa";
          }
          if (m.resetSession != null && m.hasOwnProperty("resetSession")) {
            d.resetSession = $root.google.protobuf.Empty.toObject(m.resetSession, o);
            if (o.oneofs) d.Command = "resetSession";
          }
          if (m.recalibrate != null && m.hasOwnProperty("recalibrate")) {
            d.recalibrate = $root.google.protobuf.Empty.toObject(m.recalibrate, o);
            if (o.oneofs) d.Command = "recalibrate";
          }
          if (m.runtimeConfig != null && m.hasOwnProperty("runtimeConfig")) {
            d.runtimeConfig = $root.jibb.ipsa.v1.RuntimeConfig.toObject(m.runtimeConfig, o);
            if (o.oneofs) d.Command = "runtimeConfig";
          }
          if (m.dummy != null && m.hasOwnProperty("dummy")) {
            d.dummy = $root.google.protobuf.Empty.toObject(m.dummy, o);
            if (o.oneofs) d.Command = "dummy";
          }
          return d;
        };
        Request.prototype.toJSON = function toJSON() {
          return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };
        return Request;
      }();
      v1.Status = function () {
        function Status(p) {
          this.corners = [];
          this.codes = [];
          if (p) for (var ks = Object.keys(p), i = 0; i < ks.length; ++i) if (p[ks[i]] != null) this[ks[i]] = p[ks[i]];
        }
        Status.prototype.userId = "";
        Status.prototype.corners = $util.emptyArray;
        Status.prototype.codes = $util.emptyArray;
        Status.prototype.processingTime = 0;
        Status.prototype.upsampling = 0;
        Status.prototype.paperDetectionConfidence = 0;
        Status.create = function create(properties) {
          return new Status(properties);
        };
        Status.encode = function encode(m, w) {
          if (!w) w = $Writer.create();
          if (m.userId != null && Object.hasOwnProperty.call(m, "userId")) w.uint32(10).string(m.userId);
          if (m.corners != null && m.corners.length) {
            w.uint32(18).fork();
            for (var i = 0; i < m.corners.length; ++i) w.float(m.corners[i]);
            w.ldelim();
          }
          if (m.codes != null && m.codes.length) {
            w.uint32(26).fork();
            for (var i = 0; i < m.codes.length; ++i) w.int32(m.codes[i]);
            w.ldelim();
          }
          if (m.processingTime != null && Object.hasOwnProperty.call(m, "processingTime")) w.uint32(32).int32(m.processingTime);
          if (m.upsampling != null && Object.hasOwnProperty.call(m, "upsampling")) w.uint32(45).float(m.upsampling);
          if (m.paperDetectionConfidence != null && Object.hasOwnProperty.call(m, "paperDetectionConfidence")) w.uint32(48).int32(m.paperDetectionConfidence);
          return w;
        };
        Status.encodeDelimited = function encodeDelimited(message, writer) {
          return this.encode(message, writer).ldelim();
        };
        Status.decode = function decode(r, l) {
          if (!(r instanceof $Reader)) r = $Reader.create(r);
          var c = l === undefined ? r.len : r.pos + l,
            m = new $root.jibb.ipsa.v1.Status();
          while (r.pos < c) {
            var t = r.uint32();
            switch (t >>> 3) {
              case 1:
                m.userId = r.string();
                break;
              case 2:
                if (!(m.corners && m.corners.length)) m.corners = [];
                if ((t & 7) === 2) {
                  var c2 = r.uint32() + r.pos;
                  while (r.pos < c2) m.corners.push(r.float());
                } else m.corners.push(r.float());
                break;
              case 3:
                if (!(m.codes && m.codes.length)) m.codes = [];
                if ((t & 7) === 2) {
                  var c2 = r.uint32() + r.pos;
                  while (r.pos < c2) m.codes.push(r.int32());
                } else m.codes.push(r.int32());
                break;
              case 4:
                m.processingTime = r.int32();
                break;
              case 5:
                m.upsampling = r.float();
                break;
              case 6:
                m.paperDetectionConfidence = r.int32();
                break;
              default:
                r.skipType(t & 7);
                break;
            }
          }
          return m;
        };
        Status.decodeDelimited = function decodeDelimited(reader) {
          if (!(reader instanceof $Reader)) reader = new $Reader(reader);
          return this.decode(reader, reader.uint32());
        };
        Status.verify = function verify(m) {
          if (typeof m !== "object" || m === null) return "object expected";
          if (m.userId != null && m.hasOwnProperty("userId")) {
            if (!$util.isString(m.userId)) return "userId: string expected";
          }
          if (m.corners != null && m.hasOwnProperty("corners")) {
            if (!Array.isArray(m.corners)) return "corners: array expected";
            for (var i = 0; i < m.corners.length; ++i) {
              if (typeof m.corners[i] !== "number") return "corners: number[] expected";
            }
          }
          if (m.codes != null && m.hasOwnProperty("codes")) {
            if (!Array.isArray(m.codes)) return "codes: array expected";
            for (var i = 0; i < m.codes.length; ++i) {
              switch (m.codes[i]) {
                default:
                  return "codes: enum value[] expected";
                case 0:
                case 3:
                case 6:
                case 110:
                case 100:
                case 101:
                case 103:
                case 104:
                case 105:
                case 106:
                case 109:
                case 107:
                case 108:
                case 200:
                  break;
              }
            }
          }
          if (m.processingTime != null && m.hasOwnProperty("processingTime")) {
            if (!$util.isInteger(m.processingTime)) return "processingTime: integer expected";
          }
          if (m.upsampling != null && m.hasOwnProperty("upsampling")) {
            if (typeof m.upsampling !== "number") return "upsampling: number expected";
          }
          if (m.paperDetectionConfidence != null && m.hasOwnProperty("paperDetectionConfidence")) {
            if (!$util.isInteger(m.paperDetectionConfidence)) return "paperDetectionConfidence: integer expected";
          }
          return null;
        };
        Status.fromObject = function fromObject(d) {
          if (d instanceof $root.jibb.ipsa.v1.Status) return d;
          var m = new $root.jibb.ipsa.v1.Status();
          if (d.userId != null) {
            m.userId = String(d.userId);
          }
          if (d.corners) {
            if (!Array.isArray(d.corners)) throw TypeError(".jibb.ipsa.v1.Status.corners: array expected");
            m.corners = [];
            for (var i = 0; i < d.corners.length; ++i) {
              m.corners[i] = Number(d.corners[i]);
            }
          }
          if (d.codes) {
            if (!Array.isArray(d.codes)) throw TypeError(".jibb.ipsa.v1.Status.codes: array expected");
            m.codes = [];
            for (var i = 0; i < d.codes.length; ++i) {
              switch (d.codes[i]) {
                default:
                case "SUCCESS":
                case 0:
                  m.codes[i] = 0;
                  break;
                case "INVALID_INPUT":
                case 3:
                  m.codes[i] = 3;
                  break;
                case "SESSION_BUSY":
                case 6:
                  m.codes[i] = 6;
                  break;
                case "SURFACE_DETECTED":
                case 110:
                  m.codes[i] = 110;
                  break;
                case "SURFACE_NOT_DETECTED":
                case 100:
                  m.codes[i] = 100;
                  break;
                case "SURFACE_NOT_STABILIZED":
                case 101:
                  m.codes[i] = 101;
                  break;
                case "SURFACE_CHANGED":
                case 103:
                  m.codes[i] = 103;
                  break;
                case "SURFACE_TOO_LEFT":
                case 104:
                  m.codes[i] = 104;
                  break;
                case "SURFACE_TOO_RIGHT":
                case 105:
                  m.codes[i] = 105;
                  break;
                case "SURFACE_TOO_CLOSE":
                case 106:
                  m.codes[i] = 106;
                  break;
                case "SURFACE_TOO_FAR":
                case 109:
                  m.codes[i] = 109;
                  break;
                case "SURFACE_TOO_DARK":
                case 107:
                  m.codes[i] = 107;
                  break;
                case "SURFACE_TOO_BRIGHT":
                case 108:
                  m.codes[i] = 108;
                  break;
                case "INTERNAL_ERROR":
                case 200:
                  m.codes[i] = 200;
                  break;
              }
            }
          }
          if (d.processingTime != null) {
            m.processingTime = d.processingTime | 0;
          }
          if (d.upsampling != null) {
            m.upsampling = Number(d.upsampling);
          }
          if (d.paperDetectionConfidence != null) {
            m.paperDetectionConfidence = d.paperDetectionConfidence | 0;
          }
          return m;
        };
        Status.toObject = function toObject(m, o) {
          if (!o) o = {};
          var d = {};
          if (o.arrays || o.defaults) {
            d.corners = [];
            d.codes = [];
          }
          if (o.defaults) {
            d.userId = "";
            d.processingTime = 0;
            d.upsampling = 0;
            d.paperDetectionConfidence = 0;
          }
          if (m.userId != null && m.hasOwnProperty("userId")) {
            d.userId = m.userId;
          }
          if (m.corners && m.corners.length) {
            d.corners = [];
            for (var j = 0; j < m.corners.length; ++j) {
              d.corners[j] = o.json && !isFinite(m.corners[j]) ? String(m.corners[j]) : m.corners[j];
            }
          }
          if (m.codes && m.codes.length) {
            d.codes = [];
            for (var j = 0; j < m.codes.length; ++j) {
              d.codes[j] = o.enums === String ? $root.jibb.ipsa.v1.StatusCode[m.codes[j]] : m.codes[j];
            }
          }
          if (m.processingTime != null && m.hasOwnProperty("processingTime")) {
            d.processingTime = m.processingTime;
          }
          if (m.upsampling != null && m.hasOwnProperty("upsampling")) {
            d.upsampling = o.json && !isFinite(m.upsampling) ? String(m.upsampling) : m.upsampling;
          }
          if (m.paperDetectionConfidence != null && m.hasOwnProperty("paperDetectionConfidence")) {
            d.paperDetectionConfidence = m.paperDetectionConfidence;
          }
          return d;
        };
        Status.prototype.toJSON = function toJSON() {
          return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };
        return Status;
      }();
      v1.Image = function () {
        function Image(p) {
          if (p) for (var ks = Object.keys(p), i = 0; i < ks.length; ++i) if (p[ks[i]] != null) this[ks[i]] = p[ks[i]];
        }
        Image.prototype.userId = "";
        Image.prototype.data = $util.newBuffer([]);
        Image.create = function create(properties) {
          return new Image(properties);
        };
        Image.encode = function encode(m, w) {
          if (!w) w = $Writer.create();
          if (m.userId != null && Object.hasOwnProperty.call(m, "userId")) w.uint32(10).string(m.userId);
          if (m.data != null && Object.hasOwnProperty.call(m, "data")) w.uint32(18).bytes(m.data);
          return w;
        };
        Image.encodeDelimited = function encodeDelimited(message, writer) {
          return this.encode(message, writer).ldelim();
        };
        Image.decode = function decode(r, l) {
          if (!(r instanceof $Reader)) r = $Reader.create(r);
          var c = l === undefined ? r.len : r.pos + l,
            m = new $root.jibb.ipsa.v1.Image();
          while (r.pos < c) {
            var t = r.uint32();
            switch (t >>> 3) {
              case 1:
                m.userId = r.string();
                break;
              case 2:
                m.data = r.bytes();
                break;
              default:
                r.skipType(t & 7);
                break;
            }
          }
          return m;
        };
        Image.decodeDelimited = function decodeDelimited(reader) {
          if (!(reader instanceof $Reader)) reader = new $Reader(reader);
          return this.decode(reader, reader.uint32());
        };
        Image.verify = function verify(m) {
          if (typeof m !== "object" || m === null) return "object expected";
          if (m.userId != null && m.hasOwnProperty("userId")) {
            if (!$util.isString(m.userId)) return "userId: string expected";
          }
          if (m.data != null && m.hasOwnProperty("data")) {
            if (!(m.data && typeof m.data.length === "number" || $util.isString(m.data))) return "data: buffer expected";
          }
          return null;
        };
        Image.fromObject = function fromObject(d) {
          if (d instanceof $root.jibb.ipsa.v1.Image) return d;
          var m = new $root.jibb.ipsa.v1.Image();
          if (d.userId != null) {
            m.userId = String(d.userId);
          }
          if (d.data != null) {
            if (typeof d.data === "string") $util.base64.decode(d.data, m.data = $util.newBuffer($util.base64.length(d.data)), 0);else if (d.data.length) m.data = d.data;
          }
          return m;
        };
        Image.toObject = function toObject(m, o) {
          if (!o) o = {};
          var d = {};
          if (o.defaults) {
            d.userId = "";
            if (o.bytes === String) d.data = "";else {
              d.data = [];
              if (o.bytes !== Array) d.data = $util.newBuffer(d.data);
            }
          }
          if (m.userId != null && m.hasOwnProperty("userId")) {
            d.userId = m.userId;
          }
          if (m.data != null && m.hasOwnProperty("data")) {
            d.data = o.bytes === String ? $util.base64.encode(m.data, 0, m.data.length) : o.bytes === Array ? Array.prototype.slice.call(m.data) : m.data;
          }
          return d;
        };
        Image.prototype.toJSON = function toJSON() {
          return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };
        return Image;
      }();
      v1.Response = function () {
        function Response(p) {
          if (p) for (var ks = Object.keys(p), i = 0; i < ks.length; ++i) if (p[ks[i]] != null) this[ks[i]] = p[ks[i]];
        }
        Response.prototype.id = 0;
        Response.prototype.image = $util.newBuffer([]);
        Response.prototype.status = null;
        Response.create = function create(properties) {
          return new Response(properties);
        };
        Response.encode = function encode(m, w) {
          if (!w) w = $Writer.create();
          if (m.id != null && Object.hasOwnProperty.call(m, "id")) w.uint32(8).int32(m.id);
          if (m.image != null && Object.hasOwnProperty.call(m, "image")) w.uint32(42).bytes(m.image);
          if (m.status != null && Object.hasOwnProperty.call(m, "status")) $root.jibb.ipsa.v1.Status.encode(m.status, w.uint32(66).fork()).ldelim();
          return w;
        };
        Response.encodeDelimited = function encodeDelimited(message, writer) {
          return this.encode(message, writer).ldelim();
        };
        Response.decode = function decode(r, l) {
          if (!(r instanceof $Reader)) r = $Reader.create(r);
          var c = l === undefined ? r.len : r.pos + l,
            m = new $root.jibb.ipsa.v1.Response();
          while (r.pos < c) {
            var t = r.uint32();
            switch (t >>> 3) {
              case 1:
                m.id = r.int32();
                break;
              case 5:
                m.image = r.bytes();
                break;
              case 8:
                m.status = $root.jibb.ipsa.v1.Status.decode(r, r.uint32());
                break;
              default:
                r.skipType(t & 7);
                break;
            }
          }
          return m;
        };
        Response.decodeDelimited = function decodeDelimited(reader) {
          if (!(reader instanceof $Reader)) reader = new $Reader(reader);
          return this.decode(reader, reader.uint32());
        };
        Response.verify = function verify(m) {
          if (typeof m !== "object" || m === null) return "object expected";
          if (m.id != null && m.hasOwnProperty("id")) {
            if (!$util.isInteger(m.id)) return "id: integer expected";
          }
          if (m.image != null && m.hasOwnProperty("image")) {
            if (!(m.image && typeof m.image.length === "number" || $util.isString(m.image))) return "image: buffer expected";
          }
          if (m.status != null && m.hasOwnProperty("status")) {
            {
              var e = $root.jibb.ipsa.v1.Status.verify(m.status);
              if (e) return "status." + e;
            }
          }
          return null;
        };
        Response.fromObject = function fromObject(d) {
          if (d instanceof $root.jibb.ipsa.v1.Response) return d;
          var m = new $root.jibb.ipsa.v1.Response();
          if (d.id != null) {
            m.id = d.id | 0;
          }
          if (d.image != null) {
            if (typeof d.image === "string") $util.base64.decode(d.image, m.image = $util.newBuffer($util.base64.length(d.image)), 0);else if (d.image.length) m.image = d.image;
          }
          if (d.status != null) {
            if (typeof d.status !== "object") throw TypeError(".jibb.ipsa.v1.Response.status: object expected");
            m.status = $root.jibb.ipsa.v1.Status.fromObject(d.status);
          }
          return m;
        };
        Response.toObject = function toObject(m, o) {
          if (!o) o = {};
          var d = {};
          if (o.defaults) {
            d.id = 0;
            if (o.bytes === String) d.image = "";else {
              d.image = [];
              if (o.bytes !== Array) d.image = $util.newBuffer(d.image);
            }
            d.status = null;
          }
          if (m.id != null && m.hasOwnProperty("id")) {
            d.id = m.id;
          }
          if (m.image != null && m.hasOwnProperty("image")) {
            d.image = o.bytes === String ? $util.base64.encode(m.image, 0, m.image.length) : o.bytes === Array ? Array.prototype.slice.call(m.image) : m.image;
          }
          if (m.status != null && m.hasOwnProperty("status")) {
            d.status = $root.jibb.ipsa.v1.Status.toObject(m.status, o);
          }
          return d;
        };
        Response.prototype.toJSON = function toJSON() {
          return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };
        return Response;
      }();
      v1.Started = function () {
        function Started(p) {
          if (p) for (var ks = Object.keys(p), i = 0; i < ks.length; ++i) if (p[ks[i]] != null) this[ks[i]] = p[ks[i]];
        }
        Started.create = function create(properties) {
          return new Started(properties);
        };
        Started.encode = function encode(m, w) {
          if (!w) w = $Writer.create();
          return w;
        };
        Started.encodeDelimited = function encodeDelimited(message, writer) {
          return this.encode(message, writer).ldelim();
        };
        Started.decode = function decode(r, l) {
          if (!(r instanceof $Reader)) r = $Reader.create(r);
          var c = l === undefined ? r.len : r.pos + l,
            m = new $root.jibb.ipsa.v1.Started();
          while (r.pos < c) {
            var t = r.uint32();
            switch (t >>> 3) {
              default:
                r.skipType(t & 7);
                break;
            }
          }
          return m;
        };
        Started.decodeDelimited = function decodeDelimited(reader) {
          if (!(reader instanceof $Reader)) reader = new $Reader(reader);
          return this.decode(reader, reader.uint32());
        };
        Started.verify = function verify(m) {
          if (typeof m !== "object" || m === null) return "object expected";
          return null;
        };
        Started.fromObject = function fromObject(d) {
          if (d instanceof $root.jibb.ipsa.v1.Started) return d;
          return new $root.jibb.ipsa.v1.Started();
        };
        Started.toObject = function toObject() {
          return {};
        };
        Started.prototype.toJSON = function toJSON() {
          return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };
        return Started;
      }();
      v1.Stopped = function () {
        function Stopped(p) {
          if (p) for (var ks = Object.keys(p), i = 0; i < ks.length; ++i) if (p[ks[i]] != null) this[ks[i]] = p[ks[i]];
        }
        Stopped.create = function create(properties) {
          return new Stopped(properties);
        };
        Stopped.encode = function encode(m, w) {
          if (!w) w = $Writer.create();
          return w;
        };
        Stopped.encodeDelimited = function encodeDelimited(message, writer) {
          return this.encode(message, writer).ldelim();
        };
        Stopped.decode = function decode(r, l) {
          if (!(r instanceof $Reader)) r = $Reader.create(r);
          var c = l === undefined ? r.len : r.pos + l,
            m = new $root.jibb.ipsa.v1.Stopped();
          while (r.pos < c) {
            var t = r.uint32();
            switch (t >>> 3) {
              default:
                r.skipType(t & 7);
                break;
            }
          }
          return m;
        };
        Stopped.decodeDelimited = function decodeDelimited(reader) {
          if (!(reader instanceof $Reader)) reader = new $Reader(reader);
          return this.decode(reader, reader.uint32());
        };
        Stopped.verify = function verify(m) {
          if (typeof m !== "object" || m === null) return "object expected";
          return null;
        };
        Stopped.fromObject = function fromObject(d) {
          if (d instanceof $root.jibb.ipsa.v1.Stopped) return d;
          return new $root.jibb.ipsa.v1.Stopped();
        };
        Stopped.toObject = function toObject() {
          return {};
        };
        Stopped.prototype.toJSON = function toJSON() {
          return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };
        return Stopped;
      }();
      v1.ConvertHeicToJpegRequest = function () {
        function ConvertHeicToJpegRequest(p) {
          if (p) for (var ks = Object.keys(p), i = 0; i < ks.length; ++i) if (p[ks[i]] != null) this[ks[i]] = p[ks[i]];
        }
        ConvertHeicToJpegRequest.prototype.heic = $util.newBuffer([]);
        ConvertHeicToJpegRequest.create = function create(properties) {
          return new ConvertHeicToJpegRequest(properties);
        };
        ConvertHeicToJpegRequest.encode = function encode(m, w) {
          if (!w) w = $Writer.create();
          if (m.heic != null && Object.hasOwnProperty.call(m, "heic")) w.uint32(10).bytes(m.heic);
          return w;
        };
        ConvertHeicToJpegRequest.encodeDelimited = function encodeDelimited(message, writer) {
          return this.encode(message, writer).ldelim();
        };
        ConvertHeicToJpegRequest.decode = function decode(r, l) {
          if (!(r instanceof $Reader)) r = $Reader.create(r);
          var c = l === undefined ? r.len : r.pos + l,
            m = new $root.jibb.ipsa.v1.ConvertHeicToJpegRequest();
          while (r.pos < c) {
            var t = r.uint32();
            switch (t >>> 3) {
              case 1:
                m.heic = r.bytes();
                break;
              default:
                r.skipType(t & 7);
                break;
            }
          }
          return m;
        };
        ConvertHeicToJpegRequest.decodeDelimited = function decodeDelimited(reader) {
          if (!(reader instanceof $Reader)) reader = new $Reader(reader);
          return this.decode(reader, reader.uint32());
        };
        ConvertHeicToJpegRequest.verify = function verify(m) {
          if (typeof m !== "object" || m === null) return "object expected";
          if (m.heic != null && m.hasOwnProperty("heic")) {
            if (!(m.heic && typeof m.heic.length === "number" || $util.isString(m.heic))) return "heic: buffer expected";
          }
          return null;
        };
        ConvertHeicToJpegRequest.fromObject = function fromObject(d) {
          if (d instanceof $root.jibb.ipsa.v1.ConvertHeicToJpegRequest) return d;
          var m = new $root.jibb.ipsa.v1.ConvertHeicToJpegRequest();
          if (d.heic != null) {
            if (typeof d.heic === "string") $util.base64.decode(d.heic, m.heic = $util.newBuffer($util.base64.length(d.heic)), 0);else if (d.heic.length) m.heic = d.heic;
          }
          return m;
        };
        ConvertHeicToJpegRequest.toObject = function toObject(m, o) {
          if (!o) o = {};
          var d = {};
          if (o.defaults) {
            if (o.bytes === String) d.heic = "";else {
              d.heic = [];
              if (o.bytes !== Array) d.heic = $util.newBuffer(d.heic);
            }
          }
          if (m.heic != null && m.hasOwnProperty("heic")) {
            d.heic = o.bytes === String ? $util.base64.encode(m.heic, 0, m.heic.length) : o.bytes === Array ? Array.prototype.slice.call(m.heic) : m.heic;
          }
          return d;
        };
        ConvertHeicToJpegRequest.prototype.toJSON = function toJSON() {
          return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };
        return ConvertHeicToJpegRequest;
      }();
      v1.ConvertHeicToJpegResponse = function () {
        function ConvertHeicToJpegResponse(p) {
          if (p) for (var ks = Object.keys(p), i = 0; i < ks.length; ++i) if (p[ks[i]] != null) this[ks[i]] = p[ks[i]];
        }
        ConvertHeicToJpegResponse.prototype.jpeg = $util.newBuffer([]);
        ConvertHeicToJpegResponse.create = function create(properties) {
          return new ConvertHeicToJpegResponse(properties);
        };
        ConvertHeicToJpegResponse.encode = function encode(m, w) {
          if (!w) w = $Writer.create();
          if (m.jpeg != null && Object.hasOwnProperty.call(m, "jpeg")) w.uint32(10).bytes(m.jpeg);
          return w;
        };
        ConvertHeicToJpegResponse.encodeDelimited = function encodeDelimited(message, writer) {
          return this.encode(message, writer).ldelim();
        };
        ConvertHeicToJpegResponse.decode = function decode(r, l) {
          if (!(r instanceof $Reader)) r = $Reader.create(r);
          var c = l === undefined ? r.len : r.pos + l,
            m = new $root.jibb.ipsa.v1.ConvertHeicToJpegResponse();
          while (r.pos < c) {
            var t = r.uint32();
            switch (t >>> 3) {
              case 1:
                m.jpeg = r.bytes();
                break;
              default:
                r.skipType(t & 7);
                break;
            }
          }
          return m;
        };
        ConvertHeicToJpegResponse.decodeDelimited = function decodeDelimited(reader) {
          if (!(reader instanceof $Reader)) reader = new $Reader(reader);
          return this.decode(reader, reader.uint32());
        };
        ConvertHeicToJpegResponse.verify = function verify(m) {
          if (typeof m !== "object" || m === null) return "object expected";
          if (m.jpeg != null && m.hasOwnProperty("jpeg")) {
            if (!(m.jpeg && typeof m.jpeg.length === "number" || $util.isString(m.jpeg))) return "jpeg: buffer expected";
          }
          return null;
        };
        ConvertHeicToJpegResponse.fromObject = function fromObject(d) {
          if (d instanceof $root.jibb.ipsa.v1.ConvertHeicToJpegResponse) return d;
          var m = new $root.jibb.ipsa.v1.ConvertHeicToJpegResponse();
          if (d.jpeg != null) {
            if (typeof d.jpeg === "string") $util.base64.decode(d.jpeg, m.jpeg = $util.newBuffer($util.base64.length(d.jpeg)), 0);else if (d.jpeg.length) m.jpeg = d.jpeg;
          }
          return m;
        };
        ConvertHeicToJpegResponse.toObject = function toObject(m, o) {
          if (!o) o = {};
          var d = {};
          if (o.defaults) {
            if (o.bytes === String) d.jpeg = "";else {
              d.jpeg = [];
              if (o.bytes !== Array) d.jpeg = $util.newBuffer(d.jpeg);
            }
          }
          if (m.jpeg != null && m.hasOwnProperty("jpeg")) {
            d.jpeg = o.bytes === String ? $util.base64.encode(m.jpeg, 0, m.jpeg.length) : o.bytes === Array ? Array.prototype.slice.call(m.jpeg) : m.jpeg;
          }
          return d;
        };
        ConvertHeicToJpegResponse.prototype.toJSON = function toJSON() {
          return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };
        return ConvertHeicToJpegResponse;
      }();
      return v1;
    }();
    return ipsa;
  }();
  return jibb;
})();
export const user = $root.user = (() => {
  const user = {};
  user.Level = function () {
    const valuesById = {},
      values = Object.create(valuesById);
    values[valuesById[0] = "UNKNOWN_USER"] = 0;
    values[valuesById[1] = "PRO"] = 1;
    values[valuesById[2] = "BUSINESS"] = 2;
    values[valuesById[5] = "ENTERPRISE"] = 5;
    return values;
  }();
  user.UserType = function () {
    const valuesById = {},
      values = Object.create(valuesById);
    values[valuesById[0] = "UNKNOWN"] = 0;
    values[valuesById[2] = "MEMBER"] = 2;
    values[valuesById[3] = "ADMIN"] = 3;
    values[valuesById[4] = "OWNER"] = 4;
    return values;
  }();
  user.DeviceType = function () {
    const valuesById = {},
      values = Object.create(valuesById);
    values[valuesById[0] = "NOT_CONFIGURED"] = 0;
    values[valuesById[1] = "ON_PREMISE"] = 1;
    values[valuesById[2] = "CLOUD"] = 2;
    return values;
  }();
  user.SubscriptionStatus = function () {
    const valuesById = {},
      values = Object.create(valuesById);
    values[valuesById[0] = "UNKNOWN_STATUS"] = 0;
    values[valuesById[1] = "TRIALING"] = 1;
    values[valuesById[2] = "ACTIVE"] = 2;
    values[valuesById[3] = "INCOMPLETE"] = 3;
    values[valuesById[4] = "INCOMPLETE_EXPIRED"] = 4;
    values[valuesById[5] = "PAST_DUE"] = 5;
    values[valuesById[6] = "CANCELED"] = 6;
    values[valuesById[7] = "UNPAID"] = 7;
    values[valuesById[8] = "PAUSED"] = 8;
    return values;
  }();
  user.UserDetails = function () {
    function UserDetails(p) {
      if (p) for (var ks = Object.keys(p), i = 0; i < ks.length; ++i) if (p[ks[i]] != null) this[ks[i]] = p[ks[i]];
    }
    UserDetails.prototype.organizationName = "";
    UserDetails.prototype.level = 0;
    UserDetails.prototype.firstName = "";
    UserDetails.prototype.lastName = "";
    UserDetails.prototype.organizationId = 0;
    UserDetails.prototype.userType = 0;
    UserDetails.prototype.activated = false;
    UserDetails.prototype.userId = "";
    UserDetails.prototype.email = "";
    UserDetails.prototype.lastLogin = null;
    UserDetails.prototype.fileManagerEnabled = false;
    UserDetails.create = function create(properties) {
      return new UserDetails(properties);
    };
    UserDetails.encode = function encode(m, w) {
      if (!w) w = $Writer.create();
      if (m.organizationName != null && Object.hasOwnProperty.call(m, "organizationName")) w.uint32(18).string(m.organizationName);
      if (m.level != null && Object.hasOwnProperty.call(m, "level")) w.uint32(24).int32(m.level);
      if (m.firstName != null && Object.hasOwnProperty.call(m, "firstName")) w.uint32(34).string(m.firstName);
      if (m.lastName != null && Object.hasOwnProperty.call(m, "lastName")) w.uint32(42).string(m.lastName);
      if (m.organizationId != null && Object.hasOwnProperty.call(m, "organizationId")) w.uint32(48).int32(m.organizationId);
      if (m.userType != null && Object.hasOwnProperty.call(m, "userType")) w.uint32(56).int32(m.userType);
      if (m.activated != null && Object.hasOwnProperty.call(m, "activated")) w.uint32(64).bool(m.activated);
      if (m.userId != null && Object.hasOwnProperty.call(m, "userId")) w.uint32(74).string(m.userId);
      if (m.email != null && Object.hasOwnProperty.call(m, "email")) w.uint32(82).string(m.email);
      if (m.lastLogin != null && Object.hasOwnProperty.call(m, "lastLogin")) $root.google.protobuf.Timestamp.encode(m.lastLogin, w.uint32(90).fork()).ldelim();
      if (m.fileManagerEnabled != null && Object.hasOwnProperty.call(m, "fileManagerEnabled")) w.uint32(96).bool(m.fileManagerEnabled);
      return w;
    };
    UserDetails.encodeDelimited = function encodeDelimited(message, writer) {
      return this.encode(message, writer).ldelim();
    };
    UserDetails.decode = function decode(r, l) {
      if (!(r instanceof $Reader)) r = $Reader.create(r);
      var c = l === undefined ? r.len : r.pos + l,
        m = new $root.user.UserDetails();
      while (r.pos < c) {
        var t = r.uint32();
        switch (t >>> 3) {
          case 2:
            m.organizationName = r.string();
            break;
          case 3:
            m.level = r.int32();
            break;
          case 4:
            m.firstName = r.string();
            break;
          case 5:
            m.lastName = r.string();
            break;
          case 6:
            m.organizationId = r.int32();
            break;
          case 7:
            m.userType = r.int32();
            break;
          case 8:
            m.activated = r.bool();
            break;
          case 9:
            m.userId = r.string();
            break;
          case 10:
            m.email = r.string();
            break;
          case 11:
            m.lastLogin = $root.google.protobuf.Timestamp.decode(r, r.uint32());
            break;
          case 12:
            m.fileManagerEnabled = r.bool();
            break;
          default:
            r.skipType(t & 7);
            break;
        }
      }
      return m;
    };
    UserDetails.decodeDelimited = function decodeDelimited(reader) {
      if (!(reader instanceof $Reader)) reader = new $Reader(reader);
      return this.decode(reader, reader.uint32());
    };
    UserDetails.verify = function verify(m) {
      if (typeof m !== "object" || m === null) return "object expected";
      if (m.organizationName != null && m.hasOwnProperty("organizationName")) {
        if (!$util.isString(m.organizationName)) return "organizationName: string expected";
      }
      if (m.level != null && m.hasOwnProperty("level")) {
        switch (m.level) {
          default:
            return "level: enum value expected";
          case 0:
          case 1:
          case 2:
          case 5:
            break;
        }
      }
      if (m.firstName != null && m.hasOwnProperty("firstName")) {
        if (!$util.isString(m.firstName)) return "firstName: string expected";
      }
      if (m.lastName != null && m.hasOwnProperty("lastName")) {
        if (!$util.isString(m.lastName)) return "lastName: string expected";
      }
      if (m.organizationId != null && m.hasOwnProperty("organizationId")) {
        if (!$util.isInteger(m.organizationId)) return "organizationId: integer expected";
      }
      if (m.userType != null && m.hasOwnProperty("userType")) {
        switch (m.userType) {
          default:
            return "userType: enum value expected";
          case 0:
          case 2:
          case 3:
          case 4:
            break;
        }
      }
      if (m.activated != null && m.hasOwnProperty("activated")) {
        if (typeof m.activated !== "boolean") return "activated: boolean expected";
      }
      if (m.userId != null && m.hasOwnProperty("userId")) {
        if (!$util.isString(m.userId)) return "userId: string expected";
      }
      if (m.email != null && m.hasOwnProperty("email")) {
        if (!$util.isString(m.email)) return "email: string expected";
      }
      if (m.lastLogin != null && m.hasOwnProperty("lastLogin")) {
        {
          var e = $root.google.protobuf.Timestamp.verify(m.lastLogin);
          if (e) return "lastLogin." + e;
        }
      }
      if (m.fileManagerEnabled != null && m.hasOwnProperty("fileManagerEnabled")) {
        if (typeof m.fileManagerEnabled !== "boolean") return "fileManagerEnabled: boolean expected";
      }
      return null;
    };
    UserDetails.fromObject = function fromObject(d) {
      if (d instanceof $root.user.UserDetails) return d;
      var m = new $root.user.UserDetails();
      if (d.organizationName != null) {
        m.organizationName = String(d.organizationName);
      }
      switch (d.level) {
        case "UNKNOWN_USER":
        case 0:
          m.level = 0;
          break;
        case "PRO":
        case 1:
          m.level = 1;
          break;
        case "BUSINESS":
        case 2:
          m.level = 2;
          break;
        case "ENTERPRISE":
        case 5:
          m.level = 5;
          break;
      }
      if (d.firstName != null) {
        m.firstName = String(d.firstName);
      }
      if (d.lastName != null) {
        m.lastName = String(d.lastName);
      }
      if (d.organizationId != null) {
        m.organizationId = d.organizationId | 0;
      }
      switch (d.userType) {
        case "UNKNOWN":
        case 0:
          m.userType = 0;
          break;
        case "MEMBER":
        case 2:
          m.userType = 2;
          break;
        case "ADMIN":
        case 3:
          m.userType = 3;
          break;
        case "OWNER":
        case 4:
          m.userType = 4;
          break;
      }
      if (d.activated != null) {
        m.activated = Boolean(d.activated);
      }
      if (d.userId != null) {
        m.userId = String(d.userId);
      }
      if (d.email != null) {
        m.email = String(d.email);
      }
      if (d.lastLogin != null) {
        if (typeof d.lastLogin !== "object") throw TypeError(".user.UserDetails.lastLogin: object expected");
        m.lastLogin = $root.google.protobuf.Timestamp.fromObject(d.lastLogin);
      }
      if (d.fileManagerEnabled != null) {
        m.fileManagerEnabled = Boolean(d.fileManagerEnabled);
      }
      return m;
    };
    UserDetails.toObject = function toObject(m, o) {
      if (!o) o = {};
      var d = {};
      if (o.defaults) {
        d.organizationName = "";
        d.level = o.enums === String ? "UNKNOWN_USER" : 0;
        d.firstName = "";
        d.lastName = "";
        d.organizationId = 0;
        d.userType = o.enums === String ? "UNKNOWN" : 0;
        d.activated = false;
        d.userId = "";
        d.email = "";
        d.lastLogin = null;
        d.fileManagerEnabled = false;
      }
      if (m.organizationName != null && m.hasOwnProperty("organizationName")) {
        d.organizationName = m.organizationName;
      }
      if (m.level != null && m.hasOwnProperty("level")) {
        d.level = o.enums === String ? $root.user.Level[m.level] : m.level;
      }
      if (m.firstName != null && m.hasOwnProperty("firstName")) {
        d.firstName = m.firstName;
      }
      if (m.lastName != null && m.hasOwnProperty("lastName")) {
        d.lastName = m.lastName;
      }
      if (m.organizationId != null && m.hasOwnProperty("organizationId")) {
        d.organizationId = m.organizationId;
      }
      if (m.userType != null && m.hasOwnProperty("userType")) {
        d.userType = o.enums === String ? $root.user.UserType[m.userType] : m.userType;
      }
      if (m.activated != null && m.hasOwnProperty("activated")) {
        d.activated = m.activated;
      }
      if (m.userId != null && m.hasOwnProperty("userId")) {
        d.userId = m.userId;
      }
      if (m.email != null && m.hasOwnProperty("email")) {
        d.email = m.email;
      }
      if (m.lastLogin != null && m.hasOwnProperty("lastLogin")) {
        d.lastLogin = $root.google.protobuf.Timestamp.toObject(m.lastLogin, o);
      }
      if (m.fileManagerEnabled != null && m.hasOwnProperty("fileManagerEnabled")) {
        d.fileManagerEnabled = m.fileManagerEnabled;
      }
      return d;
    };
    UserDetails.prototype.toJSON = function toJSON() {
      return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };
    return UserDetails;
  }();
  user.OrganizationDetails = function () {
    function OrganizationDetails(p) {
      if (p) for (var ks = Object.keys(p), i = 0; i < ks.length; ++i) if (p[ks[i]] != null) this[ks[i]] = p[ks[i]];
    }
    OrganizationDetails.prototype.name = "";
    OrganizationDetails.prototype.ownerEmail = "";
    OrganizationDetails.prototype.level = 0;
    OrganizationDetails.prototype.licenseCount = 0;
    OrganizationDetails.prototype.usersCount = 0;
    OrganizationDetails.prototype.creationDate = null;
    OrganizationDetails.prototype.startDate = null;
    OrganizationDetails.prototype.expiryDate = null;
    OrganizationDetails.prototype.organizationId = 0;
    OrganizationDetails.prototype.subdomainName = "";
    OrganizationDetails.prototype.deviceLicenseCount = 0;
    OrganizationDetails.prototype.devicesCount = 0;
    OrganizationDetails.prototype.imageCollection = false;
    OrganizationDetails.prototype.fileManagerEnabled = false;
    OrganizationDetails.create = function create(properties) {
      return new OrganizationDetails(properties);
    };
    OrganizationDetails.encode = function encode(m, w) {
      if (!w) w = $Writer.create();
      if (m.name != null && Object.hasOwnProperty.call(m, "name")) w.uint32(10).string(m.name);
      if (m.ownerEmail != null && Object.hasOwnProperty.call(m, "ownerEmail")) w.uint32(18).string(m.ownerEmail);
      if (m.level != null && Object.hasOwnProperty.call(m, "level")) w.uint32(24).int32(m.level);
      if (m.licenseCount != null && Object.hasOwnProperty.call(m, "licenseCount")) w.uint32(32).int32(m.licenseCount);
      if (m.usersCount != null && Object.hasOwnProperty.call(m, "usersCount")) w.uint32(40).int32(m.usersCount);
      if (m.creationDate != null && Object.hasOwnProperty.call(m, "creationDate")) $root.google.protobuf.Timestamp.encode(m.creationDate, w.uint32(50).fork()).ldelim();
      if (m.expiryDate != null && Object.hasOwnProperty.call(m, "expiryDate")) $root.google.protobuf.Timestamp.encode(m.expiryDate, w.uint32(58).fork()).ldelim();
      if (m.organizationId != null && Object.hasOwnProperty.call(m, "organizationId")) w.uint32(64).int32(m.organizationId);
      if (m.subdomainName != null && Object.hasOwnProperty.call(m, "subdomainName")) w.uint32(74).string(m.subdomainName);
      if (m.deviceLicenseCount != null && Object.hasOwnProperty.call(m, "deviceLicenseCount")) w.uint32(80).int32(m.deviceLicenseCount);
      if (m.devicesCount != null && Object.hasOwnProperty.call(m, "devicesCount")) w.uint32(88).int32(m.devicesCount);
      if (m.startDate != null && Object.hasOwnProperty.call(m, "startDate")) $root.google.protobuf.Timestamp.encode(m.startDate, w.uint32(98).fork()).ldelim();
      if (m.imageCollection != null && Object.hasOwnProperty.call(m, "imageCollection")) w.uint32(112).bool(m.imageCollection);
      if (m.fileManagerEnabled != null && Object.hasOwnProperty.call(m, "fileManagerEnabled")) w.uint32(120).bool(m.fileManagerEnabled);
      return w;
    };
    OrganizationDetails.encodeDelimited = function encodeDelimited(message, writer) {
      return this.encode(message, writer).ldelim();
    };
    OrganizationDetails.decode = function decode(r, l) {
      if (!(r instanceof $Reader)) r = $Reader.create(r);
      var c = l === undefined ? r.len : r.pos + l,
        m = new $root.user.OrganizationDetails();
      while (r.pos < c) {
        var t = r.uint32();
        switch (t >>> 3) {
          case 1:
            m.name = r.string();
            break;
          case 2:
            m.ownerEmail = r.string();
            break;
          case 3:
            m.level = r.int32();
            break;
          case 4:
            m.licenseCount = r.int32();
            break;
          case 5:
            m.usersCount = r.int32();
            break;
          case 6:
            m.creationDate = $root.google.protobuf.Timestamp.decode(r, r.uint32());
            break;
          case 12:
            m.startDate = $root.google.protobuf.Timestamp.decode(r, r.uint32());
            break;
          case 7:
            m.expiryDate = $root.google.protobuf.Timestamp.decode(r, r.uint32());
            break;
          case 8:
            m.organizationId = r.int32();
            break;
          case 9:
            m.subdomainName = r.string();
            break;
          case 10:
            m.deviceLicenseCount = r.int32();
            break;
          case 11:
            m.devicesCount = r.int32();
            break;
          case 14:
            m.imageCollection = r.bool();
            break;
          case 15:
            m.fileManagerEnabled = r.bool();
            break;
          default:
            r.skipType(t & 7);
            break;
        }
      }
      return m;
    };
    OrganizationDetails.decodeDelimited = function decodeDelimited(reader) {
      if (!(reader instanceof $Reader)) reader = new $Reader(reader);
      return this.decode(reader, reader.uint32());
    };
    OrganizationDetails.verify = function verify(m) {
      if (typeof m !== "object" || m === null) return "object expected";
      if (m.name != null && m.hasOwnProperty("name")) {
        if (!$util.isString(m.name)) return "name: string expected";
      }
      if (m.ownerEmail != null && m.hasOwnProperty("ownerEmail")) {
        if (!$util.isString(m.ownerEmail)) return "ownerEmail: string expected";
      }
      if (m.level != null && m.hasOwnProperty("level")) {
        switch (m.level) {
          default:
            return "level: enum value expected";
          case 0:
          case 1:
          case 2:
          case 5:
            break;
        }
      }
      if (m.licenseCount != null && m.hasOwnProperty("licenseCount")) {
        if (!$util.isInteger(m.licenseCount)) return "licenseCount: integer expected";
      }
      if (m.usersCount != null && m.hasOwnProperty("usersCount")) {
        if (!$util.isInteger(m.usersCount)) return "usersCount: integer expected";
      }
      if (m.creationDate != null && m.hasOwnProperty("creationDate")) {
        {
          var e = $root.google.protobuf.Timestamp.verify(m.creationDate);
          if (e) return "creationDate." + e;
        }
      }
      if (m.startDate != null && m.hasOwnProperty("startDate")) {
        {
          var e = $root.google.protobuf.Timestamp.verify(m.startDate);
          if (e) return "startDate." + e;
        }
      }
      if (m.expiryDate != null && m.hasOwnProperty("expiryDate")) {
        {
          var e = $root.google.protobuf.Timestamp.verify(m.expiryDate);
          if (e) return "expiryDate." + e;
        }
      }
      if (m.organizationId != null && m.hasOwnProperty("organizationId")) {
        if (!$util.isInteger(m.organizationId)) return "organizationId: integer expected";
      }
      if (m.subdomainName != null && m.hasOwnProperty("subdomainName")) {
        if (!$util.isString(m.subdomainName)) return "subdomainName: string expected";
      }
      if (m.deviceLicenseCount != null && m.hasOwnProperty("deviceLicenseCount")) {
        if (!$util.isInteger(m.deviceLicenseCount)) return "deviceLicenseCount: integer expected";
      }
      if (m.devicesCount != null && m.hasOwnProperty("devicesCount")) {
        if (!$util.isInteger(m.devicesCount)) return "devicesCount: integer expected";
      }
      if (m.imageCollection != null && m.hasOwnProperty("imageCollection")) {
        if (typeof m.imageCollection !== "boolean") return "imageCollection: boolean expected";
      }
      if (m.fileManagerEnabled != null && m.hasOwnProperty("fileManagerEnabled")) {
        if (typeof m.fileManagerEnabled !== "boolean") return "fileManagerEnabled: boolean expected";
      }
      return null;
    };
    OrganizationDetails.fromObject = function fromObject(d) {
      if (d instanceof $root.user.OrganizationDetails) return d;
      var m = new $root.user.OrganizationDetails();
      if (d.name != null) {
        m.name = String(d.name);
      }
      if (d.ownerEmail != null) {
        m.ownerEmail = String(d.ownerEmail);
      }
      switch (d.level) {
        case "UNKNOWN_USER":
        case 0:
          m.level = 0;
          break;
        case "PRO":
        case 1:
          m.level = 1;
          break;
        case "BUSINESS":
        case 2:
          m.level = 2;
          break;
        case "ENTERPRISE":
        case 5:
          m.level = 5;
          break;
      }
      if (d.licenseCount != null) {
        m.licenseCount = d.licenseCount | 0;
      }
      if (d.usersCount != null) {
        m.usersCount = d.usersCount | 0;
      }
      if (d.creationDate != null) {
        if (typeof d.creationDate !== "object") throw TypeError(".user.OrganizationDetails.creationDate: object expected");
        m.creationDate = $root.google.protobuf.Timestamp.fromObject(d.creationDate);
      }
      if (d.startDate != null) {
        if (typeof d.startDate !== "object") throw TypeError(".user.OrganizationDetails.startDate: object expected");
        m.startDate = $root.google.protobuf.Timestamp.fromObject(d.startDate);
      }
      if (d.expiryDate != null) {
        if (typeof d.expiryDate !== "object") throw TypeError(".user.OrganizationDetails.expiryDate: object expected");
        m.expiryDate = $root.google.protobuf.Timestamp.fromObject(d.expiryDate);
      }
      if (d.organizationId != null) {
        m.organizationId = d.organizationId | 0;
      }
      if (d.subdomainName != null) {
        m.subdomainName = String(d.subdomainName);
      }
      if (d.deviceLicenseCount != null) {
        m.deviceLicenseCount = d.deviceLicenseCount | 0;
      }
      if (d.devicesCount != null) {
        m.devicesCount = d.devicesCount | 0;
      }
      if (d.imageCollection != null) {
        m.imageCollection = Boolean(d.imageCollection);
      }
      if (d.fileManagerEnabled != null) {
        m.fileManagerEnabled = Boolean(d.fileManagerEnabled);
      }
      return m;
    };
    OrganizationDetails.toObject = function toObject(m, o) {
      if (!o) o = {};
      var d = {};
      if (o.defaults) {
        d.name = "";
        d.ownerEmail = "";
        d.level = o.enums === String ? "UNKNOWN_USER" : 0;
        d.licenseCount = 0;
        d.usersCount = 0;
        d.creationDate = null;
        d.expiryDate = null;
        d.organizationId = 0;
        d.subdomainName = "";
        d.deviceLicenseCount = 0;
        d.devicesCount = 0;
        d.startDate = null;
        d.imageCollection = false;
        d.fileManagerEnabled = false;
      }
      if (m.name != null && m.hasOwnProperty("name")) {
        d.name = m.name;
      }
      if (m.ownerEmail != null && m.hasOwnProperty("ownerEmail")) {
        d.ownerEmail = m.ownerEmail;
      }
      if (m.level != null && m.hasOwnProperty("level")) {
        d.level = o.enums === String ? $root.user.Level[m.level] : m.level;
      }
      if (m.licenseCount != null && m.hasOwnProperty("licenseCount")) {
        d.licenseCount = m.licenseCount;
      }
      if (m.usersCount != null && m.hasOwnProperty("usersCount")) {
        d.usersCount = m.usersCount;
      }
      if (m.creationDate != null && m.hasOwnProperty("creationDate")) {
        d.creationDate = $root.google.protobuf.Timestamp.toObject(m.creationDate, o);
      }
      if (m.expiryDate != null && m.hasOwnProperty("expiryDate")) {
        d.expiryDate = $root.google.protobuf.Timestamp.toObject(m.expiryDate, o);
      }
      if (m.organizationId != null && m.hasOwnProperty("organizationId")) {
        d.organizationId = m.organizationId;
      }
      if (m.subdomainName != null && m.hasOwnProperty("subdomainName")) {
        d.subdomainName = m.subdomainName;
      }
      if (m.deviceLicenseCount != null && m.hasOwnProperty("deviceLicenseCount")) {
        d.deviceLicenseCount = m.deviceLicenseCount;
      }
      if (m.devicesCount != null && m.hasOwnProperty("devicesCount")) {
        d.devicesCount = m.devicesCount;
      }
      if (m.startDate != null && m.hasOwnProperty("startDate")) {
        d.startDate = $root.google.protobuf.Timestamp.toObject(m.startDate, o);
      }
      if (m.imageCollection != null && m.hasOwnProperty("imageCollection")) {
        d.imageCollection = m.imageCollection;
      }
      if (m.fileManagerEnabled != null && m.hasOwnProperty("fileManagerEnabled")) {
        d.fileManagerEnabled = m.fileManagerEnabled;
      }
      return d;
    };
    OrganizationDetails.prototype.toJSON = function toJSON() {
      return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };
    return OrganizationDetails;
  }();
  user.Plan = function () {
    function Plan(p) {
      this.prices = [];
      if (p) for (var ks = Object.keys(p), i = 0; i < ks.length; ++i) if (p[ks[i]] != null) this[ks[i]] = p[ks[i]];
    }
    Plan.prototype.id = "";
    Plan.prototype.name = "";
    Plan.prototype.prices = $util.emptyArray;
    Plan.create = function create(properties) {
      return new Plan(properties);
    };
    Plan.encode = function encode(m, w) {
      if (!w) w = $Writer.create();
      if (m.id != null && Object.hasOwnProperty.call(m, "id")) w.uint32(10).string(m.id);
      if (m.name != null && Object.hasOwnProperty.call(m, "name")) w.uint32(18).string(m.name);
      if (m.prices != null && m.prices.length) {
        for (var i = 0; i < m.prices.length; ++i) $root.user.PriceItem.encode(m.prices[i], w.uint32(26).fork()).ldelim();
      }
      return w;
    };
    Plan.encodeDelimited = function encodeDelimited(message, writer) {
      return this.encode(message, writer).ldelim();
    };
    Plan.decode = function decode(r, l) {
      if (!(r instanceof $Reader)) r = $Reader.create(r);
      var c = l === undefined ? r.len : r.pos + l,
        m = new $root.user.Plan();
      while (r.pos < c) {
        var t = r.uint32();
        switch (t >>> 3) {
          case 1:
            m.id = r.string();
            break;
          case 2:
            m.name = r.string();
            break;
          case 3:
            if (!(m.prices && m.prices.length)) m.prices = [];
            m.prices.push($root.user.PriceItem.decode(r, r.uint32()));
            break;
          default:
            r.skipType(t & 7);
            break;
        }
      }
      return m;
    };
    Plan.decodeDelimited = function decodeDelimited(reader) {
      if (!(reader instanceof $Reader)) reader = new $Reader(reader);
      return this.decode(reader, reader.uint32());
    };
    Plan.verify = function verify(m) {
      if (typeof m !== "object" || m === null) return "object expected";
      if (m.id != null && m.hasOwnProperty("id")) {
        if (!$util.isString(m.id)) return "id: string expected";
      }
      if (m.name != null && m.hasOwnProperty("name")) {
        if (!$util.isString(m.name)) return "name: string expected";
      }
      if (m.prices != null && m.hasOwnProperty("prices")) {
        if (!Array.isArray(m.prices)) return "prices: array expected";
        for (var i = 0; i < m.prices.length; ++i) {
          {
            var e = $root.user.PriceItem.verify(m.prices[i]);
            if (e) return "prices." + e;
          }
        }
      }
      return null;
    };
    Plan.fromObject = function fromObject(d) {
      if (d instanceof $root.user.Plan) return d;
      var m = new $root.user.Plan();
      if (d.id != null) {
        m.id = String(d.id);
      }
      if (d.name != null) {
        m.name = String(d.name);
      }
      if (d.prices) {
        if (!Array.isArray(d.prices)) throw TypeError(".user.Plan.prices: array expected");
        m.prices = [];
        for (var i = 0; i < d.prices.length; ++i) {
          if (typeof d.prices[i] !== "object") throw TypeError(".user.Plan.prices: object expected");
          m.prices[i] = $root.user.PriceItem.fromObject(d.prices[i]);
        }
      }
      return m;
    };
    Plan.toObject = function toObject(m, o) {
      if (!o) o = {};
      var d = {};
      if (o.arrays || o.defaults) {
        d.prices = [];
      }
      if (o.defaults) {
        d.id = "";
        d.name = "";
      }
      if (m.id != null && m.hasOwnProperty("id")) {
        d.id = m.id;
      }
      if (m.name != null && m.hasOwnProperty("name")) {
        d.name = m.name;
      }
      if (m.prices && m.prices.length) {
        d.prices = [];
        for (var j = 0; j < m.prices.length; ++j) {
          d.prices[j] = $root.user.PriceItem.toObject(m.prices[j], o);
        }
      }
      return d;
    };
    Plan.prototype.toJSON = function toJSON() {
      return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };
    return Plan;
  }();
  user.PriceItem = function () {
    function PriceItem(p) {
      if (p) for (var ks = Object.keys(p), i = 0; i < ks.length; ++i) if (p[ks[i]] != null) this[ks[i]] = p[ks[i]];
    }
    PriceItem.prototype.id = "";
    PriceItem.prototype.amount = $util.Long ? $util.Long.fromBits(0, 0, false) : 0;
    PriceItem.prototype.interval = "";
    PriceItem.prototype.intervalCount = $util.Long ? $util.Long.fromBits(0, 0, false) : 0;
    PriceItem.prototype.trialPeriodDays = $util.Long ? $util.Long.fromBits(0, 0, false) : 0;
    PriceItem.create = function create(properties) {
      return new PriceItem(properties);
    };
    PriceItem.encode = function encode(m, w) {
      if (!w) w = $Writer.create();
      if (m.id != null && Object.hasOwnProperty.call(m, "id")) w.uint32(10).string(m.id);
      if (m.amount != null && Object.hasOwnProperty.call(m, "amount")) w.uint32(16).int64(m.amount);
      if (m.interval != null && Object.hasOwnProperty.call(m, "interval")) w.uint32(26).string(m.interval);
      if (m.intervalCount != null && Object.hasOwnProperty.call(m, "intervalCount")) w.uint32(32).int64(m.intervalCount);
      if (m.trialPeriodDays != null && Object.hasOwnProperty.call(m, "trialPeriodDays")) w.uint32(40).int64(m.trialPeriodDays);
      return w;
    };
    PriceItem.encodeDelimited = function encodeDelimited(message, writer) {
      return this.encode(message, writer).ldelim();
    };
    PriceItem.decode = function decode(r, l) {
      if (!(r instanceof $Reader)) r = $Reader.create(r);
      var c = l === undefined ? r.len : r.pos + l,
        m = new $root.user.PriceItem();
      while (r.pos < c) {
        var t = r.uint32();
        switch (t >>> 3) {
          case 1:
            m.id = r.string();
            break;
          case 2:
            m.amount = r.int64();
            break;
          case 3:
            m.interval = r.string();
            break;
          case 4:
            m.intervalCount = r.int64();
            break;
          case 5:
            m.trialPeriodDays = r.int64();
            break;
          default:
            r.skipType(t & 7);
            break;
        }
      }
      return m;
    };
    PriceItem.decodeDelimited = function decodeDelimited(reader) {
      if (!(reader instanceof $Reader)) reader = new $Reader(reader);
      return this.decode(reader, reader.uint32());
    };
    PriceItem.verify = function verify(m) {
      if (typeof m !== "object" || m === null) return "object expected";
      if (m.id != null && m.hasOwnProperty("id")) {
        if (!$util.isString(m.id)) return "id: string expected";
      }
      if (m.amount != null && m.hasOwnProperty("amount")) {
        if (!$util.isInteger(m.amount) && !(m.amount && $util.isInteger(m.amount.low) && $util.isInteger(m.amount.high))) return "amount: integer|Long expected";
      }
      if (m.interval != null && m.hasOwnProperty("interval")) {
        if (!$util.isString(m.interval)) return "interval: string expected";
      }
      if (m.intervalCount != null && m.hasOwnProperty("intervalCount")) {
        if (!$util.isInteger(m.intervalCount) && !(m.intervalCount && $util.isInteger(m.intervalCount.low) && $util.isInteger(m.intervalCount.high))) return "intervalCount: integer|Long expected";
      }
      if (m.trialPeriodDays != null && m.hasOwnProperty("trialPeriodDays")) {
        if (!$util.isInteger(m.trialPeriodDays) && !(m.trialPeriodDays && $util.isInteger(m.trialPeriodDays.low) && $util.isInteger(m.trialPeriodDays.high))) return "trialPeriodDays: integer|Long expected";
      }
      return null;
    };
    PriceItem.fromObject = function fromObject(d) {
      if (d instanceof $root.user.PriceItem) return d;
      var m = new $root.user.PriceItem();
      if (d.id != null) {
        m.id = String(d.id);
      }
      if (d.amount != null) {
        if ($util.Long) (m.amount = $util.Long.fromValue(d.amount)).unsigned = false;else if (typeof d.amount === "string") m.amount = parseInt(d.amount, 10);else if (typeof d.amount === "number") m.amount = d.amount;else if (typeof d.amount === "object") m.amount = new $util.LongBits(d.amount.low >>> 0, d.amount.high >>> 0).toNumber();
      }
      if (d.interval != null) {
        m.interval = String(d.interval);
      }
      if (d.intervalCount != null) {
        if ($util.Long) (m.intervalCount = $util.Long.fromValue(d.intervalCount)).unsigned = false;else if (typeof d.intervalCount === "string") m.intervalCount = parseInt(d.intervalCount, 10);else if (typeof d.intervalCount === "number") m.intervalCount = d.intervalCount;else if (typeof d.intervalCount === "object") m.intervalCount = new $util.LongBits(d.intervalCount.low >>> 0, d.intervalCount.high >>> 0).toNumber();
      }
      if (d.trialPeriodDays != null) {
        if ($util.Long) (m.trialPeriodDays = $util.Long.fromValue(d.trialPeriodDays)).unsigned = false;else if (typeof d.trialPeriodDays === "string") m.trialPeriodDays = parseInt(d.trialPeriodDays, 10);else if (typeof d.trialPeriodDays === "number") m.trialPeriodDays = d.trialPeriodDays;else if (typeof d.trialPeriodDays === "object") m.trialPeriodDays = new $util.LongBits(d.trialPeriodDays.low >>> 0, d.trialPeriodDays.high >>> 0).toNumber();
      }
      return m;
    };
    PriceItem.toObject = function toObject(m, o) {
      if (!o) o = {};
      var d = {};
      if (o.defaults) {
        d.id = "";
        if ($util.Long) {
          var n = new $util.Long(0, 0, false);
          d.amount = o.longs === String ? n.toString() : o.longs === Number ? n.toNumber() : n;
        } else d.amount = o.longs === String ? "0" : 0;
        d.interval = "";
        if ($util.Long) {
          var n = new $util.Long(0, 0, false);
          d.intervalCount = o.longs === String ? n.toString() : o.longs === Number ? n.toNumber() : n;
        } else d.intervalCount = o.longs === String ? "0" : 0;
        if ($util.Long) {
          var n = new $util.Long(0, 0, false);
          d.trialPeriodDays = o.longs === String ? n.toString() : o.longs === Number ? n.toNumber() : n;
        } else d.trialPeriodDays = o.longs === String ? "0" : 0;
      }
      if (m.id != null && m.hasOwnProperty("id")) {
        d.id = m.id;
      }
      if (m.amount != null && m.hasOwnProperty("amount")) {
        if (typeof m.amount === "number") d.amount = o.longs === String ? String(m.amount) : m.amount;else d.amount = o.longs === String ? $util.Long.prototype.toString.call(m.amount) : o.longs === Number ? new $util.LongBits(m.amount.low >>> 0, m.amount.high >>> 0).toNumber() : m.amount;
      }
      if (m.interval != null && m.hasOwnProperty("interval")) {
        d.interval = m.interval;
      }
      if (m.intervalCount != null && m.hasOwnProperty("intervalCount")) {
        if (typeof m.intervalCount === "number") d.intervalCount = o.longs === String ? String(m.intervalCount) : m.intervalCount;else d.intervalCount = o.longs === String ? $util.Long.prototype.toString.call(m.intervalCount) : o.longs === Number ? new $util.LongBits(m.intervalCount.low >>> 0, m.intervalCount.high >>> 0).toNumber() : m.intervalCount;
      }
      if (m.trialPeriodDays != null && m.hasOwnProperty("trialPeriodDays")) {
        if (typeof m.trialPeriodDays === "number") d.trialPeriodDays = o.longs === String ? String(m.trialPeriodDays) : m.trialPeriodDays;else d.trialPeriodDays = o.longs === String ? $util.Long.prototype.toString.call(m.trialPeriodDays) : o.longs === Number ? new $util.LongBits(m.trialPeriodDays.low >>> 0, m.trialPeriodDays.high >>> 0).toNumber() : m.trialPeriodDays;
      }
      return d;
    };
    PriceItem.prototype.toJSON = function toJSON() {
      return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };
    return PriceItem;
  }();
  user.Subscription = function () {
    function Subscription(p) {
      this.items = [];
      if (p) for (var ks = Object.keys(p), i = 0; i < ks.length; ++i) if (p[ks[i]] != null) this[ks[i]] = p[ks[i]];
    }
    Subscription.prototype.stripeCustomerId = "";
    Subscription.prototype.stripeSubscriptionId = "";
    Subscription.prototype.planName = "";
    Subscription.prototype.status = 0;
    Subscription.prototype.currentPeriodStart = null;
    Subscription.prototype.currentPeriodEnd = null;
    Subscription.prototype.trialEnd = null;
    Subscription.prototype.cancelAtPeriodEnd = false;
    Subscription.prototype.items = $util.emptyArray;
    Subscription.prototype.interval = "";
    Subscription.prototype.intervalCount = $util.Long ? $util.Long.fromBits(0, 0, false) : 0;
    let $oneOfFields;
    Object.defineProperty(Subscription.prototype, "_trialEnd", {
      get: $util.oneOfGetter($oneOfFields = ["trialEnd"]),
      set: $util.oneOfSetter($oneOfFields)
    });
    Subscription.create = function create(properties) {
      return new Subscription(properties);
    };
    Subscription.encode = function encode(m, w) {
      if (!w) w = $Writer.create();
      if (m.stripeCustomerId != null && Object.hasOwnProperty.call(m, "stripeCustomerId")) w.uint32(10).string(m.stripeCustomerId);
      if (m.stripeSubscriptionId != null && Object.hasOwnProperty.call(m, "stripeSubscriptionId")) w.uint32(18).string(m.stripeSubscriptionId);
      if (m.planName != null && Object.hasOwnProperty.call(m, "planName")) w.uint32(26).string(m.planName);
      if (m.status != null && Object.hasOwnProperty.call(m, "status")) w.uint32(32).int32(m.status);
      if (m.currentPeriodStart != null && Object.hasOwnProperty.call(m, "currentPeriodStart")) $root.google.protobuf.Timestamp.encode(m.currentPeriodStart, w.uint32(42).fork()).ldelim();
      if (m.currentPeriodEnd != null && Object.hasOwnProperty.call(m, "currentPeriodEnd")) $root.google.protobuf.Timestamp.encode(m.currentPeriodEnd, w.uint32(50).fork()).ldelim();
      if (m.trialEnd != null && Object.hasOwnProperty.call(m, "trialEnd")) $root.google.protobuf.Timestamp.encode(m.trialEnd, w.uint32(58).fork()).ldelim();
      if (m.cancelAtPeriodEnd != null && Object.hasOwnProperty.call(m, "cancelAtPeriodEnd")) w.uint32(64).bool(m.cancelAtPeriodEnd);
      if (m.items != null && m.items.length) {
        for (var i = 0; i < m.items.length; ++i) $root.user.SubscriptionItem.encode(m.items[i], w.uint32(74).fork()).ldelim();
      }
      if (m.interval != null && Object.hasOwnProperty.call(m, "interval")) w.uint32(82).string(m.interval);
      if (m.intervalCount != null && Object.hasOwnProperty.call(m, "intervalCount")) w.uint32(88).int64(m.intervalCount);
      return w;
    };
    Subscription.encodeDelimited = function encodeDelimited(message, writer) {
      return this.encode(message, writer).ldelim();
    };
    Subscription.decode = function decode(r, l) {
      if (!(r instanceof $Reader)) r = $Reader.create(r);
      var c = l === undefined ? r.len : r.pos + l,
        m = new $root.user.Subscription();
      while (r.pos < c) {
        var t = r.uint32();
        switch (t >>> 3) {
          case 1:
            m.stripeCustomerId = r.string();
            break;
          case 2:
            m.stripeSubscriptionId = r.string();
            break;
          case 3:
            m.planName = r.string();
            break;
          case 4:
            m.status = r.int32();
            break;
          case 5:
            m.currentPeriodStart = $root.google.protobuf.Timestamp.decode(r, r.uint32());
            break;
          case 6:
            m.currentPeriodEnd = $root.google.protobuf.Timestamp.decode(r, r.uint32());
            break;
          case 7:
            m.trialEnd = $root.google.protobuf.Timestamp.decode(r, r.uint32());
            break;
          case 8:
            m.cancelAtPeriodEnd = r.bool();
            break;
          case 9:
            if (!(m.items && m.items.length)) m.items = [];
            m.items.push($root.user.SubscriptionItem.decode(r, r.uint32()));
            break;
          case 10:
            m.interval = r.string();
            break;
          case 11:
            m.intervalCount = r.int64();
            break;
          default:
            r.skipType(t & 7);
            break;
        }
      }
      return m;
    };
    Subscription.decodeDelimited = function decodeDelimited(reader) {
      if (!(reader instanceof $Reader)) reader = new $Reader(reader);
      return this.decode(reader, reader.uint32());
    };
    Subscription.verify = function verify(m) {
      if (typeof m !== "object" || m === null) return "object expected";
      var p = {};
      if (m.stripeCustomerId != null && m.hasOwnProperty("stripeCustomerId")) {
        if (!$util.isString(m.stripeCustomerId)) return "stripeCustomerId: string expected";
      }
      if (m.stripeSubscriptionId != null && m.hasOwnProperty("stripeSubscriptionId")) {
        if (!$util.isString(m.stripeSubscriptionId)) return "stripeSubscriptionId: string expected";
      }
      if (m.planName != null && m.hasOwnProperty("planName")) {
        if (!$util.isString(m.planName)) return "planName: string expected";
      }
      if (m.status != null && m.hasOwnProperty("status")) {
        switch (m.status) {
          default:
            return "status: enum value expected";
          case 0:
          case 1:
          case 2:
          case 3:
          case 4:
          case 5:
          case 6:
          case 7:
          case 8:
            break;
        }
      }
      if (m.currentPeriodStart != null && m.hasOwnProperty("currentPeriodStart")) {
        {
          var e = $root.google.protobuf.Timestamp.verify(m.currentPeriodStart);
          if (e) return "currentPeriodStart." + e;
        }
      }
      if (m.currentPeriodEnd != null && m.hasOwnProperty("currentPeriodEnd")) {
        {
          var e = $root.google.protobuf.Timestamp.verify(m.currentPeriodEnd);
          if (e) return "currentPeriodEnd." + e;
        }
      }
      if (m.trialEnd != null && m.hasOwnProperty("trialEnd")) {
        p._trialEnd = 1;
        {
          var e = $root.google.protobuf.Timestamp.verify(m.trialEnd);
          if (e) return "trialEnd." + e;
        }
      }
      if (m.cancelAtPeriodEnd != null && m.hasOwnProperty("cancelAtPeriodEnd")) {
        if (typeof m.cancelAtPeriodEnd !== "boolean") return "cancelAtPeriodEnd: boolean expected";
      }
      if (m.items != null && m.hasOwnProperty("items")) {
        if (!Array.isArray(m.items)) return "items: array expected";
        for (var i = 0; i < m.items.length; ++i) {
          {
            var e = $root.user.SubscriptionItem.verify(m.items[i]);
            if (e) return "items." + e;
          }
        }
      }
      if (m.interval != null && m.hasOwnProperty("interval")) {
        if (!$util.isString(m.interval)) return "interval: string expected";
      }
      if (m.intervalCount != null && m.hasOwnProperty("intervalCount")) {
        if (!$util.isInteger(m.intervalCount) && !(m.intervalCount && $util.isInteger(m.intervalCount.low) && $util.isInteger(m.intervalCount.high))) return "intervalCount: integer|Long expected";
      }
      return null;
    };
    Subscription.fromObject = function fromObject(d) {
      if (d instanceof $root.user.Subscription) return d;
      var m = new $root.user.Subscription();
      if (d.stripeCustomerId != null) {
        m.stripeCustomerId = String(d.stripeCustomerId);
      }
      if (d.stripeSubscriptionId != null) {
        m.stripeSubscriptionId = String(d.stripeSubscriptionId);
      }
      if (d.planName != null) {
        m.planName = String(d.planName);
      }
      switch (d.status) {
        case "UNKNOWN_STATUS":
        case 0:
          m.status = 0;
          break;
        case "TRIALING":
        case 1:
          m.status = 1;
          break;
        case "ACTIVE":
        case 2:
          m.status = 2;
          break;
        case "INCOMPLETE":
        case 3:
          m.status = 3;
          break;
        case "INCOMPLETE_EXPIRED":
        case 4:
          m.status = 4;
          break;
        case "PAST_DUE":
        case 5:
          m.status = 5;
          break;
        case "CANCELED":
        case 6:
          m.status = 6;
          break;
        case "UNPAID":
        case 7:
          m.status = 7;
          break;
        case "PAUSED":
        case 8:
          m.status = 8;
          break;
      }
      if (d.currentPeriodStart != null) {
        if (typeof d.currentPeriodStart !== "object") throw TypeError(".user.Subscription.currentPeriodStart: object expected");
        m.currentPeriodStart = $root.google.protobuf.Timestamp.fromObject(d.currentPeriodStart);
      }
      if (d.currentPeriodEnd != null) {
        if (typeof d.currentPeriodEnd !== "object") throw TypeError(".user.Subscription.currentPeriodEnd: object expected");
        m.currentPeriodEnd = $root.google.protobuf.Timestamp.fromObject(d.currentPeriodEnd);
      }
      if (d.trialEnd != null) {
        if (typeof d.trialEnd !== "object") throw TypeError(".user.Subscription.trialEnd: object expected");
        m.trialEnd = $root.google.protobuf.Timestamp.fromObject(d.trialEnd);
      }
      if (d.cancelAtPeriodEnd != null) {
        m.cancelAtPeriodEnd = Boolean(d.cancelAtPeriodEnd);
      }
      if (d.items) {
        if (!Array.isArray(d.items)) throw TypeError(".user.Subscription.items: array expected");
        m.items = [];
        for (var i = 0; i < d.items.length; ++i) {
          if (typeof d.items[i] !== "object") throw TypeError(".user.Subscription.items: object expected");
          m.items[i] = $root.user.SubscriptionItem.fromObject(d.items[i]);
        }
      }
      if (d.interval != null) {
        m.interval = String(d.interval);
      }
      if (d.intervalCount != null) {
        if ($util.Long) (m.intervalCount = $util.Long.fromValue(d.intervalCount)).unsigned = false;else if (typeof d.intervalCount === "string") m.intervalCount = parseInt(d.intervalCount, 10);else if (typeof d.intervalCount === "number") m.intervalCount = d.intervalCount;else if (typeof d.intervalCount === "object") m.intervalCount = new $util.LongBits(d.intervalCount.low >>> 0, d.intervalCount.high >>> 0).toNumber();
      }
      return m;
    };
    Subscription.toObject = function toObject(m, o) {
      if (!o) o = {};
      var d = {};
      if (o.arrays || o.defaults) {
        d.items = [];
      }
      if (o.defaults) {
        d.stripeCustomerId = "";
        d.stripeSubscriptionId = "";
        d.planName = "";
        d.status = o.enums === String ? "UNKNOWN_STATUS" : 0;
        d.currentPeriodStart = null;
        d.currentPeriodEnd = null;
        d.cancelAtPeriodEnd = false;
        d.interval = "";
        if ($util.Long) {
          var n = new $util.Long(0, 0, false);
          d.intervalCount = o.longs === String ? n.toString() : o.longs === Number ? n.toNumber() : n;
        } else d.intervalCount = o.longs === String ? "0" : 0;
      }
      if (m.stripeCustomerId != null && m.hasOwnProperty("stripeCustomerId")) {
        d.stripeCustomerId = m.stripeCustomerId;
      }
      if (m.stripeSubscriptionId != null && m.hasOwnProperty("stripeSubscriptionId")) {
        d.stripeSubscriptionId = m.stripeSubscriptionId;
      }
      if (m.planName != null && m.hasOwnProperty("planName")) {
        d.planName = m.planName;
      }
      if (m.status != null && m.hasOwnProperty("status")) {
        d.status = o.enums === String ? $root.user.SubscriptionStatus[m.status] : m.status;
      }
      if (m.currentPeriodStart != null && m.hasOwnProperty("currentPeriodStart")) {
        d.currentPeriodStart = $root.google.protobuf.Timestamp.toObject(m.currentPeriodStart, o);
      }
      if (m.currentPeriodEnd != null && m.hasOwnProperty("currentPeriodEnd")) {
        d.currentPeriodEnd = $root.google.protobuf.Timestamp.toObject(m.currentPeriodEnd, o);
      }
      if (m.trialEnd != null && m.hasOwnProperty("trialEnd")) {
        d.trialEnd = $root.google.protobuf.Timestamp.toObject(m.trialEnd, o);
        if (o.oneofs) d._trialEnd = "trialEnd";
      }
      if (m.cancelAtPeriodEnd != null && m.hasOwnProperty("cancelAtPeriodEnd")) {
        d.cancelAtPeriodEnd = m.cancelAtPeriodEnd;
      }
      if (m.items && m.items.length) {
        d.items = [];
        for (var j = 0; j < m.items.length; ++j) {
          d.items[j] = $root.user.SubscriptionItem.toObject(m.items[j], o);
        }
      }
      if (m.interval != null && m.hasOwnProperty("interval")) {
        d.interval = m.interval;
      }
      if (m.intervalCount != null && m.hasOwnProperty("intervalCount")) {
        if (typeof m.intervalCount === "number") d.intervalCount = o.longs === String ? String(m.intervalCount) : m.intervalCount;else d.intervalCount = o.longs === String ? $util.Long.prototype.toString.call(m.intervalCount) : o.longs === Number ? new $util.LongBits(m.intervalCount.low >>> 0, m.intervalCount.high >>> 0).toNumber() : m.intervalCount;
      }
      return d;
    };
    Subscription.prototype.toJSON = function toJSON() {
      return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };
    return Subscription;
  }();
  user.SubscriptionItem = function () {
    function SubscriptionItem(p) {
      if (p) for (var ks = Object.keys(p), i = 0; i < ks.length; ++i) if (p[ks[i]] != null) this[ks[i]] = p[ks[i]];
    }
    SubscriptionItem.prototype.stripeItemId = "";
    SubscriptionItem.prototype.priceId = "";
    SubscriptionItem.prototype.quantity = 0;
    SubscriptionItem.prototype.createdAt = null;
    SubscriptionItem.prototype.updatedAt = null;
    SubscriptionItem.create = function create(properties) {
      return new SubscriptionItem(properties);
    };
    SubscriptionItem.encode = function encode(m, w) {
      if (!w) w = $Writer.create();
      if (m.stripeItemId != null && Object.hasOwnProperty.call(m, "stripeItemId")) w.uint32(10).string(m.stripeItemId);
      if (m.priceId != null && Object.hasOwnProperty.call(m, "priceId")) w.uint32(18).string(m.priceId);
      if (m.quantity != null && Object.hasOwnProperty.call(m, "quantity")) w.uint32(24).int32(m.quantity);
      if (m.createdAt != null && Object.hasOwnProperty.call(m, "createdAt")) $root.google.protobuf.Timestamp.encode(m.createdAt, w.uint32(34).fork()).ldelim();
      if (m.updatedAt != null && Object.hasOwnProperty.call(m, "updatedAt")) $root.google.protobuf.Timestamp.encode(m.updatedAt, w.uint32(42).fork()).ldelim();
      return w;
    };
    SubscriptionItem.encodeDelimited = function encodeDelimited(message, writer) {
      return this.encode(message, writer).ldelim();
    };
    SubscriptionItem.decode = function decode(r, l) {
      if (!(r instanceof $Reader)) r = $Reader.create(r);
      var c = l === undefined ? r.len : r.pos + l,
        m = new $root.user.SubscriptionItem();
      while (r.pos < c) {
        var t = r.uint32();
        switch (t >>> 3) {
          case 1:
            m.stripeItemId = r.string();
            break;
          case 2:
            m.priceId = r.string();
            break;
          case 3:
            m.quantity = r.int32();
            break;
          case 4:
            m.createdAt = $root.google.protobuf.Timestamp.decode(r, r.uint32());
            break;
          case 5:
            m.updatedAt = $root.google.protobuf.Timestamp.decode(r, r.uint32());
            break;
          default:
            r.skipType(t & 7);
            break;
        }
      }
      return m;
    };
    SubscriptionItem.decodeDelimited = function decodeDelimited(reader) {
      if (!(reader instanceof $Reader)) reader = new $Reader(reader);
      return this.decode(reader, reader.uint32());
    };
    SubscriptionItem.verify = function verify(m) {
      if (typeof m !== "object" || m === null) return "object expected";
      if (m.stripeItemId != null && m.hasOwnProperty("stripeItemId")) {
        if (!$util.isString(m.stripeItemId)) return "stripeItemId: string expected";
      }
      if (m.priceId != null && m.hasOwnProperty("priceId")) {
        if (!$util.isString(m.priceId)) return "priceId: string expected";
      }
      if (m.quantity != null && m.hasOwnProperty("quantity")) {
        if (!$util.isInteger(m.quantity)) return "quantity: integer expected";
      }
      if (m.createdAt != null && m.hasOwnProperty("createdAt")) {
        {
          var e = $root.google.protobuf.Timestamp.verify(m.createdAt);
          if (e) return "createdAt." + e;
        }
      }
      if (m.updatedAt != null && m.hasOwnProperty("updatedAt")) {
        {
          var e = $root.google.protobuf.Timestamp.verify(m.updatedAt);
          if (e) return "updatedAt." + e;
        }
      }
      return null;
    };
    SubscriptionItem.fromObject = function fromObject(d) {
      if (d instanceof $root.user.SubscriptionItem) return d;
      var m = new $root.user.SubscriptionItem();
      if (d.stripeItemId != null) {
        m.stripeItemId = String(d.stripeItemId);
      }
      if (d.priceId != null) {
        m.priceId = String(d.priceId);
      }
      if (d.quantity != null) {
        m.quantity = d.quantity | 0;
      }
      if (d.createdAt != null) {
        if (typeof d.createdAt !== "object") throw TypeError(".user.SubscriptionItem.createdAt: object expected");
        m.createdAt = $root.google.protobuf.Timestamp.fromObject(d.createdAt);
      }
      if (d.updatedAt != null) {
        if (typeof d.updatedAt !== "object") throw TypeError(".user.SubscriptionItem.updatedAt: object expected");
        m.updatedAt = $root.google.protobuf.Timestamp.fromObject(d.updatedAt);
      }
      return m;
    };
    SubscriptionItem.toObject = function toObject(m, o) {
      if (!o) o = {};
      var d = {};
      if (o.defaults) {
        d.stripeItemId = "";
        d.priceId = "";
        d.quantity = 0;
        d.createdAt = null;
        d.updatedAt = null;
      }
      if (m.stripeItemId != null && m.hasOwnProperty("stripeItemId")) {
        d.stripeItemId = m.stripeItemId;
      }
      if (m.priceId != null && m.hasOwnProperty("priceId")) {
        d.priceId = m.priceId;
      }
      if (m.quantity != null && m.hasOwnProperty("quantity")) {
        d.quantity = m.quantity;
      }
      if (m.createdAt != null && m.hasOwnProperty("createdAt")) {
        d.createdAt = $root.google.protobuf.Timestamp.toObject(m.createdAt, o);
      }
      if (m.updatedAt != null && m.hasOwnProperty("updatedAt")) {
        d.updatedAt = $root.google.protobuf.Timestamp.toObject(m.updatedAt, o);
      }
      return d;
    };
    SubscriptionItem.prototype.toJSON = function toJSON() {
      return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };
    return SubscriptionItem;
  }();
  return user;
})();
export const google = $root.google = (() => {
  const google = {};
  google.protobuf = function () {
    const protobuf = {};
    protobuf.Empty = function () {
      function Empty(p) {
        if (p) for (var ks = Object.keys(p), i = 0; i < ks.length; ++i) if (p[ks[i]] != null) this[ks[i]] = p[ks[i]];
      }
      Empty.create = function create(properties) {
        return new Empty(properties);
      };
      Empty.encode = function encode(m, w) {
        if (!w) w = $Writer.create();
        return w;
      };
      Empty.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
      };
      Empty.decode = function decode(r, l) {
        if (!(r instanceof $Reader)) r = $Reader.create(r);
        var c = l === undefined ? r.len : r.pos + l,
          m = new $root.google.protobuf.Empty();
        while (r.pos < c) {
          var t = r.uint32();
          switch (t >>> 3) {
            default:
              r.skipType(t & 7);
              break;
          }
        }
        return m;
      };
      Empty.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader)) reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
      };
      Empty.verify = function verify(m) {
        if (typeof m !== "object" || m === null) return "object expected";
        return null;
      };
      Empty.fromObject = function fromObject(d) {
        if (d instanceof $root.google.protobuf.Empty) return d;
        return new $root.google.protobuf.Empty();
      };
      Empty.toObject = function toObject() {
        return {};
      };
      Empty.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
      };
      return Empty;
    }();
    protobuf.Timestamp = function () {
      function Timestamp(p) {
        if (p) for (var ks = Object.keys(p), i = 0; i < ks.length; ++i) if (p[ks[i]] != null) this[ks[i]] = p[ks[i]];
      }
      Timestamp.prototype.seconds = $util.Long ? $util.Long.fromBits(0, 0, false) : 0;
      Timestamp.prototype.nanos = 0;
      Timestamp.create = function create(properties) {
        return new Timestamp(properties);
      };
      Timestamp.encode = function encode(m, w) {
        if (!w) w = $Writer.create();
        if (m.seconds != null && Object.hasOwnProperty.call(m, "seconds")) w.uint32(8).int64(m.seconds);
        if (m.nanos != null && Object.hasOwnProperty.call(m, "nanos")) w.uint32(16).int32(m.nanos);
        return w;
      };
      Timestamp.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
      };
      Timestamp.decode = function decode(r, l) {
        if (!(r instanceof $Reader)) r = $Reader.create(r);
        var c = l === undefined ? r.len : r.pos + l,
          m = new $root.google.protobuf.Timestamp();
        while (r.pos < c) {
          var t = r.uint32();
          switch (t >>> 3) {
            case 1:
              m.seconds = r.int64();
              break;
            case 2:
              m.nanos = r.int32();
              break;
            default:
              r.skipType(t & 7);
              break;
          }
        }
        return m;
      };
      Timestamp.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader)) reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
      };
      Timestamp.verify = function verify(m) {
        if (typeof m !== "object" || m === null) return "object expected";
        if (m.seconds != null && m.hasOwnProperty("seconds")) {
          if (!$util.isInteger(m.seconds) && !(m.seconds && $util.isInteger(m.seconds.low) && $util.isInteger(m.seconds.high))) return "seconds: integer|Long expected";
        }
        if (m.nanos != null && m.hasOwnProperty("nanos")) {
          if (!$util.isInteger(m.nanos)) return "nanos: integer expected";
        }
        return null;
      };
      Timestamp.fromObject = function fromObject(d) {
        if (d instanceof $root.google.protobuf.Timestamp) return d;
        var m = new $root.google.protobuf.Timestamp();
        if (d.seconds != null) {
          if ($util.Long) (m.seconds = $util.Long.fromValue(d.seconds)).unsigned = false;else if (typeof d.seconds === "string") m.seconds = parseInt(d.seconds, 10);else if (typeof d.seconds === "number") m.seconds = d.seconds;else if (typeof d.seconds === "object") m.seconds = new $util.LongBits(d.seconds.low >>> 0, d.seconds.high >>> 0).toNumber();
        }
        if (d.nanos != null) {
          m.nanos = d.nanos | 0;
        }
        return m;
      };
      Timestamp.toObject = function toObject(m, o) {
        if (!o) o = {};
        var d = {};
        if (o.defaults) {
          if ($util.Long) {
            var n = new $util.Long(0, 0, false);
            d.seconds = o.longs === String ? n.toString() : o.longs === Number ? n.toNumber() : n;
          } else d.seconds = o.longs === String ? "0" : 0;
          d.nanos = 0;
        }
        if (m.seconds != null && m.hasOwnProperty("seconds")) {
          if (typeof m.seconds === "number") d.seconds = o.longs === String ? String(m.seconds) : m.seconds;else d.seconds = o.longs === String ? $util.Long.prototype.toString.call(m.seconds) : o.longs === Number ? new $util.LongBits(m.seconds.low >>> 0, m.seconds.high >>> 0).toNumber() : m.seconds;
        }
        if (m.nanos != null && m.hasOwnProperty("nanos")) {
          d.nanos = m.nanos;
        }
        return d;
      };
      Timestamp.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
      };
      return Timestamp;
    }();
    return protobuf;
  }();
  return google;
})();
export const meeting = $root.meeting = (() => {
  const meeting = {};
  meeting.Participant = function () {
    function Participant(p) {
      if (p) for (var ks = Object.keys(p), i = 0; i < ks.length; ++i) if (p[ks[i]] != null) this[ks[i]] = p[ks[i]];
    }
    Participant.prototype.id = 0;
    Participant.prototype.userId = "";
    Participant.prototype.email = "";
    Participant.prototype.title = "";
    Participant.create = function create(properties) {
      return new Participant(properties);
    };
    Participant.encode = function encode(m, w) {
      if (!w) w = $Writer.create();
      if (m.id != null && Object.hasOwnProperty.call(m, "id")) w.uint32(8).int32(m.id);
      if (m.userId != null && Object.hasOwnProperty.call(m, "userId")) w.uint32(18).string(m.userId);
      if (m.email != null && Object.hasOwnProperty.call(m, "email")) w.uint32(26).string(m.email);
      if (m.title != null && Object.hasOwnProperty.call(m, "title")) w.uint32(34).string(m.title);
      return w;
    };
    Participant.encodeDelimited = function encodeDelimited(message, writer) {
      return this.encode(message, writer).ldelim();
    };
    Participant.decode = function decode(r, l) {
      if (!(r instanceof $Reader)) r = $Reader.create(r);
      var c = l === undefined ? r.len : r.pos + l,
        m = new $root.meeting.Participant();
      while (r.pos < c) {
        var t = r.uint32();
        switch (t >>> 3) {
          case 1:
            m.id = r.int32();
            break;
          case 2:
            m.userId = r.string();
            break;
          case 3:
            m.email = r.string();
            break;
          case 4:
            m.title = r.string();
            break;
          default:
            r.skipType(t & 7);
            break;
        }
      }
      return m;
    };
    Participant.decodeDelimited = function decodeDelimited(reader) {
      if (!(reader instanceof $Reader)) reader = new $Reader(reader);
      return this.decode(reader, reader.uint32());
    };
    Participant.verify = function verify(m) {
      if (typeof m !== "object" || m === null) return "object expected";
      if (m.id != null && m.hasOwnProperty("id")) {
        if (!$util.isInteger(m.id)) return "id: integer expected";
      }
      if (m.userId != null && m.hasOwnProperty("userId")) {
        if (!$util.isString(m.userId)) return "userId: string expected";
      }
      if (m.email != null && m.hasOwnProperty("email")) {
        if (!$util.isString(m.email)) return "email: string expected";
      }
      if (m.title != null && m.hasOwnProperty("title")) {
        if (!$util.isString(m.title)) return "title: string expected";
      }
      return null;
    };
    Participant.fromObject = function fromObject(d) {
      if (d instanceof $root.meeting.Participant) return d;
      var m = new $root.meeting.Participant();
      if (d.id != null) {
        m.id = d.id | 0;
      }
      if (d.userId != null) {
        m.userId = String(d.userId);
      }
      if (d.email != null) {
        m.email = String(d.email);
      }
      if (d.title != null) {
        m.title = String(d.title);
      }
      return m;
    };
    Participant.toObject = function toObject(m, o) {
      if (!o) o = {};
      var d = {};
      if (o.defaults) {
        d.id = 0;
        d.userId = "";
        d.email = "";
        d.title = "";
      }
      if (m.id != null && m.hasOwnProperty("id")) {
        d.id = m.id;
      }
      if (m.userId != null && m.hasOwnProperty("userId")) {
        d.userId = m.userId;
      }
      if (m.email != null && m.hasOwnProperty("email")) {
        d.email = m.email;
      }
      if (m.title != null && m.hasOwnProperty("title")) {
        d.title = m.title;
      }
      return d;
    };
    Participant.prototype.toJSON = function toJSON() {
      return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };
    return Participant;
  }();
  meeting.Update = function () {
    function Update(p) {
      if (p) for (var ks = Object.keys(p), i = 0; i < ks.length; ++i) if (p[ks[i]] != null) this[ks[i]] = p[ks[i]];
    }
    Update.prototype.userId = "";
    Update.prototype.image = $util.newBuffer([]);
    Update.create = function create(properties) {
      return new Update(properties);
    };
    Update.encode = function encode(m, w) {
      if (!w) w = $Writer.create();
      if (m.userId != null && Object.hasOwnProperty.call(m, "userId")) w.uint32(18).string(m.userId);
      if (m.image != null && Object.hasOwnProperty.call(m, "image")) w.uint32(42).bytes(m.image);
      return w;
    };
    Update.encodeDelimited = function encodeDelimited(message, writer) {
      return this.encode(message, writer).ldelim();
    };
    Update.decode = function decode(r, l) {
      if (!(r instanceof $Reader)) r = $Reader.create(r);
      var c = l === undefined ? r.len : r.pos + l,
        m = new $root.meeting.Update();
      while (r.pos < c) {
        var t = r.uint32();
        switch (t >>> 3) {
          case 2:
            m.userId = r.string();
            break;
          case 5:
            m.image = r.bytes();
            break;
          default:
            r.skipType(t & 7);
            break;
        }
      }
      return m;
    };
    Update.decodeDelimited = function decodeDelimited(reader) {
      if (!(reader instanceof $Reader)) reader = new $Reader(reader);
      return this.decode(reader, reader.uint32());
    };
    Update.verify = function verify(m) {
      if (typeof m !== "object" || m === null) return "object expected";
      if (m.userId != null && m.hasOwnProperty("userId")) {
        if (!$util.isString(m.userId)) return "userId: string expected";
      }
      if (m.image != null && m.hasOwnProperty("image")) {
        if (!(m.image && typeof m.image.length === "number" || $util.isString(m.image))) return "image: buffer expected";
      }
      return null;
    };
    Update.fromObject = function fromObject(d) {
      if (d instanceof $root.meeting.Update) return d;
      var m = new $root.meeting.Update();
      if (d.userId != null) {
        m.userId = String(d.userId);
      }
      if (d.image != null) {
        if (typeof d.image === "string") $util.base64.decode(d.image, m.image = $util.newBuffer($util.base64.length(d.image)), 0);else if (d.image.length) m.image = d.image;
      }
      return m;
    };
    Update.toObject = function toObject(m, o) {
      if (!o) o = {};
      var d = {};
      if (o.defaults) {
        d.userId = "";
        if (o.bytes === String) d.image = "";else {
          d.image = [];
          if (o.bytes !== Array) d.image = $util.newBuffer(d.image);
        }
      }
      if (m.userId != null && m.hasOwnProperty("userId")) {
        d.userId = m.userId;
      }
      if (m.image != null && m.hasOwnProperty("image")) {
        d.image = o.bytes === String ? $util.base64.encode(m.image, 0, m.image.length) : o.bytes === Array ? Array.prototype.slice.call(m.image) : m.image;
      }
      return d;
    };
    Update.prototype.toJSON = function toJSON() {
      return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };
    return Update;
  }();
  meeting.Drawing = function () {
    function Drawing(p) {
      if (p) for (var ks = Object.keys(p), i = 0; i < ks.length; ++i) if (p[ks[i]] != null) this[ks[i]] = p[ks[i]];
    }
    Drawing.prototype.userId = "";
    Drawing.prototype.data = "";
    Drawing.create = function create(properties) {
      return new Drawing(properties);
    };
    Drawing.encode = function encode(m, w) {
      if (!w) w = $Writer.create();
      if (m.userId != null && Object.hasOwnProperty.call(m, "userId")) w.uint32(18).string(m.userId);
      if (m.data != null && Object.hasOwnProperty.call(m, "data")) w.uint32(34).string(m.data);
      return w;
    };
    Drawing.encodeDelimited = function encodeDelimited(message, writer) {
      return this.encode(message, writer).ldelim();
    };
    Drawing.decode = function decode(r, l) {
      if (!(r instanceof $Reader)) r = $Reader.create(r);
      var c = l === undefined ? r.len : r.pos + l,
        m = new $root.meeting.Drawing();
      while (r.pos < c) {
        var t = r.uint32();
        switch (t >>> 3) {
          case 2:
            m.userId = r.string();
            break;
          case 4:
            m.data = r.string();
            break;
          default:
            r.skipType(t & 7);
            break;
        }
      }
      return m;
    };
    Drawing.decodeDelimited = function decodeDelimited(reader) {
      if (!(reader instanceof $Reader)) reader = new $Reader(reader);
      return this.decode(reader, reader.uint32());
    };
    Drawing.verify = function verify(m) {
      if (typeof m !== "object" || m === null) return "object expected";
      if (m.userId != null && m.hasOwnProperty("userId")) {
        if (!$util.isString(m.userId)) return "userId: string expected";
      }
      if (m.data != null && m.hasOwnProperty("data")) {
        if (!$util.isString(m.data)) return "data: string expected";
      }
      return null;
    };
    Drawing.fromObject = function fromObject(d) {
      if (d instanceof $root.meeting.Drawing) return d;
      var m = new $root.meeting.Drawing();
      if (d.userId != null) {
        m.userId = String(d.userId);
      }
      if (d.data != null) {
        m.data = String(d.data);
      }
      return m;
    };
    Drawing.toObject = function toObject(m, o) {
      if (!o) o = {};
      var d = {};
      if (o.defaults) {
        d.userId = "";
        d.data = "";
      }
      if (m.userId != null && m.hasOwnProperty("userId")) {
        d.userId = m.userId;
      }
      if (m.data != null && m.hasOwnProperty("data")) {
        d.data = m.data;
      }
      return d;
    };
    Drawing.prototype.toJSON = function toJSON() {
      return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };
    return Drawing;
  }();
  meeting.MousePointer = function () {
    function MousePointer(p) {
      if (p) for (var ks = Object.keys(p), i = 0; i < ks.length; ++i) if (p[ks[i]] != null) this[ks[i]] = p[ks[i]];
    }
    MousePointer.prototype.userId = "";
    MousePointer.prototype.x = 0;
    MousePointer.prototype.y = 0;
    MousePointer.prototype.email = "";
    MousePointer.create = function create(properties) {
      return new MousePointer(properties);
    };
    MousePointer.encode = function encode(m, w) {
      if (!w) w = $Writer.create();
      if (m.userId != null && Object.hasOwnProperty.call(m, "userId")) w.uint32(18).string(m.userId);
      if (m.x != null && Object.hasOwnProperty.call(m, "x")) w.uint32(32).int32(m.x);
      if (m.y != null && Object.hasOwnProperty.call(m, "y")) w.uint32(40).int32(m.y);
      if (m.email != null && Object.hasOwnProperty.call(m, "email")) w.uint32(50).string(m.email);
      return w;
    };
    MousePointer.encodeDelimited = function encodeDelimited(message, writer) {
      return this.encode(message, writer).ldelim();
    };
    MousePointer.decode = function decode(r, l) {
      if (!(r instanceof $Reader)) r = $Reader.create(r);
      var c = l === undefined ? r.len : r.pos + l,
        m = new $root.meeting.MousePointer();
      while (r.pos < c) {
        var t = r.uint32();
        switch (t >>> 3) {
          case 2:
            m.userId = r.string();
            break;
          case 4:
            m.x = r.int32();
            break;
          case 5:
            m.y = r.int32();
            break;
          case 6:
            m.email = r.string();
            break;
          default:
            r.skipType(t & 7);
            break;
        }
      }
      return m;
    };
    MousePointer.decodeDelimited = function decodeDelimited(reader) {
      if (!(reader instanceof $Reader)) reader = new $Reader(reader);
      return this.decode(reader, reader.uint32());
    };
    MousePointer.verify = function verify(m) {
      if (typeof m !== "object" || m === null) return "object expected";
      if (m.userId != null && m.hasOwnProperty("userId")) {
        if (!$util.isString(m.userId)) return "userId: string expected";
      }
      if (m.x != null && m.hasOwnProperty("x")) {
        if (!$util.isInteger(m.x)) return "x: integer expected";
      }
      if (m.y != null && m.hasOwnProperty("y")) {
        if (!$util.isInteger(m.y)) return "y: integer expected";
      }
      if (m.email != null && m.hasOwnProperty("email")) {
        if (!$util.isString(m.email)) return "email: string expected";
      }
      return null;
    };
    MousePointer.fromObject = function fromObject(d) {
      if (d instanceof $root.meeting.MousePointer) return d;
      var m = new $root.meeting.MousePointer();
      if (d.userId != null) {
        m.userId = String(d.userId);
      }
      if (d.x != null) {
        m.x = d.x | 0;
      }
      if (d.y != null) {
        m.y = d.y | 0;
      }
      if (d.email != null) {
        m.email = String(d.email);
      }
      return m;
    };
    MousePointer.toObject = function toObject(m, o) {
      if (!o) o = {};
      var d = {};
      if (o.defaults) {
        d.userId = "";
        d.x = 0;
        d.y = 0;
        d.email = "";
      }
      if (m.userId != null && m.hasOwnProperty("userId")) {
        d.userId = m.userId;
      }
      if (m.x != null && m.hasOwnProperty("x")) {
        d.x = m.x;
      }
      if (m.y != null && m.hasOwnProperty("y")) {
        d.y = m.y;
      }
      if (m.email != null && m.hasOwnProperty("email")) {
        d.email = m.email;
      }
      return d;
    };
    MousePointer.prototype.toJSON = function toJSON() {
      return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };
    return MousePointer;
  }();
  meeting.IndexPointer = function () {
    function IndexPointer(p) {
      if (p) for (var ks = Object.keys(p), i = 0; i < ks.length; ++i) if (p[ks[i]] != null) this[ks[i]] = p[ks[i]];
    }
    IndexPointer.prototype.userId = "";
    IndexPointer.prototype.x = 0;
    IndexPointer.prototype.y = 0;
    IndexPointer.prototype.email = "";
    IndexPointer.create = function create(properties) {
      return new IndexPointer(properties);
    };
    IndexPointer.encode = function encode(m, w) {
      if (!w) w = $Writer.create();
      if (m.userId != null && Object.hasOwnProperty.call(m, "userId")) w.uint32(18).string(m.userId);
      if (m.x != null && Object.hasOwnProperty.call(m, "x")) w.uint32(32).int32(m.x);
      if (m.y != null && Object.hasOwnProperty.call(m, "y")) w.uint32(40).int32(m.y);
      if (m.email != null && Object.hasOwnProperty.call(m, "email")) w.uint32(50).string(m.email);
      return w;
    };
    IndexPointer.encodeDelimited = function encodeDelimited(message, writer) {
      return this.encode(message, writer).ldelim();
    };
    IndexPointer.decode = function decode(r, l) {
      if (!(r instanceof $Reader)) r = $Reader.create(r);
      var c = l === undefined ? r.len : r.pos + l,
        m = new $root.meeting.IndexPointer();
      while (r.pos < c) {
        var t = r.uint32();
        switch (t >>> 3) {
          case 2:
            m.userId = r.string();
            break;
          case 4:
            m.x = r.int32();
            break;
          case 5:
            m.y = r.int32();
            break;
          case 6:
            m.email = r.string();
            break;
          default:
            r.skipType(t & 7);
            break;
        }
      }
      return m;
    };
    IndexPointer.decodeDelimited = function decodeDelimited(reader) {
      if (!(reader instanceof $Reader)) reader = new $Reader(reader);
      return this.decode(reader, reader.uint32());
    };
    IndexPointer.verify = function verify(m) {
      if (typeof m !== "object" || m === null) return "object expected";
      if (m.userId != null && m.hasOwnProperty("userId")) {
        if (!$util.isString(m.userId)) return "userId: string expected";
      }
      if (m.x != null && m.hasOwnProperty("x")) {
        if (!$util.isInteger(m.x)) return "x: integer expected";
      }
      if (m.y != null && m.hasOwnProperty("y")) {
        if (!$util.isInteger(m.y)) return "y: integer expected";
      }
      if (m.email != null && m.hasOwnProperty("email")) {
        if (!$util.isString(m.email)) return "email: string expected";
      }
      return null;
    };
    IndexPointer.fromObject = function fromObject(d) {
      if (d instanceof $root.meeting.IndexPointer) return d;
      var m = new $root.meeting.IndexPointer();
      if (d.userId != null) {
        m.userId = String(d.userId);
      }
      if (d.x != null) {
        m.x = d.x | 0;
      }
      if (d.y != null) {
        m.y = d.y | 0;
      }
      if (d.email != null) {
        m.email = String(d.email);
      }
      return m;
    };
    IndexPointer.toObject = function toObject(m, o) {
      if (!o) o = {};
      var d = {};
      if (o.defaults) {
        d.userId = "";
        d.x = 0;
        d.y = 0;
        d.email = "";
      }
      if (m.userId != null && m.hasOwnProperty("userId")) {
        d.userId = m.userId;
      }
      if (m.x != null && m.hasOwnProperty("x")) {
        d.x = m.x;
      }
      if (m.y != null && m.hasOwnProperty("y")) {
        d.y = m.y;
      }
      if (m.email != null && m.hasOwnProperty("email")) {
        d.email = m.email;
      }
      return d;
    };
    IndexPointer.prototype.toJSON = function toJSON() {
      return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };
    return IndexPointer;
  }();
  meeting.ImageAck = function () {
    function ImageAck(p) {
      if (p) for (var ks = Object.keys(p), i = 0; i < ks.length; ++i) if (p[ks[i]] != null) this[ks[i]] = p[ks[i]];
    }
    ImageAck.prototype.userId = "";
    ImageAck.create = function create(properties) {
      return new ImageAck(properties);
    };
    ImageAck.encode = function encode(m, w) {
      if (!w) w = $Writer.create();
      if (m.userId != null && Object.hasOwnProperty.call(m, "userId")) w.uint32(18).string(m.userId);
      return w;
    };
    ImageAck.encodeDelimited = function encodeDelimited(message, writer) {
      return this.encode(message, writer).ldelim();
    };
    ImageAck.decode = function decode(r, l) {
      if (!(r instanceof $Reader)) r = $Reader.create(r);
      var c = l === undefined ? r.len : r.pos + l,
        m = new $root.meeting.ImageAck();
      while (r.pos < c) {
        var t = r.uint32();
        switch (t >>> 3) {
          case 2:
            m.userId = r.string();
            break;
          default:
            r.skipType(t & 7);
            break;
        }
      }
      return m;
    };
    ImageAck.decodeDelimited = function decodeDelimited(reader) {
      if (!(reader instanceof $Reader)) reader = new $Reader(reader);
      return this.decode(reader, reader.uint32());
    };
    ImageAck.verify = function verify(m) {
      if (typeof m !== "object" || m === null) return "object expected";
      if (m.userId != null && m.hasOwnProperty("userId")) {
        if (!$util.isString(m.userId)) return "userId: string expected";
      }
      return null;
    };
    ImageAck.fromObject = function fromObject(d) {
      if (d instanceof $root.meeting.ImageAck) return d;
      var m = new $root.meeting.ImageAck();
      if (d.userId != null) {
        m.userId = String(d.userId);
      }
      return m;
    };
    ImageAck.toObject = function toObject(m, o) {
      if (!o) o = {};
      var d = {};
      if (o.defaults) {
        d.userId = "";
      }
      if (m.userId != null && m.hasOwnProperty("userId")) {
        d.userId = m.userId;
      }
      return d;
    };
    ImageAck.prototype.toJSON = function toJSON() {
      return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };
    return ImageAck;
  }();
  meeting.Message = function () {
    function Message(p) {
      if (p) for (var ks = Object.keys(p), i = 0; i < ks.length; ++i) if (p[ks[i]] != null) this[ks[i]] = p[ks[i]];
    }
    Message.prototype.join = null;
    Message.prototype.leave = null;
    Message.prototype.update = null;
    Message.prototype.drawing = null;
    Message.prototype.mousePointer = null;
    Message.prototype.imageAck = null;
    Message.prototype.indexPointer = null;
    let $oneOfFields;
    Object.defineProperty(Message.prototype, "event", {
      get: $util.oneOfGetter($oneOfFields = ["join", "leave", "update", "drawing", "mousePointer", "imageAck", "indexPointer"]),
      set: $util.oneOfSetter($oneOfFields)
    });
    Message.create = function create(properties) {
      return new Message(properties);
    };
    Message.encode = function encode(m, w) {
      if (!w) w = $Writer.create();
      if (m.join != null && Object.hasOwnProperty.call(m, "join")) $root.meeting.Participant.encode(m.join, w.uint32(10).fork()).ldelim();
      if (m.leave != null && Object.hasOwnProperty.call(m, "leave")) $root.meeting.Participant.encode(m.leave, w.uint32(18).fork()).ldelim();
      if (m.update != null && Object.hasOwnProperty.call(m, "update")) $root.meeting.Update.encode(m.update, w.uint32(26).fork()).ldelim();
      if (m.drawing != null && Object.hasOwnProperty.call(m, "drawing")) $root.meeting.Drawing.encode(m.drawing, w.uint32(50).fork()).ldelim();
      if (m.mousePointer != null && Object.hasOwnProperty.call(m, "mousePointer")) $root.meeting.MousePointer.encode(m.mousePointer, w.uint32(58).fork()).ldelim();
      if (m.imageAck != null && Object.hasOwnProperty.call(m, "imageAck")) $root.meeting.ImageAck.encode(m.imageAck, w.uint32(66).fork()).ldelim();
      if (m.indexPointer != null && Object.hasOwnProperty.call(m, "indexPointer")) $root.meeting.IndexPointer.encode(m.indexPointer, w.uint32(74).fork()).ldelim();
      return w;
    };
    Message.encodeDelimited = function encodeDelimited(message, writer) {
      return this.encode(message, writer).ldelim();
    };
    Message.decode = function decode(r, l) {
      if (!(r instanceof $Reader)) r = $Reader.create(r);
      var c = l === undefined ? r.len : r.pos + l,
        m = new $root.meeting.Message();
      while (r.pos < c) {
        var t = r.uint32();
        switch (t >>> 3) {
          case 1:
            m.join = $root.meeting.Participant.decode(r, r.uint32());
            break;
          case 2:
            m.leave = $root.meeting.Participant.decode(r, r.uint32());
            break;
          case 3:
            m.update = $root.meeting.Update.decode(r, r.uint32());
            break;
          case 6:
            m.drawing = $root.meeting.Drawing.decode(r, r.uint32());
            break;
          case 7:
            m.mousePointer = $root.meeting.MousePointer.decode(r, r.uint32());
            break;
          case 8:
            m.imageAck = $root.meeting.ImageAck.decode(r, r.uint32());
            break;
          case 9:
            m.indexPointer = $root.meeting.IndexPointer.decode(r, r.uint32());
            break;
          default:
            r.skipType(t & 7);
            break;
        }
      }
      return m;
    };
    Message.decodeDelimited = function decodeDelimited(reader) {
      if (!(reader instanceof $Reader)) reader = new $Reader(reader);
      return this.decode(reader, reader.uint32());
    };
    Message.verify = function verify(m) {
      if (typeof m !== "object" || m === null) return "object expected";
      var p = {};
      if (m.join != null && m.hasOwnProperty("join")) {
        p.event = 1;
        {
          var e = $root.meeting.Participant.verify(m.join);
          if (e) return "join." + e;
        }
      }
      if (m.leave != null && m.hasOwnProperty("leave")) {
        if (p.event === 1) return "event: multiple values";
        p.event = 1;
        {
          var e = $root.meeting.Participant.verify(m.leave);
          if (e) return "leave." + e;
        }
      }
      if (m.update != null && m.hasOwnProperty("update")) {
        if (p.event === 1) return "event: multiple values";
        p.event = 1;
        {
          var e = $root.meeting.Update.verify(m.update);
          if (e) return "update." + e;
        }
      }
      if (m.drawing != null && m.hasOwnProperty("drawing")) {
        if (p.event === 1) return "event: multiple values";
        p.event = 1;
        {
          var e = $root.meeting.Drawing.verify(m.drawing);
          if (e) return "drawing." + e;
        }
      }
      if (m.mousePointer != null && m.hasOwnProperty("mousePointer")) {
        if (p.event === 1) return "event: multiple values";
        p.event = 1;
        {
          var e = $root.meeting.MousePointer.verify(m.mousePointer);
          if (e) return "mousePointer." + e;
        }
      }
      if (m.imageAck != null && m.hasOwnProperty("imageAck")) {
        if (p.event === 1) return "event: multiple values";
        p.event = 1;
        {
          var e = $root.meeting.ImageAck.verify(m.imageAck);
          if (e) return "imageAck." + e;
        }
      }
      if (m.indexPointer != null && m.hasOwnProperty("indexPointer")) {
        if (p.event === 1) return "event: multiple values";
        p.event = 1;
        {
          var e = $root.meeting.IndexPointer.verify(m.indexPointer);
          if (e) return "indexPointer." + e;
        }
      }
      return null;
    };
    Message.fromObject = function fromObject(d) {
      if (d instanceof $root.meeting.Message) return d;
      var m = new $root.meeting.Message();
      if (d.join != null) {
        if (typeof d.join !== "object") throw TypeError(".meeting.Message.join: object expected");
        m.join = $root.meeting.Participant.fromObject(d.join);
      }
      if (d.leave != null) {
        if (typeof d.leave !== "object") throw TypeError(".meeting.Message.leave: object expected");
        m.leave = $root.meeting.Participant.fromObject(d.leave);
      }
      if (d.update != null) {
        if (typeof d.update !== "object") throw TypeError(".meeting.Message.update: object expected");
        m.update = $root.meeting.Update.fromObject(d.update);
      }
      if (d.drawing != null) {
        if (typeof d.drawing !== "object") throw TypeError(".meeting.Message.drawing: object expected");
        m.drawing = $root.meeting.Drawing.fromObject(d.drawing);
      }
      if (d.mousePointer != null) {
        if (typeof d.mousePointer !== "object") throw TypeError(".meeting.Message.mousePointer: object expected");
        m.mousePointer = $root.meeting.MousePointer.fromObject(d.mousePointer);
      }
      if (d.imageAck != null) {
        if (typeof d.imageAck !== "object") throw TypeError(".meeting.Message.imageAck: object expected");
        m.imageAck = $root.meeting.ImageAck.fromObject(d.imageAck);
      }
      if (d.indexPointer != null) {
        if (typeof d.indexPointer !== "object") throw TypeError(".meeting.Message.indexPointer: object expected");
        m.indexPointer = $root.meeting.IndexPointer.fromObject(d.indexPointer);
      }
      return m;
    };
    Message.toObject = function toObject(m, o) {
      if (!o) o = {};
      var d = {};
      if (m.join != null && m.hasOwnProperty("join")) {
        d.join = $root.meeting.Participant.toObject(m.join, o);
        if (o.oneofs) d.event = "join";
      }
      if (m.leave != null && m.hasOwnProperty("leave")) {
        d.leave = $root.meeting.Participant.toObject(m.leave, o);
        if (o.oneofs) d.event = "leave";
      }
      if (m.update != null && m.hasOwnProperty("update")) {
        d.update = $root.meeting.Update.toObject(m.update, o);
        if (o.oneofs) d.event = "update";
      }
      if (m.drawing != null && m.hasOwnProperty("drawing")) {
        d.drawing = $root.meeting.Drawing.toObject(m.drawing, o);
        if (o.oneofs) d.event = "drawing";
      }
      if (m.mousePointer != null && m.hasOwnProperty("mousePointer")) {
        d.mousePointer = $root.meeting.MousePointer.toObject(m.mousePointer, o);
        if (o.oneofs) d.event = "mousePointer";
      }
      if (m.imageAck != null && m.hasOwnProperty("imageAck")) {
        d.imageAck = $root.meeting.ImageAck.toObject(m.imageAck, o);
        if (o.oneofs) d.event = "imageAck";
      }
      if (m.indexPointer != null && m.hasOwnProperty("indexPointer")) {
        d.indexPointer = $root.meeting.IndexPointer.toObject(m.indexPointer, o);
        if (o.oneofs) d.event = "indexPointer";
      }
      return d;
    };
    Message.prototype.toJSON = function toJSON() {
      return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };
    return Message;
  }();
  meeting.SharePermission = function () {
    const valuesById = {},
      values = Object.create(valuesById);
    values[valuesById[0] = "UNKNOWN_SHARE_TYPE"] = 0;
    values[valuesById[1] = "SHARE_READ"] = 1;
    values[valuesById[2] = "SHARE_WRITE"] = 2;
    return values;
  }();
  meeting.Permission = function () {
    const valuesById = {},
      values = Object.create(valuesById);
    values[valuesById[0] = "UNKNOWN_PERMISSION"] = 0;
    values[valuesById[1] = "IMAGE_READ"] = 1;
    values[valuesById[2] = "IMAGE_WRITE"] = 2;
    values[valuesById[4] = "ANNOTATION_READ"] = 4;
    values[valuesById[8] = "ANNOTATION_WRITE"] = 8;
    values[valuesById[16] = "MODIFY"] = 16;
    values[valuesById[5] = "MASK_READ_ONLY"] = 5;
    values[valuesById[10] = "MASK_WRITE_ONLY"] = 10;
    values[valuesById[15] = "MASK_READ_WRITE"] = 15;
    values[valuesById[31] = "MASK_FULL_ACCESS"] = 31;
    return values;
  }();
  meeting.Meeting = function () {
    function Meeting(p) {
      if (p) for (var ks = Object.keys(p), i = 0; i < ks.length; ++i) if (p[ks[i]] != null) this[ks[i]] = p[ks[i]];
    }
    Meeting.prototype.id = "";
    Meeting.prototype.title = "";
    Meeting.prototype.ownerId = "";
    Meeting.prototype.creationTime = $util.Long ? $util.Long.fromBits(0, 0, false) : 0;
    Meeting.prototype.capacity = 0;
    Meeting.prototype.isTemporary = false;
    Meeting.create = function create(properties) {
      return new Meeting(properties);
    };
    Meeting.encode = function encode(m, w) {
      if (!w) w = $Writer.create();
      if (m.id != null && Object.hasOwnProperty.call(m, "id")) w.uint32(10).string(m.id);
      if (m.title != null && Object.hasOwnProperty.call(m, "title")) w.uint32(18).string(m.title);
      if (m.ownerId != null && Object.hasOwnProperty.call(m, "ownerId")) w.uint32(50).string(m.ownerId);
      if (m.creationTime != null && Object.hasOwnProperty.call(m, "creationTime")) w.uint32(56).int64(m.creationTime);
      if (m.capacity != null && Object.hasOwnProperty.call(m, "capacity")) w.uint32(64).int32(m.capacity);
      if (m.isTemporary != null && Object.hasOwnProperty.call(m, "isTemporary")) w.uint32(72).bool(m.isTemporary);
      return w;
    };
    Meeting.encodeDelimited = function encodeDelimited(message, writer) {
      return this.encode(message, writer).ldelim();
    };
    Meeting.decode = function decode(r, l) {
      if (!(r instanceof $Reader)) r = $Reader.create(r);
      var c = l === undefined ? r.len : r.pos + l,
        m = new $root.meeting.Meeting();
      while (r.pos < c) {
        var t = r.uint32();
        switch (t >>> 3) {
          case 1:
            m.id = r.string();
            break;
          case 2:
            m.title = r.string();
            break;
          case 6:
            m.ownerId = r.string();
            break;
          case 7:
            m.creationTime = r.int64();
            break;
          case 8:
            m.capacity = r.int32();
            break;
          case 9:
            m.isTemporary = r.bool();
            break;
          default:
            r.skipType(t & 7);
            break;
        }
      }
      return m;
    };
    Meeting.decodeDelimited = function decodeDelimited(reader) {
      if (!(reader instanceof $Reader)) reader = new $Reader(reader);
      return this.decode(reader, reader.uint32());
    };
    Meeting.verify = function verify(m) {
      if (typeof m !== "object" || m === null) return "object expected";
      if (m.id != null && m.hasOwnProperty("id")) {
        if (!$util.isString(m.id)) return "id: string expected";
      }
      if (m.title != null && m.hasOwnProperty("title")) {
        if (!$util.isString(m.title)) return "title: string expected";
      }
      if (m.ownerId != null && m.hasOwnProperty("ownerId")) {
        if (!$util.isString(m.ownerId)) return "ownerId: string expected";
      }
      if (m.creationTime != null && m.hasOwnProperty("creationTime")) {
        if (!$util.isInteger(m.creationTime) && !(m.creationTime && $util.isInteger(m.creationTime.low) && $util.isInteger(m.creationTime.high))) return "creationTime: integer|Long expected";
      }
      if (m.capacity != null && m.hasOwnProperty("capacity")) {
        if (!$util.isInteger(m.capacity)) return "capacity: integer expected";
      }
      if (m.isTemporary != null && m.hasOwnProperty("isTemporary")) {
        if (typeof m.isTemporary !== "boolean") return "isTemporary: boolean expected";
      }
      return null;
    };
    Meeting.fromObject = function fromObject(d) {
      if (d instanceof $root.meeting.Meeting) return d;
      var m = new $root.meeting.Meeting();
      if (d.id != null) {
        m.id = String(d.id);
      }
      if (d.title != null) {
        m.title = String(d.title);
      }
      if (d.ownerId != null) {
        m.ownerId = String(d.ownerId);
      }
      if (d.creationTime != null) {
        if ($util.Long) (m.creationTime = $util.Long.fromValue(d.creationTime)).unsigned = false;else if (typeof d.creationTime === "string") m.creationTime = parseInt(d.creationTime, 10);else if (typeof d.creationTime === "number") m.creationTime = d.creationTime;else if (typeof d.creationTime === "object") m.creationTime = new $util.LongBits(d.creationTime.low >>> 0, d.creationTime.high >>> 0).toNumber();
      }
      if (d.capacity != null) {
        m.capacity = d.capacity | 0;
      }
      if (d.isTemporary != null) {
        m.isTemporary = Boolean(d.isTemporary);
      }
      return m;
    };
    Meeting.toObject = function toObject(m, o) {
      if (!o) o = {};
      var d = {};
      if (o.defaults) {
        d.id = "";
        d.title = "";
        d.ownerId = "";
        if ($util.Long) {
          var n = new $util.Long(0, 0, false);
          d.creationTime = o.longs === String ? n.toString() : o.longs === Number ? n.toNumber() : n;
        } else d.creationTime = o.longs === String ? "0" : 0;
        d.capacity = 0;
        d.isTemporary = false;
      }
      if (m.id != null && m.hasOwnProperty("id")) {
        d.id = m.id;
      }
      if (m.title != null && m.hasOwnProperty("title")) {
        d.title = m.title;
      }
      if (m.ownerId != null && m.hasOwnProperty("ownerId")) {
        d.ownerId = m.ownerId;
      }
      if (m.creationTime != null && m.hasOwnProperty("creationTime")) {
        if (typeof m.creationTime === "number") d.creationTime = o.longs === String ? String(m.creationTime) : m.creationTime;else d.creationTime = o.longs === String ? $util.Long.prototype.toString.call(m.creationTime) : o.longs === Number ? new $util.LongBits(m.creationTime.low >>> 0, m.creationTime.high >>> 0).toNumber() : m.creationTime;
      }
      if (m.capacity != null && m.hasOwnProperty("capacity")) {
        d.capacity = m.capacity;
      }
      if (m.isTemporary != null && m.hasOwnProperty("isTemporary")) {
        d.isTemporary = m.isTemporary;
      }
      return d;
    };
    Meeting.prototype.toJSON = function toJSON() {
      return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };
    return Meeting;
  }();
  meeting.SharedMeeting = function () {
    function SharedMeeting(p) {
      if (p) for (var ks = Object.keys(p), i = 0; i < ks.length; ++i) if (p[ks[i]] != null) this[ks[i]] = p[ks[i]];
    }
    SharedMeeting.prototype.id = 0;
    SharedMeeting.prototype.userId = "";
    SharedMeeting.prototype.meetingId = 0;
    SharedMeeting.prototype.email = "";
    SharedMeeting.prototype.permission = 0;
    SharedMeeting.create = function create(properties) {
      return new SharedMeeting(properties);
    };
    SharedMeeting.encode = function encode(m, w) {
      if (!w) w = $Writer.create();
      if (m.id != null && Object.hasOwnProperty.call(m, "id")) w.uint32(8).int32(m.id);
      if (m.userId != null && Object.hasOwnProperty.call(m, "userId")) w.uint32(18).string(m.userId);
      if (m.meetingId != null && Object.hasOwnProperty.call(m, "meetingId")) w.uint32(24).int32(m.meetingId);
      if (m.email != null && Object.hasOwnProperty.call(m, "email")) w.uint32(34).string(m.email);
      if (m.permission != null && Object.hasOwnProperty.call(m, "permission")) w.uint32(40).int32(m.permission);
      return w;
    };
    SharedMeeting.encodeDelimited = function encodeDelimited(message, writer) {
      return this.encode(message, writer).ldelim();
    };
    SharedMeeting.decode = function decode(r, l) {
      if (!(r instanceof $Reader)) r = $Reader.create(r);
      var c = l === undefined ? r.len : r.pos + l,
        m = new $root.meeting.SharedMeeting();
      while (r.pos < c) {
        var t = r.uint32();
        switch (t >>> 3) {
          case 1:
            m.id = r.int32();
            break;
          case 2:
            m.userId = r.string();
            break;
          case 3:
            m.meetingId = r.int32();
            break;
          case 4:
            m.email = r.string();
            break;
          case 5:
            m.permission = r.int32();
            break;
          default:
            r.skipType(t & 7);
            break;
        }
      }
      return m;
    };
    SharedMeeting.decodeDelimited = function decodeDelimited(reader) {
      if (!(reader instanceof $Reader)) reader = new $Reader(reader);
      return this.decode(reader, reader.uint32());
    };
    SharedMeeting.verify = function verify(m) {
      if (typeof m !== "object" || m === null) return "object expected";
      if (m.id != null && m.hasOwnProperty("id")) {
        if (!$util.isInteger(m.id)) return "id: integer expected";
      }
      if (m.userId != null && m.hasOwnProperty("userId")) {
        if (!$util.isString(m.userId)) return "userId: string expected";
      }
      if (m.meetingId != null && m.hasOwnProperty("meetingId")) {
        if (!$util.isInteger(m.meetingId)) return "meetingId: integer expected";
      }
      if (m.email != null && m.hasOwnProperty("email")) {
        if (!$util.isString(m.email)) return "email: string expected";
      }
      if (m.permission != null && m.hasOwnProperty("permission")) {
        switch (m.permission) {
          default:
            return "permission: enum value expected";
          case 0:
          case 1:
          case 2:
            break;
        }
      }
      return null;
    };
    SharedMeeting.fromObject = function fromObject(d) {
      if (d instanceof $root.meeting.SharedMeeting) return d;
      var m = new $root.meeting.SharedMeeting();
      if (d.id != null) {
        m.id = d.id | 0;
      }
      if (d.userId != null) {
        m.userId = String(d.userId);
      }
      if (d.meetingId != null) {
        m.meetingId = d.meetingId | 0;
      }
      if (d.email != null) {
        m.email = String(d.email);
      }
      switch (d.permission) {
        case "UNKNOWN_SHARE_TYPE":
        case 0:
          m.permission = 0;
          break;
        case "SHARE_READ":
        case 1:
          m.permission = 1;
          break;
        case "SHARE_WRITE":
        case 2:
          m.permission = 2;
          break;
      }
      return m;
    };
    SharedMeeting.toObject = function toObject(m, o) {
      if (!o) o = {};
      var d = {};
      if (o.defaults) {
        d.id = 0;
        d.userId = "";
        d.meetingId = 0;
        d.email = "";
        d.permission = o.enums === String ? "UNKNOWN_SHARE_TYPE" : 0;
      }
      if (m.id != null && m.hasOwnProperty("id")) {
        d.id = m.id;
      }
      if (m.userId != null && m.hasOwnProperty("userId")) {
        d.userId = m.userId;
      }
      if (m.meetingId != null && m.hasOwnProperty("meetingId")) {
        d.meetingId = m.meetingId;
      }
      if (m.email != null && m.hasOwnProperty("email")) {
        d.email = m.email;
      }
      if (m.permission != null && m.hasOwnProperty("permission")) {
        d.permission = o.enums === String ? $root.meeting.SharePermission[m.permission] : m.permission;
      }
      return d;
    };
    SharedMeeting.prototype.toJSON = function toJSON() {
      return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };
    return SharedMeeting;
  }();
  meeting.ShortUrlDetails = function () {
    function ShortUrlDetails(p) {
      if (p) for (var ks = Object.keys(p), i = 0; i < ks.length; ++i) if (p[ks[i]] != null) this[ks[i]] = p[ks[i]];
    }
    ShortUrlDetails.prototype.fullUrl = "";
    ShortUrlDetails.prototype.password = "";
    ShortUrlDetails.create = function create(properties) {
      return new ShortUrlDetails(properties);
    };
    ShortUrlDetails.encode = function encode(m, w) {
      if (!w) w = $Writer.create();
      if (m.fullUrl != null && Object.hasOwnProperty.call(m, "fullUrl")) w.uint32(10).string(m.fullUrl);
      if (m.password != null && Object.hasOwnProperty.call(m, "password")) w.uint32(18).string(m.password);
      return w;
    };
    ShortUrlDetails.encodeDelimited = function encodeDelimited(message, writer) {
      return this.encode(message, writer).ldelim();
    };
    ShortUrlDetails.decode = function decode(r, l) {
      if (!(r instanceof $Reader)) r = $Reader.create(r);
      var c = l === undefined ? r.len : r.pos + l,
        m = new $root.meeting.ShortUrlDetails();
      while (r.pos < c) {
        var t = r.uint32();
        switch (t >>> 3) {
          case 1:
            m.fullUrl = r.string();
            break;
          case 2:
            m.password = r.string();
            break;
          default:
            r.skipType(t & 7);
            break;
        }
      }
      return m;
    };
    ShortUrlDetails.decodeDelimited = function decodeDelimited(reader) {
      if (!(reader instanceof $Reader)) reader = new $Reader(reader);
      return this.decode(reader, reader.uint32());
    };
    ShortUrlDetails.verify = function verify(m) {
      if (typeof m !== "object" || m === null) return "object expected";
      if (m.fullUrl != null && m.hasOwnProperty("fullUrl")) {
        if (!$util.isString(m.fullUrl)) return "fullUrl: string expected";
      }
      if (m.password != null && m.hasOwnProperty("password")) {
        if (!$util.isString(m.password)) return "password: string expected";
      }
      return null;
    };
    ShortUrlDetails.fromObject = function fromObject(d) {
      if (d instanceof $root.meeting.ShortUrlDetails) return d;
      var m = new $root.meeting.ShortUrlDetails();
      if (d.fullUrl != null) {
        m.fullUrl = String(d.fullUrl);
      }
      if (d.password != null) {
        m.password = String(d.password);
      }
      return m;
    };
    ShortUrlDetails.toObject = function toObject(m, o) {
      if (!o) o = {};
      var d = {};
      if (o.defaults) {
        d.fullUrl = "";
        d.password = "";
      }
      if (m.fullUrl != null && m.hasOwnProperty("fullUrl")) {
        d.fullUrl = m.fullUrl;
      }
      if (m.password != null && m.hasOwnProperty("password")) {
        d.password = m.password;
      }
      return d;
    };
    ShortUrlDetails.prototype.toJSON = function toJSON() {
      return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };
    return ShortUrlDetails;
  }();
  return meeting;
})();
export const cilix = $root.cilix = (() => {
  const cilix = {};
  cilix.CameraDescription = function () {
    function CameraDescription(p) {
      if (p) for (var ks = Object.keys(p), i = 0; i < ks.length; ++i) if (p[ks[i]] != null) this[ks[i]] = p[ks[i]];
    }
    CameraDescription.prototype.id = "";
    CameraDescription.prototype.name = "";
    CameraDescription.create = function create(properties) {
      return new CameraDescription(properties);
    };
    CameraDescription.encode = function encode(m, w) {
      if (!w) w = $Writer.create();
      if (m.id != null && Object.hasOwnProperty.call(m, "id")) w.uint32(10).string(m.id);
      if (m.name != null && Object.hasOwnProperty.call(m, "name")) w.uint32(18).string(m.name);
      return w;
    };
    CameraDescription.encodeDelimited = function encodeDelimited(message, writer) {
      return this.encode(message, writer).ldelim();
    };
    CameraDescription.decode = function decode(r, l) {
      if (!(r instanceof $Reader)) r = $Reader.create(r);
      var c = l === undefined ? r.len : r.pos + l,
        m = new $root.cilix.CameraDescription();
      while (r.pos < c) {
        var t = r.uint32();
        switch (t >>> 3) {
          case 1:
            m.id = r.string();
            break;
          case 2:
            m.name = r.string();
            break;
          default:
            r.skipType(t & 7);
            break;
        }
      }
      return m;
    };
    CameraDescription.decodeDelimited = function decodeDelimited(reader) {
      if (!(reader instanceof $Reader)) reader = new $Reader(reader);
      return this.decode(reader, reader.uint32());
    };
    CameraDescription.verify = function verify(m) {
      if (typeof m !== "object" || m === null) return "object expected";
      if (m.id != null && m.hasOwnProperty("id")) {
        if (!$util.isString(m.id)) return "id: string expected";
      }
      if (m.name != null && m.hasOwnProperty("name")) {
        if (!$util.isString(m.name)) return "name: string expected";
      }
      return null;
    };
    CameraDescription.fromObject = function fromObject(d) {
      if (d instanceof $root.cilix.CameraDescription) return d;
      var m = new $root.cilix.CameraDescription();
      if (d.id != null) {
        m.id = String(d.id);
      }
      if (d.name != null) {
        m.name = String(d.name);
      }
      return m;
    };
    CameraDescription.toObject = function toObject(m, o) {
      if (!o) o = {};
      var d = {};
      if (o.defaults) {
        d.id = "";
        d.name = "";
      }
      if (m.id != null && m.hasOwnProperty("id")) {
        d.id = m.id;
      }
      if (m.name != null && m.hasOwnProperty("name")) {
        d.name = m.name;
      }
      return d;
    };
    CameraDescription.prototype.toJSON = function toJSON() {
      return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };
    return CameraDescription;
  }();
  cilix.StartRequest = function () {
    function StartRequest(p) {
      if (p) for (var ks = Object.keys(p), i = 0; i < ks.length; ++i) if (p[ks[i]] != null) this[ks[i]] = p[ks[i]];
    }
    StartRequest.prototype.config = null;
    StartRequest.prototype.runtimeConfig = null;
    StartRequest.prototype.camera = null;
    StartRequest.prototype.meetingToken = "";
    StartRequest.create = function create(properties) {
      return new StartRequest(properties);
    };
    StartRequest.encode = function encode(m, w) {
      if (!w) w = $Writer.create();
      if (m.config != null && Object.hasOwnProperty.call(m, "config")) $root.jibb.ipsa.v1.Config.encode(m.config, w.uint32(18).fork()).ldelim();
      if (m.runtimeConfig != null && Object.hasOwnProperty.call(m, "runtimeConfig")) $root.jibb.ipsa.v1.RuntimeConfig.encode(m.runtimeConfig, w.uint32(34).fork()).ldelim();
      if (m.camera != null && Object.hasOwnProperty.call(m, "camera")) $root.cilix.CameraDescription.encode(m.camera, w.uint32(42).fork()).ldelim();
      if (m.meetingToken != null && Object.hasOwnProperty.call(m, "meetingToken")) w.uint32(50).string(m.meetingToken);
      return w;
    };
    StartRequest.encodeDelimited = function encodeDelimited(message, writer) {
      return this.encode(message, writer).ldelim();
    };
    StartRequest.decode = function decode(r, l) {
      if (!(r instanceof $Reader)) r = $Reader.create(r);
      var c = l === undefined ? r.len : r.pos + l,
        m = new $root.cilix.StartRequest();
      while (r.pos < c) {
        var t = r.uint32();
        switch (t >>> 3) {
          case 2:
            m.config = $root.jibb.ipsa.v1.Config.decode(r, r.uint32());
            break;
          case 4:
            m.runtimeConfig = $root.jibb.ipsa.v1.RuntimeConfig.decode(r, r.uint32());
            break;
          case 5:
            m.camera = $root.cilix.CameraDescription.decode(r, r.uint32());
            break;
          case 6:
            m.meetingToken = r.string();
            break;
          default:
            r.skipType(t & 7);
            break;
        }
      }
      return m;
    };
    StartRequest.decodeDelimited = function decodeDelimited(reader) {
      if (!(reader instanceof $Reader)) reader = new $Reader(reader);
      return this.decode(reader, reader.uint32());
    };
    StartRequest.verify = function verify(m) {
      if (typeof m !== "object" || m === null) return "object expected";
      if (m.config != null && m.hasOwnProperty("config")) {
        {
          var e = $root.jibb.ipsa.v1.Config.verify(m.config);
          if (e) return "config." + e;
        }
      }
      if (m.runtimeConfig != null && m.hasOwnProperty("runtimeConfig")) {
        {
          var e = $root.jibb.ipsa.v1.RuntimeConfig.verify(m.runtimeConfig);
          if (e) return "runtimeConfig." + e;
        }
      }
      if (m.camera != null && m.hasOwnProperty("camera")) {
        {
          var e = $root.cilix.CameraDescription.verify(m.camera);
          if (e) return "camera." + e;
        }
      }
      if (m.meetingToken != null && m.hasOwnProperty("meetingToken")) {
        if (!$util.isString(m.meetingToken)) return "meetingToken: string expected";
      }
      return null;
    };
    StartRequest.fromObject = function fromObject(d) {
      if (d instanceof $root.cilix.StartRequest) return d;
      var m = new $root.cilix.StartRequest();
      if (d.config != null) {
        if (typeof d.config !== "object") throw TypeError(".cilix.StartRequest.config: object expected");
        m.config = $root.jibb.ipsa.v1.Config.fromObject(d.config);
      }
      if (d.runtimeConfig != null) {
        if (typeof d.runtimeConfig !== "object") throw TypeError(".cilix.StartRequest.runtimeConfig: object expected");
        m.runtimeConfig = $root.jibb.ipsa.v1.RuntimeConfig.fromObject(d.runtimeConfig);
      }
      if (d.camera != null) {
        if (typeof d.camera !== "object") throw TypeError(".cilix.StartRequest.camera: object expected");
        m.camera = $root.cilix.CameraDescription.fromObject(d.camera);
      }
      if (d.meetingToken != null) {
        m.meetingToken = String(d.meetingToken);
      }
      return m;
    };
    StartRequest.toObject = function toObject(m, o) {
      if (!o) o = {};
      var d = {};
      if (o.defaults) {
        d.config = null;
        d.runtimeConfig = null;
        d.camera = null;
        d.meetingToken = "";
      }
      if (m.config != null && m.hasOwnProperty("config")) {
        d.config = $root.jibb.ipsa.v1.Config.toObject(m.config, o);
      }
      if (m.runtimeConfig != null && m.hasOwnProperty("runtimeConfig")) {
        d.runtimeConfig = $root.jibb.ipsa.v1.RuntimeConfig.toObject(m.runtimeConfig, o);
      }
      if (m.camera != null && m.hasOwnProperty("camera")) {
        d.camera = $root.cilix.CameraDescription.toObject(m.camera, o);
      }
      if (m.meetingToken != null && m.hasOwnProperty("meetingToken")) {
        d.meetingToken = m.meetingToken;
      }
      return d;
    };
    StartRequest.prototype.toJSON = function toJSON() {
      return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };
    return StartRequest;
  }();
  cilix.PreviewRequest = function () {
    function PreviewRequest(p) {
      if (p) for (var ks = Object.keys(p), i = 0; i < ks.length; ++i) if (p[ks[i]] != null) this[ks[i]] = p[ks[i]];
    }
    PreviewRequest.prototype.source = null;
    PreviewRequest.create = function create(properties) {
      return new PreviewRequest(properties);
    };
    PreviewRequest.encode = function encode(m, w) {
      if (!w) w = $Writer.create();
      if (m.source != null && Object.hasOwnProperty.call(m, "source")) $root.cilix.CameraDescription.encode(m.source, w.uint32(18).fork()).ldelim();
      return w;
    };
    PreviewRequest.encodeDelimited = function encodeDelimited(message, writer) {
      return this.encode(message, writer).ldelim();
    };
    PreviewRequest.decode = function decode(r, l) {
      if (!(r instanceof $Reader)) r = $Reader.create(r);
      var c = l === undefined ? r.len : r.pos + l,
        m = new $root.cilix.PreviewRequest();
      while (r.pos < c) {
        var t = r.uint32();
        switch (t >>> 3) {
          case 2:
            m.source = $root.cilix.CameraDescription.decode(r, r.uint32());
            break;
          default:
            r.skipType(t & 7);
            break;
        }
      }
      return m;
    };
    PreviewRequest.decodeDelimited = function decodeDelimited(reader) {
      if (!(reader instanceof $Reader)) reader = new $Reader(reader);
      return this.decode(reader, reader.uint32());
    };
    PreviewRequest.verify = function verify(m) {
      if (typeof m !== "object" || m === null) return "object expected";
      if (m.source != null && m.hasOwnProperty("source")) {
        {
          var e = $root.cilix.CameraDescription.verify(m.source);
          if (e) return "source." + e;
        }
      }
      return null;
    };
    PreviewRequest.fromObject = function fromObject(d) {
      if (d instanceof $root.cilix.PreviewRequest) return d;
      var m = new $root.cilix.PreviewRequest();
      if (d.source != null) {
        if (typeof d.source !== "object") throw TypeError(".cilix.PreviewRequest.source: object expected");
        m.source = $root.cilix.CameraDescription.fromObject(d.source);
      }
      return m;
    };
    PreviewRequest.toObject = function toObject(m, o) {
      if (!o) o = {};
      var d = {};
      if (o.defaults) {
        d.source = null;
      }
      if (m.source != null && m.hasOwnProperty("source")) {
        d.source = $root.cilix.CameraDescription.toObject(m.source, o);
      }
      return d;
    };
    PreviewRequest.prototype.toJSON = function toJSON() {
      return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };
    return PreviewRequest;
  }();
  cilix.PreviewResponse = function () {
    function PreviewResponse(p) {
      if (p) for (var ks = Object.keys(p), i = 0; i < ks.length; ++i) if (p[ks[i]] != null) this[ks[i]] = p[ks[i]];
    }
    PreviewResponse.prototype.image = $util.newBuffer([]);
    PreviewResponse.create = function create(properties) {
      return new PreviewResponse(properties);
    };
    PreviewResponse.encode = function encode(m, w) {
      if (!w) w = $Writer.create();
      if (m.image != null && Object.hasOwnProperty.call(m, "image")) w.uint32(10).bytes(m.image);
      return w;
    };
    PreviewResponse.encodeDelimited = function encodeDelimited(message, writer) {
      return this.encode(message, writer).ldelim();
    };
    PreviewResponse.decode = function decode(r, l) {
      if (!(r instanceof $Reader)) r = $Reader.create(r);
      var c = l === undefined ? r.len : r.pos + l,
        m = new $root.cilix.PreviewResponse();
      while (r.pos < c) {
        var t = r.uint32();
        switch (t >>> 3) {
          case 1:
            m.image = r.bytes();
            break;
          default:
            r.skipType(t & 7);
            break;
        }
      }
      return m;
    };
    PreviewResponse.decodeDelimited = function decodeDelimited(reader) {
      if (!(reader instanceof $Reader)) reader = new $Reader(reader);
      return this.decode(reader, reader.uint32());
    };
    PreviewResponse.verify = function verify(m) {
      if (typeof m !== "object" || m === null) return "object expected";
      if (m.image != null && m.hasOwnProperty("image")) {
        if (!(m.image && typeof m.image.length === "number" || $util.isString(m.image))) return "image: buffer expected";
      }
      return null;
    };
    PreviewResponse.fromObject = function fromObject(d) {
      if (d instanceof $root.cilix.PreviewResponse) return d;
      var m = new $root.cilix.PreviewResponse();
      if (d.image != null) {
        if (typeof d.image === "string") $util.base64.decode(d.image, m.image = $util.newBuffer($util.base64.length(d.image)), 0);else if (d.image.length) m.image = d.image;
      }
      return m;
    };
    PreviewResponse.toObject = function toObject(m, o) {
      if (!o) o = {};
      var d = {};
      if (o.defaults) {
        if (o.bytes === String) d.image = "";else {
          d.image = [];
          if (o.bytes !== Array) d.image = $util.newBuffer(d.image);
        }
      }
      if (m.image != null && m.hasOwnProperty("image")) {
        d.image = o.bytes === String ? $util.base64.encode(m.image, 0, m.image.length) : o.bytes === Array ? Array.prototype.slice.call(m.image) : m.image;
      }
      return d;
    };
    PreviewResponse.prototype.toJSON = function toJSON() {
      return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };
    return PreviewResponse;
  }();
  cilix.GetCameraListResponse = function () {
    function GetCameraListResponse(p) {
      this.items = [];
      if (p) for (var ks = Object.keys(p), i = 0; i < ks.length; ++i) if (p[ks[i]] != null) this[ks[i]] = p[ks[i]];
    }
    GetCameraListResponse.prototype.items = $util.emptyArray;
    GetCameraListResponse.create = function create(properties) {
      return new GetCameraListResponse(properties);
    };
    GetCameraListResponse.encode = function encode(m, w) {
      if (!w) w = $Writer.create();
      if (m.items != null && m.items.length) {
        for (var i = 0; i < m.items.length; ++i) $root.cilix.CameraDescription.encode(m.items[i], w.uint32(10).fork()).ldelim();
      }
      return w;
    };
    GetCameraListResponse.encodeDelimited = function encodeDelimited(message, writer) {
      return this.encode(message, writer).ldelim();
    };
    GetCameraListResponse.decode = function decode(r, l) {
      if (!(r instanceof $Reader)) r = $Reader.create(r);
      var c = l === undefined ? r.len : r.pos + l,
        m = new $root.cilix.GetCameraListResponse();
      while (r.pos < c) {
        var t = r.uint32();
        switch (t >>> 3) {
          case 1:
            if (!(m.items && m.items.length)) m.items = [];
            m.items.push($root.cilix.CameraDescription.decode(r, r.uint32()));
            break;
          default:
            r.skipType(t & 7);
            break;
        }
      }
      return m;
    };
    GetCameraListResponse.decodeDelimited = function decodeDelimited(reader) {
      if (!(reader instanceof $Reader)) reader = new $Reader(reader);
      return this.decode(reader, reader.uint32());
    };
    GetCameraListResponse.verify = function verify(m) {
      if (typeof m !== "object" || m === null) return "object expected";
      if (m.items != null && m.hasOwnProperty("items")) {
        if (!Array.isArray(m.items)) return "items: array expected";
        for (var i = 0; i < m.items.length; ++i) {
          {
            var e = $root.cilix.CameraDescription.verify(m.items[i]);
            if (e) return "items." + e;
          }
        }
      }
      return null;
    };
    GetCameraListResponse.fromObject = function fromObject(d) {
      if (d instanceof $root.cilix.GetCameraListResponse) return d;
      var m = new $root.cilix.GetCameraListResponse();
      if (d.items) {
        if (!Array.isArray(d.items)) throw TypeError(".cilix.GetCameraListResponse.items: array expected");
        m.items = [];
        for (var i = 0; i < d.items.length; ++i) {
          if (typeof d.items[i] !== "object") throw TypeError(".cilix.GetCameraListResponse.items: object expected");
          m.items[i] = $root.cilix.CameraDescription.fromObject(d.items[i]);
        }
      }
      return m;
    };
    GetCameraListResponse.toObject = function toObject(m, o) {
      if (!o) o = {};
      var d = {};
      if (o.arrays || o.defaults) {
        d.items = [];
      }
      if (m.items && m.items.length) {
        d.items = [];
        for (var j = 0; j < m.items.length; ++j) {
          d.items[j] = $root.cilix.CameraDescription.toObject(m.items[j], o);
        }
      }
      return d;
    };
    GetCameraListResponse.prototype.toJSON = function toJSON() {
      return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };
    return GetCameraListResponse;
  }();
  cilix.GetClientStatusListResponse = function () {
    function GetClientStatusListResponse(p) {
      this.clients = [];
      if (p) for (var ks = Object.keys(p), i = 0; i < ks.length; ++i) if (p[ks[i]] != null) this[ks[i]] = p[ks[i]];
    }
    GetClientStatusListResponse.prototype.clients = $util.emptyArray;
    GetClientStatusListResponse.create = function create(properties) {
      return new GetClientStatusListResponse(properties);
    };
    GetClientStatusListResponse.encode = function encode(m, w) {
      if (!w) w = $Writer.create();
      if (m.clients != null && m.clients.length) {
        for (var i = 0; i < m.clients.length; ++i) $root.types.ClientDetails.encode(m.clients[i], w.uint32(10).fork()).ldelim();
      }
      return w;
    };
    GetClientStatusListResponse.encodeDelimited = function encodeDelimited(message, writer) {
      return this.encode(message, writer).ldelim();
    };
    GetClientStatusListResponse.decode = function decode(r, l) {
      if (!(r instanceof $Reader)) r = $Reader.create(r);
      var c = l === undefined ? r.len : r.pos + l,
        m = new $root.cilix.GetClientStatusListResponse();
      while (r.pos < c) {
        var t = r.uint32();
        switch (t >>> 3) {
          case 1:
            if (!(m.clients && m.clients.length)) m.clients = [];
            m.clients.push($root.types.ClientDetails.decode(r, r.uint32()));
            break;
          default:
            r.skipType(t & 7);
            break;
        }
      }
      return m;
    };
    GetClientStatusListResponse.decodeDelimited = function decodeDelimited(reader) {
      if (!(reader instanceof $Reader)) reader = new $Reader(reader);
      return this.decode(reader, reader.uint32());
    };
    GetClientStatusListResponse.verify = function verify(m) {
      if (typeof m !== "object" || m === null) return "object expected";
      if (m.clients != null && m.hasOwnProperty("clients")) {
        if (!Array.isArray(m.clients)) return "clients: array expected";
        for (var i = 0; i < m.clients.length; ++i) {
          {
            var e = $root.types.ClientDetails.verify(m.clients[i]);
            if (e) return "clients." + e;
          }
        }
      }
      return null;
    };
    GetClientStatusListResponse.fromObject = function fromObject(d) {
      if (d instanceof $root.cilix.GetClientStatusListResponse) return d;
      var m = new $root.cilix.GetClientStatusListResponse();
      if (d.clients) {
        if (!Array.isArray(d.clients)) throw TypeError(".cilix.GetClientStatusListResponse.clients: array expected");
        m.clients = [];
        for (var i = 0; i < d.clients.length; ++i) {
          if (typeof d.clients[i] !== "object") throw TypeError(".cilix.GetClientStatusListResponse.clients: object expected");
          m.clients[i] = $root.types.ClientDetails.fromObject(d.clients[i]);
        }
      }
      return m;
    };
    GetClientStatusListResponse.toObject = function toObject(m, o) {
      if (!o) o = {};
      var d = {};
      if (o.arrays || o.defaults) {
        d.clients = [];
      }
      if (m.clients && m.clients.length) {
        d.clients = [];
        for (var j = 0; j < m.clients.length; ++j) {
          d.clients[j] = $root.types.ClientDetails.toObject(m.clients[j], o);
        }
      }
      return d;
    };
    GetClientStatusListResponse.prototype.toJSON = function toJSON() {
      return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };
    return GetClientStatusListResponse;
  }();
  cilix.BusMessage = function () {
    function BusMessage(p) {
      if (p) for (var ks = Object.keys(p), i = 0; i < ks.length; ++i) if (p[ks[i]] != null) this[ks[i]] = p[ks[i]];
    }
    BusMessage.prototype.clientConnected = null;
    BusMessage.prototype.clientDisconnected = null;
    BusMessage.prototype.tooManyPublishers = null;
    BusMessage.prototype.ipsaResponse = null;
    BusMessage.prototype.startRequest = null;
    BusMessage.prototype.stopRequest = null;
    BusMessage.prototype.newPageRequest = null;
    BusMessage.prototype.previewRequest = null;
    BusMessage.prototype.previewResponse = null;
    BusMessage.prototype.cameraListRequest = null;
    BusMessage.prototype.cameraListResponse = null;
    BusMessage.prototype.runtimeConfigRequest = null;
    BusMessage.prototype.clientStatusRequest = null;
    BusMessage.prototype.recordingStarted = null;
    BusMessage.prototype.recordingStopped = null;
    BusMessage.prototype.error = null;
    BusMessage.prototype.src = null;
    BusMessage.prototype.dst = null;
    let $oneOfFields;
    Object.defineProperty(BusMessage.prototype, "messageType", {
      get: $util.oneOfGetter($oneOfFields = ["clientConnected", "clientDisconnected", "tooManyPublishers", "ipsaResponse", "startRequest", "stopRequest", "newPageRequest", "previewRequest", "previewResponse", "cameraListRequest", "cameraListResponse", "runtimeConfigRequest", "clientStatusRequest", "recordingStarted", "recordingStopped", "error"]),
      set: $util.oneOfSetter($oneOfFields)
    });
    BusMessage.create = function create(properties) {
      return new BusMessage(properties);
    };
    BusMessage.encode = function encode(m, w) {
      if (!w) w = $Writer.create();
      if (m.clientConnected != null && Object.hasOwnProperty.call(m, "clientConnected")) $root.google.protobuf.Empty.encode(m.clientConnected, w.uint32(18).fork()).ldelim();
      if (m.clientDisconnected != null && Object.hasOwnProperty.call(m, "clientDisconnected")) $root.google.protobuf.Empty.encode(m.clientDisconnected, w.uint32(26).fork()).ldelim();
      if (m.tooManyPublishers != null && Object.hasOwnProperty.call(m, "tooManyPublishers")) $root.google.protobuf.Empty.encode(m.tooManyPublishers, w.uint32(34).fork()).ldelim();
      if (m.ipsaResponse != null && Object.hasOwnProperty.call(m, "ipsaResponse")) $root.jibb.ipsa.v1.Response.encode(m.ipsaResponse, w.uint32(50).fork()).ldelim();
      if (m.src != null && Object.hasOwnProperty.call(m, "src")) $root.types.ClientDetails.encode(m.src, w.uint32(242).fork()).ldelim();
      if (m.dst != null && Object.hasOwnProperty.call(m, "dst")) $root.types.ClientDetails.encode(m.dst, w.uint32(250).fork()).ldelim();
      if (m.startRequest != null && Object.hasOwnProperty.call(m, "startRequest")) $root.cilix.StartRequest.encode(m.startRequest, w.uint32(402).fork()).ldelim();
      if (m.stopRequest != null && Object.hasOwnProperty.call(m, "stopRequest")) $root.google.protobuf.Empty.encode(m.stopRequest, w.uint32(410).fork()).ldelim();
      if (m.newPageRequest != null && Object.hasOwnProperty.call(m, "newPageRequest")) $root.google.protobuf.Empty.encode(m.newPageRequest, w.uint32(418).fork()).ldelim();
      if (m.previewRequest != null && Object.hasOwnProperty.call(m, "previewRequest")) $root.cilix.PreviewRequest.encode(m.previewRequest, w.uint32(426).fork()).ldelim();
      if (m.previewResponse != null && Object.hasOwnProperty.call(m, "previewResponse")) $root.cilix.PreviewResponse.encode(m.previewResponse, w.uint32(434).fork()).ldelim();
      if (m.cameraListRequest != null && Object.hasOwnProperty.call(m, "cameraListRequest")) $root.google.protobuf.Empty.encode(m.cameraListRequest, w.uint32(442).fork()).ldelim();
      if (m.cameraListResponse != null && Object.hasOwnProperty.call(m, "cameraListResponse")) $root.cilix.GetCameraListResponse.encode(m.cameraListResponse, w.uint32(450).fork()).ldelim();
      if (m.runtimeConfigRequest != null && Object.hasOwnProperty.call(m, "runtimeConfigRequest")) $root.jibb.ipsa.v1.RuntimeConfig.encode(m.runtimeConfigRequest, w.uint32(458).fork()).ldelim();
      if (m.clientStatusRequest != null && Object.hasOwnProperty.call(m, "clientStatusRequest")) $root.google.protobuf.Empty.encode(m.clientStatusRequest, w.uint32(466).fork()).ldelim();
      if (m.recordingStarted != null && Object.hasOwnProperty.call(m, "recordingStarted")) $root.google.protobuf.Empty.encode(m.recordingStarted, w.uint32(474).fork()).ldelim();
      if (m.recordingStopped != null && Object.hasOwnProperty.call(m, "recordingStopped")) $root.google.protobuf.Empty.encode(m.recordingStopped, w.uint32(482).fork()).ldelim();
      if (m.error != null && Object.hasOwnProperty.call(m, "error")) w.uint32(800).int32(m.error);
      return w;
    };
    BusMessage.encodeDelimited = function encodeDelimited(message, writer) {
      return this.encode(message, writer).ldelim();
    };
    BusMessage.decode = function decode(r, l) {
      if (!(r instanceof $Reader)) r = $Reader.create(r);
      var c = l === undefined ? r.len : r.pos + l,
        m = new $root.cilix.BusMessage();
      while (r.pos < c) {
        var t = r.uint32();
        switch (t >>> 3) {
          case 2:
            m.clientConnected = $root.google.protobuf.Empty.decode(r, r.uint32());
            break;
          case 3:
            m.clientDisconnected = $root.google.protobuf.Empty.decode(r, r.uint32());
            break;
          case 4:
            m.tooManyPublishers = $root.google.protobuf.Empty.decode(r, r.uint32());
            break;
          case 6:
            m.ipsaResponse = $root.jibb.ipsa.v1.Response.decode(r, r.uint32());
            break;
          case 50:
            m.startRequest = $root.cilix.StartRequest.decode(r, r.uint32());
            break;
          case 51:
            m.stopRequest = $root.google.protobuf.Empty.decode(r, r.uint32());
            break;
          case 52:
            m.newPageRequest = $root.google.protobuf.Empty.decode(r, r.uint32());
            break;
          case 53:
            m.previewRequest = $root.cilix.PreviewRequest.decode(r, r.uint32());
            break;
          case 54:
            m.previewResponse = $root.cilix.PreviewResponse.decode(r, r.uint32());
            break;
          case 55:
            m.cameraListRequest = $root.google.protobuf.Empty.decode(r, r.uint32());
            break;
          case 56:
            m.cameraListResponse = $root.cilix.GetCameraListResponse.decode(r, r.uint32());
            break;
          case 57:
            m.runtimeConfigRequest = $root.jibb.ipsa.v1.RuntimeConfig.decode(r, r.uint32());
            break;
          case 58:
            m.clientStatusRequest = $root.google.protobuf.Empty.decode(r, r.uint32());
            break;
          case 59:
            m.recordingStarted = $root.google.protobuf.Empty.decode(r, r.uint32());
            break;
          case 60:
            m.recordingStopped = $root.google.protobuf.Empty.decode(r, r.uint32());
            break;
          case 100:
            m.error = r.int32();
            break;
          case 30:
            m.src = $root.types.ClientDetails.decode(r, r.uint32());
            break;
          case 31:
            m.dst = $root.types.ClientDetails.decode(r, r.uint32());
            break;
          default:
            r.skipType(t & 7);
            break;
        }
      }
      return m;
    };
    BusMessage.decodeDelimited = function decodeDelimited(reader) {
      if (!(reader instanceof $Reader)) reader = new $Reader(reader);
      return this.decode(reader, reader.uint32());
    };
    BusMessage.verify = function verify(m) {
      if (typeof m !== "object" || m === null) return "object expected";
      var p = {};
      if (m.clientConnected != null && m.hasOwnProperty("clientConnected")) {
        p.messageType = 1;
        {
          var e = $root.google.protobuf.Empty.verify(m.clientConnected);
          if (e) return "clientConnected." + e;
        }
      }
      if (m.clientDisconnected != null && m.hasOwnProperty("clientDisconnected")) {
        if (p.messageType === 1) return "messageType: multiple values";
        p.messageType = 1;
        {
          var e = $root.google.protobuf.Empty.verify(m.clientDisconnected);
          if (e) return "clientDisconnected." + e;
        }
      }
      if (m.tooManyPublishers != null && m.hasOwnProperty("tooManyPublishers")) {
        if (p.messageType === 1) return "messageType: multiple values";
        p.messageType = 1;
        {
          var e = $root.google.protobuf.Empty.verify(m.tooManyPublishers);
          if (e) return "tooManyPublishers." + e;
        }
      }
      if (m.ipsaResponse != null && m.hasOwnProperty("ipsaResponse")) {
        if (p.messageType === 1) return "messageType: multiple values";
        p.messageType = 1;
        {
          var e = $root.jibb.ipsa.v1.Response.verify(m.ipsaResponse);
          if (e) return "ipsaResponse." + e;
        }
      }
      if (m.startRequest != null && m.hasOwnProperty("startRequest")) {
        if (p.messageType === 1) return "messageType: multiple values";
        p.messageType = 1;
        {
          var e = $root.cilix.StartRequest.verify(m.startRequest);
          if (e) return "startRequest." + e;
        }
      }
      if (m.stopRequest != null && m.hasOwnProperty("stopRequest")) {
        if (p.messageType === 1) return "messageType: multiple values";
        p.messageType = 1;
        {
          var e = $root.google.protobuf.Empty.verify(m.stopRequest);
          if (e) return "stopRequest." + e;
        }
      }
      if (m.newPageRequest != null && m.hasOwnProperty("newPageRequest")) {
        if (p.messageType === 1) return "messageType: multiple values";
        p.messageType = 1;
        {
          var e = $root.google.protobuf.Empty.verify(m.newPageRequest);
          if (e) return "newPageRequest." + e;
        }
      }
      if (m.previewRequest != null && m.hasOwnProperty("previewRequest")) {
        if (p.messageType === 1) return "messageType: multiple values";
        p.messageType = 1;
        {
          var e = $root.cilix.PreviewRequest.verify(m.previewRequest);
          if (e) return "previewRequest." + e;
        }
      }
      if (m.previewResponse != null && m.hasOwnProperty("previewResponse")) {
        if (p.messageType === 1) return "messageType: multiple values";
        p.messageType = 1;
        {
          var e = $root.cilix.PreviewResponse.verify(m.previewResponse);
          if (e) return "previewResponse." + e;
        }
      }
      if (m.cameraListRequest != null && m.hasOwnProperty("cameraListRequest")) {
        if (p.messageType === 1) return "messageType: multiple values";
        p.messageType = 1;
        {
          var e = $root.google.protobuf.Empty.verify(m.cameraListRequest);
          if (e) return "cameraListRequest." + e;
        }
      }
      if (m.cameraListResponse != null && m.hasOwnProperty("cameraListResponse")) {
        if (p.messageType === 1) return "messageType: multiple values";
        p.messageType = 1;
        {
          var e = $root.cilix.GetCameraListResponse.verify(m.cameraListResponse);
          if (e) return "cameraListResponse." + e;
        }
      }
      if (m.runtimeConfigRequest != null && m.hasOwnProperty("runtimeConfigRequest")) {
        if (p.messageType === 1) return "messageType: multiple values";
        p.messageType = 1;
        {
          var e = $root.jibb.ipsa.v1.RuntimeConfig.verify(m.runtimeConfigRequest);
          if (e) return "runtimeConfigRequest." + e;
        }
      }
      if (m.clientStatusRequest != null && m.hasOwnProperty("clientStatusRequest")) {
        if (p.messageType === 1) return "messageType: multiple values";
        p.messageType = 1;
        {
          var e = $root.google.protobuf.Empty.verify(m.clientStatusRequest);
          if (e) return "clientStatusRequest." + e;
        }
      }
      if (m.recordingStarted != null && m.hasOwnProperty("recordingStarted")) {
        if (p.messageType === 1) return "messageType: multiple values";
        p.messageType = 1;
        {
          var e = $root.google.protobuf.Empty.verify(m.recordingStarted);
          if (e) return "recordingStarted." + e;
        }
      }
      if (m.recordingStopped != null && m.hasOwnProperty("recordingStopped")) {
        if (p.messageType === 1) return "messageType: multiple values";
        p.messageType = 1;
        {
          var e = $root.google.protobuf.Empty.verify(m.recordingStopped);
          if (e) return "recordingStopped." + e;
        }
      }
      if (m.error != null && m.hasOwnProperty("error")) {
        if (p.messageType === 1) return "messageType: multiple values";
        p.messageType = 1;
        switch (m.error) {
          default:
            return "error: enum value expected";
          case 0:
          case 4000:
          case 4001:
          case 4002:
          case 4003:
          case 4004:
          case 4005:
          case 4006:
          case 4008:
            break;
        }
      }
      if (m.src != null && m.hasOwnProperty("src")) {
        {
          var e = $root.types.ClientDetails.verify(m.src);
          if (e) return "src." + e;
        }
      }
      if (m.dst != null && m.hasOwnProperty("dst")) {
        {
          var e = $root.types.ClientDetails.verify(m.dst);
          if (e) return "dst." + e;
        }
      }
      return null;
    };
    BusMessage.fromObject = function fromObject(d) {
      if (d instanceof $root.cilix.BusMessage) return d;
      var m = new $root.cilix.BusMessage();
      if (d.clientConnected != null) {
        if (typeof d.clientConnected !== "object") throw TypeError(".cilix.BusMessage.clientConnected: object expected");
        m.clientConnected = $root.google.protobuf.Empty.fromObject(d.clientConnected);
      }
      if (d.clientDisconnected != null) {
        if (typeof d.clientDisconnected !== "object") throw TypeError(".cilix.BusMessage.clientDisconnected: object expected");
        m.clientDisconnected = $root.google.protobuf.Empty.fromObject(d.clientDisconnected);
      }
      if (d.tooManyPublishers != null) {
        if (typeof d.tooManyPublishers !== "object") throw TypeError(".cilix.BusMessage.tooManyPublishers: object expected");
        m.tooManyPublishers = $root.google.protobuf.Empty.fromObject(d.tooManyPublishers);
      }
      if (d.ipsaResponse != null) {
        if (typeof d.ipsaResponse !== "object") throw TypeError(".cilix.BusMessage.ipsaResponse: object expected");
        m.ipsaResponse = $root.jibb.ipsa.v1.Response.fromObject(d.ipsaResponse);
      }
      if (d.startRequest != null) {
        if (typeof d.startRequest !== "object") throw TypeError(".cilix.BusMessage.startRequest: object expected");
        m.startRequest = $root.cilix.StartRequest.fromObject(d.startRequest);
      }
      if (d.stopRequest != null) {
        if (typeof d.stopRequest !== "object") throw TypeError(".cilix.BusMessage.stopRequest: object expected");
        m.stopRequest = $root.google.protobuf.Empty.fromObject(d.stopRequest);
      }
      if (d.newPageRequest != null) {
        if (typeof d.newPageRequest !== "object") throw TypeError(".cilix.BusMessage.newPageRequest: object expected");
        m.newPageRequest = $root.google.protobuf.Empty.fromObject(d.newPageRequest);
      }
      if (d.previewRequest != null) {
        if (typeof d.previewRequest !== "object") throw TypeError(".cilix.BusMessage.previewRequest: object expected");
        m.previewRequest = $root.cilix.PreviewRequest.fromObject(d.previewRequest);
      }
      if (d.previewResponse != null) {
        if (typeof d.previewResponse !== "object") throw TypeError(".cilix.BusMessage.previewResponse: object expected");
        m.previewResponse = $root.cilix.PreviewResponse.fromObject(d.previewResponse);
      }
      if (d.cameraListRequest != null) {
        if (typeof d.cameraListRequest !== "object") throw TypeError(".cilix.BusMessage.cameraListRequest: object expected");
        m.cameraListRequest = $root.google.protobuf.Empty.fromObject(d.cameraListRequest);
      }
      if (d.cameraListResponse != null) {
        if (typeof d.cameraListResponse !== "object") throw TypeError(".cilix.BusMessage.cameraListResponse: object expected");
        m.cameraListResponse = $root.cilix.GetCameraListResponse.fromObject(d.cameraListResponse);
      }
      if (d.runtimeConfigRequest != null) {
        if (typeof d.runtimeConfigRequest !== "object") throw TypeError(".cilix.BusMessage.runtimeConfigRequest: object expected");
        m.runtimeConfigRequest = $root.jibb.ipsa.v1.RuntimeConfig.fromObject(d.runtimeConfigRequest);
      }
      if (d.clientStatusRequest != null) {
        if (typeof d.clientStatusRequest !== "object") throw TypeError(".cilix.BusMessage.clientStatusRequest: object expected");
        m.clientStatusRequest = $root.google.protobuf.Empty.fromObject(d.clientStatusRequest);
      }
      if (d.recordingStarted != null) {
        if (typeof d.recordingStarted !== "object") throw TypeError(".cilix.BusMessage.recordingStarted: object expected");
        m.recordingStarted = $root.google.protobuf.Empty.fromObject(d.recordingStarted);
      }
      if (d.recordingStopped != null) {
        if (typeof d.recordingStopped !== "object") throw TypeError(".cilix.BusMessage.recordingStopped: object expected");
        m.recordingStopped = $root.google.protobuf.Empty.fromObject(d.recordingStopped);
      }
      switch (d.error) {
        case "SUCCESS":
        case 0:
          m.error = 0;
          break;
        case "ERR_IO":
        case 4000:
          m.error = 4000;
          break;
        case "ERR_CLOSED":
        case 4001:
          m.error = 4001;
          break;
        case "ERR_TIMEOUT":
        case 4002:
          m.error = 4002;
          break;
        case "ERR_BAD_REQUEST":
        case 4003:
          m.error = 4003;
          break;
        case "ERR_UNAUTHORIZED":
        case 4004:
          m.error = 4004;
          break;
        case "ERR_INTERNAL":
        case 4005:
          m.error = 4005;
          break;
        case "ERR_TOO_MANY_CONNECTIONS":
        case 4006:
          m.error = 4006;
          break;
        case "ERR_OUT_OF_LICENSE":
        case 4008:
          m.error = 4008;
          break;
      }
      if (d.src != null) {
        if (typeof d.src !== "object") throw TypeError(".cilix.BusMessage.src: object expected");
        m.src = $root.types.ClientDetails.fromObject(d.src);
      }
      if (d.dst != null) {
        if (typeof d.dst !== "object") throw TypeError(".cilix.BusMessage.dst: object expected");
        m.dst = $root.types.ClientDetails.fromObject(d.dst);
      }
      return m;
    };
    BusMessage.toObject = function toObject(m, o) {
      if (!o) o = {};
      var d = {};
      if (o.defaults) {
        d.src = null;
        d.dst = null;
      }
      if (m.clientConnected != null && m.hasOwnProperty("clientConnected")) {
        d.clientConnected = $root.google.protobuf.Empty.toObject(m.clientConnected, o);
        if (o.oneofs) d.messageType = "clientConnected";
      }
      if (m.clientDisconnected != null && m.hasOwnProperty("clientDisconnected")) {
        d.clientDisconnected = $root.google.protobuf.Empty.toObject(m.clientDisconnected, o);
        if (o.oneofs) d.messageType = "clientDisconnected";
      }
      if (m.tooManyPublishers != null && m.hasOwnProperty("tooManyPublishers")) {
        d.tooManyPublishers = $root.google.protobuf.Empty.toObject(m.tooManyPublishers, o);
        if (o.oneofs) d.messageType = "tooManyPublishers";
      }
      if (m.ipsaResponse != null && m.hasOwnProperty("ipsaResponse")) {
        d.ipsaResponse = $root.jibb.ipsa.v1.Response.toObject(m.ipsaResponse, o);
        if (o.oneofs) d.messageType = "ipsaResponse";
      }
      if (m.src != null && m.hasOwnProperty("src")) {
        d.src = $root.types.ClientDetails.toObject(m.src, o);
      }
      if (m.dst != null && m.hasOwnProperty("dst")) {
        d.dst = $root.types.ClientDetails.toObject(m.dst, o);
      }
      if (m.startRequest != null && m.hasOwnProperty("startRequest")) {
        d.startRequest = $root.cilix.StartRequest.toObject(m.startRequest, o);
        if (o.oneofs) d.messageType = "startRequest";
      }
      if (m.stopRequest != null && m.hasOwnProperty("stopRequest")) {
        d.stopRequest = $root.google.protobuf.Empty.toObject(m.stopRequest, o);
        if (o.oneofs) d.messageType = "stopRequest";
      }
      if (m.newPageRequest != null && m.hasOwnProperty("newPageRequest")) {
        d.newPageRequest = $root.google.protobuf.Empty.toObject(m.newPageRequest, o);
        if (o.oneofs) d.messageType = "newPageRequest";
      }
      if (m.previewRequest != null && m.hasOwnProperty("previewRequest")) {
        d.previewRequest = $root.cilix.PreviewRequest.toObject(m.previewRequest, o);
        if (o.oneofs) d.messageType = "previewRequest";
      }
      if (m.previewResponse != null && m.hasOwnProperty("previewResponse")) {
        d.previewResponse = $root.cilix.PreviewResponse.toObject(m.previewResponse, o);
        if (o.oneofs) d.messageType = "previewResponse";
      }
      if (m.cameraListRequest != null && m.hasOwnProperty("cameraListRequest")) {
        d.cameraListRequest = $root.google.protobuf.Empty.toObject(m.cameraListRequest, o);
        if (o.oneofs) d.messageType = "cameraListRequest";
      }
      if (m.cameraListResponse != null && m.hasOwnProperty("cameraListResponse")) {
        d.cameraListResponse = $root.cilix.GetCameraListResponse.toObject(m.cameraListResponse, o);
        if (o.oneofs) d.messageType = "cameraListResponse";
      }
      if (m.runtimeConfigRequest != null && m.hasOwnProperty("runtimeConfigRequest")) {
        d.runtimeConfigRequest = $root.jibb.ipsa.v1.RuntimeConfig.toObject(m.runtimeConfigRequest, o);
        if (o.oneofs) d.messageType = "runtimeConfigRequest";
      }
      if (m.clientStatusRequest != null && m.hasOwnProperty("clientStatusRequest")) {
        d.clientStatusRequest = $root.google.protobuf.Empty.toObject(m.clientStatusRequest, o);
        if (o.oneofs) d.messageType = "clientStatusRequest";
      }
      if (m.recordingStarted != null && m.hasOwnProperty("recordingStarted")) {
        d.recordingStarted = $root.google.protobuf.Empty.toObject(m.recordingStarted, o);
        if (o.oneofs) d.messageType = "recordingStarted";
      }
      if (m.recordingStopped != null && m.hasOwnProperty("recordingStopped")) {
        d.recordingStopped = $root.google.protobuf.Empty.toObject(m.recordingStopped, o);
        if (o.oneofs) d.messageType = "recordingStopped";
      }
      if (m.error != null && m.hasOwnProperty("error")) {
        d.error = o.enums === String ? $root.types.Code[m.error] : m.error;
        if (o.oneofs) d.messageType = "error";
      }
      return d;
    };
    BusMessage.prototype.toJSON = function toJSON() {
      return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };
    return BusMessage;
  }();
  return cilix;
})();
export default $root;