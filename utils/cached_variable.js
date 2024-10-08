export class CachedVariable {
  constructor() {
    let expirySeconds = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 60;
    this.value = null;
    this.expirySeconds = expirySeconds;
    this.expiryTime = Date.now();
  }
  isExpired() {
    return this.value == null || Date.now() > this.expiryTime;
  }
  get() {
    if (this.isExpired()) return undefined;else return this.value;
  }
  set(value) {
    this.value = value;
    this.expiryTime = Date.now() + this.expirySeconds * 1000;
  }
}