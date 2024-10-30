const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        required: true,
    },
    image_url: {
        type: String,
    },
    price: {
        type: Number,
        required: true
    },
    inventory: {
        type: Number,
        required: true
    },
    manufacturing_date: {
        type: Date,
    },
    date_added: {
        type: Date,
        required: true,
        default: new Date()
    }
})