import { createSlice } from '@reduxjs/toolkit'

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
      state.cart = action.payload.cart.map(product => ({ ...product, id: product.product_id}))
    },
    logoutUser: () => initialState
  }
})

export const { setUser, logoutUser } = userSlice.actions

export default userSlice.reducer
