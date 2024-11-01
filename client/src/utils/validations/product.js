export const validateProduct = formData => {
  const newErrors = {}

  if (!formData.name) newErrors.name = 'Name is required'
  if (!formData.price) newErrors.price = 'Price is required'
  if (!formData.inventory) newErrors.inventory = 'Inventory is required'
  if (!Number.isInteger(parseFloat(formData.inventory))) {
    newErrors.inventory = "Inventory can't be a decimal"
  }

  return newErrors
}
