import React, { useState } from "react";
import { Formik, Field, Form } from "formik";
import * as Yup from "yup";
import { useDispatch } from "react-redux";
import { registration } from "../../redux/auth/authOperationApi";

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
  RepeatPassword: Yup.string()
    .required("Required")
    .oneOf([Yup.ref("password"), null], "Passwords must match"),
});

const SignUp = () => {
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
            initialValues={{ email: "", password: "", RepeatPassword: "" }}
            onSubmit={(values, actions) => {
              const { RepeatPassword, ...dataToSubmit } = values;
              dispatch(registration(dataToSubmit));
              actions.resetForm(true);
            }}
          >
            {({ errors, isSubmitting, touched }) => (
              <Form>
                <WraperInputPass>
                  <H2>Sing Up</H2>
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

                  <ContainerInput>
                    <SignUpLabel>
                      Repeat password
                      <SignUpInput
                        type={showPassword ? "text" : "password"}
                        name="RepeatPassword"
                        id="RepeatPassword"
                        placeholder="Repeat password"
                        style={{
                          borderColor:
                            errors.RepeatPassword && touched.RepeatPassword
                              ? "red"
                              : null,
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
                    <SignUpButton type="submit">Sing Up</SignUpButton>
                    <SignUpButton2 href="./Signin">Sing In</SignUpButton2>
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
export default SignUp;
