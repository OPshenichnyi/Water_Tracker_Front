import styled from 'styled-components';
import color from '../../common/Variables';
import backgroundImg from '../../images/main-mob.jpg';
import backgroundImg2x from '../../images/main-mob@2x.jpg';

import { NavLink } from 'react-router-dom';

export const Container = styled.div`
  padding-bottom: 40px;
  width: 100%;
  height: 100%;
  background-image: url(${backgroundImg});
  background-size: cover;
  background-position: center;

  @media screen and (min-resolution: 192dpi) {
    background-image: url(${backgroundImg2x});
  }
`;

export const FirstBlock = styled.div`
  max-width: 320px;
  margin-left: auto;
  margin-right: auto;
  color: ${color.blackPrimary};
  font-family: Roboto;
`;

export const MainTittle = styled.h1`
  font-size: 28px;
  font-weight: 700px;
  line-height: 1.4;
  margin-top: 12px;
  margin-bottom: 16px;
  max-width: 246px;
`;

export const RecordTittle = styled.h2`
  font-size: 24px;
  font-weight: 400;
  line-height: 1.2;
  max-width: 246px;
  margin-bottom: 24px;
  margin-top: 0px;
`;

export const BenefitsTittle = styled.h3`
  font-size: 18px;
  font-weight: 500;
  line-height: 1.1;
  margin-bottom: 12px;
`;

export const BenefitsList = styled.ul`
  margin-top: 0;
  margin-bottom: 24px;
  list-style-type: none;
  padding: 0;
  font-size: 16px;
  font-weight: 400;
  line-height: 1.25;
`;

export const BenefitsItem = styled.li`
  display: flex;
  align-items: center;
  gap: 8px;
  &:not(:last-child) {
    padding-bottom: 16px;
  }
`;

export const TryBtn = styled(NavLink)`
  margin-bottom: 40px;
  text-decoration: none;
  color: ${color.whitePrimary};
  font-weight: bold;
  padding: 8px 30px;
  border-radius: 10px;
  max-width: 320px;
  display: block;
  text-align: center;
  justify-content: center;
  box-shadow: 0px 4px 8px 0px rgba(64, 123, 255, 0.34);

  background-color: ${color.bluePrimary};
  transition: box-shadow 0.3s ease;

  &:hover {
    box-shadow: 0px 4px 14px 0px rgba(64, 123, 255, 0.54);
    cursor: pointer;
  }

  &.active {
    cursor: pointer;
    box-shadow: none;
  }
`;
export const SecondBlock = styled.div`
  max-width: 290px;
  margin-left: auto;
  margin-right: auto;
  color: ${color.blackPrimary};
  font-family: Roboto;
  padding: 24px 16px;
  border-radius: 10px;
  background: ${color.secondaryLightGray};
  box-shadow: 0px 4px 14px 0px rgba(64, 123, 255, 0.3);
`;

export const WhyTittle = styled.h3`
  font-size: 18px;
  font-weight: 500;
  line-height: 1.1;
  margin-bottom: 12px;
`;

export const ReasonList = styled.ul`
  padding: 0;
  font-size: 16px;
  line-height: 1.25;
  font-weight: 400;
`;

export const ReasonItem = styled.li`
  max-width: 232px;
`;
