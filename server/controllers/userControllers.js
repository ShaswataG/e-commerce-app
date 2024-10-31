const userService = require('../services/userServices');

const createUser = async (req, res) => {
    try {
        const data = await userService.createUser(req.body);
        res.status(201).json({ data: data });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

const loginUser = async (req, res) => {
    try {
        const { email, password } = req.body;
        const data = await userService.loginUser(email, password);
        res.status(200).json({ data: data });
    } catch (error) {
        // consol
        res.status(500).json({ message: error.message });
    }
}

const getUser = async (req, res) => {
    try {
        const data = await userService.getUser(req.params.id);
        res.status(200).json({ data: data });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

const addToCart = async (req, res) => {
    try {
        console.log('userController.addToCart');
        console.log('req.user: ', req.user);
        console.log('req.body: ', req.body);
        const data = await userService.addToCart(req.user.id, req.body.productId, req.body.quantity);
        res.status(201).json({ data: data });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: error.message });
    }
}

const getCart = async (req, res) => {
    try {
        console.log('userControllers.getCart: ');
        console.log('req.user: ', req.user);
        const data = await userService.getCart(req.user.id);
        res.status(200).json({ data: data });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

module.exports = {
    createUser,
    loginUser,
    getUser,
    addToCart,
    getCart
}