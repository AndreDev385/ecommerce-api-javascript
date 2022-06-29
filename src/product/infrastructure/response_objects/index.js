const { request } = require("express");
const { InvalidRequestObject } = require("../request_objects/list_request_objects");

class ReponseSucces {
  static SUCCESS = "Success";

  constructor(value = null) {
    this.type = this.SUCCESS;
    this.value = value;
  }

  value(){
    return this.value
  }

  bool() {
    return true;
  }
}

class ResponseFailure {
  static RESOURCE_ERROR = 'Resource Error'
  static SYSTEM_ERROR = 'System Error'
  static PARAMETERS_ERROR = 'Parameters Error'

  constructor(type, message){
    this.type = type
    this.message = this.formatMsg(message)
  }

  formatMsg(msg){
    return msg
  }

  value(){
    return {type: this.type, message: this.message}
  }

  bool(){
    return True
  }

  static buildFromInvalidRequestObject(invalidReq){
    let messages = []
    for (const key of invalidReq.errors){
      messages.push(`${key['parameter']}: ${key['message']}`)
    } 
    return new ResponseFailure(this.RESOURCE_ERROR , messages.join('\n'))
  }

  static buildFromResourceError(message=null){
    return new ResponseFailure(this.RESOURCE_ERROR, message)
  }

  static buildFromSystemError(msg=null){
    return new ResponseFailure(this.SYSTEM_ERROR, msg)
  }

  static buildFromParameterError(msg=null){
    return new ResponseFailure(this.PARAMETERS_ERROR, msg)
  }

}

module.exports = {
  ReponseSucces,
  ResponseFailure
}