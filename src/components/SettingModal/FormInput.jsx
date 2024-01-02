import { useFormik } from "formik";
import React from "react";
import { useSelector } from "react-redux";
import { selectIsUser } from "../../redux/auth/selectorsAuth";
import {
  BoxGender,
  ContainerGender,
  ContainerBlockSeting,
  ContainerInfoUser,
  ContainerChangePass,
  LabelInput,
  InputStyle,
  ButtonSubmit,
} from "./SettingModal.styled";
import { TitleNameSet } from "./Component/ComponentSeting";

export default function FormInput() {
  const { email, gender } = useSelector(selectIsUser);

  const formik = useFormik({
    initialValues: {
      userName: "",
      email: email,
      gender: gender,
      outdatedPassword: "",
      password: "",
      newPassword: "",
      repetNewPassword: "",
    },
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
    },
  });
  return (
    <>
      <ContainerBlockSeting>
        <ContainerInfoUser>
          <TitleNameSet title={"Your gender identity"}></TitleNameSet>
          <ContainerGender>
            <BoxGender>
              <input
                type="radio"
                name="gender"
                value="female"
                checked={formik.values.gender === "female"}
                onChange={formik.handleChange}
              />
              <label>Girl</label>
            </BoxGender>
            <BoxGender>
              <input
                type="radio"
                name="gender"
                value="male"
                checked={formik.values.gender === "male"}
                onChange={formik.handleChange}
              />
              <label>Man</label>
            </BoxGender>
          </ContainerGender>

          <form onSubmit={formik.handleSubmit}>
            <TitleNameSet title={"Your name"}></TitleNameSet>
            <InputStyle
              id="userName"
              name="userName"
              type="text"
              onChange={formik.handleChange}
              value={formik.values.userName}
            />
            <TitleNameSet title={"E-mail"}></TitleNameSet>
            <InputStyle
              id="email"
              name="email"
              type="email"
              onChange={formik.handleChange}
              value={email}
            />
          </form>
        </ContainerInfoUser>
        <ContainerChangePass>
          <form onSubmit={formik.handleSubmit}>
            <TitleNameSet title={"Password"}></TitleNameSet>
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
