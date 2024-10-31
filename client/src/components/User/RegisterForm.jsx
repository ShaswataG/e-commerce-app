import { useState } from 'react'
import axios from 'axios'
import { validateUserRegistration } from '../../utils/validations/user'
import TextField from '../shared/formFields/TextField'

const baseUrl = process.env.REACT_APP_BASE_URL

export default function RegisterForm() {
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

  const handleSubmit = async (e) => {
    try {
      e.preventDefault()
      const validationErrors = validateUserRegistration(formData)
      if (Object.keys(validationErrors).length > 0) {
        setErrors(validationErrors)
      } else {
        console.log('userData: ', formData);
  
        console.log('Registration successful', formData)
        const response = await axios.post(baseUrl+'/api/users/register', formData);
        console.log(response.data);
        setFormData({
          email: '',
          name: '',
          password: '',
          confirmPassword: '',
        })
        setErrors({})
      }
    } catch (error) {
      console.error('registration failed');
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
