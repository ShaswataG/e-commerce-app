export const formatPrice = price => {
  if (!price) return ''
  return price.toLocaleString('en-IN', {
    style: 'currency',
    currency: 'INR',
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  })
}

export const getProductById = (products, id) => products.find(product => product.id === id)

export const getLocalStorage = key => {
  return localStorage.getItem(key)
}

export const setLocalStorage = (key, value) => {
  localStorage.setItem(key, value)
}

export const getAuthHeaders = () => ({
  headers: {
    Authorization: `Bearer ${getLocalStorage('token')}`,
  },
})

export const getCartItem = (cart, id) => cart.find(item => item.product_id === id)
