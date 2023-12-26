import styled from 'styled-components';
import variables from 'common/Variables';

import MobileBubbles from '../../images/MobileBubblesBg.jpg';
import MobileBubbles2 from '../../images/MobileBubblesBg@2x.jpg';
import TabletBubbles from '../../images/TabletBubblesBg.jpg';
import TabletBubbles2 from '../../images/TabletBubblesBg@2x.jpg';
import DesktopBubbles from '../../images/DesktopBubblesBg.jpg';
import DesktopBubbles2 from '../../images/DesktopBubblesBg@2x.jpg';

export const Container = styled.div`
  position: relative;
  width: 100%;
  margin-top: 24px;
`;

export const NormaContainer = styled.div`
  display: inline-block;
  padding: 8px 20px;
  margin-bottom: 8px;
  border-radius: 10px;
  background-color: ${variables.whitePrimary};
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
  font-size: 18px;
  margin-bottom: 12px;
  color: ${variables.blackPrimary};
  font-weight: 500;
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

export const Image = styled.img`
  margin: 0px auto 16px;
`;

export const NormaButton = styled.button`
  font-size: 16px;
  font-weight: 400;
  line-height: 1.25;
  color: ${variables.editColorButton};
  background-color: transparent;
`;
export const ProgressContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 16px;
  button {
    width: 100%;
    padding-top: 6px;
    padding-bottom: 6px;
    @media screen and (min-width: 768px) {
      width: 336px;
      padding-top: 10px;
      padding-bottom: 10px;
    }
    @media screen and (min-width: 1440px) {
      width: 178px;
    }
  }

  @media screen and (min-width: 768px) {
    flex-direction: row;
    gap: 12px;
  }
  @media screen and (min-width: 1440px) {
    gap: 23px;
  }
`;

export const WaterProgress = styled.div`
  display: flex;
  flex-direction: column;
  gap: 19px;
  width: 100%;
  p {
    color: ${variables.bluePrimary};
    font-weight: 400;
    font-size: 18px;
    line-height: 1.33;
  }
  @media screen and (min-width: 768px) {
    width: 356px;
  }
  @media screen and (min-width: 1440px) {
    width: 391px;
  }
`;

export const WaterMeter = styled.div`
  position: relative;
  height: 8px;
  background-color: ${variables.secondaryGray};
  width: calc(100% - 31px);
  padding: 0 20px 0 11px;
  border-radius: 10px;
  margin: 0 auto;
  &::after {
    content: '';
    position: absolute;
    top: 50%;
    left: 30%;
    transform: translate(-50%, -50%);
    width: 14px;
    height: 14px;
    background-color: ${variables.whitePrimary};
    border: 1px solid ${variables.bluePrimary};
    border-radius: 100%;
  }
  div {
    position: absolute;
    border-radius: 10px;

    top: 0;
    left: 0;

    width: 30%;
    height: 100%;
    background-color: ${variables.secondaryLightBlue};
  }
`;

export const WaterInfo = styled.div`
  display: flex;
  justify-content: space-between;
  position: relative;
  span {
    color: ${variables.bluePrimary};
    font-size: 12px;
    line-height: 1.33;
    position: relative;
    &::before {
      content: '';
      display: block;
      width: 1px;
      height: 8px;
      background-color: ${variables.secondaryGray};
      position: absolute;
      top: -12px;
      left: 50%;
      transform: translate(-50%);
    }
    &:first-child {
      margin-left: 11px;
    }
    &:nth-child(2) {
      font-size: 16px;
      line-height: 1.25;
      font-weight: 500;
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
    }
  }
`;
export const AddWaterButton = styled.button`
  display: flex;
  flex-direction: row;
  padding: 6px 76px;
  justify-content: center;
  align-items: center;
  gap: 10px;
  border-radius: 10px;
  fill: none;
  stroke: ${variables.whitePrimary};

  font-size: 18px;
  font-style: normal;
  font-weight: 500;
  text-align: center;
  line-height: 1.33;
  background-color: ${variables.bluePrimary};
  color: ${variables.whitePrimary};
  box-shadow: 0px 4px 8px 0px rgba(64, 123, 255, 0.34);

  @media screen and (min-width: 1440px) {
    width: 178px;
    padding: 10px 30px;
  }
`;

export const HomeContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 40px;
  background-image: image-set(
    url(${MobileBubbles}) 1x,
    url(${MobileBubbles2}) 2x
  );
  background-repeat: no-repeat;
  background-position: top;

  @media screen and (min-width: 768px) {
    gap: 40px;
    background-image: image-set(
      url(${TabletBubbles}) 1x,
      url(${TabletBubbles2}) 2x
    );

    background-repeat: no-repeat;
    background-position: center;
    align-items: start;
  }

  @media screen and (min-width: 1440px) {
    flex-direction: row;
    gap: 32px;

    background-image: image-set(
      url(${DesktopBubbles}) 1x,
      url(${DesktopBubbles2}) 2x
    );

    justify-content: center;
    background-repeat: no-repeat;
    background-position: center;
    align-items: end;
  }
`;
