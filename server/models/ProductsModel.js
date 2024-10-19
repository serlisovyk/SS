const mongoose = require('mongoose');
const Category = require('./CategoriesModel')

const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
  title: { type: String, required: true },
  price: { type: Number, required: true },
  description: { type: String, required: true },
  images: [{
    type: String,
    required: true
  }],
  isCart: { type: Boolean, default: false },
  isFavourite: { type: Boolean, default: false },
  saleCF: { type: Number, default: 0 },
  oldPrice: { type: Number },
  colors: [{
    name: { type: String, required: true },
    hex: { type: String, required: true }
  }],
  sizes: [{
    type: Number,
    required: true
  }],
  material: { type: String, required: true }
});

module.exports = mongoose.model('Product', productSchema);


const Product = mongoose.model('Product', productSchema)
module.exports = Product