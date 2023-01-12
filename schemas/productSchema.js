const mongoose = require('mongoose')

const productSchema = mongoose.Schema({
    id: {type: mongoose.Schema.Types.ObjectId},
    name: {type: String, require: true},
    description: {type: String},
    price: {type: Number, require: true},
    category: {type: String},
    imageName: {type: String},
    rating: {type: Number},
    tag: {type: String},
})

module.exports = mongoose.model("products", productSchema)