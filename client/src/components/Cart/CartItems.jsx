import axios from 'axios'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { apiBaseUrl } from '../../constants'
import { setCart } from '../../redux/user'
import { getAuthHeaders } from '../../utils/common'
import Product from '../ProductListing/Product'

export default function CartItems() {
  const user = useSelector(state => state.user)
  console.log('user: ', user)
  const authHeaders = getAuthHeaders()
  const dispatch = useDispatch()

  const fetchCart = async () => {
    try {
      const response = await axios.get(`${apiBaseUrl}/api/users/cart`, authHeaders)
      console.log('response.data.data(cart): ', response.data.data)
      dispatch(setCart(response.data.data))
    } catch (error) {
      console.error(error)
    }
  }

  useEffect(() => {
    // if (user.cart.length === 0) {
    fetchCart()
    // }
  }, [])

  if (user.cart.length === 0) {
    return <p className="text-center">No items in the cart</p>
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
      {user.cart.map(product => (
        <Product key={product.product_id} product={product} showDelete />
      ))}
    </div>
  )
}
