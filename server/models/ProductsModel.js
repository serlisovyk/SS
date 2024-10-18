const mongoose = require('mongoose');
const Category = require('./CategoriesModel')

const productSchema = new mongoose.Schema({
    title: {type: String,  required: true},
    price: {type: Number, required: true},
    description: {type: String, required: true},
    images:[{
        type: String,
        required: true
    }],
    category: [{type: String, required: true, ref: 'Category'}],
    details: {
        type: {
            size: [{
                type: Number,
                unique: true,
                required: true,
            }],
            color: [{
                type: {
                    name: {
                        type: String,
                        unique: true,
                        required: true
                    },
                    value: {
                        type: String,
                        unique: true,
                        required: true
                    }
                }
            }]
        }
    }

})

const Product = mongoose.model('Product', productSchema)
module.exports = Product