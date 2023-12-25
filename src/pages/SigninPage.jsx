import {
  H2,
  SingInLabel,
  SingInInput,
  SingInButton,
  SingInButton2,
  SingInContainer,
  SignInFormContainer,
  SignInButtonContainer,
  Container,
  SingInSvg,
} from './SigninPageStyled';

import icons from '../common/symbol-defs.svg';

const SignIn = () => {
  return (
    <Container>
      <SingInContainer>
        <H2>Sing In</H2>
        <SignInFormContainer>
          <SingInLabel>
            Enter your email
            <SingInInput
              type="mail"
              name="Email"
              id="email"
              placeholder="E-mail"
            />
          </SingInLabel>
          <SingInLabel>
            Enter your password
            <SingInSvg width={16} height={16}>
              <use href={`${icons}#eye`} />
            </SingInSvg>
            <SingInInput
              type="password"
              name="password"
              id="password"
              placeholder="Password"
            />
          </SingInLabel>
        </SignInFormContainer>
        <SignInButtonContainer>
          <SingInButton type="button">Sing In</SingInButton>
          <SingInButton2 type="button">Sing Up</SingInButton2>
        </SignInButtonContainer>
      </SingInContainer>
    </Container>
  );
};
export default SignIn;
