import PropTypes from 'prop-types'
import { FaSearch } from 'react-icons/fa'

function Search({ searchTerm = '', setSearchTerm, onSearch }) {
  const handleChange = event => {
    setSearchTerm(event.target.value)
  }

  const handleKeyDown = e => {
    if (e.key === 'Enter') {
      e.preventDefault()
      onSearch(searchTerm)
    }
  }
  console.log('searchTerm Searchhhh: ', searchTerm)

  return (
    <div className="relative w-1/2">
      <input
        type="text"
        value={searchTerm}
        onChange={handleChange}
        onKeyDown={handleKeyDown}
        placeholder="Search for products..."
        className="w-full py-2 pl-10 pr-4 rounded-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
      <FaSearch className="absolute left-3 top-3 text-gray-500" />
    </div>
  )
}

Search.propTypes = {
  searchTerm: PropTypes.string.isRequired,
  setSearchTerm: PropTypes.func.isRequired,
  onSearch: PropTypes.func.isRequired,
}

export default Search
