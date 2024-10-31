import ProductListing from '../components/ProductListing'
import Search from '../components/shared/Search'

export default function Products() {
  const searchHandler = () => {}

  return (
    <div className="flex flex-col h-full items-center gap-8 py-8 px-16">
      <Search onSearch={searchHandler} />
      <ProductListing />
    </div>
  )
}
