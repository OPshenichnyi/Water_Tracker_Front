import React, { useState } from 'react';
import UserLogoModal from '../UserLogoModal/UserLogoModal';
import sprite from '../../common/symbol-defs.svg';
import { Wrapper, Button, Svg,Avatar,Img } from './UserLogo.styled';


const UserLogo = ({ userName, userAvatar }) => {
  const [isModalOpen, setModalOpen] = useState(false);

  const handleButtonClick = () => {
    setModalOpen(!isModalOpen);
  };

  const renderAvatar = () => {
    if (userAvatar) {

      return<Avatar><Img src={userAvatar} alt={userName} />;  </Avatar>
       
    } else if (userName) {
      const initials = userName.slice(0, 1).toUpperCase();
      return <Avatar>{initials}</Avatar>;
    } else {
      return <Avatar>V</Avatar>;
    }
  };

  return (
    <Wrapper >
      <Button>
        {userName && <span className="user-name">{userName}</span>}
              {renderAvatar()}
          </Button>

          <Button onClick={handleButtonClick}>
          <Svg width={16} height={16}>
            <use href={`${sprite}#icon-chevron-double-up`} />
          </Svg>
        </Button>
      {isModalOpen && <UserLogoModal onClose={() => setModalOpen(false)} />}
    </Wrapper>
  );
};

export default UserLogo;