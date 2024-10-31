import { createSlice } from '@reduxjs/toolkit'

const userSlice = createSlice({
  name: 'user',
  initialState: {
    userId: '',
    isAdmin: false,
    email: '',
    contactNumber: '',
    cart: [],
  },
  reducers: {
    setUser: (state, action) => {
      state.userId = action.payload.userId
      state.isAdmin = action.payload.isAdmin
      state.email = action.payload.email
      state.contactNumber = action.payload.contactNumber
      state.cart = action.payload.cart
    },
  },
})

export default userSlice.reducer
