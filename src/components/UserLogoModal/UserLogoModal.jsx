import React, { useState, useEffect, useRef } from "react";

import { modalScrollOff } from "components/Utils/utils";
import UserSettingsModal from "../SettingModal/SettingModal";
import UserLogoutModal from "../UserLogoutModal/UserLogoutModal";
import {
  Wrapper,
  Button,
  Modal,
  Svg,
  Item,
  
} from "./UserLogoModal.styled";
import sprite from "../../common/symbol-defs.svg";
import MainModal from "../MainModal/MainModal";


const UserLogoModal = ({ position, closeModal, open, headerRef }) => {
  const [isUserLogoutModalOpen, setUserLogoutModalOpen] = useState(false);
  const [modalActive, setModalActive] = useState(false);
  const modalRef = useRef(null);
  
  modalScrollOff(modalActive);

  const handleLogoutClick = () => {
    
    setUserLogoutModalOpen(true);
    closeModal()
  };

   const handleSettingClick = () => {
    
    setModalActive(true);
    closeModal()
  };

  useEffect(() => {
    const handleScroll = () => {
      if (modalRef.current && open) {
        const headerRect = headerRef.current.getBoundingClientRect();
        const newTop = headerRect.bottom;
        const newLeft = headerRect.left;

        modalRef.current.style.top = `${newTop}px`;
        modalRef.current.style.left = `${newLeft}px`;
      }
    };

    if (open) {
      window.addEventListener("scroll", handleScroll);
    }

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [open, headerRef]);

 

  const handleModalClick = (event) => {
    event.stopPropagation();
   
  };

  

  return (

    <div>
      
        <Modal position={position} onClick={handleModalClick} ref={modalRef}>
          <Wrapper>
            <Item>
              <Svg width={16} height={16}>
                <use href={`${sprite}#cog-tooth`} />
              </Svg>
              <Button onClick={handleSettingClick}>Setting</Button>
            </Item>
            <Item>
              <Svg width={16} height={16}>
                <use href={`${sprite}#arrow`} />
              </Svg>
              <Button onClick={handleLogoutClick}>Log out</Button>
            </Item>
          </Wrapper>
        </Modal>
      

       <MainModal active={modalActive} setActive={setModalActive}>
        <UserSettingsModal
          closeModal={() => setModalActive(false)}
        ></UserSettingsModal>
      </MainModal>
    
      <MainModal active={isUserLogoutModalOpen} setActive={setUserLogoutModalOpen}>
        <UserLogoutModal
         
          closeModal={() => setUserLogoutModalOpen(false)}
        ></UserLogoutModal>
      </MainModal>

    </div>
 
  );
};

export default UserLogoModal;





