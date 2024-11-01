const express = require('express')
const orderControllers = require('../controllers/orderControllers')
const isAuth = require('../middlewares/auth')

const orderRouter = express.Router()

orderRouter
  .route('/')
  .get(isAuth, orderControllers.getOrders)
  .post(isAuth, orderControllers.createOrder)

module.exports = orderRouter
