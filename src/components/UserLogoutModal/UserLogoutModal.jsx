import React, { useState } from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Modal from '@mui/material/Modal';
import { style, ButtonCancel, ButtonLogout, titleStyle, descriptionStyle } from './UserLogoutModal.styles';

const UserLogoutModal = ({ onClose }) => {
  const [open, setOpen] = useState(false);

  const handleOpen = () => setOpen(true);
  const handleClose = () => {
    setOpen(false);
    onClose();
  };

  const handleLogout = () => {
    handleClose();
  };

  return (
    <div>
      <Button onClick={handleOpen}>Open modal</Button>
      <Modal open={open} onClose={handleClose}>
        <Box sx={style}>
          <h2 id="modal-title" style={titleStyle}>
            Log out
          </h2>
          <p id="modal-description" style={descriptionStyle}>
            Do you really want to leave?
          </p>
          <ButtonCancel onClick={handleClose}>Cancel</ButtonCancel>
          <ButtonLogout onClick={handleLogout}>Logout</ButtonLogout>
        </Box>
      </Modal>
    </div>
  );
};

export default UserLogoutModal;
