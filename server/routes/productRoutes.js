const express = require('express');
const productRouter = express.Router();
const productController = require('../controllers/productControllers');
const isAuth = require("../middlewares/auth");

productRouter.route('/')
    .get(productController.getProducts)
    .post(isAuth, productController.createProduct)
productRouter.route('/:id')
    .get(isAuth, productController.getProduct)
    .patch(isAuth, productController.updateProduct)
    .delete(isAuth, productController.deleteProduct);

module.exports = productRouter