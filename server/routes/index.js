const Router = require('express')
const router = new Router()
const CardRouter = require('./CardRouter')
const userRouter = require('./userRouter')
const favouritesRouter = require('./favoutitesRouter')
const CatiegoriesRouter = require('./CatiegoriesRouter')
const ProductsRouter = require('./productsRouter')

router.use('/user', userRouter)
router.use('/favorite', favouritesRouter)
router.use('/card', CardRouter)
router.use('/products', ProductsRouter)
router.use('/catiegories', CatiegoriesRouter)


module.exports = router