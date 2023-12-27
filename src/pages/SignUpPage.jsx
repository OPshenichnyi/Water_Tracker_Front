import React from 'react';
import { Formik, Field, Form } from 'formik';

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
} from './SignupPageStyled';

import DesctopBottle from '../images/DesktopBottle.png';

import icons from '../common/symbol-defs.svg';

const SignUp = () => {
  return (
    <Container>
      <Image src={DesctopBottle} alt="" />

      <SignUpContainer>
        <H2>Sing Up</H2>

        <SignUpFormContainer>
          <Formik>
            <Form>
              <SignUpLabel>
                Enter your email
                <Field
                  type="mail"
                  name="Email"
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
                <Field
                  type="password"
                  name="password"
                  id="password"
                  placeholder="Password"
                  as={SignUpInput}
                />
              </SignUpLabel>
              <SignUpLabel>
                Repeat password
                <SignUpSvg width={16} height={16}>
                  <use href={`${icons}#eye`} />
                </SignUpSvg>
                <Field
                  type="password"
                  name="RepeatPassword"
                  id="RepeatPassword"
                  placeholder="Repeat password"
                  as={SignUpInput}
                />
              </SignUpLabel>
            </Form>
          </Formik>
        </SignUpFormContainer>
        <SignUpButtonContainer>
          <SignUpButton type="submit">Sing Up</SignUpButton>
          <SignUpButton2 href="./Signin">Sing In</SignUpButton2>
        </SignUpButtonContainer>
      </SignUpContainer>
    </Container>
  );
};
export default SignUp;
