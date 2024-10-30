const mongoose = require('mongoose');

const orderSchema = new mongoose.Schema({
    user_id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        required: true,
        index: true
    },
    image_url: {
        type: String,
    },
    billing_address: {
        type: "String",
        required: true
    },
    order_status: {
        type: String,
        index: true
    },
    payment_status: {
        type: String,
        index: true
    },
    items: {
        type: [
            {
                product_id: {
                    type: mongoose.Schema.Types.ObjectId,
                    ref: "Product",
                    required: true
                },
                quantity: {
                    type: Number,
                    required: true,
                },
                price: {
                    type: Number,
                    required: true
                }
            }
        ],
        required: true
    },
    total_price: {
        type: Number,
        required: true,
        validate: {
            validator: function() {
                let total = 0;
                this.items.forEach(item => {
                    total += item.quantity * item.price;
                });
                return this.totalPrice === total;
                },
            message: 'Total price must match the sum of item quantities and prices'
        }
    },
    inventory: {
        type: Number,
        required: true,
        min: 1
    },
    manufacturing_date: {
        type: Date,
    },
    order_date: {
        type: Date,
        required: true,
        default: new Date()
    }
})

orderSchema.pre('save', (next) => {
    let total_price = 0;
    this.items.forEach(item => {
        total_price += item.quantity * item.price;
    })
    this.total_price = total_price;
    next();
})

const orderModel = new mongoose.model("Order", orderSchema);

module.exports = orderModel;