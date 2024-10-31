import Product from '../ProductListing/Product'

const products = [
  { id: 1, name: 'Product 1', price: 10.5 },
  { id: 2, name: 'Product 2', price: 15.75 },
  { id: 3, name: 'Product 3', price: 20 },
  { id: 4, name: 'Product 4', price: 25.99 },
  { id: 5, name: 'Product 5', price: 30.44 },
  { id: 6, name: 'Product 6', price: 35 },
  { id: 7, name: 'Product 7', price: 40 },
  { id: 8, name: 'Product 8', price: 45 },
]

export default function CartItems() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
      {products.map(product => (
        <Product key={product.id} product={product} showDelete />
      ))}
    </div>
  )
}