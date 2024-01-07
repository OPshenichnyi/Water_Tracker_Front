import React, { useState,useEffect,useRef} from "react";
import { modalScrollOff } from "components/Utils/utils";
import UserSettingsModal from "../SettingModal/SettingModal";
import UserLogoutModal from "../UserLogoutModal/UserLogoutModal";
import { Wrapper, Button, Modal, Svg, Item,Overlay } from "./UserLogoModal.styled";
import sprite from "../../common/symbol-defs.svg";
import MainModal from "../MainModal/MainModal";



const UserLogoModal = ({ position,onClose,open }) => {
  const [isUserLogoutModalOpen, setUserLogoutModalOpen] = useState(false);
  const [modalActive, setModalActive] = useState(false);
  const modalRef = useRef(null);
  const modalOverlay = useRef(null);
  modalScrollOff(modalActive);

    const handleLogoutClick = () => {
    setUserLogoutModalOpen(true);
  };

const handleClose = () => {
    setUserLogoutModalOpen(false);
    onClose();
  };

  const handleModalClick = (event) => {
    // Если клик произошел внутри Modal, не закрывать UserLogoModal
    event.stopPropagation();
  };
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
  useEffect(() => {
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
  }, [open, handleClose]);

  return (
    <Overlay data-modal-overlay="true"  ref={modalOverlay}>
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
      
      </Overlay>
  );
};

export default UserLogoModal;
