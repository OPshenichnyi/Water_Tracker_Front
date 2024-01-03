import { useFormik } from "formik";
import React from "react";
import {
  ContainerGender,
  ContainerBlockSeting,
  ContainerInfoUser,
  ContainerChangePass,
  LabelInput,
  InputStyle,
  ButtonSubmit,
  FirstTitle,
} from "./SettingModal.styled";
import { TitleNameSet } from "./Component/ComponentSeting";
import { useDispatch, useSelector } from "react-redux";
import { selectIsUser } from "../../redux/auth/selectorsAuth";
import { AddSetingUser } from "../../redux/auth/authOperationApi";
import changePassword from "../Utils/validationSchema";

// ===================================================================
export default function FormInput() {
  const dispatch = useDispatch();
  const { userName, email: mail, gender } = useSelector(selectIsUser);

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
    validationSchema: changePassword,

    onSubmit: (values) => {
      const fieldsToUpdate = {};

      for (const key in initialValues) {
        if (initialValues[key] !== values[key]) {
          fieldsToUpdate[key] = values[key];
        }
      }
      const isEmpty = Object.keys(fieldsToUpdate).length === 0;
      if (isEmpty) {
      }
      dispatch(AddSetingUser(fieldsToUpdate));
    },
  });
  // useEffect(() => {
  //   formik.setValues({
  //     userName: initialValues.userName,
  //     email: initialValues.email,
  //     gender: initialValues.gender,
  //     oldPassword: initialValues.oldPassword,
  //     newPassword: initialValues.newPassword,
  //     confirmNewPassword: initialValues.confirmNewPassword,
  //   });
  // }, [
  //   initialValues.userName,
  //   initialValues.email,
  //   initialValues.gender,
  //   initialValues.oldPassword,
  //   initialValues.newPassword,
  //   initialValues.confirmNewPassword,
  //   formik.setValues,
  // ]);

  return (
    <>
      <ContainerBlockSeting>
        <ContainerInfoUser>
          <FirstTitle>Your gender identity</FirstTitle>
          <form onSubmit={formik.handleSubmit}>
            <ContainerGender>
              <label>
                <input
                  type="radio"
                  name="gender"
                  value="girl"
                  checked={formik.values.gender === "girl"}
                  onChange={formik.handleChange}
                />
                <label>Girl</label>
              </label>
              <label>
                <input
                  type="radio"
                  name="gender"
                  value="man"
                  checked={formik.values.gender === "man"}
                  onChange={formik.handleChange}
                />
                <label>Man</label>
              </label>
            </ContainerGender>

            <TitleNameSet title={"Your name"}></TitleNameSet>
            <InputStyle
              id="userName"
              name="userName"
              type="text"
              onChange={formik.handleChange}
              value={formik.values.userName}
              className="ttt"
            />
            <TitleNameSet title={"E-mail"}></TitleNameSet>
            <InputStyle
              id="email"
              name="email"
              type="email"
              onChange={formik.handleChange}
              value={formik.values.email}
            />
          </form>
        </ContainerInfoUser>
        <ContainerChangePass>
          <form onSubmit={formik.handleSubmit}>
            <FirstTitle>Password</FirstTitle>
            <LabelInput htmlFor="oldPassword">Outdated password:</LabelInput>
            <InputStyle
              id="oldPassword"
              name="oldPassword"
              type="password"
              onChange={formik.handleChange}
              value={formik.values.oldPassword}
              onBlur={formik.handleBlur}
              className={
                formik.touched.confirmNewPassword &&
                formik.errors.confirmNewPassword
                  ? "input-error"
                  : ""
              }
            />

            <LabelInput htmlFor="newPassword">New Password:</LabelInput>
            <InputStyle
              id="newPassword"
              name="newPassword"
              type="password"
              onChange={formik.handleChange}
              value={formik.values.newPassword}
              onBlur={formik.handleBlur}
              className={
                formik.touched.confirmNewPassword &&
                formik.errors.confirmNewPassword
                  ? "input-error"
                  : ""
              }
            />

            <LabelInput htmlFor="confirmNewPassword">
              Repeat new password:
            </LabelInput>
            <InputStyle
              id="confirmNewPassword"
              name="confirmNewPassword"
              type="password"
              onChange={formik.handleChange}
              value={formik.values.confirmNewPassword}
              onBlur={formik.handleBlur}
              className={
                formik.touched.confirmNewPassword &&
                formik.errors.confirmNewPassword
                  ? "input-error"
                  : ""
              }
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
