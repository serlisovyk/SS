const Router = require('express')
const CatiegoriesController = require('../Controllers/CatiegoriesController')
const router = new Router()




router.get('', CatiegoriesController.getCategories)
router.post('', )



module.exports = router