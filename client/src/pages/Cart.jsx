import PageTitle from '../components/shared/PageTitle'
import CartItems from '../components/Cart/CartItems'

export default function Cart() {
  return (
    <div className='flex flex-col h-full gap-8 py-8 px-16'>
      <PageTitle title='Cart' />
      <CartItems />
    </div>
  )
}
