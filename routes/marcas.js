const express = require('express')
const router = express.Router()
const controller = require('../controller/marcasController')

router.get('/',controller.index)
router.get('/:id',controller.marcas)

module.exports = router