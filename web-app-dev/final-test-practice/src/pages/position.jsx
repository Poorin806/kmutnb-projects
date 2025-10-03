import { useEffect, useState } from "react";
import axios from "axios";
import { API_BASE_URL } from "../utils/api";

export default function PositionPage() {
  const [data, setData] = useState([]);

  const fetch = async () => {
    const res = await axios.get(`${API_BASE_URL}/position.php`);

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
      <h2>Position</h2>
      <hr />

      {/* For debugging purpose only. */}
      {/* <pre className="debug-container">{JSON.stringify(data)}</pre> */}

      <table>
        <thead>
          <tr>
            <th>Position ID</th>
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
              <tr key={row.posID}>
                <td>{row.posID}</td>
                <td>{row.posName}</td>
              </tr>
            ))}
        </tbody>
      </table>
    </>
  );
}
