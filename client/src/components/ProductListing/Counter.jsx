import { useState } from 'react'

export default function Counter() {
  const [count, setCount] = useState(0)

  const increment = () => setCount(count + 1)
  const decrement = () => {
    if (count > 0) {
      setCount(count - 1)
    }
  }

  return (
    <div className="flex items-center mt-2">
      <button
        className={`border px-4 py-2 rounded-l focus:outline-none ${count === 0 ? 'opacity-50 cursor-not-allowed' : ''}`}
        onClick={decrement}
        disabled={count === 0}
      >
        -
      </button>
      <span className="border-x px-4">{count}</span>
      <button className="border px-4 py-2 rounded-r focus:outline-none" onClick={increment}>
        +
      </button>
    </div>
  )
}
