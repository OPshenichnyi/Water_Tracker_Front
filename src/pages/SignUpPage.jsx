import React from "react";
import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from "yup";
import { useDispatch } from "react-redux";
import { registration } from "../redux/auth/authOperationApi";

import {
  H2,
  SignUpLabel,
  SignUpInput,
  SignUpButton,
  SignUpButton2,
  SignUpContainer,
  SignUpFormContainer,
  SignUpButtonContainer,
  Container,
  SignUpSvg,
  Image,
} from "./SignupPageStyled";

import DesctopBottle from "../images/DesktopBottle.png";

import icons from "../common/symbol-defs.svg";

const SignupSchema = Yup.object().shape({
  email: Yup.string().email(),
  password: Yup.string()
    .required("Required")
    .min(8, "Password must be at least 8 characters"),
  RepeatPassword: Yup.string()
    .required("Required")
    .oneOf([Yup.ref("password"), null], "Passwords must match"),
});

const SignUp = () => {
  const dispatch = useDispatch();

  return (
    <Container>
      <Image src={DesctopBottle} alt="" />

      <SignUpContainer>
        <H2>Sing Up</H2>

        <SignUpFormContainer>
          <Formik
            validationSchema={SignupSchema}
            initialValues={{ email: "", password: "", RepeatPassword: "" }}
            onSubmit={(values, actions) => {
              const { RepeatPassword, ...dataToSubmit } = values;
              dispatch(registration(dataToSubmit));
              actions.resetForm(true);
            }}
          >
            {({ isSubmitting }) => (
              <Form>
                <SignUpLabel>
                  Enter your email
                  <Field
                    type="mail"
                    name="email"
                    id="email"
                    placeholder="E-mail"
                    as={SignUpInput}
                  />
                </SignUpLabel>

                <SignUpLabel>
                  Enter your password
                  <SignUpSvg width={16} height={16}>
                    <use href={`${icons}#eye`} />
                  </SignUpSvg>
                  <SignUpInput
                    type="password"
                    name="password"
                    id="password"
                    placeholder="Password"
                  />
                  <ErrorMessage name="password" component="div" />
                </SignUpLabel>

                <SignUpLabel>
                  Repeat password
                  <SignUpSvg width={16} height={16}>
                    <use href={`${icons}#eye`} />
                  </SignUpSvg>
                  <SignUpInput
                    type="password"
                    name="RepeatPassword"
                    id="RepeatPassword"
                    placeholder="Repeat password"
                  />
                  <ErrorMessage name="password" component="div" />
                </SignUpLabel>
                <SignUpButtonContainer>
                  <SignUpButton type="submit">Sing Up</SignUpButton>
                  <SignUpButton2 href="./Signin">Sing In</SignUpButton2>
                </SignUpButtonContainer>
              </Form>
            )}
          </Formik>
        </SignUpFormContainer>
      </SignUpContainer>
    </Container>
  );
};
export default SignUp;
