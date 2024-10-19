const Product = require('../models/ProductsModel.js')


// Консоль логи в getAll не фурычат(

class ProductsController {
  async getAll(req, res) {
    try {
      console.log('Before loading Product model')
      console.log(Product)
      const products = await Product.find({})
      console.log('Products loaded successfully')
      res.status(200).json(products)
    } catch (error) {
      console.error('Error in getAll:', error)
      res.status(500).json({ message: 'Error fetching products' })
    }
  }

  async getOne(req, res) {
    try {
      const product = await Product.findById(req.params.id)
      if (!product) {
        return res.status(404).json({ message: 'Продукт не найден' })
      }
      res.status(200).json(product)
    } catch (e) {
      console.error(e)
      res.status(500).json({ message: 'Ошибка при получении продукта' })
    }
  }
}

module.exports = new ProductsController()
