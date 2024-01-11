import { useFormik } from "formik";
import React, { useState } from "react";
import {
  ContainerBlockSeting,
  ContainerInfoUser,
  ContainerChangePass,
  LabelInput,
  InputStyle,
  ButtonSubmit,
  FirstTitle,
} from "./SettingModal.styled";
import {
  InputPassword,
  RadioBtnGender,
  TitleNameSet,
} from "./Component/ComponentSeting";
import { useDispatch, useSelector } from "react-redux";
import { selectIsUser } from "../../redux/auth/selectorsAuth";
import { AddSetingUser } from "../../redux/auth/authOperationApi";
import variables from "common/Variables";
import { toast } from "react-toastify";

// ===================================================================
export default function FormInput() {
  const dispatch = useDispatch();
  const { userName, email: mail, gender } = useSelector(selectIsUser);

  const [error, setError] = useState("");

  const initialValues = {
    userName,
    email: mail,
    gender,
    oldPassword: "",
    newPassword: "",
    confirmNewPassword: "",
  };

  const formik = useFormik({
    initialValues: initialValues,

    onSubmit: (values, { resetForm }) => {
      const fieldsToUpdate = {};

      for (const key in initialValues) {
        if (initialValues[key] !== values[key]) {
          fieldsToUpdate[key] = values[key];
        }
      }
      const isEmpty = Object.keys(fieldsToUpdate).length === 0;
      if (isEmpty) {
      }
      const { oldPassword, newPassword, confirmNewPassword } = fieldsToUpdate;
      if (oldPassword || newPassword || confirmNewPassword) {
        if (oldPassword === newPassword) {
          toast.error(
            "Your new password must be different from your previous password"
          );
          return;
        }
        if (newPassword !== confirmNewPassword) {
          toast.error(
            "Please confirm that the new password has been correctly re-entered"
          );
          return;
        }
        const deleteConfirmPass = `confirmNewPassword`;
        if (deleteConfirmPass in fieldsToUpdate) {
          delete fieldsToUpdate[deleteConfirmPass];
        }
      }
      dispatch(AddSetingUser(fieldsToUpdate));
    },
  });

  const handleBlure = (evt) => {
    const validEmail = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/;
    const validName = /^[a-zA-Zа-яА-ЯіІїЇєЄґҐ'’]{1,32}$/;
    const value = evt.target.value.trim();
    const id = evt.target.id;
    const valiSchema = "userName" === id ? validName : validEmail;

    if (value.includes('  ')) {
      setError(id);
      return;
    }
    
    if (valiSchema.test(value)) {
      setError("");
      return;
    }
    setError(id);

    if (value.length === 0) {
      setError("");
    }
  };

  const errorBorderStyleK = {
    border: `1px solid ${variables.secondaryRed} `,
  };

  const handleBlur = (e) => {
    const field = e.target.name;
    let trimmedValue = e.target.value.trim();
  
    if (trimmedValue.startsWith(' ')) {
      trimmedValue = trimmedValue.replace(/^\s+/, '');
    }
  
    formik.setFieldValue(field, trimmedValue);
    formik.handleBlur(e);
  };
  
  const handleInputChange = (fieldName, e) => {
    if (e.target.name === fieldName && e.target.value.startsWith(' ')) {
      return;
    }
  
    formik.handleChange(e);
  };

  const handleKeyDown = (e, fieldName) => {
    const {  value } = e.target;
  if (e.key === ' ' && (value.length === 0 || value.startsWith(' '))) {
    e.preventDefault();
  }

  };

  return (
    <>
      <ContainerBlockSeting>
        <ContainerInfoUser>
          <FirstTitle>Your gender identity</FirstTitle>
          <form onSubmit={formik.handleSubmit}>
            <RadioBtnGender formik={formik}></RadioBtnGender>
            <TitleNameSet title={"Your name"}></TitleNameSet>
            <InputStyle
              id="userName"
              name="userName"
              type="text"
              onChange={(e) => handleInputChange('userName', e)}
              onBlur={handleBlur}
              value={formik.values.userName}
              className="ttt"
              style={error === "userName" ? errorBorderStyleK : null}
            />
            <TitleNameSet title={"E-mail"}></TitleNameSet>
            <InputStyle
              id="email"
              name="email"
              type="email"
              onChange={(e) => handleInputChange('email', e)}
              value={formik.values.email}
              className="last"
              onBlur={handleBlure}
              style={error === "email" ? errorBorderStyleK : null}
              onKeyDown={handleKeyDown} 
            />
          </form>
        </ContainerInfoUser>
        <ContainerChangePass>
          <form onSubmit={formik.handleSubmit}>
            <FirstTitle>Password</FirstTitle>
            <LabelInput htmlFor="oldPassword">Outdated password:</LabelInput>
            <InputPassword
              formik={formik}
              id={"oldPassword"}
              name={"oldPassword"}
              placeholder={"Password"}
              value={formik.values.oldPassword}
            />

            <LabelInput htmlFor="newPassword">New Password:</LabelInput>
            <InputPassword
              formik={formik}
              id={"newPassword"}
              name={"newPassword"}
              placeholder={"Password"}
              value={formik.values.newPassword}
            />

            <LabelInput htmlFor="confirmNewPassword">
              Repeat new password:
            </LabelInput>
            <InputPassword
              formik={formik}
              id={"confirmNewPassword"}
              name={"confirmNewPassword"}
              placeholder={"Password"}
              value={formik.values.confirmNewPassword}
            />
            <div>
              <ButtonSubmit type="submit">Save</ButtonSubmit>
            </div>
          </form>
        </ContainerChangePass>
      </ContainerBlockSeting>
    </>
  );
}
