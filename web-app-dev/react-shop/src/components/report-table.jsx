import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { API_URI } from '../utils/config'

export default function ReportTable() {
  const [productList, setProductList] = useState([])
  const [categoryList, setCategoryList] = useState([])
  const [stockList, setStockList] = useState([])

  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  const fetchData = async () => {
    try {
      const productRes = await axios.get(`${API_URI}/product.php`)
      const categoryRes = await axios.get(`${API_URI}/category.php`)
      const stockRes = await axios.get(`${API_URI}/stock.php`)

      setProductList(productRes.data)
      setCategoryList(categoryRes.data)
      setStockList(stockRes.data)

      setLoading(false)
    } catch (err) {
      console.error('Error: '.err)
      setError(err)
    }
  }

  useEffect(() => {
    fetchData()
  }, [])

  if (error) return `Error: ${error}`
  if (loading) return 'Loading...'

  return (
    <div>
      <h2 className="my-2 text-lg font-bold">Dashboard</h2>
      <table className="w-full">
        <thead>
          <tr>
            <th>#</th>
            <th>ID</th>
            <th>Name</th>
            <th>Price</th>
            <th>Category</th>
            <th>Quantity</th>
          </tr>
        </thead>
        <tbody>
          {productList.map((row) => (
            <tr key={row.id}>
              <td className="text-center">{row.id}</td>
              <td>{row.name}</td>
              <td>{row.description}</td>
              <td>{row.price}</td>
              <td>
                {categoryList.find((cate) => cate.name === row.description)
                  .name ?? '-'}
              </td>
              <td>
                {stockList.find((stock) => stock.product_id === row.id)
                  .quantity ?? '-'}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}
