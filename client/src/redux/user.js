import { createSlice } from '@reduxjs/toolkit'

const userSlice = createSlice({
  name: 'user',
  initialState: {
    userId: '',
    isAdmin: false,
  },
  reducers: {
    setUser: (state, action) => {
        state.userId = action.payload.userId;
        state.isAdmin = action.payload.isAdmin
    }
  }
})

export default userSlice
