import PropTypes from 'prop-types'
import { FaEdit, FaTrash } from 'react-icons/fa'

import { formatPrice } from '../../utils/common'

export default function Product({ product,editProduct,deleteProduct }) {
  const removeFromStore = () => deleteProduct(product.id)

  return (
    <div key={product.id} className='border p-4 rounded-lg shadow flex flex-col gap-2 relative'>
    <div className='absolute top-4 right-4 flex gap-4'>
      <button className="text-gray-600 hover:text-blue-500" onClick={() => editProduct(product.id)}>
        <FaEdit />
      </button>
      <button className='text-gray-600 hover:text-red-500' title='Remove from cart' onClick={removeFromStore}>
        <FaTrash />
      </button>
    </div>
    <h3 className='text-xl font-semibold'>{product.name}</h3>
    <p className='text-lg text-gray-600'>{formatPrice(product.price)}</p>
    <p className='text-lg text-gray-600'>Inventory: {product.inventory}</p>
  </div>
  )
}

Product.propTypes = {
  product: PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    inventory: PropTypes.number.isRequired,
  }).isRequired,
  showDelete: PropTypes.bool,
  editProduct: PropTypes.func,
  deleteProduct: PropTypes.func,
}
