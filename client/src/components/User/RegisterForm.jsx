import axios from 'axios'
import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'

import { apiBaseUrl } from '../../constants'
import { setUser } from '../../redux/user'
import { validateUserRegistration } from '../../utils/validations/user'
import TextField from '../shared/formFields/TextField'

export default function RegisterForm() {
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const [formData, setFormData] = useState({
    email: '',
    name: '',
    password: '',
    confirmPassword: '',
  })

  const [errors, setErrors] = useState({})

  const handleChange = e => {
    const { name, value } = e.target
    setFormData({ ...formData, [name]: value })
  }

  const handleSubmit = async e => {
    try {
      e.preventDefault()
      const validationErrors = validateUserRegistration(formData)
      if (Object.keys(validationErrors).length > 0) {
        setErrors(validationErrors)
      } else {
        console.log('userData: ', formData)
        const response = await axios.post(`${apiBaseUrl}/api/users/register`, formData)
        console.log('Registration successful', response.data.data)
        dispatch(
          setUser({
            email: formData.email,
            contactNumber: formData.contactNumber,
            cart: [],
            token: response.data.data.token,
            id: response.data.data.id,
            isAdmin: response.data.data.isAdmin,
          }),
        )
        navigate('/')
      }
    } catch (error) {
      console.error('registration failed')
      navigate('/error')
    }
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4 w-1/3">
      <TextField
        name="email"
        type="email"
        label="Email"
        value={formData.email}
        error={errors.email}
        onChange={handleChange}
      />

      <TextField
        name="name"
        label="Name"
        value={formData.name}
        error={errors.name}
        onChange={handleChange}
      />

      <TextField
        name="password"
        type="password"
        label="Password"
        value={formData.password}
        error={errors.password}
        onChange={handleChange}
      />

      <TextField
        name="confirmPassword"
        type="password"
        label="Confirm Password"
        value={formData.confirmPassword}
        error={errors.confirmPassword}
        onChange={handleChange}
      />

      <button
        type="submit"
        className="mt-4 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
      >
        Register
      </button>
    </form>
  )
}
