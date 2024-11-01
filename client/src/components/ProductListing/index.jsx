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

  const user = useSelector(state => state.user)
  const { products } = useSelector(state => state.products)
  const dispatch = useDispatch()


  const modifyProducts = (products) => {
    // console.log('modifyProducts: ', products);
    return products.map(product => {
      // console.log(product)
      let quantity = 0;
      user.cart.forEach(item => {
        if (item.product_id == product.id)
          quantity = item.quantity
      })
      // console.log({
      //   ...product,
      //   quantity
      // })
      return {
        ...product,
        product_id: product.id,
        quantity
      }
    })
  }

  let modifiedProducts = modifyProducts(products);
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
    // modifiedProducts = modifyProducts(products)
    // console.log('modifiedProducts: ', modifiedProducts);
  }, [])

  console.log('products: ', products)

  return (
    <div className="relative w-full flex flex-col flex-grow gap-8">
      <div className="relative w-full flex">
        <ProductListingCount itemCount={modifiedProducts.length} />
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {isLoading && <h1>Loading products...</h1>}
        {!isLoading && fetchFailed ? 
          (<h1>Could&#39;t load products</h1>) 
          : 
          (modifiedProducts.map(modifiedProduct => {
            return <Product key={modifiedProduct.id} product={modifiedProduct} showDelete />
          }))
        }
      </div>
      <Pagination currentPage={1} totalPages={1} onPageChange={() => {}} />
    </div>
  )
}
