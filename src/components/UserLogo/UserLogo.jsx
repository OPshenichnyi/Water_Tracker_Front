
import React, { useState, useRef, useEffect } from 'react';
import UserLogoModal from '../UserLogoModal/UserLogoModal';
import sprite from '../../common/symbol-defs.svg';
import { Wrapper, ButtonMenu, Svg,Avatar,Img,User,ButtonAvt,Name } from './UserLogo.styled';
import { useSelector} from "react-redux";
import { selectIsUser} from "../../redux/auth/selectorsAuth";
import MainModal from "../MainModal/MainModal";


const UserLogo = () => {
  const [isModalOpen, setModalOpen] = useState(false);
  const [userLogoPosition, setUserLogoPosition] = useState({ top: 0, left: 0 }); 

  const headerRef = useRef(null);
  const user = useSelector(selectIsUser );

 useEffect(() => {
  const updatePosition = () => {
    const headerRect = headerRef.current.getBoundingClientRect();
    setUserLogoPosition({
      top: headerRect.bottom,
      left: headerRect.left,
    });
  };

  updatePosition();

  window.addEventListener('resize', updatePosition);

  return () => {
    window.removeEventListener('resize', updatePosition);
  };
}, [headerRef]);



  const handleButtonClick = () => {
    setModalOpen(true);
  };

  const renderAvatar = () => {
    if (user.avatarURL) {


      return <Avatar><Img src={user.avatarURL} alt={user.userName} /></Avatar>;
       

    } else if (user.userName) {
      const initials = user.userName.slice(0, 1).toUpperCase();
      return <Avatar>{initials}</Avatar>;
    } else {
      return <Avatar>V</Avatar>;
    }
  };

  return (
    <User >
       {user.userName && <Name>{user.userName}</Name>}
    <Wrapper ref={headerRef}>
     
      <ButtonAvt>
              {renderAvatar()}
          </ButtonAvt>


      <ButtonMenu onClick={handleButtonClick} >
        <Svg width={16} height={16}>
          <use href={`${sprite}#icon-chevron-double-up`} />
        </Svg>
      </ButtonMenu>
       
      </Wrapper>
      <MainModal active={isModalOpen} setActive={setModalOpen} backgroundColor={isModalOpen}>
        <UserLogoModal
          open={isModalOpen}
          closeModal={() => setModalOpen(false)}
          position={userLogoPosition}
          headerRef={headerRef}
        ></UserLogoModal>
      </MainModal>
    </User>
  );
};

export default UserLogo;
