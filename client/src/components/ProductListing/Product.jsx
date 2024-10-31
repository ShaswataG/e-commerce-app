import PropTypes from 'prop-types'

import Counter from './Counter'

export default function Product({ product }) {
  return (
    <div key={product.id} className="border p-4 rounded-lg shadow">
      <h3 className="text-xl font-semibold">{product.name}</h3>
      <p className="text-lg text-gray-600">{product.price}</p>
      <Counter />
      <button className="mt-4 bg-blue-500 text-white px-4 py-2 rounded">Add to Cart</button>
    </div>
  )
}

Product.propTypes = {
  product: PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
  }).isRequired,
}
