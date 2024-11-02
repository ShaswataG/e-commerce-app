import PropTypes from 'prop-types'

import { formatPrice } from '../../utils/common'

export default function Order({ orderNumber, items, orderDate, billingAddress, totalPrice }) {
  return (
    <div className="bg-white flex flex-col justify-between min-h-fit border border-gray-300 p-6 rounded-lg shadow-lg mb-6 transition-transform transform hover:scale-105">
      <div>
        <h2 className="text-2xl font-bold text-blue-600 mb-3">Order #{orderNumber}</h2>
        <p className="text-gray-700 mb-2">
          <strong>Order placed on:</strong>{' '}
          {orderDate.replace('T', ' ').replace('Z', '').slice(0, 19)}
        </p>
        <p className="text-gray-700 mb-4">
          <strong>Billing Address:</strong> {billingAddress}
        </p>
      </div>
      <ul className="list-disc pl-5 mb-4 min-h-[40%]">
        {items.map((item, index) => (
          <li key={index} className="text-lg flex justify-between items-center text-lg">
            <span>
              {item.name}: {item.quantity}
            </span>
            <span className="text-green-600">{formatPrice(item.price)}</span>
          </li>
        ))}
      </ul>
      <p className="text-xl font-bold text-gray-800">
        Total Price: <span className="text-red-600">{formatPrice(totalPrice)}</span>
      </p>
    </div>
  )
}

Order.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      quantity: PropTypes.number.isRequired,
      orderDate: PropTypes.string.isRequired,
      billingAddress: PropTypes.string.isRequired,
      totalPrice: PropTypes.number.isRequired,
    }),
  ).isRequired,
  orderNumber: PropTypes.string.isRequired,
  orderDate: PropTypes.string.isRequired,
  billingAddress: PropTypes.string.isRequired,
  totalPrice: PropTypes.string.isRequired,
}
