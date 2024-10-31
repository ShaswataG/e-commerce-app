import { createSlice } from '@reduxjs/toolkit';

const productsSlice = createSlice({
  name: 'products',
  initialState: {
    products: [],
  },
  reducers: {
    setProducts: (state, action) => {
      console.log()
      state.products = action.payload
    },
  },
})

export const { setProducts } = productsSlice.actions

export default productsSlice.reducer;
