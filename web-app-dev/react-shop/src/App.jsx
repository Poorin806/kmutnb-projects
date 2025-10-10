import CategoryTable from './components/category-table'
import ProductTable from './components/product-table'
import ReportTable from './components/report-table'
import StockTable from './components/stock-table'

function App() {
  const queryString = window.location.search
  const queryParams = new URLSearchParams(queryString)
  const section = queryParams.get('section') ?? null

  return (
    <main className="w-full px-2 py-2">
      <nav className="flex h-[48px] items-center justify-between gap-2 px-4">
        <h1 className="text-xl font-bold">React Product</h1>
      </nav>

      <hr />

      <div className="mx-auto my-6 flex max-w-[50%] flex-col gap-4">
        <ReportTable />
        <ProductTable />
        <CategoryTable />
        <StockTable />
      </div>
    </main>
  )
}

export default App
