// // pages/panditji.js
// import Layout from '../../src/components/componentsDashboard/Layout';

// const PanditjiPage = () => {
//   return (
//     <Layout>
//       <div className="p-8">
//         <h1 className="text-2xl font-bold mb-4">Super Admin Dashboard</h1>
//         {/* Add your panditji panel content here */}
//       </div>
//     </Layout>
//   );
// };

// export default PanditjiPage;

// import React from 'react';
// import Layout from '../../src/components/componentsDashboard/Layout';

// const SuperAdmin = () => {
//   // Placeholder functions
//   const generateReports = () => {
//     // Logic to generate reports
//     console.log('Generating reports for all admins.');
//   };

//   const createAdmin = () => {
//     // Logic to create a new admin
//     console.log('Creating a new admin.');
//   };

//   const viewPayments = () => {
//     // Logic to view payments
//     console.log('Viewing payments.');
//   };

//   const viewBookings = () => {
//     // Logic to view bookings
//     console.log('Viewing bookings.');
//   };

//   const manageContent = () => {
//     // Logic for content management
//     console.log('Managing content.');
//   };

//   return (
//     <Layout>
//       <div className="mb-4">
//         <button
//           className="bg-blue-500 text-white py-2 px-4 rounded"
//           onClick={generateReports}
//         >
//           Generate Reports
//         </button>
//       </div>
//       <div className="mb-4">
//         <button
//           className="bg-green-500 text-white py-2 px-4 rounded"
//           onClick={createAdmin}
//         >
//           Make New Admin
//         </button>
//       </div>
//       <div className="mb-4">
//         <button
//           className="bg-yellow-500 text-white py-2 px-4 rounded"
//           onClick={viewPayments}
//         >
//           View Payments
//         </button>
//       </div>
//       <div className="mb-4">
//         <button
//           className="bg-indigo-500 text-white py-2 px-4 rounded"
//           onClick={viewBookings}
//         >
//           View Bookings
//         </button>
//       </div>
//       <div>
//         <button
//           className="bg-purple-500 text-white py-2 px-4 rounded"
//           onClick={manageContent}
//         >
//           Content Management
//         </button>
//       </div>
//     </Layout>
//   );
// };

// export default SuperAdmin;


// import React, { useState } from 'react';
// import Layout from '../../src/components/componentsDashboard/Layout';

// const SuperAdmin = () => {
//   // State to manage admin creation
//   const [newAdminUserID, setNewAdminUserID] = useState('');
//   const [newAdminUserName, setNewAdminUserName] = useState('');
//   const [passwordOfUser, setPasswordOfUser] = useState('');
//   const [admins, setAdmins] = useState([]);

//   const generateReports = () => {
//     console.log('Generating reports for all admins.');
//     // Your logic for generating reports
//   };

//   const createAdmin = () => {
//     console.log('Creating a new admin.');
//     // Validate input
//     if (!newAdminUserID || !newAdminUserName || !passwordOfUser) {
//       alert('Please enter both UserID and UserName.');
//       return;
//     }

//     // Create a new admin object
//     const newAdmin = {
//       userID: newAdminUserID,
//       userName: newAdminUserName,
//       password: passwordOfUser,
//     };

//     // Update the list of admins
//     setAdmins([...admins, newAdmin]);

//     // Clear input fields
//     setNewAdminUserID('');
//     setNewAdminUserName('');
//     setPasswordOfUser('');
//   };

//   const viewPayments = () => {
//     console.log('Viewing payments.');
//     // Your logic for viewing payments
//   };

//   const viewBookings = () => {
//     console.log('Viewing bookings.');
//     // Your logic for viewing bookings
//   };

//   const manageContent = () => {
//     console.log('Managing content.');
//     // Your logic for content management
//   };

//   return (
//     <Layout>
//       <div className="mb-4">
//         <button
//           className="bg-blue-500 text-white py-2 px-4 rounded"
//           onClick={generateReports}
//         >
//           Generate Reports
//         </button>
//       </div>
//       <div className="mb-4">
//         <div className="flex items-center mb-2">
//           <input
//             type="text"
//             placeholder="Enter UserID"
//             value={newAdminUserID}
//             onChange={(e) => setNewAdminUserID(e.target.value)}
//             className="mr-2 p-2 border"
//           />
//           <input
//             type="text"
//             placeholder="Enter UserName"
//             value={newAdminUserName}
//             onChange={(e) => setNewAdminUserName(e.target.value)}
//             className="mr-2 p-2 border"
//           />
//             <input
//             type="text"
//             placeholder="Enter Password"
//             value={newAdminUserName}
//             onChange={(e) => setPasswordOfUser(e.target.value)}
//             className="mr-2 p-2 border"
//           />
//           <button
//             className="bg-green-500 text-white py-2 px-4 rounded"
//             onClick={createAdmin}
//           >
//             Create Admin
//           </button>
//         </div>
//       </div>
//       {/* Display the list of admins */}
//       {admins.length > 0 && (
//         <div className="mb-4">
//           <h2 className="text-lg font-bold mb-2">Admins List:</h2>
//           <ul>
//             {admins.map((admin, index) => (
//               <li key={index}>{`UserID: ${admin.userID}, UserName: ${admin.userName}`}</li>
//             ))}
//           </ul>
//         </div>
//       )}
//       {/* Continue with other functionalities */}
//       {/* ... */}
//     </Layout>
//   );
// };

// export default SuperAdmin;



import React, { useState } from 'react';
import { VscEye, VscEyeClosed } from 'react-icons/vsc';
import Link from "next/link";
import Layout from '../../src/components/componentsDashboard/Layout';
import Sidebar from "../../src/components/componentsDashboard/Sidebar";

const SuperAdmin = () => {
 
   
  return (
    <Layout>
      <h1>Super Admin Dashboard</h1>
    </Layout>
  );
};

export default SuperAdmin;

// pages/super-admin.js




