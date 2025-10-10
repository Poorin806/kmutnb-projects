import React from 'react'

export default function ProductTable() {
  return (
    <div>
      <h2 className="my-2 text-lg font-bold">Product</h2>
      <table className="w-full">
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Category</th>
            <th>Quantity</th>
          </tr>
        </thead>
      </table>
    </div>
  )
}
