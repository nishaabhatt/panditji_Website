// pages/admin.js
import React, { useState } from 'react';
import Layout from '../../src/components/componentsDashboard/Layout';
import SearchBar from '../../src/components/componentsDashboard/searchBar';
import CreateNewUser from "../../src/components/componentsDashboard/createNewUser"
import UserTable from '../../src/components/componentsDashboard/userTable';
import Sidebar from "../../src/components/componentsDashboard/Sidebar";

const AdminPage = () => {
  const [users, setUsers] = useState([]);
  const [filteredUsers, setFilteredUsers] = useState([]);

  const handleSearch = (query) => {
    const filtered = users.filter((user) =>
      user.name.toLowerCase().includes(query.toLowerCase()) || user.email.toLowerCase().includes(query.toLowerCase())
    );
    setFilteredUsers(filtered);
  };

  const handleCreateUser = (newUser) => {
    setUsers((prevUsers) => [...prevUsers, { id: Date.now(), ...newUser }]);
  };

  return (
    <Layout>
        
      <div className="p-8">
        <h1 className="text-2xl font-bold mb-4">Admin Dashboard</h1>
        <div className="flex flex-row justify-between">
        <SearchBar onSearch={handleSearch} />
        <CreateNewUser onCreateUser={handleCreateUser} />
        </div>
       
        <UserTable users={filteredUsers.length > 0 ? filteredUsers : users} />
      </div>
    </Layout>
  );
};

export default AdminPage;
