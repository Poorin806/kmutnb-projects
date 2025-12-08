import React, { useContext, useEffect, useState } from "react";

import axios from "axios";
import UserDetailModal from "../components/user-detail-modal";
import { ThemeContext } from "../components/theme-context";

const USER_URI = "https://jsonplaceholder.typicode.com/users";

export default function UserPage() {
  const { theme } = useContext(ThemeContext);

  // State: Array object
  const [userList, setUserList] = useState([]);

  // State: boolean (true/false)
  const [loading, setLoading] = useState(true);

  // State: null | string
  const [error, setError] = useState(null);

  // State: boolean (true/false) for toggle modal
  const [open, setOpen] = useState(false);

  // State: object (Data type reference from API) show user deail in the modal
  const [userDetail, setUserDetail] = useState(null);

  const openModal = () => {
    setOpen(true);
  };
  const closeModal = () => {
    setOpen(false);
  };

  // Fetch data function
  const fetchUserData = async () => {
    try {
      // Fetch API (user data)
      const res = await axios.get(USER_URI);

      // After fetched, store the data into `userList`
      setUserList(res.data);
      console.log(res.data);

      setLoading(false);
    } catch (err) {
      console.error("Failed to fetch user data: ", err);
      setLoading(false);
      setError(err);
    }
  };

  useEffect(() => {
    fetchUserData();
  }, []);

  if (loading) return "Loading....";

  if (error) return `Error: ${error}`;

  return (
    <div className="container">
      <h1>Users - {theme}</h1>

      <table>
        <thead>
          <tr>
            <th align="center">#</th>
            <th>Name</th>
            <th>Email</th>
            <th>Modal</th>
          </tr>
        </thead>
        <tbody>
          {/* If: data is more than 0, show the data in the table body */}
          {userList &&
            userList.length > 0 &&
            userList.map((row, index) => (
              <tr key={index}>
                <td align="center">{index + 1}</td>
                <td>{row.name}</td>
                <td>{row.email}</td>
                <td>
                  <button
                    onClick={() => {
                      setUserDetail(row);
                      openModal();
                    }}
                  >
                    Open modal
                  </button>
                </td>
              </tr>
            ))}
        </tbody>
      </table>

      <UserDetailModal
        open={open}
        onClose={closeModal}
        user={userDetail}
        number={123}
      />
    </div>
  );
}
