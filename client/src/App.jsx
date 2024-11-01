import { BrowserRouter, Route, Routes } from 'react-router-dom'

import AdminLayout from './components/Layout/AdminLayout'
import Layout from './components/Layout/Layout'
import About from './pages/About'
import Cart from './pages/Cart'
import Contact from './pages/Contact'
import Error from './pages/Error'
import Home from './pages/Home'
import Login from './pages/Login'
import Orders from './pages/Orders'
import PrivacyPolicy from './pages/PrivacyPolicy'
import Products from './pages/Products'
import Register from './pages/Register'
import Store from './pages/Store'
import Terms from './pages/Terms'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="register" element={<Register />} />
          <Route path="login" element={<Login />} />
          <Route path="cart" element={<Cart />} />
          <Route path="orders" element={<Orders />} />
          <Route path="products" element={<Products />} />
          <Route path="about" element={<About />} />
          <Route path="contact" element={<Contact />} />
          <Route path="privacy-policy" element={<PrivacyPolicy />} />
          <Route path="terms" element={<Terms />} />
          <Route path="error" element={<Error />} />
          <Route path="admin" element={<AdminLayout />}>
            <Route path="store" element={<Store />} />
          </Route>
        </Route>
        <Route path="*" element={<Error />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
