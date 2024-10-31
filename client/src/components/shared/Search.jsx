import PropTypes from 'prop-types'
import React from 'react'
import { FaSearch } from 'react-icons/fa'

function Search({ searchTerm, onSearch }) {
  const handleChange = e => {
    onSearch(e.target.value)
  }

  return (
    <div className="relative w-1/2">
      <input
        type="text"
        value={searchTerm}
        onChange={handleChange}
        placeholder="Search for products..."
        className="w-full py-2 pl-10 pr-4 rounded-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
      <FaSearch className="absolute left-3 top-3 text-gray-500" />
    </div>
  )
}

Search.propTypes = { searchTerm: PropTypes.string, onSearch: PropTypes.func.isRequired }

export default Search
