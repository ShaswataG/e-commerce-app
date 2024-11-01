import { configureStore } from '@reduxjs/toolkit'

import productsReducer from './products'
import userReducer from './user'

export default configureStore({
  reducer: {
    user: userReducer,
    products: productsReducer,
  },
})
