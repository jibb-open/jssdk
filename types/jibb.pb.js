import * as $protobuf from "protobufjs/light";
const $root = ($protobuf.roots["default"] || ($protobuf.roots["default"] = new $protobuf.Root())).setOptions({
  syntax: "proto3"
}).addJSON({
  types: {
    options: {
      go_package: "github.com/Inkerz/jibbapis/sdk/go/types"
    },
    nested: {
      Code: {
        values: {
          SUCCESS: 0,
          ERR_IO: 4000,
          ERR_CLOSED: 4001,
          ERR_TIMEOUT: 4002,
          ERR_BAD_REQUEST: 4003,
          ERR_UNAUTHORIZED: 4004,
          ERR_INTERNAL: 4005,
          ERR_TOO_MANY_CONNECTIONS: 4006,
          ERR_OUT_OF_LICENSE: 4008
        }
      },
      ErrorLevel: {
        values: {
          DEBUG: 0,
          INFO: 1,
          WARNING: 2,
          ERROR: 3,
          CRITICAL: 4
        }
      },
      Error: {
        fields: {
          level: {
            type: "ErrorLevel",
            id: 1
          },
          code: {
            type: "Code",
            id: 2
          },
          reason: {
            type: "string",
            id: 3
          }
        }
      },
      TriState: {
        values: {
          DEFAULT: 0,
          ENABLE: 1,
          DISABLE: 2
        }
      },
      SurfaceType: {
        values: {
          UNKNOWN: 0,
          PAPER: 1,
          WHITEBOARD: 2
        }
      },
      ClientType: {
        options: {
          allow_alias: true
        },
        values: {
          UNKNOWN_CLIENT_TYPE: 0,
          ANY: 0,
          IPSA: 1,
          MOBILE: 2,
          WEBAPP: 3,
          COMPANION: 4,
          ipsa: 1,
          mobile: 2,
          webapp: 3,
          companion: 4
        }
      },
      ClientDetails: {
        fields: {
          clientType: {
            type: "ClientType",
            id: 1
          },
          id: {
            type: "string",
            id: 2
          },
          name: {
            type: "string",
            id: 3
          }
        }
      },
      ContentType: {
        values: {
          UNKNOWN_TYPE: 0,
          IMAGE_JPEG: 1,
          IMAGE_WEBP: 2
        }
      }
    }
  },
  jibb: {
    nested: {
      ipsa: {
        nested: {
          v1: {
            options: {
              java_package: "ai.jibb.ipsa",
              java_outer_classname: "IPSA",
              go_package: "github.com/Inkerz/jibbapis/sdk/go/ipsa"
            },
            nested: {
              StatusCode: {
                values: {
                  SUCCESS: 0,
                  INVALID_INPUT: 3,
                  SESSION_BUSY: 6,
                  SURFACE_DETECTED: 110,
                  SURFACE_NOT_DETECTED: 100,
                  SURFACE_NOT_STABILIZED: 101,
                  SURFACE_CHANGED: 103,
                  SURFACE_TOO_LEFT: 104,
                  SURFACE_TOO_RIGHT: 105,
                  SURFACE_TOO_CLOSE: 106,
                  SURFACE_TOO_FAR: 109,
                  SURFACE_TOO_DARK: 107,
                  SURFACE_TOO_BRIGHT: 108,
                  INTERNAL_ERROR: 200
                }
              },
              Rotation: {
                values: {
                  ROTATE_0: 0,
                  ROTATE_90_CLOCKWISE: 1,
                  ROTATE_180: 2,
                  ROTATE_90_COUNTERCLOCKWISE: 3
                }
              },
              Encoding: {
                values: {
                  JPEG: 0,
                  VP8: 1,
                  VP9: 2,
                  H264: 3
                }
              },
              Config: {
                fields: {
                  surfaceType: {
                    type: "types.SurfaceType",
                    id: 1
                  },
                  enableStabilization: {
                    type: "types.TriState",
                    id: 3
                  },
                  enableTransformation: {
                    type: "types.TriState",
                    id: 4
                  },
                  userId: {
                    type: "string",
                    id: 5
                  },
                  mbusTopicStatus: {
                    type: "string",
                    id: 7
                  },
                  mbusTopicImage: {
                    type: "string",
                    id: 8
                  },
                  encoding: {
                    type: "Encoding",
                    id: 10
                  }
                }
              },
              RuntimeConfig: {
                fields: {
                  customCorners: {
                    rule: "repeated",
                    type: "sint32",
                    id: 1
                  },
                  fixedCorners: {
                    type: "bool",
                    id: 2
                  },
                  enableColor: {
                    type: "bool",
                    id: 3
                  },
                  rotation: {
                    type: "Rotation",
                    id: 4
                  },
                  flipUpDown: {
                    type: "bool",
                    id: 5
                  },
                  flipLeftRight: {
                    type: "bool",
                    id: 6
                  },
                  enableEstimation: {
                    type: "bool",
                    id: 7
                  },
                  inputRotation: {
                    type: "Rotation",
                    id: 8
                  }
                }
              },
              VersionResponse: {
                fields: {
                  version: {
                    type: "string",
                    id: 1
                  }
                }
              },
              SurfaceTransformationRequest: {
                fields: {
                  surfaceType: {
                    type: "types.SurfaceType",
                    id: 1
                  },
                  img: {
                    type: "bytes",
                    id: 2
                  }
                }
              },
              SurfaceTransformationResponse: {
                fields: {
                  img: {
                    type: "bytes",
                    id: 1
                  }
                }
              },
              SurfaceSegmentationRequest: {
                fields: {
                  surfaceType: {
                    type: "types.SurfaceType",
                    id: 1
                  },
                  overlay: {
                    type: "bool",
                    id: 2
                  },
                  img: {
                    type: "bytes",
                    id: 3
                  }
                }
              },
              SurfaceSegmentationResponse: {
                fields: {
                  img: {
                    type: "bytes",
                    id: 1
                  }
                }
              },
              SurfaceDetectionRequest: {
                fields: {
                  surfaceType: {
                    type: "types.SurfaceType",
                    id: 1
                  },
                  img: {
                    type: "bytes",
                    id: 2
                  },
                  overlay: {
                    type: "bool",
                    id: 3
                  }
                }
              },
              SurfaceDetectionResponse: {
                fields: {
                  img: {
                    type: "bytes",
                    id: 1
                  },
                  corners: {
                    rule: "repeated",
                    type: "sint32",
                    id: 2
                  }
                }
              },
              ObjectRemovalRequest: {
                fields: {
                  surfaceType: {
                    type: "types.SurfaceType",
                    id: 1
                  },
                  overlay: {
                    type: "bool",
                    id: 2
                  },
                  enableTransformation: {
                    type: "bool",
                    id: 3
                  },
                  img: {
                    type: "bytes",
                    id: 4
                  }
                }
              },
              ObjectRemovalResponse: {
                fields: {
                  img: {
                    type: "bytes",
                    id: 1
                  }
                }
              },
              ContentExtractionRequest: {
                fields: {
                  surfaceType: {
                    type: "types.SurfaceType",
                    id: 1
                  },
                  enableTransformation: {
                    type: "bool",
                    id: 2
                  },
                  enableColor: {
                    type: "bool",
                    id: 4
                  },
                  img: {
                    type: "bytes",
                    id: 3
                  }
                }
              },
              ContentExtractionResponse: {
                fields: {
                  img: {
                    type: "bytes",
                    id: 1
                  },
                  transformedImg: {
                    type: "bytes",
                    id: 2
                  }
                }
              },
              GetSimilarityRequest: {
                fields: {
                  newImage: {
                    type: "bytes",
                    id: 1
                  },
                  prevImage: {
                    type: "bytes",
                    id: 2
                  },
                  level: {
                    type: "SensivityLevel",
                    id: 3
                  }
                },
                nested: {
                  SensivityLevel: {
                    values: {
                      NORMAL: 0,
                      LOW: 1,
                      HIGH: 2
                    }
                  }
                }
              },
              GetSimilarityResponse: {
                fields: {
                  isSimilar: {
                    type: "bool",
                    id: 1
                  },
                  addedContentCount: {
                    type: "int32",
                    id: 2
                  }
                }
              },
              Ipsa: {
                fields: {
                  data: {
                    type: "bytes",
                    id: 1
                  }
                }
              },
              Request: {
                oneofs: {
                  Command: {
                    oneof: ["config", "ipsa", "resetSession", "recalibrate", "runtimeConfig", "dummy"]
                  }
                },
                fields: {
                  id: {
                    type: "int32",
                    id: 1
                  },
                  config: {
                    type: "Config",
                    id: 2
                  },
                  ipsa: {
                    type: "Ipsa",
                    id: 3
                  },
                  resetSession: {
                    type: "google.protobuf.Empty",
                    id: 4
                  },
                  recalibrate: {
                    type: "google.protobuf.Empty",
                    id: 5
                  },
                  runtimeConfig: {
                    type: "RuntimeConfig",
                    id: 6
                  },
                  dummy: {
                    type: "google.protobuf.Empty",
                    id: 7
                  }
                }
              },
              Status: {
                fields: {
                  userId: {
                    type: "string",
                    id: 1
                  },
                  corners: {
                    rule: "repeated",
                    type: "float",
                    id: 2
                  },
                  codes: {
                    rule: "repeated",
                    type: "StatusCode",
                    id: 3
                  },
                  processingTime: {
                    type: "int32",
                    id: 4
                  },
                  upsampling: {
                    type: "float",
                    id: 5
                  },
                  paperDetectionConfidence: {
                    type: "int32",
                    id: 6
                  }
                }
              },
              Image: {
                fields: {
                  userId: {
                    type: "string",
                    id: 1
                  },
                  data: {
                    type: "bytes",
                    id: 2
                  }
                }
              },
              Response: {
                fields: {
                  id: {
                    type: "int32",
                    id: 1
                  },
                  image: {
                    type: "bytes",
                    id: 5
                  },
                  status: {
                    type: "Status",
                    id: 8
                  }
                }
              },
              Started: {
                fields: {}
              },
              Stopped: {
                fields: {}
              }
            }
          }
        }
      }
    }
  },
  user: {
    options: {
      go_package: "github.com/Inkerz/jibbapis/sdk/go/user"
    },
    nested: {
      Level: {
        values: {
          FREE: 0,
          BASIC: 1,
          PRO: 3,
          BUSINESS: 4,
          ENTERPRISE: 5
        }
      },
      UserType: {
        values: {
          UNKNOWN: 0,
          MEMBER: 2,
          ADMIN: 3,
          OWNER: 4
        }
      },
      DeviceType: {
        values: {
          NOT_CONFIGURED: 0,
          ON_PREMISE: 1,
          CLOUD: 2
        }
      },
      UserDetails: {
        fields: {
          organizationName: {
            type: "string",
            id: 2
          },
          level: {
            type: "Level",
            id: 3
          },
          firstName: {
            type: "string",
            id: 4
          },
          lastName: {
            type: "string",
            id: 5
          },
          organizationId: {
            type: "int32",
            id: 6
          },
          userType: {
            type: "UserType",
            id: 7
          },
          activated: {
            type: "bool",
            id: 8
          },
          userId: {
            type: "string",
            id: 9
          },
          email: {
            type: "string",
            id: 10
          },
          lastLogin: {
            type: "google.protobuf.Timestamp",
            id: 11
          }
        }
      },
      UserClaims: {
        fields: {
          level: {
            type: "Level",
            id: 2
          },
          organizationId: {
            type: "int32",
            id: 3
          },
          email: {
            type: "string",
            id: 4
          },
          organizationName: {
            type: "string",
            id: 5
          },
          userId: {
            type: "string",
            id: 6
          },
          isDevice: {
            type: "bool",
            id: 7
          }
        }
      },
      OrganizationDetails: {
        fields: {
          name: {
            type: "string",
            id: 1
          },
          ownerEmail: {
            type: "string",
            id: 2
          },
          level: {
            type: "Level",
            id: 3
          },
          licenseCount: {
            type: "int32",
            id: 4
          },
          usersCount: {
            type: "int32",
            id: 5
          },
          creationDate: {
            type: "google.protobuf.Timestamp",
            id: 6
          },
          startDate: {
            type: "google.protobuf.Timestamp",
            id: 12
          },
          expiryDate: {
            type: "google.protobuf.Timestamp",
            id: 7
          },
          organizationId: {
            type: "int32",
            id: 8
          },
          subdomainName: {
            type: "string",
            id: 9
          },
          deviceLicenseCount: {
            type: "int32",
            id: 10
          },
          devicesCount: {
            type: "int32",
            id: 11
          },
          imageCollection: {
            type: "bool",
            id: 14
          }
        }
      }
    }
  },
  google: {
    nested: {
      protobuf: {
        nested: {
          Empty: {
            fields: {}
          },
          Timestamp: {
            fields: {
              seconds: {
                type: "int64",
                id: 1
              },
              nanos: {
                type: "int32",
                id: 2
              }
            }
          }
        }
      }
    }
  },
  meeting: {
    options: {
      go_package: "github.com/Inkerz/jibbapis/sdk/go/meeting"
    },
    nested: {
      Participant: {
        fields: {
          id: {
            type: "int32",
            id: 1
          },
          userId: {
            type: "string",
            id: 2
          },
          email: {
            type: "string",
            id: 3
          },
          title: {
            type: "string",
            id: 4
          }
        }
      },
      Update: {
        fields: {
          userId: {
            type: "string",
            id: 2
          },
          image: {
            type: "bytes",
            id: 5
          }
        }
      },
      Drawing: {
        fields: {
          userId: {
            type: "string",
            id: 2
          },
          data: {
            type: "string",
            id: 4
          }
        }
      },
      MousePointer: {
        fields: {
          userId: {
            type: "string",
            id: 2
          },
          x: {
            type: "int32",
            id: 4
          },
          y: {
            type: "int32",
            id: 5
          },
          email: {
            type: "string",
            id: 6
          }
        }
      },
      IndexPointer: {
        fields: {
          userId: {
            type: "string",
            id: 2
          },
          x: {
            type: "int32",
            id: 4
          },
          y: {
            type: "int32",
            id: 5
          },
          email: {
            type: "string",
            id: 6
          }
        }
      },
      ImageAck: {
        fields: {
          userId: {
            type: "string",
            id: 2
          }
        }
      },
      Message: {
        oneofs: {
          event: {
            oneof: ["join", "leave", "update", "drawing", "mousePointer", "imageAck", "indexPointer"]
          }
        },
        fields: {
          join: {
            type: "Participant",
            id: 1
          },
          leave: {
            type: "Participant",
            id: 2
          },
          update: {
            type: "Update",
            id: 3
          },
          drawing: {
            type: "Drawing",
            id: 6
          },
          mousePointer: {
            type: "MousePointer",
            id: 7
          },
          imageAck: {
            type: "ImageAck",
            id: 8
          },
          indexPointer: {
            type: "IndexPointer",
            id: 9
          }
        }
      },
      SharePermission: {
        values: {
          UNKNOWN_SHARE_TYPE: 0,
          SHARE_READ: 1,
          SHARE_WRITE: 2
        }
      },
      Permission: {
        values: {
          UNKNOWN_PERMISSION: 0,
          IMAGE_READ: 1,
          IMAGE_WRITE: 2,
          ANNOTATION_READ: 4,
          ANNOTATION_WRITE: 8,
          MODIFY: 16,
          MASK_READ_ONLY: 5,
          MASK_WRITE_ONLY: 10,
          MASK_READ_WRITE: 15,
          MASK_FULL_ACCESS: 31
        }
      },
      Meeting: {
        fields: {
          id: {
            type: "string",
            id: 1
          },
          title: {
            type: "string",
            id: 2
          },
          ownerId: {
            type: "string",
            id: 6
          },
          creationTime: {
            type: "int64",
            id: 7
          },
          capacity: {
            type: "int32",
            id: 8
          },
          isTemporary: {
            type: "bool",
            id: 9
          }
        }
      },
      SharedMeeting: {
        fields: {
          id: {
            type: "int32",
            id: 1
          },
          userId: {
            type: "string",
            id: 2
          },
          meetingId: {
            type: "int32",
            id: 3
          },
          email: {
            type: "string",
            id: 4
          },
          permission: {
            type: "SharePermission",
            id: 5
          }
        }
      },
      MeetingClaims: {
        fields: {
          meetingId: {
            type: "string",
            id: 1
          },
          ownerId: {
            type: "string",
            id: 3
          },
          capacity: {
            type: "int32",
            id: 4
          },
          auxilary: {
            keyType: "string",
            type: "string",
            id: 5
          },
          title: {
            type: "string",
            id: 6
          },
          isTemporary: {
            type: "bool",
            id: 7
          },
          permission: {
            type: "uint32",
            id: 9
          }
        }
      },
      ShortUrlDetails: {
        fields: {
          fullUrl: {
            type: "string",
            id: 1
          },
          password: {
            type: "string",
            id: 2
          }
        }
      }
    }
  },
  cilix: {
    options: {
      go_package: "github.com/Inkerz/jibbapis/sdk/go/cilix"
    },
    nested: {
      CameraDescription: {
        fields: {
          id: {
            type: "string",
            id: 1
          },
          name: {
            type: "string",
            id: 2
          }
        }
      },
      StartRequest: {
        fields: {
          config: {
            type: "jibb.ipsa.v1.Config",
            id: 2
          },
          runtimeConfig: {
            type: "jibb.ipsa.v1.RuntimeConfig",
            id: 4
          },
          camera: {
            type: "CameraDescription",
            id: 5
          },
          meetingToken: {
            type: "string",
            id: 6
          }
        }
      },
      PreviewRequest: {
        fields: {
          source: {
            type: "CameraDescription",
            id: 2
          }
        }
      },
      PreviewResponse: {
        fields: {
          image: {
            type: "bytes",
            id: 1
          }
        }
      },
      GetCameraListResponse: {
        fields: {
          items: {
            rule: "repeated",
            type: "CameraDescription",
            id: 1
          }
        }
      },
      GetClientStatusListResponse: {
        fields: {
          clients: {
            rule: "repeated",
            type: "types.ClientDetails",
            id: 1
          }
        }
      },
      BusMessage: {
        oneofs: {
          messageType: {
            oneof: ["clientConnected", "clientDisconnected", "tooManyPublishers", "ipsaResponse", "startRequest", "stopRequest", "newPageRequest", "previewRequest", "previewResponse", "cameraListRequest", "cameraListResponse", "runtimeConfigRequest", "clientStatusRequest", "recordingStarted", "recordingStopped", "error"]
          }
        },
        fields: {
          clientConnected: {
            type: "google.protobuf.Empty",
            id: 2
          },
          clientDisconnected: {
            type: "google.protobuf.Empty",
            id: 3
          },
          tooManyPublishers: {
            type: "google.protobuf.Empty",
            id: 4
          },
          ipsaResponse: {
            type: "jibb.ipsa.v1.Response",
            id: 6
          },
          startRequest: {
            type: "StartRequest",
            id: 50
          },
          stopRequest: {
            type: "google.protobuf.Empty",
            id: 51
          },
          newPageRequest: {
            type: "google.protobuf.Empty",
            id: 52
          },
          previewRequest: {
            type: "PreviewRequest",
            id: 53
          },
          previewResponse: {
            type: "PreviewResponse",
            id: 54
          },
          cameraListRequest: {
            type: "google.protobuf.Empty",
            id: 55
          },
          cameraListResponse: {
            type: "GetCameraListResponse",
            id: 56
          },
          runtimeConfigRequest: {
            type: "jibb.ipsa.v1.RuntimeConfig",
            id: 57
          },
          clientStatusRequest: {
            type: "google.protobuf.Empty",
            id: 58
          },
          recordingStarted: {
            type: "google.protobuf.Empty",
            id: 59
          },
          recordingStopped: {
            type: "google.protobuf.Empty",
            id: 60
          },
          error: {
            type: "types.Code",
            id: 100
          },
          src: {
            type: "types.ClientDetails",
            id: 30
          },
          dst: {
            type: "types.ClientDetails",
            id: 31
          }
        }
      }
    }
  }
});
export { $root as default };