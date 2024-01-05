import styled from 'styled-components';
import variables from 'common/Variables';

export const Wrapper = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  z-index: 2;
  transform: translate(-50%, -50%);
  width: 280px;
  height: 648px;
  background-color: #ffffff;
  border-radius: 10px;
  
  padding: 24px 12px;

  @media screen and (min-width: 768px) {
    width: 704px;
    height: 580px;
    border-radius: 10px;
    padding: 32px 24px;
  }

  @media screen and (min-width: 1440px) {
    width: 592px;
    height: 580px;
  }
`;

export const DataWater = styled.li`
margin-left: 12px;
color: ${variables.bluePrimary};
font-size: 18px;
font-style: normal;
font-weight: 400;
line-height: 1.33; 

`

export const DataTime = styled.li`
margin-left: 16px;
color: var(--primery-color-black, #2f2f2f);
font-size: 12px;
font-style: normal;
font-weight: 400;
line-height: 2; 

`

export const ButtonSave = styled.button`
  width: 256px;
  height: 36px;
  padding: 8px 30px;
  border-radius: 10px;
  background: #407bff;
  color: #fff;
  text-align: center;
  font-size: 16px;
  font-weight: 500;
  line-height: 1.25;
  &:hover {
    box-shadow: 0px 4px 8px 0px rgba(64, 123, 255, 0.34);
    cursor: pointer;
  }

  @media screen and (min-width: 768px) {
    width: 160px;
    height: 44px;
    padding: 10px 30px;
  }
`;
export const ButtonCount = styled.button`
  display: flex;
  padding: 10px;
  justify-content: center;
  align-items: center;
  width: 44px;
  height: 44px;
  border-radius: 30px;
  border: 1px solid #9ebbff;
  background: #fff;
  box-shadow: 0px 2px 4px 0px rgba(64, 123, 255, 0.2);
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
export const BlockTop = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 24px;
`;
export const BlockTitle = styled.h3`
  color: #2f2f2f;
  font-size: 26px;
  line-height: 1.23;
`;

export const BlockWaterTime = styled.ul`
width: 256px;
height: 52px;
display: flex;
padding: 8px 24px;
align-items: center;
border-radius: 10px;
background:  #ECF2FF;
margin-bottom: 24px;
`



export const BtnCounter = styled.p`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 92px;
  height: 36px;
  padding: 6px 10px;
  border-radius: 40px;
  background: #d7e3ff;
  color: #407bff;
  text-align: center;
  font-size: 18px;
  font-weight: 700;
  line-height: 1.33;
`;
export const BlockCount = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  margin-bottom: 24px;
`;
export const ValueP = styled.p`
  color: #2f2f2f;
  font-size: 18px;
  font-weight: 500;
  line-height: 1.11;
  margin-bottom: 16px;
`;
export const AmountP = styled.p`
  color: #2f2f2f;
  font-size: 16px;
  font-weight: 400;
  line-height: 1.25;
  margin-bottom: 12px;
`;

export const SelectTime = styled.select`
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
  width: 256px;
  height: 44px;
  display: flex;
  padding: 12px 10px;
  flex-direction: column;
  align-items: flex-start;
  border-radius: 6px;
  border: 1px solid #d7e3ff;
  margin-bottom: 24px;
  color: #407bff;
  font-size: 16px;
  font-weight: 400;
  line-height: 1.25;

  @media screen and (min-width: 768px) {
    width: 656px;
  }

  @media screen and (min-width: 1440px) {
    width: 544px;
  }
`;

export const InputStyle = styled.input`
  width: 256px;
  height: 44px;
  margin-bottom: 24px;
  display: flex;
  padding: 12px 10px;
  flex-direction: column;
  align-items: flex-start;
  border-radius: 6px;
  border: 1px solid #d7e3ff;
  color: #407bff;
  font-size: 16px;
  font-weight: 400;
  line-height: 1.25;

  @media screen and (min-width: 768px) {
    width: 656px;
  }

  @media screen and (min-width: 1440px) {
    width: 544px;
  }
`;

export const CounterBottom = styled.p`
  width: 72px;
  height: 24px;
  color: #407bff;
  text-align: center;
  font-size: 18px;
  font-weight: 700;
  line-height: 1.33;
  margin-bottom: 16px;
  margin-left: auto;
  margin-right: auto;

  @media screen and (min-width: 768px) {
    margin-left: unset;
    margin-right: unset;
    margin-bottom: 0;
  }
`;
export const CountSaveBtnBottom = styled.div`
  @media screen and (min-width: 768px) {
    display: flex;
    gap: 24px;
    justify-content: flex-end;
    align-items: center;
  }
`;
