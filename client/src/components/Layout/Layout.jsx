import { Outlet } from 'react-router-dom'

import Footer from './Footer'
import Navbar from './Navbar'

export default function Layout() {
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
