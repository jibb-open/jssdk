import "core-js/modules/es.promise.js";
import "core-js/modules/web.dom-collections.iterator.js";
import { Config } from "../config.js";
import { http } from "../utils/http/index.js";
export class Whiteboard {
  constructor(meetingId, meetingToken) {
    this.meetingId = meetingId;
    this.meetingToken = meetingToken;
  }
  async saveImage(_ref) {
    let {
      image,
      type
    } = _ref;
    type = type || "";
    switch (type.toLowerCase()) {
      case "jpeg":
        type = "IMAGE_JPEG";
        break;
      case "webp":
        type = "IMAGE_WEBP";
        break;
      default:
        type = "";
        break;
    }
    let headers = {
      "Content-Type": "image/jpeg",
      Accept: "application/json",
      "x-jibb-meeting-jwt": this.meetingToken
    };
    let body = {
      image: image,
      type: type
    };
    let response = await http.post("".concat(Config.apiBaseURL, "/v1/meetings/").concat(this.meetingId, "/whiteboard/images"), body, headers);
    return response.data.imageName;
  }
  async getImageList() {
    let headers = {
      "Content-Type": "application/json",
      Accept: "application/json",
      "x-jibb-meeting-jwt": this.meetingToken
    };
    let response = await http.get("".concat(Config.apiBaseURL, "/v1/meetings/").concat(this.meetingId, "/whiteboard/images"), headers);
    return response.data.imagesName;
  }
  async getImage(imageName) {
    let headers = {
      "Content-Type": "application/json",
      Accept: "image/jpeg",
      "x-jibb-meeting-jwt": this.meetingToken
    };
    let url = "".concat(Config.apiBaseURL, "/v1/meetings/").concat(this.meetingId, "/whiteboard/images/").concat(imageName);
    let response = await http.get(url, headers, {
      responseType: "arraybuffer"
    });
    return response.data;
  }
  async getImages() {
    let imageList = [];
    let imageNameList = await this.getImageList();
    for (const imageName of imageNameList) {
      let headers = {
        "Content-Type": "application/json",
        Accept: "application/json",
        "x-jibb-meeting-jwt": this.meetingToken
      };
      let response = await http.get("".concat(Config.apiBaseURL, "/v1/meetings/").concat(this.meetingId, "/whiteboard/images/").concat(imageName), {
        headers
      });
      imageList.push({
        imageName: imageName,
        data: response.data
      });
    }
    return imageList;
  }
  async deleteImage(imageName) {
    let headers = {
      "Content-Type": "application/json",
      Accept: "application/json",
      "x-jibb-meeting-jwt": this.meetingToken
    };
    return http.delete("".concat(Config.apiBaseURL, "/v1/meetings/").concat(this.meetingId, "/whiteboard/images/").concat(imageName), headers);
  }
  async saveBoard(board) {
    let headers = {
      "Content-Type": "application/json",
      Accept: "application/json",
      "x-jibb-meeting-jwt": this.meetingToken
    };
    let body = {
      board: board
    };
    let response = await http.post("".concat(Config.apiBaseURL, "/v1/meetings/").concat(this.meetingId, "/whiteboard"), body, headers);
    return response.data;
  }
  async getBoard() {
    let headers = {
      "Content-Type": "application/json",
      Accept: "image/jpeg",
      "x-jibb-meeting-jwt": this.meetingToken
    };
    let response = await http.get("".concat(Config.apiBaseURL, "/v1/meetings/").concat(this.meetingId, "/whiteboard"), headers);
    return response.data;
  }
  async deleteBoard() {
    let headers = {
      "Content-Type": "application/json",
      Accept: "application/json",
      "x-jibb-meeting-jwt": this.meetingToken
    };
    return http.delete("".concat(Config.apiBaseURL, "/v1/meetings/").concat(this.meetingId, "/whiteboard"), headers);
  }
}