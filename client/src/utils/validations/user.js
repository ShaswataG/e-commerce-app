export const validateUserRegistration = formData => {
  const newErrors = {}

  if (!formData.email) newErrors.email = 'Email is required'
  if (!formData.name) newErrors.name = 'Name is required'
  if (!formData.password) newErrors.password = 'Password is required'
  if (formData.password !== formData.confirmPassword) {
    newErrors.confirmPassword = 'Passwords do not match'
  }

  return newErrors
}

export const validateUserLogin = formData => {
  const newErrors = {}

  if (!formData.email) newErrors.email = 'Email is required'
  if (!formData.password) newErrors.password = 'Password is required'

  return newErrors
}
