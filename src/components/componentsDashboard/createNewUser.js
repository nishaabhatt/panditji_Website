import React, { useState } from 'react';
import TextField from "@mui/material/TextField";
import Dialog from "@mui/material/Dialog";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import Button from "../Button";
import { RiCloseLine } from "react-icons/ri";
import { v4 as uuidv4 } from 'uuid';

const CreateNewUserForm = ({ onCreateUser }) => {
  const [modalOpen, setModalOpen] = useState(false);
  const [formData, setFormData] = useState({
    userId: '',
    password: '',
    name: '',
    email: '',
    phone: '',
    address: '',
    pincode: '',
  });

  const handleClose = () => {
    setModalOpen(false);
  };

  const handleGenerateCredentials = () => {
    // const generatedUserId = `user_${uuidv4()}`;
    // const generatedPassword = Math.random().toString(36).slice(-8);
    setFormData({
    //   userId: generatedUserId,
    //   password: generatedPassword,
      name: '',
      email: '',
      phone: '',
      address: '',
      pincode: '',
    });
    setModalOpen(true);
  };

  const handleInputChange = (e) => {
    const { id, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [id]: value,
    }));
  };

  const handleSubmit = () => {
    onCreateUser(formData);
    setModalOpen(false);
    setFormData({
    //   userId: '',
    //   password: '',
      name: '',
      email: '',
      phone: '',
      address: '',
      pincode: '',
    });
  };

  return (
    <div>
      <Button
        hide="hidden"
        show="block"
        name={"Create New User"}
        handleFunction={handleGenerateCredentials}
      />
      <Dialog open={modalOpen} onClose={handleClose}>
        <div className="flex px-5 justify-between items-center">
          <DialogTitle>
            Enter your details to register as Pandit jii
          </DialogTitle>
          <RiCloseLine
            size={25}
            onClick={() => setModalOpen(false)}
            className="cursor-pointer"
          />
        </div>
        <DialogContent>
          {/* <p>User ID: {formData.userId}</p>
          <p>Password: {formData.password}</p> */}
          <TextField
            autoFocus
            margin="dense"
            id="name"
            label="Full Name"
            type="text"
            fullWidth
            variant="outlined"
            value={formData.name}
            onChange={handleInputChange}
          />
          <TextField
            autoFocus
            margin="dense"
            id="email"
            label="Email Address"
            type="email"
            fullWidth
            variant="outlined"
            value={formData.email}
            onChange={handleInputChange}
          />
          <TextField
            autoFocus
            margin="dense"
            id="phone"
            label="Contact Number"
            type="text"
            fullWidth
            variant="outlined"
            value={formData.phone}
            onChange={handleInputChange}
          />
          <TextField
            autoFocus
            margin="dense"
            id="address"
            label="Your Address"
            type="text"
            fullWidth
            variant="outlined"
            value={formData.address}
            onChange={handleInputChange}
          />
          <TextField
            autoFocus
            margin="dense"
            id="pincode"
            label="Pin Code"
            type="text"
            fullWidth
            variant="outlined"
            value={formData.pincode}
            onChange={handleInputChange}
          />
        </DialogContent>
        <div className="flex justify-center items-center py-3">
          <button className="btn-primary" onClick={handleSubmit}>
            Submit
          </button>
        </div>
      </Dialog>
    </div>
  );
};

export default CreateNewUserForm;
