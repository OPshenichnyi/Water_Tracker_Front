import variables from 'common/Variables';
import styled from 'styled-components';

export const CalendarWrap = styled.div`
  border-radius: 10px;
  background-color: ${variables.secondaryLightGray};
  box-shadow: 0px 4px 14px rgba(64, 123, 255, 0.3);
  display: flex;
  padding: 24px 8px;
  flex-direction: column;
  gap: 24px;
  width: 280px;
  margin: 0 auto;

  @media screen and (min-width: 768px) {
    width: 704px;
    padding: 32px 24px;
  }
  @media screen and (min-width: 1440px) {
    align-self: normal;
    width: 50%;
    padding: 32px 24px;
  }
`;
