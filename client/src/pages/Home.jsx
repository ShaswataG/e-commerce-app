import Search from '../components/shared/Search'

export default function Home() {
  const searchHandler = () => {}

  return (
    <div className="flex flex-col h-full items-center gap-8 pb-8">
      <div
        className="relative w-full bg-blue-500 flex flex-grow items-center justify-center text-white"
        // style={{ height: '60vh' }}
      >
        <h2 className="text-4xl font-bold">Welcome to Our Store!</h2>
      </div>
      <Search onSearch={searchHandler} />
    </div>
  )
}
