import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { API_URI } from '../utils/config'

export default function ProductTable() {
  const [productList, setProductList] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  const fetchData = async () => {
    try {
      const productRes = await axios.get(`${API_URI}/product.php`)
      setProductList(productRes.data)
      setLoading(false)
    } catch (err) {
      console.error('Error: ', err)
      setError(err)
      setLoading(false)
    }
  }

  useEffect(() => {
    fetchData()
  }, [])

  if (loading) {
    return <div className="p-4 text-center">Loading...</div>
  }

  if (error) {
    return (
      <div className="rounded border border-red-600 p-4 text-red-600">
        <h3 className="font-bold">Error loading product data:</h3>
        <p>{error.message}</p>
      </div>
    )
  }

  return (
    <div>
      <h2 className="my-2 text-lg font-bold">Product</h2>
      <table className="w-full">
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Description</th>
            <th>Category ID</th>
            <th>Price</th>
            <th>Created at</th>
          </tr>
        </thead>
        <tbody>
          {productList.map((row) => (
            <tr key={row.id}>
              <td className="text-center">{row.id}</td>
              <td>{row.name}</td>
              <td>{row.description}</td>
              <td>{row.category_id}</td>
              <td>{row.price}</td>
              <td>{row.created_at}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}
