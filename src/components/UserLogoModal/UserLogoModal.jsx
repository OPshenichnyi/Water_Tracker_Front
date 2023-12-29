import React, { useState } from "react";
import UserSettingsModal from "../SettingModal/SettingModal";
import UserLogoutModal from "../UserLogoutModal/UserLogoutModal";
import { Wrapper, Button, Modal, Svg, Item } from "./UserLogoModal.styled";
import sprite from "../../common/symbol-defs.svg";
import { useDispatch } from "react-redux";
import { logOut } from "../../redux/auth/authOperationApi";

const UserLogoModal = ({ position }) => {
  const [isUserInfoModalOpen, setUserInfoModalOpen] = useState(false);
  const [isUserLogoutModalOpen, setUserLogoutModalOpen] = useState(false);

  const dispatch = useDispatch();
  const handleSettingClick = () => {
    setUserInfoModalOpen(true);
  };

  const handleLogoutClick = () => {
    setUserLogoutModalOpen(true);
    dispatch(logOut());
  };

  return (
    <Modal position={position} >
      <Wrapper>
        <Item>

          <Svg width={16} height={16}>
          <use href={`${sprite}#cog-tooth`} />
          </Svg>
        <Button onClick={handleSettingClick}>
          
            Setting</Button>
        </Item>
        <Item>

          <Svg width={16} height={16}>
          <use href={`${sprite}#arrow`} />
          </Svg>
        <Button onClick={handleLogoutClick}>
           
          Log out</Button>
        </Item>
      {isUserInfoModalOpen && (
        <UserSettingsModal onClose={() => setUserInfoModalOpen(false)} />
      )}
      {isUserLogoutModalOpen && (
        <UserLogoutModal open={isUserLogoutModalOpen} onClose={() => setUserLogoutModalOpen(false)} />
          )}
        

      </Wrapper>
    </Modal>
  );
};

export default UserLogoModal;
