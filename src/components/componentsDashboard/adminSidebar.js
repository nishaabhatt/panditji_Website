// components/AdminSidebar.js
import Link from 'next/link';
import { useState } from 'react';

const AdminSidebar = () => {
  const [showCreatePanditForm, setShowCreatePanditForm] = useState(false);

  const toggleCreatePanditForm = () => {
    setShowCreatePanditForm(!showCreatePanditForm);
  };

  return (
    <aside className="w-50 bg-gray-800">
      <div className="flex flex-col h-full p-4">
        <Link href="/panel/admin/dashboard">
          <h1 className="text-white font-bold text-xl mb-6 cursor-pointer">Admin Dashboard</h1>
        </Link>
        <Link href="/panel/admin/customers">
          <h1 className="text-white font-bold text-xl mb-6 cursor-pointer">Customer Requests</h1>
        </Link>
        <Link href="/panel/admin/create-pandit">
          <h1 onClick={toggleCreatePanditForm} className="text-white font-bold text-xl mb-6 cursor-pointer">
            Create Pandit Ji
          </h1>
        </Link>
        {showCreatePanditForm && (
          <Link href="/panel/admin/create-pandit">
            <h1 className="text-white ml-4">Create Pandit Ji</h1>
          </Link>
        )}
        {/* Add more sidebar links if needed */}
      </div>
    </aside>
  );
};

export default AdminSidebar;
