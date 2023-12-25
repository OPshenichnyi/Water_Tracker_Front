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
} from './SignupPageStyled';

import icons from '../common/symbol-defs.svg';

const SignUp = () => {
  return (
    <Container>
      <SignUpContainer>
        <H2>Sing In</H2>
        <SignUpFormContainer>
          <SignUpLabel>
            Enter your email
            <SignUpInput
              type="mail"
              name="Email"
              id="email"
              placeholder="E-mail"
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
          </SignUpLabel>
        </SignUpFormContainer>
        <SignUpButtonContainer>
          <SignUpButton type="button">Sing In</SignUpButton>
          <SignUpButton2 type="button">Sing Up</SignUpButton2>
        </SignUpButtonContainer>
      </SignUpContainer>
    </Container>
  );
};
export default SignUp;
