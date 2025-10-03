import { useEffect, useState } from "react";
import axios from "axios";
import { API_BASE_URL } from "../utils/api";

export default function DepartmentPage() {
  const [data, setData] = useState([]);

  const fetch = async () => {
    const res = await axios.get(`${API_BASE_URL}/department.php`);

    if (res.status === 200) {
      const stringData = JSON.stringify(res.data);
      const arrayData = JSON.parse(stringData);
      setData(arrayData ?? []);
    }
  };

  // Fetch data from API when component is mounted
  useEffect(() => {
    fetch();
  }, []);

  return (
    <>
      <h2>Departments</h2>
      <hr />

      {/* For debugging purpose only. */}
      {/* <pre className="debug-container">{JSON.stringify(data)}</pre> */}

      <table>
        <thead>
          <tr>
            <th>Department ID</th>
            <th>Name</th>
          </tr>
        </thead>
        <tbody>
          {data.length === 0 && (
            <tr>
              <td colSpan={2}>No data available.</td>
            </tr>
          )}

          {data.length > 0 &&
            data.map((row) => (
              <tr key={row.DepartID}>
                <td>{row.DepartID}</td>
                <td>{row.DepartName}</td>
              </tr>
            ))}
        </tbody>
      </table>
    </>
  );
}
