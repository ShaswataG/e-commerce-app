import axios from 'axios'
import { useDispatch } from 'react-redux'

import ProductListing from '../components/ProductListing'
import PageTitle from '../components/shared/PageTitle'
import Search from '../components/shared/Search'
import { apiBaseUrl } from '../constants'
import { setProducts } from '../redux/products'

export default function Products() {
  const dispatch = useDispatch()

  const searchHandler = async value => {
    try {
      const config = {
        params: {
          search: value,
        },
      }
      console.log('baseUrl: ', apiBaseUrl)
      const response = await axios.get(`${apiBaseUrl}/api/products`, config)
      console.log('response: ', response)
      dispatch(setProducts(response.data.data))
    } catch (error) {
      console.error('Error searching products', error)
    }
  }

  return (
    <div className="flex flex-col h-full items-center gap-8 py-8 px-16">
      <PageTitle title="Products" />
      <Search onSearch={searchHandler} />
      <ProductListing />
    </div>
  )
}
