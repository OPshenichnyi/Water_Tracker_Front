import React, { useState } from "react";
import { modalScrollOff } from "components/Utils/utils";
import UserSettingsModal from "../SettingModal/SettingModal";
import UserLogoutModal from "../UserLogoutModal/UserLogoutModal";
import { Wrapper, Button, Modal, Svg, Item } from "./UserLogoModal.styled";
import sprite from "../../common/symbol-defs.svg";
import MainModal from "../MainModal/MainModal";
const UserLogoModal = ({ position }) => {
  const [isUserLogoutModalOpen, setUserLogoutModalOpen] = useState(false);
  const [modalActive, setModalActive] = useState(false);
  modalScrollOff(modalActive);

  const handleLogoutClick = () => {
    setUserLogoutModalOpen(true);
  };

  return (
    <Modal position={position}>
      <Wrapper>
        <Item>
          <Svg width={16} height={16}>
            <use href={`${sprite}#cog-tooth`} />
          </Svg>
          <Button onClick={() => setModalActive(true)}>Setting</Button>
        </Item>
        <Item>
          <Svg width={16} height={16}>
            <use href={`${sprite}#arrow`} />
          </Svg>
          <Button onClick={handleLogoutClick}>Log out</Button>
        </Item>
        {isUserLogoutModalOpen && (
          <UserLogoutModal
            open={isUserLogoutModalOpen}
            onClose={() => setUserLogoutModalOpen(false)}
          />
        )}
      </Wrapper>
      <MainModal active={modalActive} setActive={setModalActive}>
        <UserSettingsModal
          closeModal={() => setModalActive(false)}
        ></UserSettingsModal>
      </MainModal>
    </Modal>
  );
};

export default UserLogoModal;
