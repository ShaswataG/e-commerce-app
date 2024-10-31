import { BrowserRouter, Route, Routes } from 'react-router-dom'

import Layout from './components/Layout/Layout'
import About from './pages/About'
import Contact from './pages/Contact'
import Error from './pages/Error'
import Home from './pages/Home'
import PrivacyPolicy from './pages/PrivacyPolicy'
import Products from './pages/Products'
import Terms from './pages/Terms'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="register" element={<Products />} />
          <Route path="login" element={<Products />} />
          <Route path="cart" element={<Products />} />
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
