const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    image_url: {
        type: String,
        required: false
    },
    price: {
        type: Number,
        required: true
    },
    inventory: {
        type: Number,
        required: true
    },
    date_added: {
        type: Date,
        default: new Date()
    }
})

const productModel = new mongoose.model("Product", productSchema);
module.exports = productModel;