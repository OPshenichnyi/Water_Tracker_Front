import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { AddAvatar } from "../../redux/auth/authOperationApi";
import { useFormik } from "formik";
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

const SettingModal = () => {
  const { avatarURL, email } = useSelector(selectIsUser);
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
  // Initual Value Formik
  const formik = useFormik({
    initialValues: {
      yourName: "",
      lastName: "",
      email: email,
    },
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
    },
  });
  return (
    <Container>
      <TitleContainer>
        <h3>Setting</h3>
        <span>X</span>
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
      <TitleH5>Your gender identity</TitleH5>

      <form onSubmit={formik.handleSubmit}>
        <div>
          <label htmlFor="yourName">Your name</label>
          <input
            id="yourName"
            name="yourName"
            type="text"
            onChange={formik.handleChange}
            value={formik.values.yourName}
          />
        </div>
        <label htmlFor="email">E-mail</label>
        <input
          id="email"
          name="email"
          type="email"
          onChange={formik.handleChange}
          value={email}
        />
        <button type="submit">Submit</button>
      </form>
    </Container>
  );
};

export default SettingModal;
