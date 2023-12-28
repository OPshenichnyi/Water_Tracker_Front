import variables from 'common/Variables';
import styled from 'styled-components';

export const DayUl = styled.ul`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  gap: 16px 26px;

  @media screen and (min-width: 768px) {
    gap: 20px 34px;
  }

  @media screen and (min-width: 1440px) {
    column-gap: 22px;
  }
`;

export const DayLi = styled.li`
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
`;

export const DayNumber = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 32px;
  height: 32px;

  border-radius: 50%;
  background-color: ${variables.whitePrimary};
  outline: ${variables.secondaryLightOrange} solid 1px;
  font-size: 14px;
  line-height: 1.28;

  @media screen and (min-width: 768px) {
    gap: 20px 34px;
    width: 34px;
    height: 34px;
  }
`;

export const WaterPercentage = styled.span`
  font-size: 10px;
  font-weight: 400;
  margin-top: 4px;
  line-height: 1.6;
  color: ${variables.secondaryLightBlue};

  @media screen and (min-width: 768px) {
    font-size: 13px;
    line-height: 1.53;
  }

  @media screen and (min-width: 1440px) {
    font-size: 12px;
    line-height: 1.5;
  }
`;
