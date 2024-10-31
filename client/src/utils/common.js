// eslint-disable-next-line import/prefer-default-export
export const formatPrice = price => {
  return price.toLocaleString('en-IN', {
    style: 'currency',
    currency: 'INR',
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  })
}
