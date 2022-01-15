const router = require("express").Router()

const CalculoController = require('../Controller/CalculoController')

router.post('/salve',CalculoController.salveImc)
router.get('/list',CalculoController.listCalculos)

module.exports = router