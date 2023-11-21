// pages/super-admin/create-admin.js
import React, { useState } from 'react';
import bcrypt from 'bcryptjs';
import Layout from '../../src/components/componentsDashboard/Layout';
import { VscEye, VscEyeClosed } from 'react-icons/vsc';
import Link from 'next/link';

const CreateAdmin = () => {
  const [newAdminUserID, setNewAdminUserID] = useState('');
  const [newAdminUserName, setNewAdminUserName] = useState('');
  const [passwordOfUser, setPasswordOfUser] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [admins, setAdmins] = useState([]);

  const createAdmin = () => {
    console.log('Creating a new admin.');
    console.log('newAdminUserID:', newAdminUserID);
    console.log('newAdminUserName:', newAdminUserName);
    console.log('passwordOfUser:', passwordOfUser);
    console.log('confirmPassword:', confirmPassword);

    if (!newAdminUserID || !newAdminUserName || !passwordOfUser || passwordOfUser !== confirmPassword) {
      alert('Please enter valid details and ensure passwords match.');
      return;
    }

    const saltRounds = 10;
    bcrypt.hash(passwordOfUser, saltRounds, (err, hashedPassword) => {
      if (err) {
        console.error('Error hashing password:', err);
        return;
      }

      const newAdmin = {
        userID: newAdminUserID,
        userName: newAdminUserName,
        password: hashedPassword,
      };

      setAdmins([...admins, newAdmin]);

      setNewAdminUserID('');
      setNewAdminUserName('');
      setPasswordOfUser('');
      setConfirmPassword('');
    });
  };

  const deleteAdmin = (adminUserID) => {
    const updatedAdmins = admins.filter((admin) => admin.userID !== adminUserID);
    setAdmins(updatedAdmins);
  };

  const confirmDelete = (adminUserID) => {
    const inputUserID = prompt('Enter your UserID to confirm deletion:');
    const inputPassword = prompt('Enter your Password to confirm deletion:');

    const adminToDelete = admins.find((admin) => admin.userID === adminUserID);

    if (adminToDelete) {
      bcrypt.compare(inputPassword, adminToDelete.password, (err, result) => {
        if (err) {
          console.error('Error comparing passwords:', err);
          return;
        }

        if (result) {
          deleteAdmin(adminUserID);
        } else {
          alert('Invalid UserID or Password. Deletion canceled.');
        }
      });
    }
  };

  return (
    <Layout>
      <div className="w-3/4 p-4 m-7 md:m-0">
        <h1>Create Admin Page</h1>
        <div className="mb-4">
          <div className="flex flex-col md:flex-row gap-3   items-center mb-2">
            <input
              type="text"
              placeholder="Enter UserID"
              value={newAdminUserID}
              onChange={(e) => setNewAdminUserID(e.target.value)}
              className="mr-2 p-2 border "
            />
            <input
              type="text"
              placeholder="Enter UserName"
              value={newAdminUserName}
              onChange={(e) => setNewAdminUserName(e.target.value)}
              className="mr-2 p-2 border"
            />
            <div className="relative mr-2">
              <input
                type={showPassword ? 'text' : 'password'}
                placeholder="Enter Password"
                value={passwordOfUser}
                onChange={(e) => setPasswordOfUser(e.target.value)}
                className="p-2 border w-30"
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
            <button className="bg-green-500 text-white py-2 px-4 rounded w-full" onClick={createAdmin}>
              Create Admin
            </button>
          </div>
        </div>

        {admins.length > 0 && (
          <div className="mb-4">
            <h2 className="text-lg font-bold mb-2">Admins List:</h2>
            <ul>
              {admins.map((admin, index) => (
                <li key={index}>
                  <div className="flex items-center">
                    <Link href={`/panel/admin/${admin.userID}`}>
                      <p className="cursor-pointer">
                        {`UserID: ${admin.userID}, UserName: ${admin.userName}`}
                      </p>
                    </Link>
                    <span
                      className="ml-2 text-red-500 cursor-pointer"
                      onClick={() => confirmDelete(admin.userID)}
                    >
                      🗑️
                    </span>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </Layout>
  );
};

export default CreateAdmin;
