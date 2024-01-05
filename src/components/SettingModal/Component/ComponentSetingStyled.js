import styled from "styled-components";
import variables from "common/Variables";

// ================= Component Btn Close Modal (X) ===============
export const TitleName = styled.h3`
  margin-bottom: 8px;
  font-family: "Roboto", sans-serif;
  font-style: normal;
  color: ${variables.blackPrimary};
  font-size: 18px;
  font-weight: bold;
  line-height: 1.12;
`;

// ================= Component Btn Close Modal (X) ===============
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
// ================= Component Input Password (X) ===============
export const InputContainer = styled.div`
  position: relative;
  margin-bottom: 12px;
  color: red;

  @media screen and (min-width: 768px) {
    display: inline-block;
  }
`;

export const InputPasswordSvg = styled.svg`
  position: absolute;
  top: 50%;
  right: 10px;
  transform: translateY(-50%);
  cursor: pointer;
  stroke: #407bff;
  fill: none;
`;

export const InputStyle = styled.input`
  width: 100%;
  height: 44px;
  border: 1px solid #d7e3ff;
  color: #9ebbff;
  border-radius: 6px;
  font-size: 16px;
  padding: 16px 8px;
  &:active,
  &:focus,
  &:hover {
    outline: none;
    color: #407bff;
  }

  @media screen and (min-width: 768px) {
    width: 336px;
    height: 44px;
  }

  @media screen and (min-width: 1440px) {
    width: 384px;
    height: 44px;
  }
`;
