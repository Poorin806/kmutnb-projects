import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { API_URI } from '../utils/config'

export default function CategoryTable() {
  const [categoryList, setCategoryList] = useState([])

  const fetchData = async () => {
    try {
      const categoryRes = await axios.get(`${API_URI}/category.php`)

      setCategoryList(categoryRes.data)
    } catch (err) {
      console.error('Error: '.err)
    }
  }

  useEffect(() => {
    fetchData()
  }, [])

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
              <td>{row.id}</td>
              <td>{row.name}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}
