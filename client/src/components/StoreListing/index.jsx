import axios from 'axios'
import { useEffect, useState } from 'react'

import Product from './Product'
import ProductListingCount from '../shared/ProductListingCount'
import Pagination from '../shared/Pagination'
import { apiBaseUrl } from '../../constants'
import { setProducts } from '../../redux/products'
import { useDispatch, useSelector } from 'react-redux'
import Button from '../shared/Button'
import Modal from '../shared/Modal'
import ProductForm from './ProductForm'

export default function StoreListing() {
  const [fetchFailed, setFetchFailed] = useState(false)
  const [isLoading, setIsLoading] = useState(true)

  const { products } = useSelector(state => state.products)
  const dispatch = useDispatch()

  const [isModalOpen, setIsModalOpen] = useState(false)
  const [productId, setProductId] = useState(undefined)

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setProductId(undefined)
    setIsModalOpen(false);
  };

  const addProduct = () => {
    setProductId(undefined)
    openModal()
  }

  const editProduct = (prodId) => {
    setProductId(prodId)
    openModal()
  }

  const fetchProducts = async () => {
    try {
      const response = await axios.get(`${apiBaseUrl}/api/products`)
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
    <>
    <div className="relative w-full flex flex-col flex-grow gap-8">
      <div className="relative w-full flex">
        <ProductListingCount itemCount={12} />
        <Button onClick={addProduct}>Add Product</Button>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {isLoading && <h1>Loading products...</h1>}
        {
          !isLoading && fetchFailed ?
            <h1>Couldn't load products</h1>
            :
            products.map(product => (
              <Product key={product.id} product={product} editProduct={editProduct} showDelete />
            ))
        }
      </div>
      <Pagination currentPage={1} totalPages={1} onPageChange={() => {}} />
    </div>
      <Modal title={`Product`} isOpen={isModalOpen} onClose={closeModal}>
        <ProductForm productId={productId} />
      </Modal>
    </>
  )
}
