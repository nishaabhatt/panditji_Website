// components/UserTable.js
import React from 'react';

const UserTable = ({ users }) => {
  return (
    <div>
      <h2 className="text-lg font-semibold mb-2">User Table</h2>
      <table className="min-w-full divide-y divide-gray-200">
        <thead className="bg-gray-50">
          <tr>
            <th className="py-2 px-4 text-left">Name</th>
            <th className="py-2 px-4 text-left">Email</th>
            <th className="py-2 px-4 text-left">Contact</th>
            <th className="py-2 px-4 text-left">Address</th>
            <th className="py-2 px-4 text-left">Pin Code</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <tr key={user.id}>
              <td className="py-2 px-4 text-left">{user.name}</td>
              <td className="py-2 px-4 text-left">{user.email}</td>
              <td className="py-2 px-4 text-left">{user.phone}</td>
              <td className="py-2 px-4 text-left">{user.address}</td>
              <td className="py-2 px-4 text-left">{user.pincode}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default UserTable;
