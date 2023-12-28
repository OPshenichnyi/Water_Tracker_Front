
import React, { useState, useRef, useEffect } from 'react';
import UserLogoModal from '../UserLogoModal/UserLogoModal';
import sprite from '../../common/symbol-defs.svg';
import { Wrapper, Button, Svg,Avatar,Img } from './UserLogo.styled';



const UserLogo = ({ userName, userAvatar }) => {
  const [isModalOpen, setModalOpen] = useState(false);
  const [userLogoPosition, setUserLogoPosition] = useState({ top: 0, left: 0 }); 

  const headerRef = useRef(null);
 

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
    setModalOpen(!isModalOpen);
  };

  const renderAvatar = () => {
    if (userAvatar) {


      return <Avatar><Img src={userAvatar} alt={userName} /></Avatar>;
       

    } else if (userName) {
      const initials = userName.slice(0, 1).toUpperCase();
      return <Avatar>{initials}</Avatar>;
    } else {
      return <Avatar>V</Avatar>;
    }
  };

  return (

    <Wrapper ref={headerRef}>
      <Button>
        {userName && <span className="user-name">{userName}</span>}
              {renderAvatar()}
          </Button>


      <Button onClick={handleButtonClick}>
        <Svg width={16} height={16}>
          <use href={`${sprite}#icon-chevron-double-up`} />
        </Svg>
      </Button>
      {isModalOpen && <UserLogoModal onClose={() => setModalOpen(false)} position={userLogoPosition} />}
    </Wrapper>
  );
};

export default UserLogo;
