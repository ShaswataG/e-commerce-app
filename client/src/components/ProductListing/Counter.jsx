import PropTypes from 'prop-types'

export default function Counter({ count = 0, increment, decrement, isOutOfStock }) {
  return (
    <div className="flex items-center">
      <button
        className={`border px-4 py-2 rounded-l focus:outline-none ${count === 0 ? 'opacity-50 cursor-not-allowed' : ''}`}
        onClick={() => decrement(count)}
        disabled={count === 0 || isOutOfStock}
      >
        -
      </button>
      <span className="border-y px-4 py-2">{count}</span>
      <button
        className="border px-4 py-2 rounded-r focus:outline-none"
        onClick={() => increment(count)}
        disabled={isOutOfStock}
      >
        +
      </button>
    </div>
  )
}

Counter.propTypes = {
  count: PropTypes.number,
  increment: PropTypes.func.isRequired,
  decrement: PropTypes.func.isRequired,
  isOutOfStock: PropTypes.bool.isRequired,
}
