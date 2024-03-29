import styled from 'styled-components';
import color from '../../common/Variables';
import backgroundImg from '../../images/main-mob.jpg';
import backgroundImg2x from '../../images/main-mob@2x.jpg';
import tabletImg from '../../images/main_tablet_bg.jpg';
import tabletImg2x from '../../images/main_tablet_bg@2x.jpg';
import listImg from '../../images/listMarker.svg';
import mainDesct from '../../images/main_desctop.jpg';
import bubble from '../../images/BackelementDesk.png';
import bubble2x from '../../images/BackelementDesk@2x.png';
import { NavLink } from 'react-router-dom';
import mainDesct2x from '../../images/main_desctop@2x.jpg';

export const Wrappper = styled.div`
  @media screen and (min-width: 1440px) {
    width: 100%;
    min-height: 800px;
    overflow: hidden;

    &::before {
      content: '';
      position: absolute;
      z-index: 1;
      width: 100%;
      height: 70%;
      background-size: cover;
      background-image: url(${bubble});
      @media screen and (min-resolution: 192dpi) {
        background-image: url(${bubble2x});
      }
    }

    &::after {
      content: '';
      position: absolute;
      background-size: cover;
      width: 100%;
      height: 50%;
      bottom: 0%;
      background-repeat: no-repeat;
      background-position: bottom;
      background-image: url(${mainDesct});
      @media screen and (min-resolution: 192dpi) {
        background-image: url(${mainDesct2x});
      }
    }
  }
`;

export const Container = styled.div`
  background-image: url(${backgroundImg});
  background-size: cover;
  background-repeat: no-repeat;
  

  @media screen and (min-resolution: 192dpi) {
    background-image: url(${backgroundImg2x});
  }

  @media screen and (min-width: 768px) {
    background-image: url(${tabletImg});
    height: 100vw;
    

    @media screen and (min-resolution: 192dpi) {
      background-image: url(${tabletImg2x});
      padding-bottom: 50px;
    }
  }

  @media screen and (min-width: 1440px) {
    background-image: unset;
    height: unset;
  }
`;

export const ContainerWrap = styled.div`
  margin-left: auto;
  margin-right: auto;
  padding-bottom: 40px;
  padding-left: 20px;
  padding-right: 20px;
  @media screen and (min-width: 768px) {
    padding-left: 32px;
    padding-right: 32px;
    width: 768px;
  }

  @media screen and (min-width: 1440px) {
    display: flex;
    justify-content: center;
    margin-top: 80px;
    max-width: 1014px;
    gap: 81px;
    position: absolute;
    z-index: 10;
    left: 50%;
    transform: translateX(-50%);
    height: 400px;
  }
`;

export const FirstBlock = styled.div`
  box-sizing: border-box;
  max-width: 280px;
  margin-left: auto;
  margin-right: auto;
  color: ${color.blackPrimary};
  margin-top: 12px;
  margin-bottom: 40px;
  @media screen and (min-width: 768px) {
    max-width: 1440px;
    margin-bottom: 60px;
    margin-top: 40px;
  }
  @media screen and (min-width: 1440px) {
    min-width: 463px;
    margin-top: 0;
    margin-bottom: 0;
  }
`;

export const MainTittle = styled.h1`
  font-size: 28px;
  font-weight: 700;
  line-height: 1.4;
  margin-bottom: 16px;

  @media screen and (min-width: 768px) {
    font-size: 36px;
    line-height: 1.16;
  }
`;

export const RecordTittle = styled.h2`
  font-size: 24px;
  font-weight: 400;
  line-height: 1.2;
  margin-bottom: 24px;
  margin-top: 0px;
  width: 197px;
  @media screen and (min-width: 768px) {
    font-size: 26px;
    line-height: 1.23;
    width: 404px;
  }
`;

export const BenefitsTittle = styled.h3`
  font-size: 18px;
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

  @media screen and (min-width: 768px) {
    display: flex;
    width: 704px;
    gap: 16px;
  }

  @media screen and (min-width: 1440px) {
    display: block;
  }
`;

export const BenefitsItem = styled.li`
  display: flex;
  align-items: center;
  gap: 8px;
  &:not(:last-child) {
    margin-bottom: 16px;
  }

  @media screen and (min-width: 768px) {
    &:not(:last-child) {
      margin-bottom: 0px;
      flex-basis: calc((100% - 32px) / 3);
    }

    @media screen and (min-width: 1440px) {
      &:not(:last-child) {
        margin-bottom: 16px;
      }
    }
  }
`;

export const TryBtn = styled(NavLink)`
  margin-left: auto;
  margin-right: auto;
  text-decoration: none;
  color: ${color.whitePrimary};
  font-weight: bold;
  padding: 8px 30px;
  border-radius: 10px;
  max-width: 280px;
  display: block;
  text-align: center;
  justify-content: center;
  box-shadow: 0px 4px 8px 0px rgba(64, 123, 255, 0.34);
  background-color: ${color.bluePrimary};
  transition: box-shadow 0.3s ease;
  cursor: pointer;
  &:hover {
    box-shadow: 0px 4px 14px 0px rgba(64, 123, 255, 0.54);
  }

  &.active {
    box-shadow: none;
  }

  @media screen and (min-width: 768px) {
    display: flex;
    margin-left: 0px;
    padding: 10px 30px;
  }

  @media screen and (min-width: 1440px) {
    margin-bottom: 0px;
  }
`;
export const SecondBlock = styled.div`
  align-self: flex-end;
  box-sizing: border-box;
  max-width: 320px;
  margin-left: auto;
  margin-right: auto;
  color: ${color.blackPrimary};
  padding: 24px 16px;
  border-radius: 10px;
  background: ${color.secondaryLightGray};
  box-shadow: 0px 4px 14px 0px rgba(64, 123, 255, 0.3);

  @media screen and (min-width: 768px) {
    min-width: 494px;
    padding: 32px 24px;
    margin-left: 0px;
  }
`;

export const WhyTittle = styled.h3`
  font-size: 18px;
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
  list-style-image: url(${listImg});
  margin-left: 16px;
  &:not(:last-child) {
    margin-bottom: 16px;
  }
`;
