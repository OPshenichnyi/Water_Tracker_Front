import { useDispatch } from "react-redux";
import { logOut } from "../../redux/auth/authOperationApi";
import Modal from "@mui/material/Modal";
import icons from "../../common/symbol-defs.svg";


import {
  ButtonCancel,
  ButtonLogout,
  TitleStyle,
  DescriptionStyle,
  ButtonClose,
  ModalBox,
  TitleContainer,
  ButtonWrapper,
} from "./UserLogoutModal.styled";

const UserLogoutModal = ({ open, onClose }) => {
  
  const dispatch = useDispatch();

  const handleClose = () => {

    onClose();
    
  };

  const handleLogout = () => {
    dispatch(logOut());
  };

  return (
    <div>
      <Modal open={open} onClose={handleClose}>
        <ModalBox>
          <TitleContainer>
            <TitleStyle>Log out</TitleStyle>

            <ButtonClose onClick={onClose}>
              {" "}
              <svg width={12} height={12} stroke="#407BFF">
                <use href={`${icons}#icon-cross`} />
              </svg>
            </ButtonClose>
          </TitleContainer>
          <DescriptionStyle>Do you really want to leave?</DescriptionStyle>
          <ButtonWrapper>
            <ButtonLogout
              onClick={() => {
                handleLogout();
              }}
            >
              Logout
            </ButtonLogout>
            <ButtonCancel onClick={onClose}>Cancel</ButtonCancel>
          </ButtonWrapper>
        </ModalBox>
      </Modal>
    </div>
  );
};

export default UserLogoutModal;