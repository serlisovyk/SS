const Router = require('express')
const router = new Router()

const ProductsController = require('../Controllers/ProductsController.js')

router.get('/', ProductsController.getAll)
router.get('/:id', ProductsController.getOne)

module.exports = router
