import { Link } from 'react-router-dom'

import GoToCart from '../Cart/GoToCart'
import ButtonLink from '../shared/ButtonLink'

export default function Navbar() {
  return (
    <header className="bg-white shadow">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <div className="flex items-center gap-6">
          <h1 className="text-2xl font-bold">E-Commerce</h1>
          <nav>
            <ul className="flex space-x-4">
              <li>
                <Link to="/" className="text-gray-600 hover:text-blue-500">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/products" className="text-gray-600 hover:text-blue-500">
                  Products
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-gray-600 hover:text-blue-500">
                  About
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-gray-600 hover:text-blue-500">
                  Contact
                </Link>
              </li>
            </ul>
          </nav>
        </div>
        <div className="flex items-center gap-4">
          <ButtonLink href="/register">Register</ButtonLink>
          <ButtonLink href="/login">Sign in</ButtonLink>
          <GoToCart />
        </div>
      </div>
    </header>
  )
}
