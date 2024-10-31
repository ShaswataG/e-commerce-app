import PropTypes from 'prop-types'
import { useState } from 'react'
import { FaEdit, FaTrash } from 'react-icons/fa'

import Counter from './Counter'

import { formatPrice } from '../../utils/common'

export default function Product({ product, showAdd, showDelete }) {
  const [count, setCount] = useState(0)


  const modifyCart = () => {
    
  }

  const increment = () => setCount(count + 1)
  const decrement = () => {
    if (count > 0) {
      setCount(count - 1)
    }
  }

  const addToCart = () => setCount(1)

  const removeFromCart = () => setCount(0)

  return (<div key={product.id} className='border p-4 rounded-lg shadow flex flex-col gap-2 relative'>
    <div className='absolute top-4 right-4 flex gap-4'>
      {/*<button className="text-gray-600 hover:text-blue-500">*/}
      {/*  <FaEdit />*/}
      {/*</button>*/}
      {showDelete &&
        <button className='text-gray-600 hover:text-red-500' title='Remove from cart' onClick={removeFromCart}>
          <FaTrash />
        </button>}
    </div>
    <h3 className='text-xl font-semibold'>{product.name}</h3>
    <p className='text-lg text-gray-600'>{formatPrice(product.price)}</p>
    <div className='flex justify-between'>
      <Counter count={count} increment={increment} decrement={decrement} />
      {showAdd && <button
        className={`mt-4 px-4 py-2 rounded ${count !== 0 ? 'bg-gray-300 text-gray-500 cursor-not-allowed' : 'bg-blue-500 text-white hover:bg-blue-600'}`}
        disabled={count !== 0}
        onClick={addToCart}
      >
        Add to Cart
      </button>}
    </div>
  </div>)
}

Product.propTypes = {
  product: PropTypes.shape({
    id: PropTypes.number.isRequired, name: PropTypes.string.isRequired, price: PropTypes.number.isRequired,
  }).isRequired, showDelete: PropTypes.bool,
}
