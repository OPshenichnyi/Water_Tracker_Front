import { useFormik } from "formik";
import React from "react";
import { useSelector } from "react-redux";
import { selectIsUser } from "../../redux/auth/selectorsAuth";
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

export default function FormInput() {
  const stateUser = useSelector(selectIsUser);
  console.log(stateUser);

  const handleSubmit = (values) => {
    const dataToSend = {};
    Object.keys(values).forEach((key) => {
      if (values[key] !== stateUser[key]) {
        dataToSend[key] = values[key];
      }
    });
    console.log(dataToSend);
  };
  // const chekValueInput = (values) => {
  //   const {
  //     userName,
  //     email,
  //     gender,
  //     outdatedPassword,
  //     newPassword,
  //     repetNewPassword,
  //   } = values;
  //   console.log(typeof gender);
  //   const req = {};
  //   if (outdatedPassword && newPassword === repetNewPassword) {
  //     Object.assign(req, { outdatedPassword, newPassword, repetNewPassword });
  //   }
  //   if (userName) {
  //     Object.assign(req, { userName });
  //   }
  //   if (email) {
  //     Object.assign(req, { email });
  //   }
  //   if (gender) {
  //     Object.assign(req, { gender });
  //   }
  //   if (Object.keys(req).length !== 0) {
  //     console.log(req);
  //   }
  //   return;
  // };

  const formik = useFormik({
    initialValues: {
      userName: stateUser.userName,
      email: stateUser.email,
      gender: stateUser.gender,
      outdatedPassword: stateUser.outdatedPassword,
      newPassword: stateUser.newPassword,
      repetNewPassword: stateUser.repetNewPassword,
    },

    onSubmit: (values, { setSubmitting }, actions) => {
      handleSubmit(values);
      setSubmitting(false);
      // actions.resetForm(true);
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
                  value="female"
                  checked={formik.values.gender}
                  onChange={formik.handleChange}
                />
                <label>Girl</label>
              </label>
              <label>
                <input
                  type="radio"
                  name="gender"
                  value="male"
                  checked={formik.values.gender}
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
            <LabelInput htmlFor="outdatedPassword">
              Outdated password:
            </LabelInput>
            <InputStyle
              id="outdatedPassword"
              name="outdatedPassword"
              type="text"
              onChange={formik.handleChange}
              value={formik.values.outdatedPassword}
            />

            <LabelInput htmlFor="newPassword">New Password:</LabelInput>
            <InputStyle
              id="newPassword"
              name="newPassword"
              type="text"
              onChange={formik.handleChange}
              value={formik.values.newPassword}
            />

            <LabelInput htmlFor="repetNewPassword">
              Repeat new password:
            </LabelInput>
            <InputStyle
              id="repetNewPassword"
              name="repetNewPassword"
              type="text"
              onChange={formik.handleChange}
              value={formik.values.repetNewPassword}
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
