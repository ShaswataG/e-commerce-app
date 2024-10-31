import { createSlice } from '@reduxjs/toolkit';

const productsSlice = createSlice({
  name: 'products',
  initialState: {
    products: [],
  },
  reducers: {
    setProducts: (state, products) => {
      state.products = products
    },
  },
})

export default productsSlice.reducer;
