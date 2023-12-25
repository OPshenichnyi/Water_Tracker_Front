import { NavLink } from "react-router-dom";
import { Signin, Wrapper } from "./UserAuth.styled";

import sprite from "../../common/symbol-defs.svg";

export const UserAuth = () => {
  // const { isLoggedIn } = useAuth();

  return (
    <Wrapper>
      <Signin to="/signin">Sign in</Signin>
      <NavLink to="/signin">
        <svg width={28} height={28}>
          <use href={`${sprite}#SigninNoAuth`} />
        </svg>
      </NavLink>
    </Wrapper>
  );
};
