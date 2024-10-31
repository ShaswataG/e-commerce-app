const bcrypt = require('bcrypt');
const userModel = require('../models/userModel');

const createUser = async (userInfo) => {
    const { name, email, password, isAdmin, contactNumber } = userInfo;
    const user = await userModel.findOne({ email: email });
    if (user)
        throw new Error("Email already registered");
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    const newUser = new userModel({
        name: name,
        email: email,
        password_hash: hashedPassword,
        is_admin: isAdmin,
        contact_number: contactNumber,
    })
    await newUser.save();
    const token = newUser.generateAuthToken();

    const data = {
        token: token,
        id: newUser.id,
        isAdmin: newUser.is_admin,
    }
    return data;
}

const loginUser = async (email, password) => {
    const user = await userModel.findOne({ email: email });
    if (!user)
        throw new Error("Email not registered");
    const validPassword = await bcrypt.compare(password, user.password_hash);
    if (!validPassword)
        throw new Error("Passwords don't match");
    const token = userModel.generateAuthToken();
    const data = {
        token: token,
        id: user.id,
        isAdmin: user.is_admin
    };
    return data;
}

const getUser = async (userId) => {
    return await userModel.findById(userId);
}

module.exports = {
    createUser,
    loginUser,
    getUser
}