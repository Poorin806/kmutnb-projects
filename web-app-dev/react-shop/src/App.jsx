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
        <div className="flex items-center gap-4">
          <a href="/">Report</a>
          <a href="?section=product">Product</a>
          <a href="?section=category">Category</a>
          <a href="?section=stock">Stock</a>
        </div>
      </nav>

      <hr />

      <div className="mx-4 my-6">
        {!section && <ReportTable />}

        {section === 'product' && <ProductTable />}

        {section === 'category' && <CategoryTable />}

        {section === 'stock' && <StockTable />}
      </div>
    </main>
  )
}

export default App
