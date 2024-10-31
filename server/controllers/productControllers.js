const productModel = require('../models/productsModel');
const productServices = require('../services/productServices');

const createProduct = async (req, res) => {
    try {
        const data = productServices.createProduct(req.body);
        res.status(201).json({ data: "Product added successfully" })
    } catch (error) {
        res.status(500).json({ message: error });
    }
}

const getProduct = async (req, res) => {
    try {
        const data = await productServices.getProduct(req.params.id);
        console.log('data: ', data);
        res.status(200).json({ data: data })
    } catch (error) {
        res.status(500).json({ message: error });
    }
}

const getProducts = async (req, res) => {
    try {
        const data = await productServices.getProducts();
        console.log('data: ', data);
        res.status(200).json({ data: data })
    } catch (error) {
        res.status(500).json({ message: error });
    }
}

const updateProduct = async (req, res) => {
    try {
        const data = await productServices.updateProduct(req.params.id, req.body);
        console.log('data: ', data);
        res.status(201).json({ data: "Product updated successfully" });
    } catch (error) {
        res.status(500).json({ message: error });
    }
}

const deleteProduct = async (req, res) => {
    try {
        const data = await productServices.deleteProduct(req.params.id);
        console.log('data: ', data);
        res.status(200).json({ data: "Product deleted successfully" });
    } catch (error) {
        res.status(500).json({ message: error });
    }
}

module.exports = {
    createProduct,
    getProduct,
    getProducts,
    updateProduct,
    deleteProduct
}