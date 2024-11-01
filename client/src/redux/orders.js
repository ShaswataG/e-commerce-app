import { createSlice } from '@reduxjs/toolkit'

const ordersSlice = createSlice({
  name: 'orders',
  initialState: {
    orders: [],
  },
  reducers: {
    setOrders: (state, action) => {
      console.log()
      state.orders = action.payload.map(order => {
        return {
          ...order,
          id: order._id,
        }
      })
    },
  },
})

export const { setOrders } = ordersSlice.actions

export default ordersSlice.reducer
