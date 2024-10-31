import { createSlice } from '@reduxjs/toolkit'

const initialState = {
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
      state.userId = action.payload.userId
      state.isAdmin = action.payload.isAdmin
      state.email = action.payload.email
      state.contactNumber = action.payload.contactNumber
      state.cart = action.payload.cart
    },
    logoutUser: () => initialState
  }
})

export const { setUser, logoutUser } = userSlice.actions

export default userSlice.reducer
