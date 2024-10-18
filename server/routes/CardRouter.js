const Router = require('express')
const CardController = require('../Controllers/CardController')
const router = new Router()




router.get('/card', CardController.getCard)
router.post('', )



module.exports = router