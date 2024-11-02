import axios from 'axios'
import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { Outlet } from 'react-router-dom'

import Footer from './Footer'
import Navbar from './Navbar'

import { apiBaseUrl } from '../../constants'
import { setUser } from '../../redux/user'
import { getAuthHeaders, getLocalStorage } from '../../utils/common'

export default function Layout() {
  const dispatch = useDispatch()
  const authHeaders = getAuthHeaders()

  const fetchCart = async () => {
    try {
      if (getLocalStorage('token')) {
        const response = await axios.get(`${apiBaseUrl}/api/users/cart`, authHeaders)
        dispatch(
          setUser({
            email: getLocalStorage('email'),
            cart: response.data.data || [],
            token: getLocalStorage('token'),
            id: getLocalStorage('userId'),
            isAdmin: getLocalStorage('isAdmin'),
            contactNumber: getLocalStorage('contactNumber'),
          }),
        )
      }
    } catch (error) {
      
    }
  }

  useEffect(() => {
    fetchCart()
  }, [])

  return (
    <div className="flex flex-col h-screen">
      <Navbar />
      <main className="flex flex-col flex-grow">
        <Outlet />
      </main>
      <Footer />
    </div>
  )
}
