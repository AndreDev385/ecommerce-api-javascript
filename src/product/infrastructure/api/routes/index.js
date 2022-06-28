const router = require('express').Router()
const { listController} = require('../controllers/list_controller')

router.get('/list', listController)

module.exports = {
  router
}