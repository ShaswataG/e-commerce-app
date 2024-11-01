import { FaShoppingCart } from 'react-icons/fa'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'

export default function GoToCart() {
  const { cart } = useSelector(state => state.user)
  const { cartItemCount } = cart.length

  return (
    <Link to="/cart" className="relative flex items-center h-full">
      <FaShoppingCart className="text-gray-600 hover:text-blue-500 h-full" size={30} />
      {cartItemCount > 0 && (
        <span className="absolute top-0 right-0 bg-red-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
          {cartItemCount}
        </span>
      )}
    </Link>
  )
}
