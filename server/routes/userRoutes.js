const express = require('express')
const userControllers = require('../controllers/userControllers')
const isAuth = require('../middlewares/auth')
const userRouter = express.Router()

userRouter.route('/register').post(userControllers.createUser)
userRouter.route('/login').post(userControllers.loginUser)
userRouter
  .route('/cart')
  .get(isAuth, userControllers.getCart)
  .post(isAuth, userControllers.modifyCart)
userRouter.route('/:id').get(isAuth, userControllers.getUser)

module.exports = userRouter
