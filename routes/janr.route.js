const { Router } = require('express')
const { janrController } = require('../controllers/janrs.controller')

const router = Router()

router.post('/janr', janrController.addJanr)
router.delete('/janr/:id', janrController.deleteJanr)
router.get('/janr', janrController.getJanr)

module.exports = router