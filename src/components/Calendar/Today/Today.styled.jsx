import variables from 'common/Variables';
import styled from 'styled-components';

export const TodayContainer = styled.div`
  width: fit-content;
`;

export const TodayHeader = styled.h2`
  font-size: 24px;
  font-weight: 500;
  line-height: 1.25;
  color: ${variables.blackPrimary};

  @media screen and (min-width: 768px) {
    font-size: 26px;
    line-height: 1.23;
  }
`;

export const TableWrapper = styled.div`
  height: 220px;
  overflow-y: auto;
  margin-top: 16px;

  @media screen and (min-width: 768px) {
    height: 228px;
  }

  @media screen and (min-width: 768px) {
    height: 212px;
  }

  &::-webkit-scrollbar {
    width: 4px;
  }

  &::-webkit-scrollbar-thumb {
    background-color: ${variables.secondaryLightBlue};
    border-radius: 2px;
  }

  &::-webkit-scrollbar-track {
    background-color: ${variables.secondaryGray};
    width: 1px;
  }
`;

export const TodayTable = styled.table`
  border-collapse: collapse;
  @media screen and (min-width: 768px) {
    width: 656px;
  }

  @media screen and (min-width: 1440px) {
    width: 534px;
  }
`;

export const TableRow = styled.tr`
  border-bottom: 1px solid ${variables.secondaryGray};
  margin-bottom: 12px;

  & Button {
    background-color: transparent;
  }
`;

export const ImageWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  justify-items: center;

  @media screen and (min-width: 768px) {
    svg {
      width: 36px;
      height: 36px;
    }
  }
`;

export const TodayTableData = styled.td`
  text-align: center;
  color: ${variables.bluePrimary};
  font-family: Roboto;
  font-size: 18px;
  font-style: normal;
  font-weight: 400;
`;

export const TextTableData = styled.td`
  padding: 12px;
  text-align: left;
  color: ${variables.bluePrimary};
  font-size: 18px;
  font-style: normal;
  font-weight: 400;
  line-height: 24px;
`;

export const TimeTableData = styled.td`
  padding-right: 35px;
  text-align: left;
  color: var(--primery-color-black, #2f2f2f);
  font-size: 12px;
  font-style: normal;
  font-weight: 400;
  line-height: 24px;

  @media screen and (min-width: 768px) {
    padding-right: 390px;
  }

  @media screen and (min-width: 768px) {
    padding-right: 278px;
  }
`;

export const Button = styled.button`
  fill: none;
  stroke: ${variables.secondaryLightBlue};
  margin: 4px;
  cursor: pointer;
`;

export const TrashButton = styled(Button)`
  stroke: ${variables.secondaryRed};
`;
export const AddWaterButton = styled.button`
  cursor: pointer;
  font-size: 16px;
  font-weight: 500;
  line-height: 20px;
  padding: 12px 8px;
  color: ${variables.bluePrimary};
  background-color: transparent;
  
  &:hover {
    color:#FF9D43 ;
    cursor: pointer;
  }
  
`;
