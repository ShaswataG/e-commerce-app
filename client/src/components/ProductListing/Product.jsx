import axios from 'axios'
import PropTypes from 'prop-types'
import { FaTrash } from 'react-icons/fa'
import { useDispatch } from 'react-redux'

import Counter from './Counter'

import { apiBaseUrl } from '../../constants'
import { addCartItem, removeCartItem, setCart } from '../../redux/user'
import { formatPrice, getAuthHeaders } from '../../utils/common'

// TODO handle out of stock

export default function Product({ product, showAdd, showDelete }) {
  console.log('product: ', product)
  const authHeaders = getAuthHeaders()
  const dispatch = useDispatch()

  const modifyCart = async cartItemCount => {
    try {
      await axios.post(
        `${apiBaseUrl}/api/users/cart`,
        {
          productId: product.product_id,
          quantity: cartItemCount,
        },
        authHeaders,
      )
      const response2 = await axios.get(`${apiBaseUrl}/api/users/cart`, authHeaders)
      console.log('response2: ', response2.data.data)
      dispatch(setCart(response2.data.data))
    } catch (error) {
      console.error(error)
    }
  }

  const addToCart = () => {
    dispatch(
      addCartItem({
        ...product,
        quantity: 1,
      }),
    )
  }

  const incCartItem = count => {
    modifyCart(count + 1)
    // dispatch(incrementCartItem(product.product_id))
  }

  const decCartItem = count => {
    modifyCart(count - 1)
    // dispatch(decrementCartItem(product.product_id))
  }

  const remCartItem = () => {
    modifyCart(0)
    // dispatch(removeCartItem(product.product_id))
  }

  return (
    <div
      key={product.product_id}
      className="border p-4 rounded-lg shadow flex flex-col gap-2 relative"
    >
      <div className="absolute top-4 right-4 flex gap-4">
        {showDelete && (
          <button
            className="text-gray-600 hover:text-red-500"
            title="Remove from cart"
            onClick={remCartItem}
          >
            <FaTrash />
          </button>
        )}
      </div>
      <h3 className="text-xl font-semibold">{product.name}</h3>
      <p className="text-lg text-gray-600">{formatPrice(product.price)}</p>
      <div className="flex justify-between">
        <Counter
          isOutOfStock={product.isOutOfStock}
          count={product.quantity}
          increment={incCartItem}
          decrement={decCartItem}
        />
        {showAdd && (
          <button
            className={`mt-4 px-4 py-2 rounded ${product.quantity !== 0 ? 'bg-gray-300 text-gray-500 cursor-not-allowed' : 'bg-blue-500 text-white hover:bg-blue-600'}`}
            disabled={product.quantity !== 0}
            onClick={addToCart}
          >
            Add to Cart
          </button>
        )}
      </div>
    </div>
  )
}

Product.propTypes = {
  product: PropTypes.shape({
    product_id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    quantity: PropTypes.number.isRequired,
    isOutOfStock: PropTypes.bool.isRequired,
  }).isRequired,
  showAdd: PropTypes.bool,
  showDelete: PropTypes.bool,
}
