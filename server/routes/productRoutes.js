const express = require('express');
const productRouter = express.Router();
const productController = require('../controllers/productControllers');

productRouter.route('/')
    .get(productController.getProducts)
    .post(productController.createProduct)
productRouter.route('/:id')
    .get(productController.getProduct)
    .patch(productController.updateProduct)
    .delete(productController.deleteProduct);

module.exports = {
    productRouter
}