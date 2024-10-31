import { useNavigate } from 'react-router-dom'
import { useState } from 'react'
import axios from 'axios'
import { apiBaseUrl } from '../../constants'
import TextField from '../shared/formFields/TextField'
import { validateProduct } from '../../utils/validations/product'
import NumericField from '../shared/formFields/NumericField'
import PropTypes from 'prop-types'
import useAuthHeaders from '../../hooks/useAuthHeaders'

export default function ProductForm({productId}) {
  const navigate = useNavigate()
  const authHeaders=useAuthHeaders()

  const [formData, setFormData] = useState({
    name: '',
    price: undefined,
    inventory: undefined,
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
      if (productId){
        await axios.patch(`${apiBaseUrl}/api/products/${productId}`, formData, authHeaders)
      } else {
        await axios.post(`${apiBaseUrl}/api/products`, formData,authHeaders)
      }
      console.log('Product saved', formData)
      navigate('/admin/store')
    }
  }

  return (
    <form onSubmit={handleSubmit} className='space-y-4 w-1/3'>
      <TextField
        name='name'
        label='Name'
        value={formData.name}
        error={errors.name}
        onChange={handleChange}
      />

      <NumericField
        name='price'
        label='Price'
        value={formData.price}
        error={errors.price}
        onChange={handleChange}
      />

      <NumericField
        name='inventory'
        label='Inventory'
        value={formData.inventory}
        error={errors.inventory}
        onChange={handleChange}
      />

      <button
        type='submit'
        className='mt-4 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600'
      >
        Save
      </button>
    </form>
  )
}

ProductForm.propTypes= {productId: PropTypes.string}
