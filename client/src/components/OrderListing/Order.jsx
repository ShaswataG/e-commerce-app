import PropTypes from 'prop-types'

export default function Order({ orderNumber, items }) {
  return (
    <div className="border border-gray-300 p-4 rounded-lg shadow-md mb-4">
      <h2 className="text-xl font-semibold mb-2">Order No: {orderNumber}</h2>
      <ul className="list-disc pl-5">
        {items.map((item, index) => (
          <li key={index} className="text-lg">
            {item.name}: <span className="font-bold">{item.quantity}</span>
          </li>
        ))}
      </ul>
    </div>
  )
}

Order.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      quantity: PropTypes.number.isRequired,
    }),
  ).isRequired,
  orderNumber: PropTypes.string.isRequired,
}
