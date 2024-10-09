import "core-js/modules/es.promise.js";
export class Future {
  constructor() {
    let self = this;
    this.resolve = undefined;
    this.reject = undefined;
    this.promise = new Promise((resolve, reject) => {
      self.resolve = resolve;
      self.reject = reject;
    });
    this.promise.catch(() => {
      return undefined;
    });
  }
  get() {
    return this.promise;
  }
  reject(val) {
    this.reject(val);
  }
  set(val) {
    this.resolve(val);
  }
}