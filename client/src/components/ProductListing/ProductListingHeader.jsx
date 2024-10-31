import PropTypes from 'prop-types'

export default function ProductListingHeader({ itemCount }) {
  return (
    <div className="relative w-full flex">
      <div>{itemCount} items found</div>
    </div>
  )
}

ProductListingHeader.propTypes = { itemCount: PropTypes.number }
