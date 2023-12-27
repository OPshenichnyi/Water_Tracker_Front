import React, { useState } from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Modal from "@mui/material/Modal";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 592,
  Height: 208,
  bgcolor: "#FFFFFF",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
  borderRadius: 10,
};

const ButtonCancel = {
  background: "#EF5050",
  padding: "10px 30px",
  width: 160,
  height: 44,
  borderRadius: 10,
  color: "#FFFFFF",
  fontFamily: "Roboto",
  fontWeight: 500,
  fontSize: 18,
  lineHeight: 24,
};

const ButtonLogout = {
  background: "#D7E3FF",
  padding: "10px 30px",
  width: 160,
  height: 44,
  borderRadius: 10,
  color: "#407BFF",
  fontFamily: "Roboto",
  fontWeight: 500,
  fontSize: 18,
  lineHeight: 24,
};

const titleStyle = {
  color: "#007bff",
  fontFamily: "Roboto",
  fontWeight: 500,
  fontSize: 26,
  lineHeight: 32,
};

const descriptionStyle = {
  color: "#007bff",
  fontFamily: "Roboto",
  fontWeight: 500,
  fontSize: 18,
  lineHeight: 20,
};

const UserLogoutModal = () => {
  const [open, setOpen] = useState(false);

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

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
