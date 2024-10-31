import { useState } from 'react'

import { validateUserLogin } from '../../utils/validations/user'
import TextField from '../shared/formFields/TextField'
import axios from 'axios'
import { apiBaseUrl } from '../../constants'
import { setUser } from '../../redux/user'
import { useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux'

export default function LoginForm() {
  const navigate=useNavigate()
  const dispatch = useDispatch()
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  })

  const [errors, setErrors] = useState({})

  const handleChange = e => {
    const { name, value } = e.target
    setFormData({ ...formData, [name]: value })
  }

  const handleSubmit = async e => {
    e.preventDefault()
    const validationErrors = validateUserLogin(formData)
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors)
    } else {
      console.log('userData: ', formData);
      const response = await axios.post(`${apiBaseUrl}/api/users/login`, formData);
      console.log('Login successful', formData)
      dispatch(setUser(response.data.data))
      navigate('/')
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
        name="password"
        type="password"
        label="Password"
        value={formData.password}
        error={errors.password}
        onChange={handleChange}
      />

      <button
        type="submit"
        className="mt-4 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
      >
        Sign in
      </button>
    </form>
  )
}
