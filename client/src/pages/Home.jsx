import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

import Search from '../components/shared/Search'

export default function Home() {
  const navigate = useNavigate()

  const [searchTerm, setSearchTerm] = useState('')

  const searchHandler = async value => {
    navigate(`/products?search=${value}`)
  }

  return (
    <div className="flex flex-col h-full items-center gap-8 pb-8">
      <div className="relative w-full bg-blue-500 flex flex-grow items-center justify-center text-white">
        <h2 className="text-4xl font-bold">Welcome to Our Store!</h2>
      </div>
      <Search searchTerm={searchTerm} setSearchTerm={setSearchTerm} onSearch={searchHandler} />
    </div>
  )
}
