import axios from 'axios'
import PropTypes from 'prop-types'
import { useState } from 'react'

import { apiBaseUrl } from '../../constants'
import { getAuthHeaders } from '../../utils/common'
import { validateProduct } from '../../utils/validations/product'
import NumericField from '../shared/formFields/NumericField'
import TextField from '../shared/formFields/TextField'

export default function ProductForm({ product = {}, onSaveProduct }) {
  const authHeaders = getAuthHeaders()

  const [formData, setFormData] = useState({
    name: product.name,
    price: product.price,
    inventory: product.inventory,
  })

  const [errors, setErrors] = useState({})

  const handleChange = e => {
    const { name, value } = e.target
    setFormData({ ...formData, [name]: value })
  }

  const handleSubmit = async e => {
    e.preventDefault()
    const validationErrors = validateProduct(formData)
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors)
    } else {
      console.log('productData: ', formData)
      try {
        if (product.id) {
          await axios.patch(`${apiBaseUrl}/api/products/${product.id}`, formData, authHeaders)
        } else {
          await axios.post(`${apiBaseUrl}/api/products`, formData, authHeaders)
        }
        console.log('Product saved', formData)
      } catch (error) {
        console.error('Error saving product', error)
      } finally {
        onSaveProduct()
      }
    }
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4 w-1/3">
      <TextField
        name="name"
        label="Name"
        value={formData.name}
        error={errors.name}
        onChange={handleChange}
      />

      <NumericField
        name="price"
        label="Price"
        value={formData.price}
        error={errors.price}
        onChange={handleChange}
      />

      <NumericField
        name="inventory"
        label="Inventory"
        value={formData.inventory}
        error={errors.inventory}
        onChange={handleChange}
      />

      <button
        type="submit"
        className="mt-4 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
      >
        Save
      </button>
    </form>
  )
}

ProductForm.propTypes = {
  product: PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
  }),
  onSaveProduct: PropTypes.func,
}
