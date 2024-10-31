import axios from 'axios'
import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import Product from './Product'
import ProductListingHeader from './ProductListingHeader'

import Pagination from '../shared/Pagination'

const baseUrl = process.env.REACT_APP_BASE_URL

const products = [
  { id: 1, name: 'Product 1', price: 10.5 },
  { id: 2, name: 'Product 2', price: 15.75 },
  { id: 3, name: 'Product 3', price: 20 },
  { id: 4, name: 'Product 4', price: 25.99 },
  { id: 5, name: 'Product 5', price: 30.44 },
  { id: 6, name: 'Product 6', price: 35 },
  { id: 7, name: 'Product 7', price: 40 },
  { id: 8, name: 'Product 8', price: 45 },
  { id: 9, name: 'Product 9', price: 50 },
]

export default function ProductListing() {
  const [fetchFailed, setFetchFailed] = useState(false)
  const [loading, setLoading] = useState(true)

  const fetchProducts = async () => {
    try {
      const response = await axios.get(`${baseUrl}/api/products`)
    } catch (error) {}
  }

  useEffect(() => {}, [])
  return (
    <div className="relative w-full flex flex-col flex-grow gap-8">
      <ProductListingHeader itemCount={12} />
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {products.map(product => (
          <Product key={product.id} product={product} />
        ))}
      </div>
      <Pagination currentPage={1} totalPages={1} onPageChange={() => {}} />
    </div>
  )
}
