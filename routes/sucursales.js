const express = require('express')
const router = express.Router()
const controller = require('../controller/sucursalesController')

router.get('/',controller.index)
router.get('/:id',controller.sucursal)

module.exports = router