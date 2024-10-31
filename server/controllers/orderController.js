const orderServices = require('../services/orderServices');

const createOrder = async (req, res) => {
    try {
        const { userId, userName, billingAddress, items, totalPrice, inventory } = req.body;
        const data = await orderServices.createOrder({
            userId: userId,
            userName: userName,
            billingAddress: billingAddress,
            items: items,
            totalPrice: totalPrice,
            inventory: inventory
        });
        res.status(201).json({ data: "Placed order successfully" })
    } catch (error) {
        res.status(500).json({ message: "Failed to place order" });
    }
}

const getOrders = async (req, res) => {
    try {
        const data = await orderServices.getOrders(req.params.id);
        res.status(200).json({ data: data });
    } catch (error) {
        res.status(500).json({ message: "Failed to fetch orders" });
    }
}

module.exports = {
    createOrder,
    getOrders
}