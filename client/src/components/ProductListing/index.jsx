import axios from 'axios'
import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import Product from './Product'

import { apiBaseUrl } from '../../constants'
import { setProducts } from '../../redux/products'
import Pagination from '../shared/Pagination'
import ProductListingCount from '../shared/ProductListingCount'

export default function ProductListing() {
  const [fetchFailed, setFetchFailed] = useState(false)
  const [isLoading, setIsLoading] = useState(true)

  const { products } = useSelector(state => state.products)
  const dispatch = useDispatch()

  const fetchProducts = async () => {
    try {
      const config = {
        params: {
          search: '',
        },
      }
      const response = await axios.get(`${apiBaseUrl}/api/products`, config)
      console.log('response.data.data: ', response.data.data)
      dispatch(setProducts(response.data.data))
    } catch (error) {
      setFetchFailed(true)
    } finally {
      setIsLoading(false)
    }
  }

  useEffect(() => {
    fetchProducts()
  }, [])

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
