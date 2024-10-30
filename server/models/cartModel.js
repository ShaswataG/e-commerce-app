const mongoose = require('mongoose');

const cartSchema = new mongoose.Schema({
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    items: [
        {
            productId: {
                type: mongoose.Schema.Types.ObjectId,
                ref: 'Product',
                required: true
            },
            quantity: {
                type: Number,
                required: true,
                min: 1
            },
            price: {
                type: Number,
                required: true
            }
        }
    ],
    total_price: {
        type: Number,
        required: true
    }
});

cartSchema.pre('save', (next) => {
    let total_price = 0;
    this.items.forEach(item => {
        total_price += item.quantity * item.price;
    });
    this.total_price = total_price;
    next();
});

const cartModel = mongoose.model('Cart', cartSchema);
module.exports = cartModel;