const { InvalidRequestObject, ValidRequestObject } = require('./index')

class ProductListRequestObject extends ValidRequestObject {
  constructor(filters) {
    super()
    this.filters = filters;
  }

  static fromObj(obj) {
    const aceptedFilters = ["code__eq", "price__lt", "price__gt", "name__eq"];
    const invalidRequest = new InvalidRequestObject()

    if (Object.keys(obj).includes('filters')){
      for(let key of Object.keys(obj.filters)){
        if (!aceptedFilters.includes(key)){
          invalidRequest.addError('filters', `${key} can not be used as a filter`)
        }
      }
    }

    if (invalidRequest.hasError()) {
      console.log(invalidRequest.errors)
      return invalidRequest
    }

    return new ProductListRequestObject(Object.keys(obj.filters).length > 0 ? obj.filters : null)

  }
}

module.exports = {
  ProductListRequestObject
}