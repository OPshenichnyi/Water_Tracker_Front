import styled from "styled-components";
import variables from "common/Variables";

export const TitleName = styled.h3`
  margin-bottom: 8px;
  font-family: "Roboto", sans-serif;
  font-style: normal;
  color: ${variables.blackPrimary};
  font-size: 18px;
  font-weight: bold;
  line-height: 1.12;
`;

export const ButtonClose = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 24px;
  height: 24px;
  background-color: #fff;
  transition: transform 0.3s ease;
  &:hover {
    transform: scale(1.3);
    cursor: pointer;
  }
`;
