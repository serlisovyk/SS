const Router = require('express')
const Favouritescontroller = require('../Controllers/Favouritescontroller')
const router = new Router()




router.get('/favourites', Favouritescontroller.getFavourites)
router.post('', )



module.exports = router