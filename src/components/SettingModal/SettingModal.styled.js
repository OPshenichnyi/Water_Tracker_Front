import styled from "styled-components";

export const Container = styled.div`
  width: 1008px;
  height: 592px;
  margin: auto;
  padding: 32px 24px;
  background-color: #f2f2f2;
  border-radius: 10px;
`;

export const TitleContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 24px;
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
`;

export const InputImg = styled.input`
  display: none;
`;

export const LinkImgUpload = styled.span`
  color: #407bff;
  cursor: pointer;
  margin-left: 8px;
  font-family: Roboto;
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
`;

export const TitleH5 = styled.h5`
  margin-bottom: 8px;
  font-family: Roboto;
  font-size: 18px;
  font-style: normal;
  font-weight: 500;
`;
