import { configureStore } from '@reduxjs/toolkit'

import ordersReducer from './orders'
import productsReducer from './products'
import userReducer from './user'

export default configureStore({
  reducer: {
    user: userReducer,
    products: productsReducer,
    orders: ordersReducer,
  },
})
