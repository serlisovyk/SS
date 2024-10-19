const Product = require('../models/ProductsModel.js')

class ProductsController {
  async getAll(req, res) {
    const {
      limit = 3,
      color,
      size,
      sortBy = 'price',
      material,
      price_min,
      price_max,
      search,
      category,
      page = 1,
    } = req.query

    try {
      const query = {}

      if (color) query['colors.name'] = color
      if (size) query.sizes = size
      if (material) query.material = material
      if (category && category !== 'Все') query.category = category
      if (search) query.$or = [{ title: { $regex: search, $options: 'i' } }]
      const skip = (page - 1) * limit

      if (price_min || price_max) {
        query.price = {}
        if (price_min) query.price.$gte = price_min
        if (price_max) query.price.$lte = price_max
      }

      let sortOptions = {}
      if (sortBy === 'price') {
        sortOptions.price = 1
      } else if (sortBy === '-price') {
        sortOptions.price = -1
      } else {
        sortOptions[sortBy] = 1
      }

      const products = await Product.find({})
        .sort(sortOptions)
        .limit(Number(limit))
        .skip(skip)

      const totalProducts = await Product.countDocuments(query)

      res.status(200).json({
        products,
        total: totalProducts,
        page: Number(page),
        limit: Number(limit),
      })
    } catch (e) {
      console.error(e)
      res.status(500).json({ message: 'Ошибка при получении продуктов' })
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
