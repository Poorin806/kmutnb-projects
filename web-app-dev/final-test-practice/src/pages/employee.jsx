import { useEffect, useState } from "react";
import axios from "axios";
import { API_BASE_URL } from "../utils/api";

export default function EmployeePage() {
  const [data, setData] = useState([]);
  const [deptData, setDeptData] = useState([]);
  const [positionData, setPositionData] = useState([]);

  const fetch = async () => {
    const empRes = await axios.get(`${API_BASE_URL}/employee.php`);
    const deptRes = await axios.get(`${API_BASE_URL}/department.php`);
    const positionRes = await axios.get(`${API_BASE_URL}/position.php`);

    if (
      empRes.status === 200 &&
      deptRes.status === 200 &&
      positionRes.status === 200
    ) {
      const stringData = JSON.stringify(empRes.data);
      const arrayData = JSON.parse(stringData);
      setData(arrayData ?? []);

      const stringDeptData = JSON.stringify(deptRes.data);
      const arrayDeptData = JSON.parse(stringDeptData);
      setDeptData(arrayDeptData ?? []);

      const stringPositionData = JSON.stringify(positionRes.data);
      const arrayPositionData = JSON.parse(stringPositionData);
      setPositionData(arrayPositionData ?? []);
    }
  };

  // Fetch data from API when component is mounted
  useEffect(() => {
    fetch();
  }, []);

  return (
    <>
      <h2>Employee</h2>
      <hr />

      {/* For debugging purpose only. */}
      {/* <pre className="debug-container">{JSON.stringify(data)}</pre>
      <pre className="debug-container">{JSON.stringify(deptData)}</pre>
      <pre className="debug-container">{JSON.stringify(positionData)}</pre> */}

      <table>
        <thead>
          <tr>
            <th>Employee ID</th>
            <th>Name</th>
            <th>Department</th>
            <th>Position</th>
          </tr>
        </thead>
        <tbody>
          {data.length === 0 && (
            <tr>
              <td colSpan={4}>No data available.</td>
            </tr>
          )}

          {data.length > 0 &&
            data.map((row) => (
              <tr key={row.EmpID}>
                <td>{row.EmpID}</td>
                <td>{row.EmpName}</td>
                <td>
                  {deptData.find((dept) => dept.DepartID === row.DepartID)
                    ?.DepartName || row.DepartID}
                </td>
                <td>
                  {/* How to hell is this key, it's PosID not posID? */}
                  {positionData.find((pos) => pos.posID === row.PosID)
                    ?.posName || row.PosID}
                </td>
              </tr>
            ))}
        </tbody>
      </table>
    </>
  );
}
