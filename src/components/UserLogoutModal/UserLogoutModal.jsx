import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { logOut } from '../../redux/auth/authOperationApi';
import icons from '../../common/symbol-defs.svg';



import {ButtonCancel,Backdrop, ButtonLogout,TitleStyle,DescriptionStyle,ModalBox,ButtonClose} from './UserLogoutModal.styled';

function UserLogoutModal({ onClose }) {
  const dispatch = useDispatch();



  return (
<Backdrop >
    <ModalBox>
       <ButtonClose onClick={onClose}>{' '}
                <svg width={12} height={12} stroke="#407BFF">
                  <use href={`${icons}#icon-cross`} />
        </svg>
      
      </ButtonClose>
      
          <TitleStyle >
            Log out
          </TitleStyle>
          <DescriptionStyle>
            Do you really want to leave?
          </DescriptionStyle>
          <ButtonCancel onClick={onClose}>Cancel</ButtonCancel>
          <ButtonLogout onClick={() => dispatch(logOut())} >Logout</ButtonLogout>
  
     
      </ModalBox>
</Backdrop>
  );
};

export default UserLogoutModal;
