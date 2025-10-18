import React, { useEffect, useState } from "react";

import axios from "axios";

const API_URI = "http://localhost/kmutnb/web-lab/final-review/api";

export default function HomePage() {
  const [loading, setLoading] = useState(true);
  const [productList, setProductList] = useState([]);
  const [categoryList, setCategoryList] = useState([]);

  const [count, setCount] = useState(0);

  const fetchProductData = async () => {
    try {
      const res = await axios.get(`${API_URI}/product.php`);
      // console.log(res.data);
      setProductList(res.data);
    } catch (err) {
      console.error("Error: ", err);
    } finally {
      setLoading(false);
    }
  };

  const fetchCategoryData = async () => {
    try {
      const res = await axios.get(`${API_URI}/category.php`);
      console.log(res.data);
      setCategoryList(res.data);
    } catch (err) {
      console.error("Error: ", err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(
    () => {
      // Statement...
      fetchCategoryData();
      fetchProductData();
    },

    // Dependencies
    []
  );

  useEffect(() => {
    if (count > 0) {
      alert(`Current counting: ${count}`);
    }
  }, [count]);

  // Page loading
  if (loading) {
    return "Loading....";
  }

  // Final Results
  return (
    <div>
      <h1>Welcome back, this is Final Review</h1>
      <hr />

      <button
        onClick={() => {
          setCount(count + 1);
        }}
      >
        Hit me
      </button>

      <table>
        <thead>
          <tr>
            <th>Product ID</th>
            <th>Name</th>
            <th>Descrpition</th>
            <th>Price</th>
            <th>Created at</th>
            <th>Category ID</th>
            <th>Category name</th>
          </tr>
        </thead>

        {/* Need to fetch & loop from API */}
        <tbody>
          {!productList ||
            (productList.length <= 0 && (
              <tr>
                <td colSpan={6} align="center">
                  No results.
                </td>
              </tr>
            ))}

          {productList.map((row, index) => (
            <tr key={index}>
              <td align="center">{row.id}</td>
              <td>{row.name}</td>
              <td>{row.description}</td>
              <td>$ {row.price}</td>
              <td>{row.created_at}</td>
              <td align="center">{row.category_id}</td>
              <td>
                {categoryList.find((cate) => cate.id === row.category_id).name}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
