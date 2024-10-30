const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    passwordHash: {
        type: String,
        required: true
    },
    cart: {
        type: [mongoose.Schema.Types.ObjectId],
        ref: "Cart"
    },
    orders: {
        type: [mongoose.Schema.Types.ObjectId],
        ref: "Order"
    },
    contact_number: {
        type: String,
        required: true,
    },
    date_registered: {
        type: Date,
        default: new Date()
    }
})

const userModel = new mongoose.model("User", userSchema);
module.exports = userModel;