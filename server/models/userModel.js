const mongoose = require('mongoose')
const jwt = require('jsonwebtoken')
require('dotenv').config()

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    minlength: 5,
    maxlength: 50,
  },
  email: {
    type: String,
    required: true,
    unique: true,
    minlength: 5,
    maxlength: 225,
  },
  password_hash: {
    type: String,
    required: true,
    minlength: 5,
    maxlength: 1024,
  },
  is_admin: {
    type: Boolean,
    default: false,
  },
  cart: [
    {
      product_id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Product',
      },
      quantity: {
        type: Number,
        required: true,
      },
      price: {
        type: Number,
        required: true,
      },
    },
  ],
  orders: {
    type: [mongoose.Schema.Types.ObjectId],
    ref: 'Order',
  },
  contact_number: {
    type: String,
    required: false,
  },
  date_registered: {
    type: Date,
    default: new Date(),
  },
})

userSchema.methods.generateAuthToken = () => {
  const token = jwt.sign({ id: this._id, isAdmin: this.isAdmin }, process.env.SECRET_KEY)
  return token
}

const userModel = new mongoose.model('User', userSchema)
module.exports = userModel
