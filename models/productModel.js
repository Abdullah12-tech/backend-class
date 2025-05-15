const mongoose = require("mongoose")
const productSchema = new mongoose.Schema({
    productName: {
        type: String,
        required: true
    },
    productImage: {
        type: String,
        required: true
    },
    productDescription: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true
    }
})

const productModel = mongoose.model("products",productSchema)
module.exports = productModel