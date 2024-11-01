import OrderListing from '../components/OrderListing'
import PageTitle from '../components/shared/PageTitle'

export default function Orders() {
  return (
    <div className="flex flex-col h-full items-center gap-8 py-8 px-16">
      <PageTitle title="Orders" />
      <OrderListing />
    </div>
  )
}
