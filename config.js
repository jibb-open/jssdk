class ConfigClass {
  constructor() {
    this.apiBaseURL = process.env.API_BASE_URL || "https://api.jibb.ai";
  }
  setApiBaseURL(url) {
    this.apiBaseURL = url;
  }
}
export let Config = new ConfigClass();