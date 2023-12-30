import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { AddAvatar } from "../../redux/auth/authOperationApi";
import {
  Container,
  TitleContainer,
  Avatar,
  ContainerAvatar,
  InputImg,
  LinkImgUpload,
  TitleH5,
} from "./SettingModal.styled";
import { selectIsUser } from "../../redux/auth/selectorsAuth";
import FormInput from "./FormInput";
import sprite from "../../common/symbol-defs.svg";

const SettingModal = () => {
  const { avatarURL } = useSelector(selectIsUser);
  const fileInputRef = React.useRef();
  const dispatch = useDispatch();

  // Function select file and write to State
  const handleFileChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      handleUpload(file);
    }
  };
  // Function chek if you select file and add to Api
  const handleUpload = (file) => {
    const formData = new FormData();
    formData.append("avatarURL", file);
    dispatch(AddAvatar(formData));
  };
  // Function open to function select file
  const handleLinkClick = () => {
    fileInputRef.current.click();
  };
  return (
    <Container>
      <TitleContainer>
        <h3>Setting</h3>
        <svg width={24} height={24}>
          <use href={`${sprite}#icon-glass`} />
        </svg>
      </TitleContainer>
      <TitleH5>Your photo</TitleH5>
      <ContainerAvatar>
        <Avatar
          src={avatarURL}
          alt="Img_Avatar"
          width="80"
          height="80"
        ></Avatar>
        <InputImg type="file" ref={fileInputRef} onChange={handleFileChange} />
        <LinkImgUpload onClick={handleLinkClick}>Upload a photo</LinkImgUpload>
      </ContainerAvatar>
      <FormInput></FormInput>
    </Container>
  );
};

export default SettingModal;
