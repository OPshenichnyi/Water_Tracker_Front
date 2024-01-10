import styled from 'styled-components';

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

export const TitleContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 32px;

  @media screen and (min-width: 768px) {
    width: 100%;
    
  }
`;
export const TitleStyle = styled.h2`
  color: #2f2f2f;
  font-size: 26px;
  font-style: normal;
  font-weight: 500;
  line-height: 1, 23;
`;

export const ModalBox = styled.div`
  position: absolute;
  top: 20%;
  left: 50%;
  transform: translate(-50%);
  width: 280px;
  height: 280px;
  padding: 32px 24px;
  border-radius: 10px;
  background-color: #ffffff;
  & > :not(:last-child) {
    margin-bottom: 24px;
  }

  @media screen and (min-width: 768px) {
    width: 592px;
    height: 208px;
  }
`;
export const ButtonWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 24px;

  @media screen and (min-width: 768px) {
    flex-direction: row;
    justify-content: flex-end;
    margin-left: auto;
  }
`;

export const ButtonCancel = styled.button`
  display: flex;
  padding: 8px 30px;
  justify-content: center;
  align-items: center;
  width: 232px;
  border-radius: 10px;
  background: var(--Secondary-color-5, #d7e3ff);
  color: var(--Primery-Color-Blue, #407bff);
  text-align: center;
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  line-height: 1.25;
  &:hover {
    box-shadow: 0px 4px 14px 0px rgba(64, 123, 255, 0.54);
  }

  @media screen and (min-width: 768px) {
    width: 160px;
  }
`;

export const ButtonDelete = styled.button`
  display: flex;
  width: 232px;
  padding: 8px 30px;
  justify-content: center;
  align-items: center;
  gap: 10px;
  border-radius: 10px;
  background: var(--Secondary-color-3, #ef5050);
  box-shadow: 0px 4px 8px 0px rgba(64, 123, 255, 0.34);
  color: #fff;
  text-align: center;
  font-size: 16px;
  line-height: 1.25;
  &:hover {
    box-shadow: 0px 4px 14px 0px rgba(64, 123, 255, 0.54);
  }
  @media screen and (min-width: 768px) {
    width: 160px;
  }
`;
export const DescriptionStyle = styled.p`
  color: #2f2f2f;
  font-size: 18px;
  font-style: normal;
  font-weight: 500;
  line-height: 1.111;

  @media screen and (min-width: 768px) {
    margin-right: auto;
  }
`;
