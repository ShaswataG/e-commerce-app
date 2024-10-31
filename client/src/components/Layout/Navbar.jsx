import NavLink from './NavLink'

import GoToCart from '../Cart/GoToCart'
import ButtonLink from '../shared/ButtonLink'
import { useDispatch, useSelector } from 'react-redux'
import Button from '../shared/Button'
import { logoutUser } from '../../redux/user'
import { useNavigate } from 'react-router-dom'

export default function Navbar() {
  const { isAdmin, userId } = useSelector(state => state.user)
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const isLoggedIn = !!userId

  const logoutHandler=()=> {
    dispatch(logoutUser())
    navigate('/')
  }

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
          {!isLoggedIn && <ButtonLink href='/register'>Register</ButtonLink>}
          {!isLoggedIn && <ButtonLink href='/login'>Sign in</ButtonLink>}
          {isLoggedIn && <Button onClick={logoutHandler}>Logout</Button>}
          <GoToCart />
        </div>
      </div>
    </header>
  )
}
