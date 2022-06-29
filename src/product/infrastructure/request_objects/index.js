class InvalidRequestObject {
  constructor() {
    this.errors = [];
  }

  addError(parameter, message) {
    this.errors.push({ parameter, message });
  }

  hasError() {
    return this.errors.length !== 0;
  }

  bool() {
    return false;
  }
}

class ValidRequestObject {
  static fromObj(params) {
    throw new Error("Not implemented error");
  }

  bool() {
    return true;
  }
}

module.exports = {
  ValidRequestObject,
  InvalidRequestObject
}