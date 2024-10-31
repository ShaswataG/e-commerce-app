import NavLink from './NavLink'

import GoToCart from '../Cart/GoToCart'
import ButtonLink from '../shared/ButtonLink'
import { useSelector } from 'react-redux'

export default function Navbar() {
  const { isAdmin } = useSelector(state => state.user)

  return (
    <header className="bg-white shadow">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <div className="flex items-center gap-6">
          <h1 className="text-2xl font-bold">E-Commerce</h1>
          <nav>
            <ul className="flex space-x-4">
              <NavLink href="/">Home</NavLink>
              <NavLink href="/products">Products</NavLink>
              {isAdmin && <NavLink href='/admin/store'>Store</NavLink>}
              <NavLink href="about">About</NavLink>
              <NavLink href="/contact">Contact</NavLink>
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
