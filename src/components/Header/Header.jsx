import { Wrapper } from "./Header.styled";
import { Logo } from "../Logo/Logo";
import { UserAuth } from "../UserAuth/UserAuth";
import UserLogo from "../UserLogo/UserLogo";
import { useSelector } from "react-redux";
import { selectIsLogined } from "../../redux/auth/selectorsAuth";

export const Header = () => {
  const isLogined = useSelector(selectIsLogined);
  return (
    <div className="container main-container">
      <Wrapper>
        <Logo />
        {isLogined ? <UserLogo /> : <UserAuth />}
      </Wrapper>
    </div>
  );
};
