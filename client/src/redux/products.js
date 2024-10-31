import { createSlice } from '@reduxjs/toolkit';

const productsSlice = createSlice({
  name: 'products',
  initialState: {
    products: [],
    // {
    //     productId: '',
    //     name: '',
    //     price: 0,
    //     inventory: 0,
    //     dateAdded: 0
    // }
  },
  reducers: {
    setProducts: (state, products) => {
      state.products = products
    },
  },
})

export default productsSlice.reducer;
