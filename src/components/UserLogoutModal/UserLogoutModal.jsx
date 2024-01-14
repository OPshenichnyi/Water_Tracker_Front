import { useDispatch } from "react-redux";
import { logOut } from "../../redux/auth/authOperationApi";
// import Modal from "@mui/material/Modal";
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

const UserLogoutModal = ({ closeModal }) => {
  
  const dispatch = useDispatch();

  const handleClose = () => {

    closeModal();
    
  };

  const handleLogout = () => {
    dispatch(logOut());
  };

  return (
    <div onClose={handleClose}>

        <ModalBox>
          <TitleContainer>
            <TitleStyle>Log out</TitleStyle>

            <ButtonClose onClick={closeModal}>
              {" "}
              <svg width={12} height={12} stroke="#407BFF">
                <use href={`${icons}#icon-cross`} />
              </svg>
            </ButtonClose>
          </TitleContainer>
          <DescriptionStyle>Do you really want to leave?</DescriptionStyle>
          <ButtonWrapper>
          
            <ButtonCancel onClick={closeModal}>Cancel</ButtonCancel>
             <ButtonLogout
              onClick={() => {
                handleLogout();
              }}
            >
              Logout
            </ButtonLogout>
          </ButtonWrapper>
        </ModalBox>
 
    </div>
  );
};

export default UserLogoutModal;