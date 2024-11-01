const orderModel = require('../models/orderModel');
const userModel = require('../models/userModel');
const productModel = require('../models/productsModel');

const createOrder = async (userId, orderInfo) => {
    try {
        const { billingAddress } = orderInfo;
        const cart = await getCart(userId);
        console.log('cart: ', cart)
        let itemsOrdered = [];
        let totalPrice = 0;
        console.log('cart: ', cart);
        cart.forEach(item => {
            totalPrice += item.price;
            itemsOrdered = [
                ...itemsOrdered,
                {
                    product_id: item.product_id,
                    quantity: item.quantity,
                    price: item.price
                }
            ];
        });
        console.log('itemsOrdered: ', itemsOrdered);
        const newOrder = new orderModel({
            user_id: userId,
            billing_address: billingAddress,
            items: itemsOrdered,
            total_price: totalPrice
        });
        console.log('newOrder: ', newOrder);
        await newOrder.save();
        emptyCart(userId);
    } catch (error) {
        console.error(error.message);
        throw new Error(error.message);
    }
}

const getOrders = async (userId) => {
    return await orderModel.find({ user_id: userId });
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

const emptyCart = async (userId) => {
    try {
        let user = await userModel.findById(userId);
        let cart = [];
        user.cart = cart
        console.log('user: ', user)
        await userModel.findByIdAndUpdate(userId, user);
    } catch (error) {
        throw new Error(error.message);
    }
}

module.exports = {
    createOrder,
    getOrders
}