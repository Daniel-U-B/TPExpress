const express = require('express')
const router = express.Router()
const controller = require('../controller/autosController')

router.get('/',controller.index)

module.exports = router