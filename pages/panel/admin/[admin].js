// pages/panel/admin/[userID].js
import React from 'react';
import Layout from '../../../src/components/componentsDashboard/Layout';
import AdminSidebar from "../../../src/components/componentsDashboard/adminSidebar";

const AdminDetailPage = ({ userID }) => {
  return (
    <div className="flex h-screen bg-gray-100">
    <AdminSidebar />
    <div className="flex flex-1 flex-col overflow-hidden"><h1>Welcome to the Admin Dashboard for UserID: {userID}</h1></div>
      
     
      </div>
  );
};

export default AdminDetailPage;
