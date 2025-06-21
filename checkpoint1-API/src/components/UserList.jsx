import React, { useEffect, useState } from "react";
import axios from "axios";


const UserList = () => {
  const [listOfUsers, setListOfUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/users")
      .then((response) => {
        setListOfUsers(response.data);
        setLoading(false);
      })
      .catch((err) => {
        setError("Failed to fetch users.");
        setLoading(false);
      });
  }, []);

  if (loading) return <div className="text-center mt-10 text-lg">Loading...</div>;
  if (error) return <div className="text-center mt-10 text-red-500">{error}</div>;

  return (
    <div className="max-w-3xl mx-auto mt-10 p-6 bg-white rounded-lg ">
      <h1 className="text-2xl font-bold mb-6 text-center text-black">User List</h1>
      <ul className="space-y-4">
        {listOfUsers.map((user) => (
          <li key={user.id} className="p-4 border rounded-lg">
            <div className="font-semibold text-lg">{user.name}</div>
            <div className="text-gray-600">@{user.username}</div>
            <div className="text-gray-700">{user.email}</div>
            <div className="text-gray-500 text-sm">{user.phone} | {user.website}</div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default UserList;