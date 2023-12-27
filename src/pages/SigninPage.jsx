import React from 'react';
import { Formik, Field, Form } from 'formik';

import {
  H2,
  SingInLabel,
  SingInButton,
  SingInButton2,
  SingInContainer,
  SignInFormContainer,
  SignInButtonContainer,
  Container,
  SingInSvg,
  SingInInput,
  Image,
} from './SigninPageStyled';
import DesctopBottle from '../images/DesktopBottle.png';
import icons from '../common/symbol-defs.svg';

const SignIn = () => {
  return (
    <Container>
      <Image src={DesctopBottle} alt="" />

      <SingInContainer>
        <H2>Sign In</H2>
        <SignInFormContainer>
          <Formik>
            <Form>
              <SingInLabel>
                Enter your email
                <Field
                  type="mail"
                  id="email"
                  name="email"
                  placeholder="E-mail"
                  as={SingInInput}
                />
              </SingInLabel>

              <SingInLabel>
                Enter your password
                <SingInSvg width={16} height={16}>
                  <use href={`${icons}#eye`} />
                </SingInSvg>
                <Field
                  type="password"
                  id="password"
                  name="password"
                  placeholder="Password"
                  as={SingInInput}
                />
              </SingInLabel>

              <SignInButtonContainer>
                <SingInButton type="submit">Sign In</SingInButton>
                <SingInButton2 href="./SignUp">Sign Up</SingInButton2>
              </SignInButtonContainer>
            </Form>
          </Formik>
        </SignInFormContainer>
      </SingInContainer>
    </Container>
  );
};

export default SignIn;
