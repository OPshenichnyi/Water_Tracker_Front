import styled, { css } from "styled-components";
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
  background-color: ${variables.whitePrimary};
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
  border: 1px solid ${variables.secondaryGray};
  color: ${variables.secondaryLightBlue};
  border-radius: 6px;
  font-size: 16px;
  padding: 16px 8px;
  ${(props) =>
    props.revealed &&
    css`
      color: ${variables.bluePrimary};
    `}
  &:active,
  &:focus,
  &:hover {
    outline: none;
    color: ${variables.bluePrimary};
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

export const ContainerGender = styled.div`
  display: flex;
  margin-bottom: 24px; // 16px
  width: 176px;
  height: 20px;
  label:first-child {
    margin-right: 24px;
  }
  input:first-child {
    margin-right: 8px;
  }
  /* margin-bottom: 52px; */
`;

export const InputGenders = styled.input`
  height: 25px;
  width: 100%;
  position: absolute;
  opacity: 0;
  cursor: pointer;
`;
export const LabelGender = styled.label`
  height: 24px;
  display: flex;
  align-items: center;
  span {
    margin-left: 8px;
  }
  padding: 5px;
`;
