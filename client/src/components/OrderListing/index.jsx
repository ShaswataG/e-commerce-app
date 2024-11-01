import axios from 'axios'
import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import Order from './Order'

import { apiBaseUrl } from '../../constants'
import { setOrders } from '../../redux/orders'
import { getAuthHeaders } from '../../utils/common'
import Pagination from '../shared/Pagination'

export default function OrderListing() {
  const [fetchFailed, setFetchFailed] = useState(false)
  const [isLoading, setIsLoading] = useState(true)

  const { orders } = useSelector(state => state.orders)
  console.log('orders: ', orders)
  const dispatch = useDispatch()

  const fetchOrders = async () => {
    try {
      const response = await axios.get(`${apiBaseUrl}/api/orders`, getAuthHeaders())
      console.log('orders: ', response.data.data)
      dispatch(setOrders(response.data.data))
    } catch (error) {
      setFetchFailed(true)
    } finally {
      setIsLoading(false)
    }
  }

  useEffect(() => {
    fetchOrders()
  }, [])

  if (!fetchFailed && orders.length === 0) {
    return <p className="text-center">No items in the cart</p>
  }

  return (
    <div className="relative w-full flex flex-col flex-grow gap-8">
      <div className="max-w-lg mx-auto mt-10">
        {isLoading && <h1>Loading products...</h1>}
        {!isLoading && fetchFailed ? (
          <h1>Could&#39;t load orders</h1>
        ) : (
          orders.map(order => (
            <Order key={order.orderNumber} orderNumber={order.orderNumber} items={order.items} />
          ))
        )}
      </div>
      <Pagination currentPage={1} totalPages={1} onPageChange={() => {}} />
    </div>
  )
}
