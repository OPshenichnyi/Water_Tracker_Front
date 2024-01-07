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
import { toast } from "react-toastify";
import variables from "common/Variables";

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

// ================= Component Input Password  ===============
export const InputPassword = ({ formik, id, name, placeholder, value }) => {
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState(false);

  const togglePasswordVisibility = () => {
    if (showPassword === false) {
      setShowPassword(true);
    }
    if (showPassword === true) {
      setShowPassword(false);
    }
  };

  const onBlur = (event) => {
    formik.handleBlur(event);
    const validPass = /^[a-zA-Z0-9!@#$%^&*]{8,64}$/.test(event.target.value);

    if (!validPass) {
      setError(true);
      if (!event.target.value) {
        setError(false);
        return;
      }
      toast.error("Password must be min 8 max 64 symbols");
    } else {
      setError(false);
    }
  };

  const errorBorderStyleK = {
    border: `1px solid ${variables.secondaryRed} `,
  };

  return (
    <InputContainer>
      <InputStyle
        id={id}
        name={name}
        type={showPassword ? "text" : "password"}
        onChange={formik.handleChange}
        value={value}
        onBlur={onBlur}
        placeholder={placeholder}
        revealed={showPassword.toString() || ""}
        style={error ? errorBorderStyleK : null}
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
