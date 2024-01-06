import styled from 'styled-components';

export const Wrapper = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  z-index: 2;
  transform: translate(-50%, -50%);
  width: 280px;
  height: 816px;
  background-color: #ffffff;
  border-radius: 10px;
  padding: 24px 12px;

  @media screen and (min-width: 768px) {
    width: 704px;
    height: 676px;
    border-radius: 10px;
    padding: 32px 24px;
  }

  @media screen and (min-width: 1440px) {
    width: 592px;
    height: 712px;
  }
`;

export const BlockTop = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 24px;
`;

export const BlockTitle = styled.h3`
  color: #2f2f2f;
  font-size: 26px;
  line-height: 1.23;
`;

export const BlockFormula = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 16px;
  margin-bottom: 12px;

  @media screen and (min-width: 768px) {
    flex-direction: row;
    gap: 24px;
  }
`;

export const Formula = styled.p`
  color: var(--Primery-Color-Black, #2f2f2f);

  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 1.25;
`;
export const FormulaSpan = styled.span`
  color: var(--Primery-Color-Blue, #407bff);
  font-size: 18px;
  font-style: normal;
  font-weight: 400;
  line-height: 1.33;
  margin-left: 4px;
`;

export const Description = styled.p`
  border-radius: 10px;
  outline: 1px solid #d7e3ff;
  padding: 10px;
  color: #8f8f8f;
  font-size: 12px;
  font-style: normal;
  font-weight: 400;
  line-height: 16px;
  /* width: 256px;
  height: 100px; */
  margin-bottom: 24px;
`;

export const DescriptionSpan = styled.span`
  color: var(--Primery-Color-Blue, #407bff);

  font-size: 12px;
  font-style: normal;
  font-weight: 400;
  line-height: 1.33;
`;

export const SecondTitle = styled.p`
  color: #2f2f2f;
  font-size: 18px;
  font-weight: 500;
  line-height: 1.11;
  margin-bottom: 16px;
`;

export const ContainerGender = styled.div`
  display: flex;
  margin-bottom: 16px;
  width: 176px;
  height: 20px;
  label:first-child {
    margin-right: 24px;
  }
  input:first-child {
    margin-right: 8px;
  }
`;

export const TextP = styled.p`
  color: var(--Primery-Color-Black, #2f2f2f);
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 1.25;
  margin-bottom: 8px;
`;

export const BlockAmount = styled.div`
  display: flex;
  gap: 6px;
  margin-bottom: 24px;
  align-items: center;
  @media screen and (min-width: 768px) {
    align-items: unset;
  }
`;
export const BlockAmountText = styled.div`
  color: var(--Primery-Color-Black, #2f2f2f);
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 1.25;
  width: 190px;

  @media screen and (min-width: 768px) {
    width: 328px;
  }
`;

export const AmountWater = styled.p`
  color: var(--Primery-Color-Blue, #407bff);

  font-size: 18px;
  font-style: normal;
  font-weight: 700;
  line-height: 1.33;
`;

export const WrapAmount = styled.span`
  width: 57px;
  height: 24px;
`;

export const InputStyle = styled.input`
  width: 256px;
  height: 44px;
  margin-bottom: 16px;
  display: flex;
  padding: 12px 10px;
  flex-direction: column;
  align-items: flex-start;
  border-radius: 6px;
  border: 1px solid #d7e3ff;
 
  outline: none;
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

export const InputGender = styled.input`
  display: none;
`;
export const LabelGender = styled.label`
  display: flex;
  align-items: center;
  gap: 8px;
`;

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
  margin-top: 8px;
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

export const ButtonSaveWrap = styled.div`
  display: flex;
  justify-content: flex-end;
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
