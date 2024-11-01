import axios from 'axios'
import { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import { useLocation } from 'react-router-dom'

import PageTitle from '../components/shared/PageTitle'
import Search from '../components/shared/Search'
import StoreListing from '../components/StoreListing'
import { apiBaseUrl } from '../constants'
import { setProducts } from '../redux/products'
import { getUrlSearchParam } from '../utils/common'

export default function Store() {
  const dispatch = useDispatch()
  const { search } = useLocation()
  const searchParam = getUrlSearchParam(search)

  console.log('search: ', search)
  const [searchTerm, setSearchTerm] = useState(searchParam)
  const [fetchFailed, setFetchFailed] = useState(false)
  const [isLoading, setIsLoading] = useState(true)

  const fetchProducts = async val => {
    try {
      const config = {
        params: {
          search: val,
        },
      }
      const response = await axios.get(`${apiBaseUrl}/api/products`, config)
      console.log('response.data.data: ', response.data.data)
      dispatch(setProducts(response.data.data))
    } catch (error) {
      setFetchFailed(true)
    } finally {
      setIsLoading(false)
    }
  }

  useEffect(() => {
    setSearchTerm(searchParam)
  }, [searchParam])

  useEffect(() => {
    fetchProducts(searchTerm)
  }, [searchTerm])

  return (
    <div className="flex flex-col h-full items-center gap-8 py-8 px-16">
      <PageTitle title="Store" />
      <Search searchTerm={searchTerm} setSearchTerm={setSearchTerm} onSearch={fetchProducts} />
      <StoreListing isLoading={isLoading} fetchFailed={fetchFailed} fetchProducts={fetchProducts} />
    </div>
  )
}
