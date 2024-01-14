import styled from "styled-components";
import variables from "common/Variables";

//  ======== Wrapper Modall window==================
export const Container = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 280px;
  height: 100%;
  overflow-y: auto; 
  padding: 32px 12px;
  border-radius: 10px;
  background-color: #fff;
  .loader {
    position: absolute;
    left: 35%;
  }
  @media screen and (min-width: 768px) {
    width: 704px;
    padding: 32px 24px;
    .loader {
      left: 45%;
    }
  }

  @media screen and (min-width: 1440px) {
    width: 1008px;
    height: 592px;
  }
`;
//  ======== Container Name Modal and BTN Close=================
export const TitleContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 24px;
  h2 {
    font-size: 26px;
    font-weight: bold;
    font-style: normal;
    line-height: 1.24;
    color: ${variables.blackPrimary};
    @media screen and (min-width: 768px) {
      font-size: 26px;
      line-height: 1.23;
    }
  }
`;

//  ======== Container Avatar ==================
export const ContainerAvatar = styled.div`
  width: 220px;
  display: flex;
  align-items: center;
  margin-bottom: 24px;
`;

//  ========  Avatar Img ==================
export const Avatar = styled.img`
  border-radius: 50%;
  width: 80px;
  height: 80px;
  background: lightgray 50% / cover no-repeat;
`;

//  ========  Input Img ==================
export const InputImg = styled.input`
  display: none;
`;

//  ========  Link for Img upload ==================
export const LinkImgUpload = styled.span`
  color: ${variables.bluePrimary};
  cursor: pointer;
  margin-left: 8px;
  font-family: Roboto;
  font-size: 14px;
  font-style: normal;
  font-weight: bold;
  display: flex;
  justify-content: center;
  svg {
    margin-right: 8px;
    width: 16px;
    height: 16px;
    fill: none;
  }
`;

//  ======== Container Block Setting ==================
export const ContainerBlockSeting = styled.div`
  @media screen and (min-width: 1440px) {
    display: flex;
    gap: 24px;
  }
`;
//  ======== Container info User ==================
export const ContainerInfoUser = styled.div`
  margin-bottom: 24px;
  @media screen and (min-width: 1440px) {
    float: left;
    width: 392px;
    margin-bottom: 0;
  }
`;

//  ======== Container Change Paswword ==================

export const ContainerChangePass = styled.div`
  @media screen and (min-width: 1440px) {
    float: left;
    width: 100%;
  }
`;
//  ========  Title Password ==================
export const FirstTitle = styled.h3`
  margin-bottom: 12px;
  font-family: "Roboto", sans-serif;
  font-style: normal;
  color: ${variables.blackPrimary};
  font-size: 18px;
  font-weight: bold;
  line-height: 1.12;
`;
//  ========  Style Label ==================
export const LabelInput = styled.label`
  width: 392px;
  font-size: 18px;
  display: flex;
  flex-direction: column;
  position: relative;
  margin-bottom: 8px;
`;

//  ========  Style for input Name and Email ==================
export const InputStyle = styled.input`
  width: 100%;
  height: 44px;
  border: 1px solid #d7e3ff;
  color: #9ebbff;
  border-radius: 6px;
  font-size: 16px;
  padding: 16px 8px;
  &.input-error {
    border: 1px solid red;
  }
  &.ttt {
    margin-bottom: 24px;
  }
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
    &.last {
      margin-bottom: 0;
    }
  }
`;

//  ========  BTN Submit ==================
export const ButtonSubmit = styled.button`
  color: #ffffff;
  background-color: #407bff;
  border-radius: 10px;
  font-size: 16px;
  font-family: "Roboto", sans-serif;
  box-shadow: 0 4px 8px rgba(64, 123, 255, 0.34);
  width: 256px;
  height: 36px;
  margin-left: auto;
  margin-top: 24px;

  @media screen and (min-width: 768px) {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 160px;
    height: 44px;
  }

  @media screen and (min-width: 1440px) {
    width: 160px;
    height: 44px;
  }
`;
