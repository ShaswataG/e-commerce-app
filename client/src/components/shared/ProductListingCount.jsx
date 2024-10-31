import PropTypes from 'prop-types'

export default function ProductListingCount({ itemCount }) {
  return (

      <div>{itemCount} items found</div>
  )
}

ProductListingCount.propTypes = { itemCount: PropTypes.number }
