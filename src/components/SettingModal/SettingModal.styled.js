import styled from "styled-components";
import variables from "common/Variables";

export const Container = styled.div`
  margin: auto;
  width: 280px;
  height: 852px;
  padding: 32px 12px;
  border-radius: 10px;
  background-color: #fff;

  @media screen and (min-width: 768px) {
    width: 704px;
    height: 860px;
    padding: 32px 24px;
    border-radius: 10px;
  }

  @media screen and (min-width: 1440px) {
    width: 1008px;
    height: 592px;
    border-radius: 10px;
  }
`;

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

export const ContainerAvatar = styled.div`
  width: 220px;
  display: flex;
  align-items: center;
  margin-bottom: 24px;
`;

export const Avatar = styled.img`
  border-radius: 50%;
  width: 80px;
  height: 80px;
  background: lightgray 50% / cover no-repeat;
`;

export const InputImg = styled.input`
  display: none;
`;

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

// ================== STYLE FORM FILE FormInput ================
export const ContainerGender = styled.div`
  display: flex;
  margin-bottom: 24px;
  width: 152px;
  height: 20px;
  label:first-child {
    margin-right: 24px;
  }
  input:first-child {
    margin-right: 8px;
  }
  @media screen and (min-width: 1440px) {
    margin-bottom: 52px;
  }
`;

export const ContainerBlockSeting = styled.div`
  @media screen and (min-width: 1440px) {
    display: flex;
    gap: 24px;
  }
`;

export const ContainerInfoUser = styled.div`
  @media screen and (min-width: 1440px) {
    width: 392px;
  }
`;

export const ContainerChangePass = styled.div`
  input {
    margin-bottom: 12px;
  }
  @media screen and (min-width: 1440px) {
    width: 100%;
  }
`;
export const FirstTitle = styled.h3`
  margin-bottom: 12px;
  font-family: "Roboto", sans-serif;
  font-style: normal;
  color: ${variables.blackPrimary};
  font-size: 18px;
  font-weight: bold;
  line-height: 1.12;
`;

export const LabelInput = styled.label`
  width: 392px;
  font-size: 18px;
  display: flex;
  flex-direction: column;
  position: relative;
  margin-bottom: 8px;
`;

export const InputStyle = styled.input`
  width: 100%;
  height: 44px;
  border: 1px solid #d7e3ff;
  color: #9ebbff;
  border-radius: 6px;
  margin: 0px 0px 16px 0px;
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
