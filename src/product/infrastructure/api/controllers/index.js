const { ReponseSucces, ResponseFailure } = require('../../response_objects')

const STATUS_CODES = {
  'ReponseSucces.SUCCESS': 200,
  'ResponseFailure.PARAMETERS_ERROR': 400,
  'ResponseFailure.SYSTEM_ERROR': 500,
  'ResponseFailure.RESOURCE_ERROR': 404,
}

module.exports = {
  STATUS_CODES
}