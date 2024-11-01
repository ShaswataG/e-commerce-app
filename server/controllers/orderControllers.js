const orderServices = require('../services/orderServices')

const createOrder = async (req, res) => {
  try {
    const { billingAddress } = req.body
    const data = await orderServices.createOrder(req.user.id, {
      billingAddress: billingAddress,
    })
    res.status(201).json({ data: 'Order placed successfully' })
  } catch (error) {
    res.status(500).json({ message: 'Failed to place order' })
  }
}

const getOrders = async (req, res) => {
  try {
    console.log('orderController.getOrders')
    const data = await orderServices.getOrders(req.user.id)
    console.log('data: ', data)
    res.status(200).json({ data: data })
  } catch (error) {
    res.status(500).json({ message: 'Failed to fetch orders' })
  }
}

module.exports = {
  createOrder,
  getOrders,
}
