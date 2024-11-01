const mongoose = require('mongoose');

const orderSchema = new mongoose.Schema({
    user_id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        required: true,
        index: true
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
                name: {
                    type: String,
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
                console.log('items: ', this.items)
                this.items.forEach(item => {
                    total += item.price;
                });
                console.log('this.total_price = ', this.total_price);
                console.log('total = ', total);
                return this.total_price === total;
                },
            message: 'Total price must match the sum of item quantities and prices'
        }
    },
    order_date: {
        type: Date,
        default: new Date()
    }
})

// orderSchema.pre('save', (next) => {
//     let total_price = 0;
//     console.log('pre: items: ', this.items)
//     this.items.forEach(item => {
//         total_price += item.quantity * item.price;
//     })
//     this.total_price = total_price;
//     next();
// })

const orderModel = new mongoose.model("Order", orderSchema);

module.exports = orderModel;