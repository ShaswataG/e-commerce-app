const orderModel = require('../models/orderModel');
const userModel = require('../models/userModel');

const createOrder = async (orderInfo) => {
    const { userId, userName, billingAddress, items, totalPrice, inventory } = orderInfo;
    const newOrder = new orderModel({
        user_id: userId,
        name: userName,
        billing_address: billingAddress,
        items: items,
        total_price: totalPrice,
        inventory: inventory
    })
    return await newOrder.save();
}

const getOrders = async (userId) => {
    return orderModel.find({ user_id: userId });
}

module.exports = {
    createOrder,
    getOrders
}