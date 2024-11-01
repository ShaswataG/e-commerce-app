import PropTypes from 'prop-types'
import { useSelector } from 'react-redux'

import Product from './Product'

import Pagination from '../shared/Pagination'
import ProductListingCount from '../shared/ProductListingCount'

export default function ProductListing({ isLoading, fetchFailed }) {
  const { products } = useSelector(state => state.products)

  console.log('products: ', products)

  return (
    <div className="relative w-full flex flex-col flex-grow gap-8">
      <div className="relative w-full flex">
        <ProductListingCount itemCount={products.length} />
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {isLoading && <h1>Loading products...</h1>}
        {!isLoading && fetchFailed ? (
          <h1>Could&#39;t load products</h1>
        ) : (
          products.map(product => <Product key={product.id} product={product} showAdd />)
        )}
      </div>
      <Pagination currentPage={1} totalPages={1} onPageChange={() => {}} />
    </div>
  )
}

ProductListing.propTypes = {
  isLoading: PropTypes.bool.isRequired,
  fetchFailed: PropTypes.bool.isRequired,
}
