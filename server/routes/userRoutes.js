const express = require('express');
const userControllers = require('../controllers/userControllers');
const userRouter = express.Router();

userRouter.route('/register')
    .post(userControllers.createUser);
userRouter.route('/login')
    .post(userControllers.loginUser);
userRouter.route('/:id')
    .get(userControllers.getUser);