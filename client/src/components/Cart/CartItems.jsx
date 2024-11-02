import PropTypes from 'prop-types'
import { useEffect } from 'react'
import { useSelector } from 'react-redux'

import Product from '../ProductListing/Product'

export default function CartItems({ fetchCart, isLoading, fetchFailed }) {
  const user = useSelector(state => state.user)
  console.log('user: ', user)

  useEffect(() => {
    // if (user.cart.length === 0) {
    fetchCart()
    // }
  }, [])

  if ((!isLoading && !fetchFailed) && (user.cart.length === 0)) {
    return <p className="text-center">No items in the cart</p>
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
      {isLoading && <h1>Loading cart...</h1>}
      {(!isLoading && fetchFailed) ? 
          (<h1>Couldn't load cart</h1>) 
          : 
          user.cart.map(product => (
          <Product key={product.product_id} product={product} showDelete />
          ))
          
      }
    </div>
  )
}

CartItems.propTypes = {
  fetchCart: PropTypes.func.isRequired,
}
