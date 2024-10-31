const bcrypt = require('bcrypt');
const jwt = require("jsonwebtoken");
const userModel = require('../models/userModel');
const productModel = require('../models/productsModel');

const createUser = async (userInfo) => {
    try {
        const { name, email, password } = userInfo;
        
        const user = await userModel.findOne({ email: email });
        if (user)
            throw new Error("Email already registered");
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password, salt);
    
        const newUser = new userModel({
            name: name,
            email: email,
            password_hash: hashedPassword,
            // is_admin: false,
            // contact_number: contactNumber,
        })
        await newUser.save();
        const token = newUser.generateAuthToken();
    
        const data = {
            token: token,
            id: newUser.id,
            isAdmin: newUser.is_admin,
        }
        return data;
    } catch (error) {
        console.error(error);
        throw new Error("User registration failed");
    }
}

const loginUser = async (email, password) => {
    try {
        console.log('userServices.loginUser');
        const user = await userModel.findOne({ email: email });
        if (!user)
            throw new Error("Email not registered");
        const validPassword = await bcrypt.compare(password, user.password_hash);
        if (!validPassword)
            throw new Error("Passwords don't match");

        const token = jwt.sign(
            { id: user._id, isAdmin: this.isAdmin },
            process.env.SECRET_KEY
        );
        const data = {
            token: token,
            id: user.id,
            isAdmin: user.is_admin,
            email: user.email,
            contactNumber: user.contact_number,
            cart: user.cart
        };
        return data;
    } catch (error) {
        throw new Error(error.message);
    }
}

const getUser = async (userId) => {
    try {
        const data = await userModel.findById(userId);
        return data;
    } catch (error) {
        throw new Error("Failed to fetch user")
    }
}

const addToCart = async (userId, productId, quantity) => {
    try {
        console.log('userServices.addToCart');
        const user = await userModel.findById(userId);
        const product = await productModel.findById(productId);
        if (!user)
            throw new Error('User not found');
        if (!product)
            throw new Error('Product not found');

        const itemIndex = user.cart.findIndex(item => {
            console.log(typeof(productId));
            console.log(typeof(item.product_id))
            console.log(item.product_id);
            return item.product_id == productId
        });
        console.log('itemIndex: ', itemIndex);
        if (itemIndex !== -1) {
            user.cart[itemIndex].quantity += quantity;
        } else {
            user.cart.push({
                product_id: productId,
                quantity: quantity,
            })
        }
        await userModel.findByIdAndUpdate(userId, user);
    } catch (error) {
        console.error(error);
        throw new Error("Failed to add item to cart");
    }
}


const removeFromCart = async (userId, productId, quantity) => {
    try {
        console.log('userServices.addToCart');
        const user = await userModel.findById(userId);
        const product = await productModel.findById(productId);

        if (!user)
            throw new Error('User not found');
        if (!product)
            throw new Error('Product not found');
        const itemIndex = user.cart.findIndex(item => item.product_id === productId);
        if (itemIndex !== -1) {
            user.cart[itemIndex].quantity += quantity;
        } else {
            user.cart.push({
                product_id: productId,
                quantity: quantity,
            })
        }
        await userModel.findByIdAndUpdate(userId, user);
    } catch (error) {
        console.error(error);
        throw new Error("Failed to add item to cart");
    }
}

const getCart = async (userId) => {
    try {
        console.log('userService.getCart');
        console.log('userId: ', userId);
        const data = await userModel.findById(userId);
        console.log('cart data: ', data.cart);
        return data.cart;
    } catch (error) {
        console.error(error);
        throw new Error("Failed to fetch cart");
    }
}

module.exports = {
    createUser,
    loginUser,
    addToCart,
    getCart,
    getUser
}