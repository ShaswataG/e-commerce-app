import { BrowserRouter, Route, Routes } from 'react-router-dom'

import Layout from './components/Layout/Layout'
import About from './pages/About'
import Cart from './pages/Cart'
import Contact from './pages/Contact'
import Error from './pages/Error'
import Home from './pages/Home'
import Login from './pages/Login'
import PrivacyPolicy from './pages/PrivacyPolicy'
import Products from './pages/Products'
import Register from './pages/Register'
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
          <Route path="products" element={<Products />} />
          <Route path="about" element={<About />} />
          <Route path="contact" element={<Contact />} />
          <Route path="privacy-policy" element={<PrivacyPolicy />} />
          <Route path="terms" element={<Terms />} />
        </Route>
        <Route path="*" element={<Error />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
