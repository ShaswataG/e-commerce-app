export const formatPrice = price => {
  return price.toLocaleString('en-IN', {
    style: 'currency',
    currency: 'INR',
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  })
}

export const getProductById= (products, id) => products.find(product => product.id === id)
