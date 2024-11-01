const orderModel = require('../models/orderModel');
const userModel = require('../models/userModel');

const createOrder = async (userId, orderInfo) => {
    const { userName, billingAddress, items, totalPrice, inventory } = orderInfo;
    const cart = await getCart(userId)
    console.log('cart: ', cart)
    const newOrder = new orderModel({
        user_id: userId,
        name: userName,
        billing_address: billingAddress,
        items: items,
        total_price: totalPrice,
        inventory: inventory
    })
    return await newOrder.save();
    // return true
}

const getOrders = async (userId) => {
    return await orderModel.find();
}

const getCart = async (userId) => {
    try {
        const data = await userModel.findById(userId);
        let res = []
        const cart = await Promise.all(data.cart.map(async item => {
            const itemInfo = await productModel.findById(item.product_id)
            return {
                product_id: item.product_id,
                name: (itemInfo) ? itemInfo.name : "Unavailable",
                inventory: (itemInfo) ? itemInfo.inventory : 0,
                quantity: item.quantity,
                price: item.price,
                isOutOfStock: (itemInfo) ? false : true
            }
        }))
        // console.log('cart: ', cart);
        return cart;
    } catch (error) {
        console.error(error);
        throw new Error("Failed to fetch cart");
    }
}


module.exports = {
    createOrder,
    getOrders
}