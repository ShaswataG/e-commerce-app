import { createSlice } from '@reduxjs/toolkit';

const productSlice = createSlice({
    name: "product",
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
        }
    }
})

export default productSlice.reducer;