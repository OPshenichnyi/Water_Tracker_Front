import styled from "styled-components";
import color from "../../common/Variables";
import { NavLink } from "react-router-dom";
export const Signin = styled(NavLink)`
  color: ${color.bluePrimary};
  margin-right: 8px;
  text-align: center;

  font-size: 16px;
`;

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
`;
