import Search from '../components/shared/Search'
import PageTitle from '../components/shared/PageTitle'
import StoreListing from '../components/StoreListing'

export default function Store() {
  const searchHandler = () => {}

  return (
    <div className="flex flex-col h-full items-center gap-8 py-8 px-16">
      <PageTitle title="Store" />
      <Search onSearch={searchHandler} />
      <StoreListing />
    </div>
  )
}