import { createSlice } from '@reduxjs/toolkit'

import { setLocalStorage } from '../utils/common'

const initialState = {
  token: '',
  userId: '',
  isAdmin: false,
  email: '',
  contactNumber: '',
  cart: [],
}

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUser: (state, action) => {
      state.token = action.payload.token
      state.userId = action.payload.id
      state.isAdmin = action.payload.isAdmin
      state.email = action.payload.email
      state.contactNumber = action.payload.contactNumber
      state.cart = action.payload.cart.map(product => ({
        ...product,
        product_id: product.product_id,
      }))

      setLocalStorage('token', action.payload.token)
      setLocalStorage('userId', action.payload.id)
      setLocalStorage('isAdmin', action.payload.isAdmin)
      setLocalStorage('email', action.payload.email)
      setLocalStorage('contactNumber', action.payload.contactNumber)
    },
    logoutUser: () => {
      localStorage.clear()
      return initialState
    },
    setCart: (state, action) => {
      console.log('setCart')
      console.log('action.payload: ', action.payload)
      state.cart = action.payload
    },
    incrementCartItem: (state, action) => {
      state.cart = state.cart.map(cartItem => {
        if (cartItem.product_id === action.payload) {
          return {
            ...cartItem,
            quantity: cartItem.quantity + 1,
          }
        }
        return cartItem
      })
    },
    decrementCartItem: (state, action) => {
      state.cart = state.cart.map(cartItem => {
        if (cartItem.product_id === action.payload) {
          return {
            ...cartItem,
            quantity: cartItem.quantity + 1,
          }
        }
        return cartItem
      })
    },
    addCartItem: (state, action) => {
      state.cart = [...state.cart, action.payload]
    },
    removeCartItem: (state, action) => {
      state.cart = state.cart.filter(cartItem => cartItem.product_id !== action.payload)
    },
  },
})

export const {
  addCartItem,
  setCart,
  incrementCartItem,
  decrementCartItem,
  removeCartItem,
  setUser,
  logoutUser,
} = userSlice.actions

export default userSlice.reducer
