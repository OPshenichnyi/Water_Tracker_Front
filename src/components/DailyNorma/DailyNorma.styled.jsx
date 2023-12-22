import styled from 'styled-components';
import variables from 'common/Variables';

export const Container = styled.div`
  position: relative;
  width: 100%;
`;

export const NormaContainer = styled.div`
  display: inline-block;
  padding: 8px 20px;
  margin-bottom: 8px;
  border-radius: 10px;
  background: ${variables.whitePrimary};
  box-shadow: 0px 4px 8px 0px rgba(158, 187, 255, 0.12);
  border: 1px solid ${variables.secondaryLightGray};

  @media only screen and (min-width: 768px) {
    /* display: flex; */
    justify-content: center;
  }

  @media only screen and (min-width: 1440px) {
    position: absolute;
    top: 30px;
    left: 0;
  }
`;

export const NormaTitle = styled.h2`
  margin-bottom: 12px;
  color: ${variables.blackPrimary};
  font-weight: 700;
  line-height: 1.33;
`;

export const DailyNormaWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
`;

export const NormaP = styled.p`
  font-size: 22px;
  font-weight: 700;
  color: ${variables.bluePrimary};
  line-height: 1;

  @media only screen and (min-width: 768px) {
    font-size: 24px;
  }
`;

export const NormaButton = styled.button`
  font-size: 16px;
  font-weight: 400;
  line-height: 1.25;
  color: ${variables.editColorButton};
  background-color: transparent;
`;
