import Product from '../ProductListing/Product'
import { useSelector } from 'react-redux'

export default function CartItems() {
  const {cart}=useSelector(state=>state.user)

  if (cart.length === 0) {
    return <p className="text-center">No items in the cart</p>
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
      {cart.map(product => (
        <Product key={product.id} product={product} showDelete />
      ))}
    </div>
  )
}
