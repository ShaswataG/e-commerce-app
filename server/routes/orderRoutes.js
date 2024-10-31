const express = require("express");
const orderServices = require('../services/orderServices');
const isAuth = require('../middlewares/auth');

const orderRouter = express.Router();

orderRouter.route('/')
    .post(isAuth, orderServices.createOrder);

orderRouter.route('/:id')
    .get(isAuth, orderServices.getOrders);

module.exports = orderRouter;