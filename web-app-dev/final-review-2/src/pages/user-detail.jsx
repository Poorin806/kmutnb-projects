import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import axios from "axios";

const USER_URI = "https://jsonplaceholder.typicode.com/users";

export default function UserDetailPage() {
  const location = useLocation();
  const pathname = location.pathname;

  // get full URL of app
  const pathSegments = pathname.split("/");

  // get last index of pathSegments (Current URL params)
  const userId = pathSegments[pathSegments.length - 1];

  // State: Array object
  const [userList, setUserList] = useState([]);

  // State: boolean (true/false)
  const [loading, setLoading] = useState(true);

  // State: null | string
  const [error, setError] = useState(null);

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

  if (loading) return "Loading...";

  if (error) return `Failed to fetch data: ${error}`;

  // Type undefined/null/object
  const userResult = userList.find((item) => item.id == userId);

  if (!userResult) return "User not found.";

  return (
    <div>
      <p>Name: {userResult.name}</p>
      <p>Email: {userResult.email}</p>
      <p>Phone: {userResult.phone}</p>
      <p>Company name: {userResult.company.name}</p>
      <p>Etc...</p>
    </div>
  );
}
