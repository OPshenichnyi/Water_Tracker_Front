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

export const StatsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  height: 506px;

  @media screen and (min-width: 768px) {
    height: 340px;
  }

  @media screen and (min-width: 1440px) {
    height: 284px;
  }
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

export const TodayDiv = styled.div`
  display: flex;
  margin-bottom: 16px;
  justify-content: space-between;
  align-items: center;
`;

export const CurrentMonth = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${variables.bluePrimary};
`;

export const MonthSwipe = styled.button`
  margin: 0px 10px;
  background-color: rgba(0, 0, 255, 0);
  cursor: pointer;
`;

export const MonthName = styled.span`
  font-size: 16px;
  line-height: 20px;
`;

export const MonthTitle = styled.h2`
  color: ${variables.blackPrimary};
  font-size: 24px;
  font-weight: 500;
  line-height: 1.25;

  @media screen and (min-width: 768px) {
    font-size: 26px;
    line-height: 1.23;
  }
`;
