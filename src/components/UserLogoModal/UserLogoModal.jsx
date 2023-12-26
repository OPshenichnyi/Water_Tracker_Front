import React, { useState } from "react";
import UserSettingsModal from "../SettingModal/SettingModal";
import UserLogoutModal from "../UserLogoutModal/UserLogoutModal";
import { Wrapper, Button, Modal } from "./UserLogoModal.styled";

const UserLogoModal = () => {
  const [isUserInfoModalOpen, setUserInfoModalOpen] = useState(false);
  const [isUserLogoutModalOpen, setUserLogoutModalOpen] = useState(false);

  const handleSettingClick = () => {
    setUserInfoModalOpen(true);
  };

  const handleLogoutClick = () => {
    setUserLogoutModalOpen(true);
  };

  return (
    <Modal className="user-logo-modal">
      <Wrapper>
        <Button onClick={handleSettingClick}>Setting</Button>
        <Button onClick={handleLogoutClick}>Log out</Button>
      </Wrapper>
      {isUserInfoModalOpen && (
        <UserSettingsModal onClose={() => setUserInfoModalOpen(false)} />
      )}
      {isUserLogoutModalOpen && (
        <UserLogoutModal onClose={() => setUserLogoutModalOpen(false)} />
      )}
    </Modal>
  );
};

export default UserLogoModal;
