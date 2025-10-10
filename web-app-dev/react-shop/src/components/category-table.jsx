import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { API_URI } from '../utils/config'

export default function CategoryTable() {
  const [categoryList, setCategoryList] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  const fetchData = async () => {
    try {
      const categoryRes = await axios.get(`${API_URI}/category.php`)
      setCategoryList(categoryRes.data)
      setLoading(false)
    } catch (err) {
      console.error('Error fetching category data:', err)
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
        <h3 className="font-bold">Error loading category data:</h3>
        <p>{error.message}</p>
      </div>
    )
  }

  return (
    <div>
      <h2 className="my-2 text-lg font-bold">Category</h2>
      <table className="w-full">
        <thead>
          <tr>
            <th>Category ID</th>
            <th>Name</th>
          </tr>
        </thead>
        <tbody>
          {categoryList.map((row) => (
            <tr key={row.id}>
              <td className="text-center">{row.id}</td>
              <td>{row.name}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}
