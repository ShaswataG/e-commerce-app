const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true
    },
    passwordHash: {
        type: String,
        required: true
    },
    cart: {
        type: [mongoose.Schema.Types.ObjectId],
        default: []
    },
    orders: {
        type: [mongoose.Schema.Types.ObjectId],
        ref: "Order",
        default: []
    },
    contact_number: {
        type: String,
        required: true
    },
    date_registered: {
        type: Date,
        required: true,
        default: new Date()
    }
})