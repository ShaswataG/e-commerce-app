import axios from 'axios'
import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import Product from './Product'
import ProductListingHeader from '../shared/ProductListingHeader'
import { setProducts } from '../../redux/products'

import Pagination from '../shared/Pagination'

const baseUrl = process.env.REACT_APP_BASE_URL

export default function ProductListing() {
  const [fetchFailed, setFetchFailed] = useState(false)
  const [isLoading, setIsLoading] = useState(true)


  const { products } = useSelector(state => state.products)
  const dispatch = useDispatch();

  const fetchProducts = async () => {
    try {
      const response = await axios.get(`${baseUrl}/api/products`)
      console.log('response.data.data: ', response.data.data)
      console.log('products: ', products)
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
  return (
    <div className="relative w-full flex flex-col flex-grow gap-8">
      <ProductListingHeader itemCount={products.length} />
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {isLoading && <h1>Loading products...</h1>}
        {
          !isLoading && fetchFailed ?
            <h1>Couldn't load products</h1>
            :
            products.map(product => (
              <Product key={product.id} product={product} showAdd />
            ))
        }
      </div>
      <Pagination currentPage={1} totalPages={1} onPageChange={() => {}} />
    </div>
  )
}
