import React, { useState } from "react";
import { Formik, Field, Form } from "formik";
import * as Yup from "yup";
import { useDispatch } from "react-redux";
import { logIn } from "../../redux/auth/authOperationApi";

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
  Image,
  ContainerInput,
  InputPasswordSvg,
  WraperInputPass,
} from "./SingIn.styled";

import DesctopBottle from "../../images/DesktopBottle.png";
import sprite from "../../../src/common/symbol-defs.svg";

const SignupSchema = Yup.object().shape({
  email: Yup.string().email(),
  password: Yup.string()
    .required("Required")
    .min(8, "Password must be at least 8 characters"),
});

const LogIn = () => {
  const dispatch = useDispatch();
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
    <Container>
      <Image src={DesctopBottle} alt="" />

      <SignUpContainer>
        <SignUpFormContainer>
          <Formik
            validationSchema={SignupSchema}
            initialValues={{ email: "", password: "" }}
            onSubmit={(values, actions) => {
              dispatch(logIn(values));
              actions.resetForm(true);
            }}
          >
            {({ errors, isSubmitting, touched }) => (
              <Form>
                <WraperInputPass>
                  <H2>Sign In</H2>
                  <SignUpLabel>
                    Enter your email
                    <Field
                      type="mail"
                      name="email"
                      id="email"
                      placeholder="E-mail"
                      as={SignUpInput}
                      style={{
                        borderColor:
                          errors.email && touched.email ? "red" : null,
                      }}
                    />
                  </SignUpLabel>
                  <ContainerInput>
                    <SignUpLabel>
                      Enter your password
                      <SignUpInput
                        type={showPassword ? "text" : "password"}
                        name="password"
                        id="password"
                        placeholder="Password"
                        style={{
                          borderColor:
                            errors.password && touched.password ? "red" : null,
                        }}
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
                    </SignUpLabel>
                  </ContainerInput>
                  <SignUpButtonContainer>
                    <SignUpButton type="submit">Sign In</SignUpButton>
                    <SignUpButton2 href="./SignUp">Sign Up</SignUpButton2>
                  </SignUpButtonContainer>
                </WraperInputPass>
              </Form>
            )}
          </Formik>
        </SignUpFormContainer>
      </SignUpContainer>
    </Container>
  );
};
export default LogIn;
