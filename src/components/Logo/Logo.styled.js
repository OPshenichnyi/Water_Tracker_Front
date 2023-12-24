import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const StyledLink = styled(NavLink)`
  color: black;

  &.active {
    color: blue;;
  }
`;

export const Item = styled.li`
  margin-right:20px;
`
export const List = styled.ul`
  display: flex;

  gap: 20px;
`