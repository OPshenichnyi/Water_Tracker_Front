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
import { InputPassword, TitleNameSet } from "./Component/ComponentSeting";
import { useDispatch, useSelector } from "react-redux";
import { selectIsUser } from "../../redux/auth/selectorsAuth";
import { AddSetingUser } from "../../redux/auth/authOperationApi";
import changePassword from "../Utils/validationSchema";
import sprite from "../../common/symbol-defs.svg";

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
      console.log(values);
      const fieldsToUpdate = {};

      for (const key in initialValues) {
        if (initialValues[key] !== values[key]) {
          fieldsToUpdate[key] = values[key];
        }
      }
      const isEmpty = Object.keys(fieldsToUpdate).length === 0;
      if (isEmpty) {
      }
      // dispatch(AddSetingUser(fieldsToUpdate));
    },
  });

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
              className="last"
            />
          </form>
        </ContainerInfoUser>
        <ContainerChangePass>
          <form onSubmit={formik.handleSubmit}>
            <FirstTitle>Password</FirstTitle>
            <LabelInput htmlFor="oldPassword">Outdated password:</LabelInput>
            {/* Input old password */}
            <InputPassword
              formik={formik}
              id={"oldPassword"}
              name={"oldPassword"}
              placeholder={"Password"}
              value={formik.values.oldPassword}
              backgroundColor="blue"
            />

            <LabelInput htmlFor="newPassword">New Password:</LabelInput>
            {/* Input new pasword */}
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
