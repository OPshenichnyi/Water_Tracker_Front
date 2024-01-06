import React from "react";
import {
  TitleName,
  ButtonClose,
  InputContainer,
  InputStyle,
  InputPasswordSvg,
} from "../Component/ComponentSetingStyled";
import sprite from "../../../common/symbol-defs.svg";
import { useState } from "react";

// ================= Component Title ============================
export const TitleNameSet = ({ title }) => {
  return (
    <>
      <TitleName>{title}</TitleName>
    </>
  );
};

// ================= Component Btn Close Modal (X) ===============
export const BtnClose = ({ closeModal }) => {
  return (
    <>
      <ButtonClose onClick={closeModal}>
        <svg width={12} height={12} stroke="#407BFF">
          <use href={`${sprite}#icon-cross`} />
        </svg>
      </ButtonClose>
    </>
  );
};

// ================= Component Btn Close Modal (X) ===============
export const InputPassword = ({ formik, id, name, placeholder, value }) => {
  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    if (showPassword === false) {
      setShowPassword(true);
    }
    if (showPassword === true) {
      setShowPassword(false);
    }
  };
  return (
    <InputContainer>
      <InputStyle
        id={id}
        name={name}
        type={showPassword ? "text" : "password"}
        onChange={formik.handleChange}
        value={value}
        onBlur={formik.handleBlur}
        placeholder={placeholder}
        revealed={showPassword.toString() || ""}
      />
      {showPassword ? (
        <InputPasswordSvg
          width={16}
          height={16}
          onClick={togglePasswordVisibility}
        >
          <use href={`${sprite}#eye-open`} />
        </InputPasswordSvg>
      ) : (
        <InputPasswordSvg
          width={16}
          height={16}
          onClick={togglePasswordVisibility}
        >
          <use href={`${sprite}#eye`} />
        </InputPasswordSvg>
      )}
    </InputContainer>
  );
};
