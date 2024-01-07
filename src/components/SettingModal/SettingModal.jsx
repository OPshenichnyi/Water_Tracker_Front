import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { AddAvatar, refreshUser } from "../../redux/auth/authOperationApi";
import {
  Container,
  TitleContainer,
  Avatar,
  ContainerAvatar,
  InputImg,
  LinkImgUpload,
} from "./SettingModal.styled";
import { selectIsUser } from "../../redux/auth/selectorsAuth";
import FormInput from "./FormInput";
import { TitleNameSet, BtnClose } from "./Component/ComponentSeting";
import sprite from "../../common/symbol-defs.svg";

const SettingModal = ({ closeModal }) => {
  const dispatch = useDispatch();
  const { avatarURL } = useSelector(selectIsUser);

  useEffect(() => {
    dispatch(refreshUser);
  }, [dispatch]);

  const fileInputRef = React.useRef();

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
        <h2>Setting</h2>

        <BtnClose closeModal={closeModal}></BtnClose>
      </TitleContainer>
      <TitleNameSet title={"Your photo"}></TitleNameSet>
      <ContainerAvatar>
        <Avatar
          src={avatarURL}
          alt="Img_Avatar"
          width="80"
          height="80"
        ></Avatar>
        <InputImg type="file" ref={fileInputRef} onChange={handleFileChange} />
        <LinkImgUpload onClick={handleLinkClick}>
          <svg width={16} height={16} stroke="#407BFF">
            <use href={`${sprite}#upload`} />
          </svg>
          Upload a photo
        </LinkImgUpload>
      </ContainerAvatar>
      <FormInput></FormInput>
    </Container>
  );
};

export default SettingModal;
