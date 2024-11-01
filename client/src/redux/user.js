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
    addCartItem: (state, action) => {
      state.cart = [...state.cart, action.payload]
    },
  },
})

export const { addCartItem, setCart, setUser, logoutUser } = userSlice.actions

export default userSlice.reducer
