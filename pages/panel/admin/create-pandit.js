// pages/panel/admin/create-pandit.js
import React, { useState } from 'react';
import Layout from '../../../src/components/componentsDashboard/Layout';
import AdminSidebar from '../../../src/components/componentsDashboard/adminSidebar';
import { VscEye, VscEyeClosed } from 'react-icons/vsc';
import Link from "next/link";

const CreatePandit = () => {

    

      // State to manage admin creation
  const [newAdminUserID, setNewAdminUserID] = useState('');
  const [newAdminUserName, setNewAdminUserName] = useState('');
  const [passwordOfUser, setPasswordOfUser] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [admins, setAdmins] = useState([]);

  const generateReports = () => {
    console.log('Generating reports for all admins.');
    // Your logic for generating reports
  };

  const createAdmin = () => {
    console.log('Creating a new admin.');
    // Validate input
    if (!newAdminUserID || !newAdminUserName || !passwordOfUser || passwordOfUser !== confirmPassword) {
      alert('Please enter valid details and ensure passwords match.');
      return;
    }

    // Create a new admin object
    const newAdmin = {
      userID: newAdminUserID,
      userName: newAdminUserName,
      password: passwordOfUser,
    };

    // Update the list of admins
    setAdmins([...admins, newAdmin]);

    // Clear input fields
    setNewAdminUserID('');
    setNewAdminUserName('');
    setPasswordOfUser('');
    setConfirmPassword('');
  };

  return (
    <div className="flex h-screen bg-gray-100">
      <AdminSidebar />
      <div className="flex-1 flex flex-col overflow-hidden">
      <div className=" p-4">
        {/* Content for create Pandit Ji page */}
        <h1>Create Pandit Ji Page</h1>
        
        <div className="mb-4">
        <div className="flex items-center mb-2">
          <input
            type="text"
            placeholder="Enter UserID"
            value={newAdminUserID}
            onChange={(e) => setNewAdminUserID(e.target.value)}
            className="mr-2 p-2 border"
          />
          <input
            type="text"
            placeholder="Enter UserName"
            value={newAdminUserName}
            onChange={(e) => setNewAdminUserName(e.target.value)}
            className="mr-2 p-2 border"
          />
          {/* Eye icon for toggling password visibility */}
          <div className="relative mr-2">
            <input
              type={showPassword ? 'text' : 'password'}
              placeholder="Enter Password"
              value={passwordOfUser}
              onChange={(e) => setPasswordOfUser(e.target.value)}
              className="p-2 border w-40"
            />
            <span
              onClick={() => setShowPassword(!showPassword)}
              className="absolute inset-y-0 right-0 flex items-center pr-2 cursor-pointer"
            >
              {showPassword ? <VscEyeClosed /> : <VscEye />}
            </span>
          </div>
          <input
            type="password"
            placeholder="Confirm Password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            className="mr-2 p-2 border"
          />
          <button
            className="bg-green-500 text-white py-2 px-4 rounded"
            onClick={createAdmin}
          >
            Add Pandit
          </button>
        </div>
      </div>
      {/* Display the list of admins */}
      

    
{admins.length > 0 && (
  <div className="mb-4">
    <h2 className="text-lg font-bold mb-2">PanditJi List:</h2>
    <ul>
      {admins.map((admin, index) => (
        <li key={index}>
          <Link href={`/panel/admin/${admin.userID}`}>
            <p>{`UserID: ${admin.userID}, UserName: ${admin.userName}`}</p>
          </Link>
        </li>
      ))}
    </ul>
  </div>
)}



      </div>
      </div>
      </div>
  );
};

export default CreatePandit;
