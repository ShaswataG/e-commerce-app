import axios from 'axios'
import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'

import CartItems from '../components/Cart/CartItems'
import Button from '../components/shared/Button'
import TextField from '../components/shared/formFields/TextField'
import Modal from '../components/shared/Modal'
import PageTitle from '../components/shared/PageTitle'
import { apiBaseUrl } from '../constants'
import { setCart } from '../redux/user'
import { getAuthHeaders } from '../utils/common'

export default function Cart() {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const [showModal, setShowModal] = useState(false)
  const [billingAddress, setBillingAddress] = useState(false)

  const { cart } = useSelector(state => state.user)

  const authHeaders = getAuthHeaders()

  const closeModal = () => setShowModal(false)

  const placeOrder = () => setShowModal(true)

  const fetchCart = async () => {
    try {
      const response = await axios.get(`${apiBaseUrl}/api/users/cart`, authHeaders)
      console.log('response.data.data(cart): ', response.data.data)
      dispatch(setCart(response.data.data))
    } catch (error) {
      console.error(error)
    }
  }

  const confirmOrder = async () => {
    try {
      await axios.post(
        `${apiBaseUrl}/api/orders`,
        { billingAddress, items: cart },
        getAuthHeaders(),
      )
    } catch (error) {
      console.error('Error placing order', error)
      navigate('/error')
    } finally {
      closeModal()
      fetchCart()
      navigate('/orders')
    }
  }

  return (
    <>
      <div className="flex flex-col h-full gap-8 py-8 px-16">
        <PageTitle title="Cart" />
        <CartItems fetchCart={fetchCart} />
        <div className="flex justify-center mt-auto">
          {cart.length > 0 && <Button onClick={placeOrder}>Place Order</Button>}
        </div>
      </div>
      <Modal onClose={closeModal} isOpen={showModal} title="Place Order">
        <div className="flex flex-col gap-4">
          <TextField
            name="billingAddress"
            label="Billing address"
            type="textarea"
            onChange={e => setBillingAddress(e.target.value)}
          />
          <Button onClick={confirmOrder}>Confirm</Button>
        </div>
      </Modal>
    </>
  )
}
