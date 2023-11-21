// // components/Sidebar.js
// import Link from 'next/link';

// const Sidebar = () => {
//   return (
//     <aside className="w-50 bg-gray-800">
//       <div className="flex flex-col h-full p-4">
//       <Link href="/panel/superAdmin">
//           <h1 className="text-white font-bold text-xl mb-6">Super Admin Panel</h1>
//         </Link>
//         <Link href="/panel/admin">
//           <h1 className="text-white font-bold text-xl mb-6">Admin Panel</h1>
//         </Link>
//         <Link href="/panel/panditJi">
//           <h1 className="text-white font-bold text-xl mb-6">Panditji Panel</h1>
//         </Link>
//         {/* Add more sidebar links if needed */}
//       </div>
//     </aside>
//   );
// };

// export default Sidebar;

// components/SuperAdminSidebar.js
// import Link from 'next/link';

// const SuperAdminSidebar = () => {
//   return (
//     <aside className="w-50 bg-gray-800">
//       <div className="flex flex-col h-full p-4">
//         <Link href="/super-admin/generate-report">
//           <h1 className="text-white font-bold text-xl mb-6 cursor-pointer">Generate Report</h1>
//         </Link>
//         <Link href="/super-admin/create-admin">
//           <h1 className="text-white font-bold text-xl mb-6 cursor-pointer">Create Admin</h1>
//         </Link>
//         {/* Add more sidebar links if needed */}
//       </div>
//     </aside>
//   );
// };

// export default SuperAdminSidebar;

// components/SuperAdminSidebar.js
import Link from 'next/link';
import { useState } from 'react';

const SuperAdminSidebar = () => {
  const [showCreateAdminForm, setShowCreateAdminForm] = useState(false);

  const toggleCreateAdminForm = () => {
    setShowCreateAdminForm(!showCreateAdminForm);
  };

  return (
    <aside className="w-30 md:w-50 bg-gray-800">
      <div className="flex flex-col h-full p-4">
        <Link href="/super-admin/generate-report">
          <h1 className="text-white font-bold text-lg md:text-xl mb-6 cursor-pointer">Generate Report</h1>
        </Link>
        <h1 onClick={toggleCreateAdminForm} className="text-white font-bold text-lg md:text-xl mb-6 cursor-pointer">
          Create Admin
        </h1>
        {showCreateAdminForm && (
          <Link href="/super-admin/create-admin">
            <h1 className="text-white  ml-4">Create Admin</h1>
          </Link>
        )}
        {/* Add more sidebar links if needed */}
      </div>
    </aside>
  );
};

export default SuperAdminSidebar;



