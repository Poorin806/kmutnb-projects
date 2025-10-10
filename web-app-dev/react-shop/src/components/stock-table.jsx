import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { API_URI } from '../utils/config'

export default function StockTable() {
  const [stockList, setStockList] = useState([])

  const fetchData = async () => {
    try {
      const stockRes = await axios.get(`${API_URI}/stock.php`)

      setStockList(stockRes.data)
    } catch (err) {
      console.error('Error: '.err)
    }
  }

  useEffect(() => {
    fetchData()
  }, [])

  return (
    <div>
      <h2 className="my-2 text-lg font-bold">Stock</h2>
      <table className="w-full">
        <thead>
          <tr>
            <th>Stock ID</th>
            <th>Product ID</th>
            <th>Quantity</th>
            <th>Updated at</th>
          </tr>
        </thead>
        <tbody>
          {stockList.map((row) => (
            <tr key={row.id}>
              <td className="text-center">{row.id}</td>
              <td className="text-center">{row.product_id}</td>
              <td>{row.quantity}</td>
              <td>{row.updated_at}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}
