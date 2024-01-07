

import React, { useState,useEffect,useRef} from "react";


import { modalScrollOff } from "components/Utils/utils";
import UserSettingsModal from "../SettingModal/SettingModal";
import UserLogoutModal from "../UserLogoutModal/UserLogoutModal";
import {
  Wrapper,
  Button,
  Modal,
  Svg,
  Item,
  Overlay,
} from "./UserLogoModal.styled";
import sprite from "../../common/symbol-defs.svg";
import MainModal from "../MainModal/MainModal";



const UserLogoModal = ({ position,onClose,open,headerRef  }) => {


  const [isUserLogoutModalOpen, setUserLogoutModalOpen] = useState(false);
  const [modalActive, setModalActive] = useState(false);
  const modalRef = useRef(null);
  const modalOverlay = useRef(null);
  modalScrollOff(modalActive);

  const handleLogoutClick = () => {
    setUserLogoutModalOpen(true);
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
const handleClose = () => {
    
  onClose();
  };


  const handleModalClick = (event) => {
  
    event.stopPropagation();
  };


const handleDocumentClick = (event) => {


    if (
      modalRef.current &&
      !modalRef.current.contains(event.target) &&
      event.target.getAttribute("data-modal-overlay") === "true"
    ) {
      handleClose();
    }
  };

  useEffect(() => {
    const handleDocumentClick = (event) => {
      // Если клик произошел вне модального окна, закрыть UserLogoModal
      if (
        modalRef.current &&
        !modalRef.current.contains(event.target) &&
        event.target.getAttribute("data-modal-overlay") === "true"
      ) {
        handleClose();
      }
    };
    const handleClose = () => {
      setUserLogoutModalOpen(false);
      onClose();
    };
    const handleKeyDown = (event) => {
      if (event.key === "Escape") {
        handleClose();
      }
    };


 


if (open) {
      document.addEventListener("keydown", handleKeyDown);
      document.addEventListener("mousedown", handleDocumentClick);
    }

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.removeEventListener("mousedown", handleDocumentClick);
    };
  }, [open, onClose]);


   return (
    <Overlay ref={modalOverlay} data-modal-overlay="true" onClick={handleDocumentClick}>
      {!isUserLogoutModalOpen && (  
        <Modal position={position} onClick={handleModalClick} ref={modalRef}>
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
          </Wrapper>
          
        </Modal>
      )}
      {isUserLogoutModalOpen && (
        <UserLogoutModal
          open={isUserLogoutModalOpen}
          onClose={() => setUserLogoutModalOpen(false)}
        />
       )}
       <MainModal active={modalActive} setActive={setModalActive}>
            <UserSettingsModal closeModal={() => setModalActive(false)}></UserSettingsModal>
          </MainModal>

    </Overlay>
  );
};

export default UserLogoModal;