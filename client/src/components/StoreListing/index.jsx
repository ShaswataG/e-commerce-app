import axios from 'axios'
import PropTypes from 'prop-types'
import { useState } from 'react'
import { useSelector } from 'react-redux'

import Product from './Product'
import ProductForm from './ProductForm'

import { apiBaseUrl } from '../../constants'
import { getAuthHeaders } from '../../utils/common'
import Button from '../shared/Button'
import Modal from '../shared/Modal'
import Pagination from '../shared/Pagination'
import ProductListingCount from '../shared/ProductListingCount'

export default function StoreListing({ isLoading, fetchFailed, fetchProducts }) {
  const { products } = useSelector(state => state.products)

  const [isModalOpen, setIsModalOpen] = useState(false)
  const [currentProduct, setCurrentProduct] = useState(undefined)

  const openModal = () => {
    setIsModalOpen(true)
  }

  const closeModal = () => {
    setCurrentProduct(undefined)
    setIsModalOpen(false)
  }

  const addProduct = () => {
    setCurrentProduct(undefined)
    openModal()
  }

  const editProduct = prodId => {
    setCurrentProduct(prodId)
    openModal()
  }

  const deleteProduct = async prodId => {
    try {
      await axios.delete(`${apiBaseUrl}/api/products/${prodId}`, getAuthHeaders())
      fetchProducts()
    } catch (error) {
      console.error('Error deleting product', error)
    }
  }

  const onSaveProduct = () => {
    closeModal()
    fetchProducts()
  }

  return (
    <>
      <div className="relative w-full justify-between flex flex-col flex-grow gap-8">
        <div className="relative w-full flex justify-between items-center">
          <ProductListingCount itemCount={products.length} />
          <Button onClick={addProduct}>Add Product</Button>
        </div>
        <div className='h-full'>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {isLoading && <h1>Loading store...</h1>}
          {!isLoading && fetchFailed ? (
            <h1>Couldn't load store</h1>
          ) : (
            products.map(product => (
              <Product
                key={product.id}
                product={product}
                editProduct={() => editProduct(product)}
                deleteProduct={deleteProduct}
                showDelete
              />
            ))
          )}
        </div>
        </div>
        <Pagination currentPage={1} totalPages={1} onPageChange={() => {}} />
      </div>
      <Modal title="Product" isOpen={isModalOpen} onClose={closeModal}>
        <ProductForm product={currentProduct} onSaveProduct={onSaveProduct} />
      </Modal>
    </>
  )
}

StoreListing.propTypes = {
  isLoading: PropTypes.bool.isRequired,
  fetchFailed: PropTypes.bool.isRequired,
  fetchProducts: PropTypes.func.isRequired,
}
