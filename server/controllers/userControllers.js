const userService = require('../services/userServices');

const createUser = async (req, res) => {
    try {
        const data = await userService.createUser(req.body);
        res.status(201).json({ data: data });
    } catch (error) {
        res.status(500).json({ message: error });
    }
}

const loginUser = async (req, res) => {
    try {
        const { email, password } = req.body;
        const data = await userService.loginUser(email, password);
        res.status(200).json({ data: data });
    } catch (error) {
        res.status(500).json({ message: error });
    }
}

const getUser = async (req, res) => {
    try {
        const data = await userService.getUser(req.params.id);
        res.status(200).json({ data: data });
    } catch (error) {
        res.status(500).json({ message: error });
    }
}

module.exports = {
    createUser,
    loginUser,
    getUser
}