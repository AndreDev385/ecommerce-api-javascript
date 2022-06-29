const {
  InvalidRequestObject,
  ProductListRequestObject,
  ValidRequestObject,
} = require("../../infrastructure/request_objects/list_request_objects");
const {
  ResponseFailure,
  ReponseSucces,
} = require("../../infrastructure/response_objects/");

class ListProductUseCase {
  constructor(repo) {
    this.repo = repo;
  }

  execute(requestObj) {
    if (requestObj.bool() === false) {
      console.log('bool', requestObj.bool())
      return ResponseFailure.buildFromInvalidRequestObject(requestObj);
    }
    try {
      console.log(requestObj)
      let products = this.repo.list(requestObj.filters);
      let res = new ReponseSucces(products)
      return res
    } catch (err) {
      console.log(err);
      return ResponseFailure.buildFromSystemError(err);
    }
  }
}

module.exports = ListProductUseCase;
