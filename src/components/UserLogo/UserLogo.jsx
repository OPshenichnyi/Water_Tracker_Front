import React, { useState } from "react";
import UserLogoModal from "../UserLogoModal/UserLogoModal";
import sprite from "../../common/symbol-defs.svg";
import { Wrapper, Button, Svg } from "./UserLogo.styled";

const UserLogo = ({ userName, userAvatar }) => {
  const [isModalOpen, setModalOpen] = useState(false);

  const handleButtonClick = () => {
    setModalOpen(!isModalOpen);
  };

  const renderAvatar = () => {
    if (userAvatar) {
      return <img src={userAvatar} alt={userName} />;
    } else if (userName) {
      const initials = userName.slice(0, 1).toUpperCase();
      return <div className="avatar-initial">{initials}</div>;
    } else {
      return <div className="avatar-initial">V</div>;
    }
  };

  return (
    <Wrapper>
      <button>
        {userName && <span className="user-name">{userName}</span>}
        {renderAvatar()}
      </button>

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
